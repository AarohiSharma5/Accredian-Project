const leads = []

export function addLead({ name, email }) {
  const lead = {
    id: leads.length + 1,
    name,
    email,
    createdAt: new Date().toISOString(),
  }

  leads.push(lead)
  return lead
}

export function getLeads() {
  return leads
}
