import { useState, useEffect } from 'react'

const navItems = [
  { id: 'features', label: 'Features' },
  { id: 'how', label: 'How it works' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'pricing', label: 'Pricing' },
]

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed w-full z-30 top-0 backdrop-blur transition-shadow ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="text-xl font-bold">Accredian</a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(n => (
            <a key={n.id} href={`#${n.id}`} className="text-sm text-slate-700 hover:text-accent transition">{n.label}</a>
          ))}
          <a href="#contact" className="ml-2 text-sm text-white bg-accent px-3 py-1 rounded">Get started</a>
        </nav>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function MobileMenu(){
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} aria-label="menu" className="p-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-800"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow p-4">
          <a href="#features" className="block py-2">Features</a>
          <a href="#how" className="block py-2">How it works</a>
          <a href="#testimonials" className="block py-2">Testimonials</a>
          <a href="#contact" className="block py-2">Get started</a>
        </div>
      )}
    </div>
  )
}
