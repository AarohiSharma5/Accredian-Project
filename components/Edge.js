const pillars = [
  'Tailored Solutions',
  'Expert Guidance',
  'Innovative Framework',
  'Advanced Technology',
  'Diverse Offerings',
  'Proven Impact',
  'Flexible Delivery',
]

export default function Edge() {
  return (
    <section id="edge" className="section scroll-mt-20 bg-white lg:scroll-mt-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            The <span className="text-accent">Accredian Edge</span>
          </h2>
          <p className="mt-2 text-lg text-slate-600">
            Key Aspects of <span className="font-semibold text-accent">Our Strategic Training</span>
          </p>
        </div>

        <div className="stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((title) => (
            <article key={title} className="surface-card hover-lift p-5">
              <div className="mb-3 h-2 w-2 rounded-full bg-accent" />
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Enterprise-ready capability built for measurable outcomes and practical execution.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
