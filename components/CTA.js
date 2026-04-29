import Button from './Button'

export default function CTA() {
  return (
    <section id="pricing" className="section scroll-mt-20 bg-white lg:scroll-mt-24">
      <div className="container">
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-accent px-6 py-14 text-center text-white shadow-[0_24px_80px_-40px_rgba(15,23,42,0.7)] sm:px-10 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
            Ready to get started?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Launch your next enterprise program with a clean, scalable experience.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            Get a focused workflow, stronger engagement, and a platform your team can adopt quickly.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button className="bg-white text-slate-950 hover:bg-slate-100">Get Started</Button>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
