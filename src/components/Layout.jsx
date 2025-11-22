import { useState } from 'react'
import { Menu, Calendar as CalendarIcon, Bell, Settings, Search, User, LayoutDashboard, Package, PlusCircle, CreditCard, BarChart3, Building2, SunMoon } from 'lucide-react'

const ORANGE = '#FF8139'
const BLUE = '#236DCF'

function SidebarItem({ icon: Icon, label, active, onClick }) {
  return (
    <button onClick={onClick} className={`group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${active ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white hover:bg-white/5'}`}>
      <Icon size={18} className={`shrink-0 ${active ? '' : 'group-hover:text-[#236DCF]'}`} />
      <span className="text-sm font-medium">{label}</span>
    </button>
  )
}

export default function Layout({ children, active = 'Dashboard', onNav }) {
  const [open, setOpen] = useState(true)
  return (
    <div className="min-h-screen flex bg-slate-950 text-white">
      {/* Sidebar */}
      <aside className={`sticky top-0 h-screen ${open ? 'w-60' : 'w-16'} transition-[width] duration-200 bg-slate-900/60 backdrop-blur border-r border-white/10 p-3`}> 
        <div className="flex items-center justify-between px-2 py-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg" style={{background: ORANGE}} />
            {open && <span className="font-semibold">VenueOS</span>}
          </div>
          <button onClick={() => setOpen(v=>!v)} className="p-1 rounded hover:bg-white/10">
            <Menu size={18} />
          </button>
        </div>
        <nav className="mt-4 space-y-1">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active={active==='Dashboard'} onClick={()=>onNav?.('Dashboard')} />
          <SidebarItem icon={CalendarIcon} label="Calendar" active={active==='Calendar'} onClick={()=>onNav?.('Calendar')} />
          <SidebarItem icon={Package} label="Packages" active={active==='Packages'} onClick={()=>onNav?.('Packages')} />
          <SidebarItem icon={PlusCircle} label="Add-ons" active={active==='Add-ons'} onClick={()=>onNav?.('Add-ons')} />
          <SidebarItem icon={Building2} label="Venue" active={active==='Venue'} onClick={()=>onNav?.('Venue')} />
          <SidebarItem icon={CreditCard} label="Payments" active={active==='Payments'} onClick={()=>onNav?.('Payments')} />
          <SidebarItem icon={BarChart3} label="Reports" active={active==='Reports'} onClick={()=>onNav?.('Reports')} />
          <SidebarItem icon={Settings} label="Settings" active={active==='Settings'} onClick={()=>onNav?.('Settings')} />
        </nav>
      </aside>

      <main className="flex-1 min-w-0">
        {/* Top Bar */}
        <div className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/70 backdrop-blur">
          <div className="mx-auto px-4 py-3 flex items-center gap-3">
            <div className="flex-1 flex items-center gap-2">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                <input className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2" style={{ '--tw-ring-color': BLUE }} placeholder="Search bookings, customers, courts..." />
              </div>
            </div>
            <button className="p-2 rounded-lg hover:bg-white/10"><Bell size={18} /></button>
            <button className="p-2 rounded-lg hover:bg-white/10"><SunMoon size={18} /></button>
            <div className="flex items-center gap-2 px-2 py-1 rounded-lg bg-white/5 border border-white/10">
              <User size={16} />
              <span className="text-sm">Alex</span>
            </div>
          </div>
        </div>

        <div className="p-4">{children}</div>
      </main>
    </div>
  )
}
