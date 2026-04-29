import Button from './Button'

export default function Hero(){
  return (
    <section id="home" className="section bg-gradient-to-b from-white to-slate-50">
      <div className="container grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Enterprise-grade data compliance and security</h1>
          <p className="text-slate-600 max-w-xl">Protect sensitive data, speed audits, and scale trust with an integrated platform designed for modern enterprises.</p>
          <div className="flex gap-4 items-center">
            <Button>Get a demo</Button>
            <a href="#features" className="text-sm text-slate-700 hover:underline">See features</a>
          </div>
        </div>
        <div className="relative">
          <div className="w-full rounded-lg bg-gradient-to-tr from-accent/10 to-transparent p-6 animate-fade-in-up">
            <img alt="dashboard" src="https://via.placeholder.com/720x420.png?text=Dashboard+Preview" className="w-full rounded" />
          </div>
        </div>
      </div>
    </section>
  )
}
