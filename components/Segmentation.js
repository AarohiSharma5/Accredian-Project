const segments = [
  {
    title: 'Program Specific',
    items: 'Certificate, Executive, Post Graduate',
  },
  {
    title: 'Industry Specific',
    items: 'IT, Healthcare, Retail, Finance, Education',
  },
  {
    title: 'Topic Specific',
    items: 'Machine Learning, Analytics, Cybersecurity',
  },
  {
    title: 'Level Specific',
    items: 'Senior Leadership, Mid-Career, Freshers',
  },
]

export default function Segmentation() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Tailored <span className="text-accent">Course Segmentation</span>
          </h2>
          <p className="mt-2 text-lg text-slate-600">
            Explore <span className="font-semibold text-accent">Custom-fit Courses</span> Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="stagger mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {segments.map((card) => (
            <article key={card.title} className="surface-card hover-lift overflow-hidden">
              <div className="h-36 bg-gradient-to-br from-slate-200 to-slate-100" />
              <div className="p-5 text-center">
                <h3 className="text-2xl font-bold text-accent">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.items}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
