import { useMemo, useState } from 'react'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, Info } from 'lucide-react'

const ORANGE = '#FF8139'
const BLUE = '#236DCF'

function HourCell({ time, status='available', onCreate, onOpen }) {
  const colors = {
    confirmed: ORANGE,
    pending: BLUE,
    maintenance: '#94a3b8',
    available: '#16a34a'
  }
  const label = {
    confirmed: 'Confirmed',
    pending: 'Pending',
    maintenance: 'Maintenance',
    available: 'Available'
  }[status]
  return (
    <div className="group relative h-12 border-b border-white/10">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
        {status==='available' ? (
          <button onClick={()=>onCreate(time)} className="px-2 py-1 rounded bg-white/10 text-xs hover:bg-white/20">Create Booking</button>
        ) : (
          <button onClick={()=>onOpen(time)} className="px-2 py-1 rounded bg-white/10 text-xs hover:bg-white/20">Open</button>
        )}
      </div>
      <div className="absolute left-1 top-1 text-[10px] text-white/50">{time}</div>
      <div className="absolute right-1 top-1 text-[10px]" style={{color:colors[status]}}>{label}</div>
    </div>
  )
}

function CourtColumn({ name, hours, onCreate, onOpen }) {
  return (
    <div className="rounded-lg border border-white/10 overflow-hidden">
      <div className="px-3 py-2 bg-white/5 border-b border-white/10 text-sm font-medium">{name}</div>
      <div>
        {hours.map(h => (
          <HourCell key={h.time} time={h.time} status={h.status} onCreate={(t)=>onCreate(name,t)} onOpen={(t)=>onOpen(name,t)} />
        ))}
      </div>
    </div>
  )
}

export default function Calendar() {
  const [day, setDay] = useState(new Date())
  const [filter, setFilter] = useState('All Courts')
  const [drawer, setDrawer] = useState(null)
  
  const hours = useMemo(()=> {
    const base = []
    for (let h=6; h<=22; h++) {
      base.push({ time: `${String(h).padStart(2,'0')}:00`, status: ['available','confirmed','pending','maintenance'][Math.floor(Math.random()*4)] })
    }
    return base
  }, [day])

  const courts = ['Court A','Court B','Court C','Court D']

  function openBooking(court, time) {
    setDrawer({ court, time, customer: 'John Doe', package: 'Standard 1h', addons: ['Ball rental'], price: 25, status: 'Pending' })
  }
  function createBooking(court, time) {
    setDrawer({ court, time, create: true })
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <button className="p-2 rounded border border-white/10 hover:bg-white/10" onClick={()=>setDay(new Date(day.getTime()-86400000))}><ChevronLeft size={16} /></button>
        <div className="px-3 py-2 rounded border border-white/10 bg-white/5 text-sm">{day.toDateString()}</div>
        <button className="p-2 rounded border border-white/10 hover:bg-white/10" onClick={()=>setDay(new Date(day.getTime()+86400000))}><ChevronRight size={16} /></button>
        <div className="ml-auto flex items-center gap-2">
          <CalendarIcon size={16} className="text-white/50" />
          <select value={filter} onChange={e=>setFilter(e.target.value)} className="bg-white/5 border border-white/10 rounded px-2 py-1 text-sm">
            <option>All Courts</option>
            {courts.map(c=>(<option key={c}>{c}</option>))}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-3">
        {courts.map(c => (
          <CourtColumn key={c} name={c} hours={hours} onCreate={createBooking} onOpen={openBooking} />
        ))}
      </div>

      {drawer && (
        <div className="fixed inset-0 bg-black/40 flex justify-end">
          <div className="w-full max-w-md h-full bg-slate-950 border-l border-white/10 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{drawer.create? 'Create Booking' : 'Booking Details'}</h3>
              <button onClick={()=>setDrawer(null)} className="px-2 py-1 rounded hover:bg-white/10">Close</button>
            </div>
            {drawer.create ? (
              <div className="space-y-3">
                <div className="grid grid-cols-5 gap-2 text-sm">
                  <div className="col-span-5"><span className="text-white/60">Customer</span><input className="mt-1 w-full bg-white/5 border border-white/10 rounded px-2 py-1" placeholder="Search customers" /></div>
                  <div className="col-span-3"><span className="text-white/60">Package</span><select className="mt-1 w-full bg-white/5 border border-white/10 rounded px-2 py-1"><option>Standard 1h</option></select></div>
                  <div className="col-span-2"><span className="text-white/60">Add-ons</span><select className="mt-1 w-full bg-white/5 border border-white/10 rounded px-2 py-1"><option>Ball rental</option></select></div>
                  <div className="col-span-2"><span className="text-white/60">Payment</span><select className="mt-1 w-full bg-white/5 border border-white/10 rounded px-2 py-1"><option>Pending</option><option>Paid</option></select></div>
                  <div className="col-span-3"><span className="text-white/60">Confirm</span><button className="mt-1 w-full rounded px-3 py-2 font-medium" style={{background: ORANGE}}>Create Booking</button></div>
                </div>
              </div>
            ) : (
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between"><span className="text-white/60">Customer</span><span>{drawer.customer}</span></div>
                <div className="flex items-center justify-between"><span className="text-white/60">Package</span><span>{drawer.package}</span></div>
                <div className="flex items-center justify-between"><span className="text-white/60">Add-ons</span><span>{drawer.addons?.join(', ')}</span></div>
                <div className="flex items-center justify-between"><span className="text-white/60">Price</span><span>${drawer.price}</span></div>
                <div className="flex items-center justify-between"><span className="text-white/60">Payment</span><span className={`px-2 py-0.5 rounded-full text-xs ${drawer.status==='Pending'?'bg-[#236DCF] text-white':'bg-[#FF8139] text-black'}`}>{drawer.status}</span></div>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button className="rounded px-3 py-2 bg-white/10 hover:bg-white/20">Reject</button>
                  <button className="rounded px-3 py-2 font-medium" style={{background: ORANGE}}>Approve</button>
                  <button className="rounded px-3 py-2 border border-white/10">Request Payment</button>
                  <button className="rounded px-3 py-2 border border-white/10">Add Add-on</button>
                </div>
              </div>
            )}
            <div className="flex items-start gap-2 text-xs text-white/60">
              <Info size={14} className="shrink-0" />
              <p>Drag to block hours, create bookings, or reschedule (visual only in this demo).</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
