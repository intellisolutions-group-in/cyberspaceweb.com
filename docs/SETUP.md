# cyberspaceweb.com Website Setup

This project is a static-export ready Next.js website for `cyberspaceweb.com`.

## Company Details

Primary company data lives in `data/company.ts`.

Current values:

- Domain: `cyberspaceweb.com`
- Brand name: `cyberspaceweb`
- Target country: India
- Industry: IT / Software Development
- Company registered date: `2004-04-26`
- Established year: `2004`
- Email: `info@cyberspaceweb.com`

Phone, office address, logo, and social links are commented in `data/company.ts` until real values are available.

## Add Logo

When a logo is available:

1. Add it at `public/images/logo.svg`.
2. Replace the square logo placeholders in `components/Navbar.tsx` and `components/Footer.tsx`.
3. Use alt text: `cyberspaceweb Logo`.

## Update Services

Service content lives in `data/services.ts`.

Each service record controls:

- Service overview card
- Detail page route under `/services/[slug]/`
- Related service cards
- Sitemap entries
- Service metadata

## Update Testimonials, FAQ, Careers, and Portfolio

Use these files:

- `data/testimonials.ts`
- `data/faq.ts`
- `data/careers.ts`
- `data/portfolio.ts`

Do not add real client names or client logos unless they are confirmed.

## Update Social Links

Only Instagram and Facebook should be displayed when real URLs are available.

Social link placeholders are commented in `data/company.ts`. The footer currently hides social links intentionally.

## Update Images

The current design uses code-rendered interface panels and placeholders, so no image assets are required.

If service or portfolio images are added later, place them under:

- `public/images/services/`
- `public/images/portfolio/`

Keep images optimised and use descriptive alt text.
