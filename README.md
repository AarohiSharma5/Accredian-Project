# Accredian Enterprise Page - Assignment Submission

This repository contains a partial clone of the Accredian Enterprise page built for the Full Stack Developer Intern assignment.

Reference used:
- https://enterprise.accredian.com/

Tech stack:
- Next.js 14 (App Router)
- React functional components with hooks
- Tailwind CSS
- Next.js API Routes (`/api/leads`)

## Setup Instructions

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

## Approach Taken

1. Built reusable section components and assembled them in `app/page.js`.
2. Added sticky navbar with smooth anchor navigation for all sections.
3. Implemented responsive UI with desktop and mobile layouts.
4. Added a lead capture form in CTA.
5. Created mock API integration using `POST /api/leads` with in-memory storage.

## Assignment Coverage

- Landing page with all major sections
- Navigation menu and footer
- Responsive design (mobile + desktop)
- Structured reusable components
- Smooth section navigation
- API integration (mock)
- Bonus lead capture flow

## API Details

Endpoint:
- `POST /api/leads`

Payload:

```json
{
	"name": "Aarohi Sharma",
	"email": "aarohi@example.com"
}
```

Note: Leads are stored in memory, so data resets after server restart/deployment.

## AI Usage Explanation

AI tools used:
- GitHub Copilot Chat

Where AI helped:
- Initial project scaffolding
- Section component generation
- Tailwind styling iteration
- API route boilerplate
- Debugging Next.js runtime/cache issues

Manual improvements made:
- Section order and content alignment with reference screenshots
- UI/UX refinements (spacing, hover behavior, section consistency)
- Navigation and anchor structure updates
- README restructuring for assignment compliance

## Improvements With More Time

1. Replace placeholder logos/images with finalized licensed brand assets.
2. Add persistent backend storage (PostgreSQL/Supabase) instead of in-memory leads.
3. Add end-to-end tests for lead form and section navigation.
4. Improve accessibility with keyboard-focused FAQ interactions and deeper ARIA coverage.
5. Add analytics tracking for CTA clicks and form submissions.

## Submission Links

- GitHub Repository: `https://github.com/AarohiSharma5/Accredian-Project`
- Vercel Deployment: `ADD_VERCEL_LINK_HERE`
- Submission Form: https://docs.google.com/forms/d/e/1FAIpQLSeC-GbWRJNCY5ja3nFV8a2G4ChP4Ar_7lMZSbLAtcKRP0oJ2Q/viewform
