# Prompt — Fencing & Deck Building Company

> **Dashboard: YES** — Homeowners manage project timelines, view material selections, and approve design plans.

---

## IDENTITY & CONCEPT

Build a complete multipage website for **"IronBark Outdoors"** — a premium fencing, deck building, and outdoor structure company. They build privacy fences, composite decks, cedar arbors, and pergolas. The site must feel like a **craftsman's showroom** — tactile, honest, and built-to-last — not a generic contractor template. Every section should make the visitor trust the company's workmanship before they ever pick up the phone.

**Technology**: Bootstrap 5 + Bootstrap Icons + Vanilla JS only.  
**Branding**: Single SVG logo (tree-ring/woodgrain icon + "IronBark Outdoors" text). Reuse across header, footer, dashboard. Favicon from SVG.

---

## ANTI-REDUNDANCY RULES (MANDATORY)

- ❌ No generic contractor website layouts (hero stock photo + "We build dreams" tagline).  
- ❌ No reusable card grids that could fit any service business.  
- ❌ No duplicated section patterns across pages.  
- ✔ Every section must relate to **outdoor construction** — materials, builds, weather, craftsmanship.  
- ✔ Sections must reflect the **homeowner's decision journey**: see work → choose materials → get a quote → track the project.  
- ✔ If any section could belong to a plumbing or HVAC company, **redesign it**.

---

## FOLDER STRUCTURE (STRICT — DO NOT CHANGE)

```
ironbark-outdoors/
├── index.html
├── home-2.html
├── about.html
├── services.html
├── service-details.html
├── blog.html
├── blog-details.html
├── pricing.html
├── contact.html
├── login.html
├── register.html
├── dashboard.html
├── 404.html
├── coming-soon.html
└── assets/
    ├── css/
    │   ├── style.css
    │   ├── dark-mode.css
    │   └── rtl.css
    ├── js/
    │   ├── main.js
    │   └── dashboard.js
    ├── images/
    └── fonts/
```

❌ No extra folders. ❌ No nested page directories.

---

## DESIGN SYSTEM

