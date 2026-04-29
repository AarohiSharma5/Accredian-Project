import { NextResponse } from 'next/server'
import { addLead, getLeads } from '../../../lib/leadsStore'

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request) {
  try {
    const body = await request.json()
    const name = (body?.name || '').trim()
    const email = (body?.email || '').trim().toLowerCase()

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const lead = addLead({ name, email })
    return NextResponse.json(
      { message: 'Lead captured successfully.', lead },
      { status: 201 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON payload.' },
      { status: 400 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ leads: getLeads() }, { status: 200 })
}
