const steps = [
  {
    number: '01',
    title: 'Discover your goals',
    desc: 'Define the learning outcomes, audience, and scope for your enterprise program before launch.',
  },
  {
    number: '02',
    title: 'Build the journey',
    desc: 'Create a step-by-step plan with modules, milestones, and milestones that guide every participant.',
  },
  {
    number: '03',
    title: 'Launch and engage',
    desc: 'Roll out the experience, invite teams, and keep momentum with simple progress tracking.',
  },
  {
    number: '04',
    title: 'Measure and improve',
    desc: 'Review performance data, refine content, and keep improving the program over time.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="section scroll-mt-20 bg-slate-50 lg:scroll-mt-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">How it works</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            A simple process designed to move teams from setup to impact.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Keep the experience focused, measurable, and easy to understand for every stakeholder.
          </p>
        </div>

        <div className="stagger mt-10 flex flex-col gap-4 lg:flex-row lg:gap-0 lg:items-stretch">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex-1">
              <div className="group surface-card hover-lift h-full p-6 sm:p-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white transition group-hover:bg-accent">
                    {step.number}
                  </div>
                  <div className="h-px flex-1 bg-slate-200 lg:hidden" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.desc}</p>
              </div>

              {index < steps.length - 1 ? (
                <div className="hidden lg:block">
                  <div className="absolute left-full top-1/2 z-10 flex w-10 -translate-y-1/2 items-center justify-center">
                    <div className="h-px w-full bg-slate-300" />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
