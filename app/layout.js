import './globals.css'

export const metadata = {
  title: 'Accredian Enterprise — Clone',
  description: 'Partial clone of Accredian Enterprise landing page built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="scroll-smooth">
        {children}
      </body>
    </html>
  )
}
