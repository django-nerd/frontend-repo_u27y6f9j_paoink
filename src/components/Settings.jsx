export default function Settings(){
  return (
    <div className="grid md:grid-cols-2 gap-3">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
        <div className="text-sm text-white/70 mb-2">Venue Owner</div>
        <div className="grid gap-2">
          <Field label="Name" placeholder="Alex" />
          <Field label="Bank details" placeholder="IBAN / Account" />
          <label className="text-sm flex items-center gap-2"><input type="checkbox" className="accent-blue-500" /> Notifications</label>
          <label className="text-sm">Branding<input type="file" className="block mt-1" /></label>
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
        <div className="text-sm text-white/70 mb-2">Superadmin</div>
        <div className="grid gap-2">
          <Field label="Payment gateway" placeholder="Stripe" />
          <Field label="Roles & permissions" placeholder="Admin, Staff" />
          <Field label="User management" placeholder="Invite / Remove" />
          <Field label="Club management" placeholder="Clubs" />
        </div>
      </div>
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
