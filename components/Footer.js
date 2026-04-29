const footerLinks = [
  { label: 'About', href: '#home' },
  { label: 'Blog', href: '#' },
  { label: 'Why Accredian', href: '#edge' },
]

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/accredianlearn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M13.5 22v-8.2h2.7l.4-3.2h-3.1V8.5c0-.9.2-1.6 1.7-1.6h1.5V4.1c-.7-.1-1.6-.2-2.7-.2-2.8 0-4.7 1.7-4.7 4.8v1.9H7v3.2h2.3V22h4.2Z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/school/accredianedu/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M6.94 6.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.53 8.83h3.32V20H3.53V8.83Zm5.24 0h3.18v1.52h.05c.44-.84 1.51-1.73 3.12-1.73 3.34 0 3.96 2.2 3.96 5.06V20h-3.32v-5.03c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V20H8.77V8.83Z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://x.com/accredianedu',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M18.9 7.25c.01.17.01.33.01.5 0 5.1-3.88 10.98-10.98 10.98-2.18 0-4.21-.64-5.92-1.74.3.03.6.05.91.05 1.81 0 3.48-.62 4.8-1.66a3.85 3.85 0 0 1-3.59-2.67c.24.04.49.07.75.07.37 0 .73-.05 1.07-.14A3.84 3.84 0 0 1 2.9 9.44v-.05c.55.31 1.18.5 1.84.52A3.84 3.84 0 0 1 3.5 4.79a10.9 10.9 0 0 0 7.92 4.02 3.84 3.84 0 0 1 6.54-3.51 7.64 7.64 0 0 0 2.44-.93 3.86 3.86 0 0 1-1.69 2.13 7.64 7.64 0 0 0 2.21-.6 8.08 8.08 0 0 1-1.95 2.02Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/accredian_edu',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm10.2 1.45a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 1.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M21.8 8.2s-.2-1.4-.8-2c-.8-.9-1.7-.9-2.1-1C16.1 5 12 5 12 5s-4.1 0-6.9.2c-.4 0-1.3.1-2.1 1-.6.6-.8 2-.8 2S2 9.7 2 11.2v1.6c0 1.5.2 3 .2 3s.2 1.4.8 2c.8.9 1.9.8 2.4 1 1.8.2 6.6.2 6.6.2s4.1 0 6.9-.2c.4 0 1.3-.1 2.1-1 .6-.6.8-2 .8-2s.2-1.5.2-3v-1.6c0-1.5-.2-3-.2-3ZM9.6 14.8V9.2l5.6 2.8-5.6 2.8Z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-slate-300 bg-white py-10 lg:scroll-mt-24">
      <div className="container flex flex-col gap-8 border-b border-slate-300 pb-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-5xl font-black tracking-tight text-accent">accredian</div>
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
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="container mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Accredian</h3>
          <div className="mt-4 space-y-2 text-lg text-slate-600">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="block hover:text-accent">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Contact Us</h3>
          <p className="mt-4 text-lg text-slate-600">Email us: enterprise@accredian.com</p>
          <p className="mt-2 text-lg text-slate-600">Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana</p>
        </div>
      </div>

      <div className="container mt-8 border-t border-slate-300 pt-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
      </div>
    </footer>
  )
}