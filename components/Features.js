const items = [
  { title: 'Discover & Classify', desc: 'Automatically detect sensitive data across systems with rich rule sets.' },
  { title: 'Access Controls', desc: 'Granular RBAC and policy management for enterprise teams.' },
  { title: 'Audit & Reporting', desc: 'Prepare audit-ready reports and track changes over time.' },
  { title: 'Integrations', desc: 'Connectors for databases, cloud storage, and apps.' },
]

export default function Features(){
  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold">Why choose Accredian</h2>
        <p className="text-slate-600 mt-2">Built for enterprises that need scale, control and auditability.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((it, idx) => (
            <div key={idx} className="p-6 border rounded-lg hover:shadow-md transition bg-white animate-fade-in-up">
              <h3 className="font-semibold">{it.title}</h3>
              <p className="text-slate-600 mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
