const footerLinks = [
  { label: 'About', href: '#home' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy', href: '#' },
]

const socialLinks = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M6.94 6.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.53 8.83h3.32V20H3.53V8.83Zm5.24 0h3.18v1.52h.05c.44-.84 1.51-1.73 3.12-1.73 3.34 0 3.96 2.2 3.96 5.06V20h-3.32v-5.03c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V20H8.77V8.83Z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M18.9 7.25c.01.17.01.33.01.5 0 5.1-3.88 10.98-10.98 10.98-2.18 0-4.21-.64-5.92-1.74.3.03.6.05.91.05 1.81 0 3.48-.62 4.8-1.66a3.85 3.85 0 0 1-3.59-2.67c.24.04.49.07.75.07.37 0 .73-.05 1.07-.14A3.84 3.84 0 0 1 2.9 9.44v-.05c.55.31 1.18.5 1.84.52A3.84 3.84 0 0 1 3.5 4.79a10.9 10.9 0 0 0 7.92 4.02 3.84 3.84 0 0 1 6.54-3.51 7.64 7.64 0 0 0 2.44-.93 3.86 3.86 0 0 1-1.69 2.13 7.64 7.64 0 0 0 2.21-.6 8.08 8.08 0 0 1-1.95 2.02Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm10.2 1.45a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 1.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-slate-200 bg-white py-8 lg:scroll-mt-24">
      <div className="container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-base font-semibold tracking-tight text-slate-950">Accredian</div>
          <p className="mt-2 text-sm text-slate-500">Enterprise learning and growth for modern teams.</p>
        </div>

        <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-600">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition duration-300 hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="container mt-6 text-xs text-slate-400">
        © {new Date().getFullYear()} Accredian. All rights reserved.
      </div>
    </footer>
  )
}