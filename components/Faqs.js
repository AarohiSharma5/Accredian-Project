"use client"

import { useMemo, useState } from 'react'

const faqGroups = {
  course: [
    {
      q: 'What types of corporate training programs does Accredian offer?',
      a: 'We offer leadership, domain-specific, technology, analytics, and role-based enterprise programs tailored to your organization.',
    },
    {
      q: 'What domain specializations are available?',
      a: 'Programs span product, data, AI, operations, fintech, and digital transformation tracks.',
    },
  ],
  delivery: [
    {
      q: 'Do you offer online and offline delivery?',
      a: 'Yes, we support fully online, in-person, and hybrid delivery with enterprise scheduling flexibility.',
    },
    {
      q: 'Can training be customized for our teams?',
      a: 'Yes, each engagement is customized by role, level, business goals, and preferred outcomes.',
    },
  ],
  misc: [
    {
      q: 'Do you provide post-training support?',
      a: 'Yes, we provide assessments, dashboards, reporting, and advisory recommendations for improvement.',
    },
    {
      q: 'How quickly can we launch?',
      a: 'Typical launch windows are 2 to 4 weeks depending on scope and customization depth.',
    },
  ],
}

const categories = [
  { id: 'course', label: 'About the Course' },
  { id: 'delivery', label: 'About the Delivery' },
  { id: 'misc', label: 'Miscellaneous' },
]

export default function Faqs() {
  const [activeCategory, setActiveCategory] = useState('course')
  const [openItem, setOpenItem] = useState(0)
  const items = useMemo(() => faqGroups[activeCategory], [activeCategory])

  return (
    <section id="faqs" className="section scroll-mt-20 bg-white lg:scroll-mt-24">
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id)
                  setOpenItem(0)
                }}
                className={`w-full rounded-xl border px-4 py-4 text-left text-lg font-semibold transition ${activeCategory === cat.id ? 'border-accent bg-blue-50 text-accent' : 'border-slate-200 bg-white text-slate-600 hover:border-accent/40'}`}
              >
                {cat.label}
              </button>
            ))}
          </aside>

          <div className="space-y-4">
            {items.map((item, index) => (
              <article key={item.q} className="surface-card p-5">
                <button
                  type="button"
                  onClick={() => setOpenItem(openItem === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-xl font-semibold text-slate-900">{item.q}</span>
                  <span className="text-accent">{openItem === index ? '-' : '+'}</span>
                </button>
                {openItem === index ? (
                  <p className="mt-4 text-base leading-7 text-slate-600">{item.a}</p>
                ) : null}
              </article>
            ))}

            <div className="pt-4">
              <a href="#pricing" className="inline-flex rounded-lg bg-accent px-6 py-3 text-lg font-semibold text-white shadow hover:bg-teal-500">
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
