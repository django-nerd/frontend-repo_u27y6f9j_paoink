import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
      <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Operate your venue with speed and clarity</h1>
          <p className="text-white/70 text-sm md:text-base">Calendar-first. Fewer clicks. More revenue. Orange for actions, blue for guidance.</p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button className="px-4 py-2 rounded-lg font-medium shadow-sm" style={{background:'#FF8139'}}>New Booking</button>
          <button className="px-4 py-2 rounded-lg font-medium border border-white/10 hover:bg-white/10">View Calendar</button>
        </div>
      </div>
    </section>
  )
}
