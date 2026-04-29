const items = [
  {
    title: 'Structured learning paths',
    desc: 'Build role-based journeys that guide employees through clear milestones and outcomes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M4 7.5L12 4l8 3.5-8 3.5-8-3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M6 10.5v4.2c0 .8.5 1.6 1.3 2l4.7 2.1 4.7-2.1c.8-.4 1.3-1.1 1.3-2v-4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Analytics that matter',
    desc: 'Track adoption, completion, and engagement with simple reporting your team can act on.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M5 19V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 15l3-4 3 2 4-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Seamless delivery',
    desc: 'Launch programs quickly with a simple interface that works smoothly across devices.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Built for teams',
    desc: 'Create a consistent learning experience for leaders, managers, and employees at scale.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 20c1.5-3.4 4.3-5 8-5s6.5 1.6 8 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="section scroll-mt-20 bg-white lg:scroll-mt-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Why choose us</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Everything you need to run modern enterprise programs.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            A focused product experience for teams that want clarity, speed, and measurable outcomes.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white transition duration-300 group-hover:bg-accent">
                {item.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
