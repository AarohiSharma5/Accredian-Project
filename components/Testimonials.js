const testimonials = [
  {
    name: 'Sana J',
    role: 'CISO',
    company: 'Acme',
    quote: 'Accredian gave us a simpler way to launch and track enterprise programs without adding complexity for the team.',
    avatar: 'SJ',
  },
  {
    name: 'Marcus L',
    role: 'VP Engineering',
    company: 'BetaCorp',
    quote: 'The workflow is clean, the reporting is clear, and our teams adopted it quickly across departments.',
    avatar: 'ML',
  },
  {
    name: 'Priya K',
    role: 'Head of Talent',
    company: 'Northstar',
    quote: 'We finally have a learning experience that feels consistent, measurable, and easy to scale globally.',
    avatar: 'PK',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section scroll-mt-20 bg-white lg:scroll-mt-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Testimonials</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Loved by teams building better enterprise experiences.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Real feedback from leaders using Accredian-style workflows to move faster and stay aligned.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white hover:shadow-lg sm:p-7"
            >
              <blockquote className="text-sm leading-7 text-slate-700 sm:text-[15px]">
                “{testimonial.quote}”
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-4 border-t border-slate-200 pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white transition group-hover:bg-accent">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-950">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
