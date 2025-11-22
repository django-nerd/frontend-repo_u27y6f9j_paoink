const ORANGE = '#FF8139'
const BLUE = '#236DCF'

function PackageCard({ title, price, peak=false }) {
  return (
    <div className="rounded-xl border border-white/10 p-3 bg-white/[0.03]">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-xs text-white/60">{peak?'Peak':'Non-peak'} • Inline edit</p>
        </div>
        <button className="text-xs px-2 py-1 rounded border border-white/10 hover:bg-white/10">Duplicate</button>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <input type="number" className="w-28 bg-white/5 border border-white/10 rounded px-2 py-1" defaultValue={price} />
        <span className="text-sm" style={{color:ORANGE}}>$ per hour</span>
        <label className="ml-auto text-xs flex items-center gap-2"><input type="checkbox" defaultChecked className="accent-blue-500" /> Visible</label>
      </div>
      <div className="mt-3 text-xs text-white/60">Preview: <span className="text-white">${price} + add-ons</span></div>
    </div>
  )
}

export default function Packages() {
  const data = [
    {title:'Standard 1h', price:25},
    {title:'Prime 1h', price:35, peak:true},
    {title:'Standard 2h', price:45},
    {title:'Weekend Prime', price:40, peak:true},
  ]
  return (
    <div className="space-y-3">
      <div className="grid md:grid-cols-3 gap-3">
        {data.map((p,i)=> (<PackageCard key={i} {...p} />))}
      </div>
    </div>
  )
}
