const steps = [
  {
    title: 'Concept',
    desc: 'Foundational knowledge for deep subject understanding.',
  },
  {
    title: 'Application',
    desc: 'Practical implementation through real-world scenarios.',
  },
  {
    title: 'Tools',
    desc: 'Resources and techniques for effective skill mastery.',
  },
]

export default function CatFramework() {
  return (
    <section id="cat" className="section scroll-mt-20 bg-slate-100 lg:scroll-mt-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            The <span className="text-accent">CAT Framework</span>
          </h2>
          <p className="mt-2 text-lg text-slate-600">
            Our Proven Approach to <span className="font-semibold text-accent">Learning Excellence</span>
          </p>
        </div>

        <div className="stagger mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="surface-card hover-lift rounded-full p-8 text-center">
              <h3 className="text-4xl font-bold text-accent">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-base leading-7 text-slate-600">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
