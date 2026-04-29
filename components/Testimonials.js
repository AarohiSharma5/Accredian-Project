const testimonials = [
  { name: 'Sana J', role: 'CISO, Acme', quote: 'Accredian helped us centralize controls and speed audits by 10x.' },
  { name: 'Marcus L', role: 'VP Engineering, BetaCorp', quote: 'Easy integrations and clear reporting saved our ops team hours.' },
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold">What customers say</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="p-6 bg-white rounded-lg border animate-fade-in-up">
              <p className="text-slate-700">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-500">— {t.name}, {t.role}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
