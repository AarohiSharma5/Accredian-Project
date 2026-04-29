export default function Footer(){
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container grid md:grid-cols-3 gap-6">
        <div>
          <div className="text-lg font-bold">Accredian</div>
          <p className="text-slate-400 mt-2 text-sm">Enterprise data protection and compliance.</p>
        </div>
        <div className="text-sm text-slate-400">
          <div className="font-semibold text-white">Product</div>
          <div className="mt-2">Features</div>
          <div>Integrations</div>
          <div>Pricing</div>
        </div>
        <div className="text-sm text-slate-400">
          <div className="font-semibold text-white">Company</div>
          <div className="mt-2">About</div>
          <div>Careers</div>
          <div>Contact</div>
        </div>
      </div>
      <div className="container text-slate-500 text-sm mt-8">© {new Date().getFullYear()} Accredian — Built with Next.js</div>
    </footer>
  )
}
