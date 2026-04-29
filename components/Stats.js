const stats = [
  {
    value: '10K+',
    label: 'Professionals Trained For Exceptional Career Success',
  },
  {
    value: '200+',
    label: 'Sessions Delivered With Unmatched Learning Excellence',
  },
  {
    value: '5K+',
    label: 'Active Learners Engaged In Dynamic Courses',
  },
]

export default function Stats() {
  return (
    <section id="stats" className="section scroll-mt-20 bg-white lg:scroll-mt-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our <span className="text-accent">Track Record</span>
          </h2>
          <p className="mt-2 text-lg text-slate-600">
            The Numbers Behind <span className="font-semibold text-accent">Our Success</span>
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {stats.map((item) => (
            <article key={item.value} className="surface-card hover-lift p-6 text-center">
              <div className="mx-auto inline-flex rounded-full bg-blue-100 px-5 py-2 text-3xl font-bold text-accent">
                {item.value}
              </div>
              <p className="mx-auto mt-5 max-w-xs text-base font-medium leading-7 text-slate-700">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
