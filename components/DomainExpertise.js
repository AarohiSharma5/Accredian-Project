const domains = [
  'Product & Innovation Hub',
  'Gen-AI Mastery',
  'Leadership Elevation',
  'Tech & Data Insights',
  'Operations Excellence',
  'Digital Enterprise',
  'Fintech Innovation Lab',
]

export default function DomainExpertise() {
  return (
    <section className="section bg-slate-50/70">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our <span className="text-accent">Domain Expertise</span>
          </h2>
          <p className="mt-2 text-lg text-slate-600">
            <span className="font-semibold text-accent">Specialized Programs</span> Designed to Fuel Innovation
          </p>
        </div>

        <div className="stagger mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((item) => (
            <div key={item} className="surface-card hover-lift p-5 text-center">
              <p className="text-xl font-semibold text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