**Palette** (STRICT — 3 colors only):
- **Black** (#000) → text in light mode, dark mode backgrounds use #1A1A1A.  
- **White** (#FFF) → backgrounds in light mode, text in dark mode.  
- **Accent: Deep Cedar** (#6B3A2A) → buttons, links, borders, active states, tags, badges.  
- ❌ NO other colors. No Iron Slate, no grey, no muted tones.

**Typography**:
- H1: 40–48px. Strong, sturdy sans-serif (e.g., Outfit or DM Sans).  
- H2: 32–36px. H3: 24–28px. Body: 16–18px.
- Line height: 1.25–1.5.
- Max 2–3 font families. Use Google Fonts.

**Dark Mode**: Separate `dark-mode.css` file. Charcoal backgrounds (#1E1E1E). Full contrast maintained.

**RTL**: Separate `rtl.css` file. Full support.

---

## RESPONSIVE BREAKPOINTS (NON-NEGOTIABLE)

- **280px – 1100px** → Hamburger ONLY. Offcanvas. Centered logo.  
- **1100px+** → Full navigation.

Test at: 320px, 480px, 768px, 1024px, 1440px.

Mobile-specific:
- Touch-friendly buttons (minimum 44px).
- Reduced animations on mobile.
- Simplified tables/data display.
- Optimized image sizes for mobile data.

---

## HEADER (ALL PAGES IDENTICAL)

- SVG Logo + "IronBark Outdoors." Nav: Home, Projects, Services, Pricing, Blog, Contact.  
- "Get a Free Quote" (primary CTA) + Login button (same color).  
- Theme toggle (top-right). Mobile → Offcanvas.

## FOOTER (ALL PAGES IDENTICAL)

4 columns: Brand/Social, Project Types, Support, Newsletter. © 2026. Back-to-top.

---

## PAGE-BY-PAGE SECTION BLUEPRINTS (UNIQUE LAYOUTS ONLY)

### `index.html` — HOME 1: "Built to Weather"

**Section 1 — Project Reveal** (NOT a stock-photo hero):  
A **before/after slider** — a full-width image comparison showing a backyard "Before IronBark" (bare dirt, old fence) vs. "After IronBark" (cedar deck, new privacy fence, string lights). The visitor drags a slider handle left/right to reveal the transformation. Built with vanilla JS. H1 overlay: "We Don't Just Build Fences. We Build Backyards Worth Living In." Single CTA: "See Our Work."

**Section 2 — Project Type Selector** (NOT a services grid):  
An **interactive tab panel** with 4 tabs: "Privacy Fences" / "Decks" / "Arbors & Pergolas" / "Gates." Clicking a tab shows a full-width panel: large project image placeholder (left), project description + key specs (right). One project type displayed at a time. Not a card grid. A focused, editorial layout.

**Section 3 — Material Chooser** (NOT an icon list):  
A **side-by-side material comparison** embedded on the homepage. Two columns: "Cedar" vs. "Composite." Each column: material photo placeholder, 4 spec rows (Lifespan, Maintenance, Cost Range, Best For), and a "Learn More" link. The visitor immediately understands material trade-offs. Even 2-column layout.

**Section 4 — Build Process** (NOT numbered steps):  
A **vertical progress-bar layout** with 4 phases: "Design & Measure" → "Material Selection" → "Construction" → "Final Walkthrough." Each phase is a full-width row with a large phase title, a description, and an estimated timeline ("~3 days"). A visual progress line connects the phases vertically.

**Section 5 — Homeowner Reviews** (NOT a carousel):  
A **2×2 grid of review cards**. Each card: homeowner first name + city, star rating, 2-line quote, and project type badge ("Deck" / "Fence"). No photos. Text-driven trust.

**Section 6 — "Ready to Build?" CTA**:  
H2: "Your backyard deserves better than a chain-link fence." Email input + "Get a Free Estimate" button. Clean, dark section.

---

### `home-2.html` — HOME 2: "The Outdoor Living Catalog"

**Section 1 — Full-Bleed Gallery Intro**:  
A **2×2 masonry-style grid** of project photos (placeholders). Each photo has a hover overlay: project type + neighborhood. H1 below: "Handcrafted Outdoor Structures. Built to Last Decades."

**Section 2 — "Why IronBark?"** (NOT feature icons):  
A **single-column scrolling FAQ** — 4 questions homeowners actually ask: "How long will my fence last?" / "Do you handle permits?" / "Cedar or composite — which is better for my climate?" / "What's the typical project timeline?" Each has a short, confident answer. Accordion-style.

**Section 3 — Seasonal Tip Spotlight**:  
A **full-width banner card**: "Spring Tip: Schedule your deck staining before the May humidity hits." Rotatable by season (static content, not dynamic). Unique to outdoor construction.

**Section 4 — Service Areas Map**:  
A stylized SVG or static map showing covered neighborhoods/zones. Not a Google Maps embed. Clean and branded.

**Section 5 — Blog Preview**: 2-column, 2 posts.  
**Section 6 — CTA**: Same as Home 1 Section 6.

---

### `about.html` — Our Crew

**Section 1**: Company story — vertical timeline (founded 2014, first 100 projects, expansion to 3 crews, etc.).  
**Section 2**: "The IronBark Promise" — 4 value cards (2×2): Craftsmanship, Transparency, Timelines, Materials.  
**Section 3**: Crew intro — 4 team members (2×2). Photo placeholder, name, role ("Lead Builder"), years experience.  
**Section 4**: Certifications & insurance — logo strip (even count).

### `services.html` — What We Build

6 service cards (2×3): "Privacy Fences," "Composite Decking," "Cedar Decking," "Arbors & Pergolas," "Custom Gates," "Outdoor Kitchens." Each: icon, title, 2-line scope, "Details" link.

### `service-details.html` — Single Service

Hero → Material options (2-column comparison) → Build process (4 steps) → FAQ accordion → Request quote CTA.

### `blog.html` — Outdoor Living Tips

Search + filter (Maintenance, Materials, Trends, Seasonal). Full-width post list.

### `blog-details.html` — Single Post

Article + sidebar (related posts, popular tags, newsletter).

### `pricing.html` — Investment Guide

2-column: "Standard Build" vs. "Premium Build." Feature comparison table. CTA.

### `contact.html` — Start Your Project

Form: Name, Email, Phone, Project Type (dropdown: Fence / Deck / Arbor / Other), Address, Message. No map.

---

## AUTH PAGES

### `login.html` & `register.html`

- ❌ No header/footer.  
- Centered form. Social login icons. Vertical inputs. "Forgot Password?" link.
- Client-side form validation with clear error messages.

---

## DASHBOARD (`dashboard.html`)

This is a **User Dashboard** for homeowners — NOT an admin panel.

**Layout**: Sidebar + main content.

**Sidebar Links**: Overview, My Project, Timeline, Materials, Design Plans, Messages, Billing, Settings, Logout.

**Sidebar includes**: Theme toggle, RTL toggle, Notifications, Profile.

**Dashboard Sections** (JS tabs, no page reloads):

1. **Overview**: Welcome card. 4 stat cards (2×2): "Project Status" (e.g., "In Construction"), "Days Remaining," "Materials Ordered," "Messages Unread." Below: current phase highlight card.

2. **Timeline**: A **visual progress tracker** — horizontal bar showing phases (Design → Materials → Build → Inspect). Current phase highlighted. Below: phase details with estimated dates.

3. **Materials**: A material selection panel. 2-column comparison cards (e.g., "Board Type: Cedar vs. Trex"). Each: photo placeholder, specs, cost per foot. Homeowner can mark preference (visual toggle, no backend needed).

4. **Design Plans**: Uploaded plan previews (image placeholders). "Approve" / "Request Changes" buttons per plan.

5. **Messages**: Inbox list. Sender, preview, timestamp.

6. **Billing**: Invoice table — date, amount, status badge ("Paid" / "Pending"). Total due card.

7. **Settings**: Account settings, notification preferences, privacy options.

**Branding**: Same logo, colors, buttons as frontend. dashboard.js handles tab switching.

---

## FORM VALIDATION

All forms must include client-side validation with:
- Clear, user-friendly error messages.
- Tooltips to guide users.
- Visual feedback on invalid inputs.

## GRID RULES

Even grids only: 2×1, 2×2, 2×3. No 3-column or 5-column.

## CRITICAL UI RULES (NON-NEGOTIABLE)

❌ No low contrast. ❌ No overlaps. ❌ No horizontal scroll. ❌ No broken layouts. ❌ No inconsistent buttons. If detected → FIX.

## PERFORMANCE & SEO

- Optimize images (alt text, WebP format where possible).
- Minimal CSS/JS. CSS/JS minified for production.
- SEO meta tags on every page. Unique title tags (60 chars max). Meta descriptions (150–160 chars).
- One H1 per page, proper heading hierarchy.
- Structured data (JSON-LD) for business info.
- PageSpeed 90+ on mobile and desktop.

## CODE QUALITY

- HTML: Semantic markup (`header`, `main`, `section`, `footer`), proper heading hierarchy.
- CSS: CSS variables for theming.
- JavaScript: ES6+, modular structure, no console logs in production.
- Section headers commented in HTML.
- Function descriptions commented in JS.
- CSS organized by sections.

## FINAL CHECKLIST

✔ Readable text. ✔ Working buttons. ✔ Functional nav. ✔ Dark mode. ✔ RTL. ✔ Dashboard tabs working. ✔ No spacing issues. ✔ All forms validated. ✔ Cross-browser tested (Chrome, Firefox, Safari, Edge). ✔ Accessibility tested (keyboard navigation). ✔ Images optimized with alt text.
