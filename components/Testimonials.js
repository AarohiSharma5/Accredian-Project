const testimonials = [
  {
    name: 'ADP',
    role: 'Partner',
    company: 'ADP',
    quote: 'We would like to thank Accredian for the wonderful support and beautiful journey. The team turned our vision into reality with unparalleled dedication and expertise.',
    avatar: 'ADP',
  },
  {
    name: 'Bayer',
    role: 'Partner',
    company: 'Bayer',
    quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure needs are met and exceeded.",
    avatar: 'B',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section scroll-mt-20 bg-white lg:scroll-mt-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Testimonials</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Testimonials from <span className="text-accent">Our Partners</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            What <span className="font-semibold text-accent">Our Clients</span> Are Saying
          </p>
        </div>

        <div className="stagger mt-10 grid gap-5 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="group surface-card hover-lift p-6 sm:p-7"
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
