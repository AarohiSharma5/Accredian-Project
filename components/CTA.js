import Button from './Button'

export default function CTA(){
  return (
    <section id="contact" className="section bg-gradient-to-r from-accent/10 to-transparent">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold">Ready to secure your data?</h3>
          <p className="text-slate-600">Start with a personalized demo and see how Accredian fits your stack.</p>
        </div>
        <div className="flex gap-4">
          <Button>Request demo</Button>
          <a href="#" className="text-sm text-slate-700 self-center">Contact sales</a>
        </div>
      </div>
    </section>
  )
}
