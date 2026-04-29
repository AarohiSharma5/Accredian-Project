const partners = ['Reliance', 'HCL', 'IBM', 'CRIF', 'ADP', 'Bayer']

export default function Clients() {
  return (
    <section id="clients" className="section scroll-mt-20 bg-slate-50/70 lg:scroll-mt-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Proven <span className="text-accent">Partnerships</span>
          </h2>
          <p className="mt-2 text-lg text-slate-600">
            Successful Collaborations With the <span className="font-semibold text-accent">Industry's Best</span>
          </p>
        </div>

        <div className="stagger mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((name) => (
            <div key={name} className="surface-card hover-lift flex min-h-24 items-center justify-center p-4">
              <span className="text-2xl font-bold tracking-wide text-accent">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
