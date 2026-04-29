const companies = [
  { name: 'Stripe', src: 'https://logo.clearbit.com/stripe.com' },
  { name: 'GitHub', src: 'https://logo.clearbit.com/github.com' },
  { name: 'Shopify', src: 'https://logo.clearbit.com/shopify.com' },
  { name: 'Slack', src: 'https://logo.clearbit.com/slack.com' },
  { name: 'Zoom', src: 'https://logo.clearbit.com/zoom.us' },
]

export default function Logos(){
  return (
    <section className="section-sm">
      <div className="container">
        <p className="text-center text-sm text-slate-500">Trusted by</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {companies.map(c => (
            <div key={c.name} className="flex items-center justify-center p-2 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition">
              <img src={c.src} alt={c.name} className="h-8 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
