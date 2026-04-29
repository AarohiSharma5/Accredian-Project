const steps = [
  { title: 'Connect Sources', desc: 'Connect databases, cloud storage, and apps in minutes.' },
  { title: 'Scan & Classify', desc: 'Automatic classification with configurable rules.' },
  { title: 'Protect & Monitor', desc: 'Apply controls and monitor access in real time.' },
]

export default function HowItWorks(){
  return (
    <section id="how" className="section bg-slate-50">
      <div className="container">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="p-6 bg-white rounded-lg border animate-fade-in-up">
              <div className="text-accent font-bold text-lg">{i+1}</div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="text-slate-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
