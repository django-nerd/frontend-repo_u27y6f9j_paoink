const ORANGE = '#FF8139'
const BLUE = '#236DCF'

function AddonCard({ title, price, category='Equipment' }) {
  return (
    <div className="rounded-xl border border-white/10 p-3 bg-white/[0.03]">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-xs text-white/60">{category}</p>
        </div>
        <button className="text-xs px-2 py-1 rounded border border-white/10 hover:bg-white/10">Add to booking</button>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <input type="number" className="w-28 bg-white/5 border border-white/10 rounded px-2 py-1" defaultValue={price} />
        <span className="text-sm" style={{color:ORANGE}}>$</span>
        <label className="ml-auto text-xs flex items-center gap-2"><input type="checkbox" defaultChecked className="accent-blue-500" /> Available</label>
      </div>
    </div>
  )
}

export default function AddOns() {
  const data = [
    {title:'Referee', price:15, category:'Staff'},
    {title:'Ball rental', price:5, category:'Equipment'},
    {title:'Bibs', price:3, category:'Equipment'},
    {title:'Video recording', price:25, category:'Services'},
  ]
  return (
    <div className="space-y-3">
      <div className="grid md:grid-cols-3 gap-3">
        {data.map((p,i)=> (<AddonCard key={i} {...p} />))}
      </div>
    </div>
  )
}
