export default function Venue(){
  return (
    <div className="space-y-3">
      <Section title="Venue details">
        <div className="grid md:grid-cols-3 gap-2">
          <Field label="Venue name" placeholder="Arena 24" />
          <Field label="Address" placeholder="123 Sports Ave" />
          <Field label="Contact" placeholder="+1 555-0100" />
        </div>
      </Section>
      <Section title="Courts / fields">
        <div className="grid md:grid-cols-4 gap-2">
          {['Court A','Court B','Court C','Court D'].map(c=>(
            <div key={c} className="p-3 rounded border border-white/10">
              <div className="font-medium">{c}</div>
              <div className="text-xs text-white/60">Inline edit • Maintenance slots</div>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Operating hours">
        <div className="grid md:grid-cols-3 gap-2">
          <Field label="Weekdays" placeholder="06:00 - 22:00" />
          <Field label="Weekends" placeholder="08:00 - 22:00" />
        </div>
      </Section>
      <Section title="Rules & notes">
        <textarea className="w-full h-24 bg-white/5 border border-white/10 rounded p-2" placeholder="No studs. Bring ID. ..." />
      </Section>
    </div>
  )
}

function Section({title, children}){
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <div className="mb-2 text-sm text-white/70">{title}</div>
      {children}
    </div>
  )
}

function Field({label, ...props}){
  return (
    <label className="text-sm">
      <div className="text-white/60">{label}</div>
      <input {...props} className="mt-1 w-full bg-white/5 border border-white/10 rounded px-2 py-1" />
    </label>
  )
}
