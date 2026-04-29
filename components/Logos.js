const companies = [
  { name: 'Stripe', label: 'S' },
  { name: 'GitHub', label: 'GH' },
  { name: 'Shopify', label: 'SF' },
  { name: 'Slack', label: 'SL' },
  { name: 'Zoom', label: 'Z' },
  { name: 'Notion', label: 'N' },
]

export default function Logos() {
  return (
    <section className="section-sm border-y border-slate-200/70 bg-slate-50/60">
      <div className="container py-2 sm:py-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Trusted by companies
          </p>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Teams across product, operations, and leadership use Accredian to run consistent programs.
          </p>
        </div>

        <div className="stagger mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {companies.map((company) => (
            <div
              key={company.name}
              className="group surface-card hover-lift flex min-h-24 items-center justify-center px-4 py-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white transition group-hover:bg-accent">
                  {company.label}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{company.name}</p>
                  <p className="text-xs text-slate-500">Logo placeholder</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
