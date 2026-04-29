"use client"

import { useState } from 'react'
import Button from './Button'

export default function CTA() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error || 'Unable to submit right now.')
      }

      setStatus('success')
      setMessage('Thanks! Our team will contact you shortly.')
      setName('')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage(error.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="pricing" className="section scroll-mt-20 bg-white lg:scroll-mt-24">
      <div className="container">
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-accent px-6 py-14 text-center text-white shadow-[0_24px_80px_-40px_rgba(15,23,42,0.7)] sm:px-10 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
            Ready to get started?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Launch your next enterprise program with a clean, scalable experience.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            Get a focused workflow, stronger engagement, and a platform your team can adopt quickly.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 grid w-full max-w-2xl gap-3 sm:grid-cols-2">
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              required
              className="h-12 rounded-full border border-white/20 bg-white/95 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/60"
            />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Work email"
              required
              className="h-12 rounded-full border border-white/20 bg-white/95 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/60"
            />

            <div className="sm:col-span-2 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                type="submit"
                disabled={status === 'loading'}
                className="justify-center bg-white text-slate-950 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'loading' ? 'Submitting...' : 'Get Started'}
              </Button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Contact
              </a>
            </div>
          </form>

          {message ? (
            <p className={`mt-4 text-sm ${status === 'success' ? 'text-emerald-200' : 'text-rose-200'}`}>
              {message}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
