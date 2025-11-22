import { useState } from 'react'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'
import Calendar from './components/Calendar'
import Packages from './components/Packages'
import AddOns from './components/AddOns'
import Payments from './components/Payments'
import Reports from './components/Reports'
import Venue from './components/Venue'
import Settings from './components/Settings'

const ORANGE = '#FF8139'
const BLUE = '#236DCF'

export default function App(){
  const [tab, setTab] = useState('Dashboard')

  return (
    <Layout active={tab} onNav={setTab}>
      {tab==='Dashboard' && (
        <div className="space-y-4">
          <Hero />
          <Dashboard />
        </div>
      )}
      {tab==='Calendar' && <Calendar />}
      {tab==='Packages' && <Packages />}
      {tab==='Add-ons' && <AddOns />}
      {tab==='Payments' && <Payments />}
      {tab==='Reports' && <Reports />}
      {tab==='Venue' && <Venue />}
      {tab==='Settings' && <Settings />}
    </Layout>
  )
}
