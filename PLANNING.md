# Zithande Website — Project Walkthrough

**Client:** Dinaledi Expressions Limited, trading as Zithande
**Stack:** Vanilla HTML / CSS / JS
**Timeline:** 1 week

---

## What This Site Actually Is

Not a small retail/stationery shop. Dinaledi Expressions Limited (trading as Zithande) is an **institutional procurement and business support company** serving government ministries, mining companies, schools, hospitals, NGOs, banks, and SMEs — not walk-in retail customers.

**Four core divisions:**
- **General Supply** — office stationery, printer consumables, furniture, cleaning materials, PPE, uniforms, electrical/plumbing/building materials, IT accessories
- **Branding & Corporate Identity** — branded uniforms, promotional merchandise, signage, banners, vehicle branding
- **Food Supply & Catering** — bulk groceries, institutional food supply, corporate catering, event refreshments
- **Business Support Services** — procurement support, documentation, customer service training, SME consulting

This is a **credibility-first corporate site**, not a product catalog. Its job is to make an institutional buyer trust the company enough to request a quote — no cart, no checkout.

## Two Flags Before Building

1. **Confirm naming**: logo says "Zithande," legal/tax documents say "Dinaledi Expressions Limited." Get a definitive answer on primary displayed name before building nav/headers/copy around it.
2. **Do not publish the tax clearance certificate or registration document as images.** They expose TPIN, physical address, phone number, and a scannable QR code — a real fraud exposure, not a design choice. State compliance in plain text instead ("fully registered and tax compliant company"); offer actual certificates on request.
3. A second uploaded document (an old arts/theatre org profile, same founder) appears unrelated to this business — confirm with client it's not meant to be referenced.

## Sitemap

1. **Home** — hero, one-line positioning, snapshot of the four divisions, "Why Choose Us" highlights, CTA to request a quote
2. **About** — company overview, vision/mission/values, leadership bios
3. **Services** — the four divisions, each with its offering list
4. **Industries We Serve** — institutional client list (strong trust signal, give it real space)
5. **Why Choose Us + CSR** — highlights + youth empowerment/internship program
6. **Contact** — address, phone, email, request-a-quote form

Structure the services/divisions as data (not hardcoded per-division HTML) so swapping in final client wording later means editing data, not rewriting markup.

---

## Day-by-Day Plan

### Day 1: Content lock + IA
- Confirm naming (Zithande vs. Dinaledi Expressions Limited)
- Confirm the old arts/theatre document is out of scope
- Finalize the 6-page sitemap above
- Pull actual copy out of the business profile into a plain doc, organized by page/section — mostly editorial trimming since the profile's tone is already usable

### Day 2: Design system
- Pull exact colors from the existing logo (blue/red) + one neutral (near-black text, off-white background) — 3-4 colors total
- Typography: clean, corporate-credible — avoid playful fonts given the institutional audience (government/mining/hospitals)
- Define spacing/type scale, one card style (for division and industry lists), one button style

### Day 3: Build structure + Home/About
- Global HTML skeleton, nav, footer shared across all pages
- Home: hero with logo + tagline, 4 division cards, why-choose-us highlights, CTA
- About: overview, vision/mission/values, leadership bios

### Day 4: Services + Industries
- Services page: four divisions, each clearly sectioned with offering lists — most content-heavy page, give it the most layout care (consider 2-column grid or icon + short list per division rather than a wall of bullet text)
- Industries page: institutional client list — simple, clean grid/list; content itself does the trust-building

### Day 5: Contact + CSR + JS
- Contact page: address, phone, email, map if useful, request-a-quote form
  - No backend this week — form needs a destination: either `mailto:` action or a simple form service (Formspree, Web3Forms) if you want submissions to actually land somewhere
- CSR/youth empowerment section — short, can live on About or as its own small section
- JS: mobile nav toggle, maybe subtle scroll-reveal, form validation if using a form service

### Day 6: Responsive pass + content review
- Full breakpoint check (phone, tablet, desktop)
- Have someone who fits the actual audience (a procurement officer, not a casual shopper) read it — does it read as credible in 10 seconds?

### Day 7: Deploy + handoff
- Deploy to static host (Netlify/Vercel/GitHub Pages)
- Custom domain if available
- Short handoff doc: how to update content, and which content decisions were assumptions on your part (e.g. naming, if guessed) so the client can flag corrections fast
