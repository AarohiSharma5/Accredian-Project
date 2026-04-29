"use client"

import { useEffect, useState } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className={`sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur transition-shadow ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container flex h-16 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-950">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-sm font-extrabold text-white">A</span>
          <span>Accredian</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-slate-600 transition hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Get started
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="relative h-5 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div className={`border-t border-slate-200/70 bg-white px-4 py-4 shadow-lg transition-[max-height,opacity] duration-300 md:hidden ${menuOpen ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 overflow-hidden opacity-0'}`}>
        <nav className="container flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleLinkClick}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-2 rounded-lg bg-slate-950 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Get started
          </a>
        </nav>
      </div>
    </header>
  )
}
