const ORANGE = '#FF8139'
const BLUE = '#236DCF'

function Badge({ status }) {
  const map = { Paid: ORANGE, Pending: BLUE, Failed: '#ef4444', Refunded: '#94a3b8' }
  return <span className="text-xs px-2 py-0.5 rounded-full" style={{background:map[status], color: status==='Paid'? '#000' : '#fff'}}>{status}</span>
}

export default function Payments(){
  const rows = [
    {id:'#INV-2043', customer:'John Doe', amount:25, status:'Paid'},
    {id:'#INV-2044', customer:'Mia Lee', amount:40, status:'Pending'},
    {id:'#INV-2045', customer:'Club X', amount:120, status:'Failed'},
    {id:'#INV-2046', customer:'Sarah', amount:60, status:'Refunded'},
  ]
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-white/70">Ledger</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded border border-white/10 text-sm">Export CSV</button>
            <button className="px-3 py-1.5 rounded border border-white/10 text-sm">Export PDF</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-white/60 text-left">
              <tr>
                <th className="py-2">Invoice</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r=> (
                <tr key={r.id} className="border-t border-white/10">
                  <td className="py-2">{r.id}</td>
                  <td>{r.customer}</td>
                  <td>${r.amount.toFixed(2)}</td>
                  <td><Badge status={r.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
