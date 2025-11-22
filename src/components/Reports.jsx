const ORANGE = '#FF8139'
const BLUE = '#236DCF'

export default function Reports(){
  return (
    <div className="grid md:grid-cols-2 gap-3">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
        <p className="text-sm text-white/70 mb-2">Revenue over time</p>
        <div className="h-40 bg-gradient-to-t from-white/5 to-transparent relative">
          <svg viewBox="0 0 100 40" className="absolute inset-0">
            <polyline fill="none" stroke={ORANGE} strokeWidth="2" points="0,35 15,30 30,28 45,18 60,22 75,10 90,12 100,8" />
          </svg>
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
        <p className="text-sm text-white/70 mb-2">Court utilization</p>
        <div className="grid grid-cols-4 gap-2">
          {['A','B','C','D'].map((c,i)=> (
            <div key={c} className="p-3 rounded border border-white/10">
              <div className="text-sm">Court {c}</div>
              <div className="mt-2 h-2 rounded bg-white/10">
                <div className="h-2 rounded" style={{width:`${60+i*8}%`, background: BLUE}} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
        <p className="text-sm text-white/70 mb-2">Package performance</p>
        <div className="grid grid-cols-2 gap-2">
          {['Standard','Prime','Weekend Prime','2h'].map((n,i)=> (
            <div key={n} className="p-3 rounded border border-white/10">
              <div className="flex items-center justify-between">
                <span>{n}</span>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{background: i%2?BLUE:ORANGE, color: i%2?'#fff':'#000'}}>{i%2?'Info':'Top'}</span>
              </div>
              <div className="mt-2 h-2 rounded bg-white/10">
                <div className="h-2 rounded" style={{width:`${40+i*12}%`, background: i%2?BLUE:ORANGE}} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
        <p className="text-sm text-white/70 mb-2">Customer retention</p>
        <div className="h-40 bg-gradient-to-t from-white/5 to-transparent relative">
          <svg viewBox="0 0 100 40" className="absolute inset-0">
            <polyline fill="none" stroke={BLUE} strokeWidth="2" points="0,10 15,12 30,18 45,20 60,25 75,28 90,32 100,35" />
          </svg>
        </div>
      </div>
    </div>
  )
}
