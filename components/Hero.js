import Button from './Button'

export default function Hero() {
  return (
    <section id="home" className="section overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-in-up space-y-7">
          <div className="inline-flex items-center rounded-full border border-accent/15 bg-accent/5 px-4 py-2 text-sm font-medium text-accent">
            Enterprise learning and growth platform
          </div>

          <div className="space-y-5">
            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Build enterprise skills programs that scale with confidence.
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Create measurable employee growth with structured learning journeys,
              analytics, and seamless delivery for modern teams.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Get Started
            </a>
            <a href="#features" className="text-sm font-semibold text-slate-700 transition hover:text-accent">
              Explore features
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in-up">
          <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
          <div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-slate-900/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.45)] sm:p-6">
            <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl bg-gradient-to-br from-slate-950 to-slate-800 p-6 text-white sm:p-7">
                <p className="text-sm font-medium text-white/70">Program overview</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight">Learning paths, cohorts, and progress in one place.</h2>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-white/10 p-3">
                    <div className="text-white/70">Completion</div>
                    <div className="mt-1 text-lg font-semibold">94%</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3">
                    <div className="text-white/70">Active learners</div>
                    <div className="mt-1 text-lg font-semibold">1.2k</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 rounded-2xl bg-slate-50 p-5">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Monthly growth</span>
                    <span className="font-semibold text-emerald-600">+28%</span>
                  </div>
                  <div className="mt-4 h-28 rounded-xl bg-gradient-to-t from-accent/15 via-accent/25 to-accent/5" />
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-slate-500">Teams onboarded</div>
                    <div className="mt-2 text-2xl font-bold text-slate-950">48</div>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-slate-500">Training hours</div>
                    <div className="mt-2 text-2xl font-bold text-slate-950">12k</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
