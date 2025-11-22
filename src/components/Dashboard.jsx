import { ArrowUpRight, CalendarDays, DollarSign, AlarmClock, TrendingUp } from 'lucide-react'

const ORANGE = '#FF8139'
const BLUE = '#236DCF'

function StatCard({ title, value, sub, icon: Icon, accent='orange' }) {
  const accentColor = accent==='orange'?ORANGE:BLUE
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-4 transition">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl" style={{background:accentColor}} />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-white/60">{title}</p>
          <div className="mt-1 flex items-end gap-2">
            <h3 className="text-2xl font-semibold">{value}</h3>
            {sub && <span className="text-xs text-white/60">{sub}</span>}
          </div>
        </div>
        <div className="p-2 rounded-lg" style={{background:accentColor+"22"}}>
          <Icon size={18} style={{color:accentColor}} />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1 text-xs text-white/60">
        <TrendingUp size={14} className="text-emerald-400" />
        <span>Updated just now</span>
      </div>
    </div>
  )
}

function SlimCalendar() {
  const days = Array.from({length:7}).map((_,i)=>{
    const d = new Date(); d.setDate(d.getDate()+i); return d
  })
  const isToday = (d)=>{
    const n = new Date(); return d.getDate()===n.getDate() && d.getMonth()===n.getMonth()
  }
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-white/70">Next 7 days</span>
        <button className="text-sm text-blue-300 hover:underline">Open full calendar</button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((d,i)=> (
          <button key={i} className={`aspect-[4/3] rounded-lg border text-left p-2 hover:bg-white/5 transition ${isToday(d)?'border-white/40':'border-white/10'}`}>
            <p className="text-[10px] text-white/50">{d.toLocaleString('default',{weekday:'short'})}</p>
            <p className="text-lg font-semibold">{d.getDate()}</p>
            <div className="mt-1 h-1.5 w-full rounded-full bg-white/10">
              <div className="h-1.5 rounded-full" style={{width:`${(i+2)*10}%`, background: i%2?BLUE:ORANGE}} />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

function Alerts() {
  const items = [
    {title:'New booking request', tone:'blue'},
    {title:'Payment overdue', tone:'orange'},
    {title:'Customer cancellation', tone:'blue'},
  ]
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-white/70">Alerts</span>
        <button className="text-sm text-blue-300 hover:underline">View all</button>
      </div>
      <div className="space-y-2">
        {items.map((it,i)=> (
          <div key={i} className="flex items-center justify-between rounded-lg border border-white/10 p-2">
            <span className="text-sm">{it.title}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${it.tone==='orange'?'bg-[#FF8139] text-black':'bg-[#236DCF] text-white'}`}>{it.tone==='orange'?'Action':'Info'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Insights() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <div className="grid md:grid-cols-3 gap-3">
        <div>
          <p className="text-xs text-white/60 mb-1">Peak hour heatmap</p>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({length:7*6}).map((_,i)=> (
              <div key={i} className="aspect-square rounded" style={{background: i%5===0?ORANGE: i%3===0?BLUE:'#0f172a'}} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs text-white/60 mb-1">Booking trend</p>
          <div className="h-24 rounded bg-gradient-to-t from-white/5 to-transparent relative overflow-hidden">
            <svg viewBox="0 0 100 40" className="absolute inset-0">
              <polyline fill="none" stroke={BLUE} strokeWidth="2" points="0,30 15,25 30,28 45,18 60,22 75,10 90,12 100,8" />
            </svg>
          </div>
        </div>
        <div>
          <p className="text-xs text-white/60 mb-1">Top-selling package</p>
          <div className="rounded-lg border border-white/10 p-3">
            <p className="font-medium">Weekend Prime</p>
            <p className="text-xs text-white/60">Inline edit • Duplicate • Visibility</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <StatCard title="Today's bookings" value="18" icon={CalendarDays} />
            <StatCard title="Courts in use" value="6/8" icon={AlarmClock} accent='blue' />
            <StatCard title="Revenue this month" value="$18,420" sub="+12%" icon={DollarSign} />
            <StatCard title="Pending payments" value="4" icon={ArrowUpRight} accent='blue' />
          </div>
          <SlimCalendar />
        </div>
        <div className="space-y-4">
          <Alerts />
          <Insights />
        </div>
      </div>
    </div>
  )
}
