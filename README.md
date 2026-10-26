# Khemzy Studios — Luxury Photography & Visual Storytelling

A bespoke, high-performance photography studio website built on **Astro 6**, **TypeScript**, and a custom **Luxury Motion System** with zero runtime framework overhead.

---

## 🌟 Overview & Highlights

Khemzy Studios documents weddings, personal branding portraits, high-fashion lookbooks, and commercial campaigns across Lagos, Nigeria, and destination venues worldwide.

- **Ultra-Fast Static Site Generation (SSG):** Built with Astro 6 for near-instant Time to First Byte (TTFB) and perfect Lighthouse scores.
- **Custom Luxury Motion System:** Slide-ups, slide-downs, slide-left/right, staggered grid card reveals, smooth scroll anchors, interactive FAQ accordions, and a real-time scroll progress bar.
- **Interactive Portfolio Gallery:** Real-time client-side category filtering ("All", "Weddings", "Portraits", "Fashion", "Commercial", "Events") synchronized with URL query parameters.
- **End-to-End Booking Funnel:** Interactive booking form with multi-field client-side validation, instant feedback, and one-click direct transfer to WhatsApp inquiry.
- **Complete SEO & Structured Data:** Pre-configured `@astrojs/sitemap`, Schema.org `ProfessionalService` JSON-LD, OpenGraph & Twitter meta tags, and robots.txt.
- **Strict TypeScript Architecture:** Centralized data models (`Project`, `Service`, `PricingPackage`, `Testimonial`, `FAQItem`) in `src/types/` ensuring type safety across the entire application.

---

## 📁 Architecture & Code Organization

```
khemzy-studios/
├── public/
│   ├── favicon.svg             # Crisp vector studio favicon
│   ├── manifest.webmanifest    # PWA web manifest
│   ├── robots.txt              # Search engine directives & sitemap reference
│   └── images/                 # OpenGraph & social sharing banner
├── src/
│   ├── components/
│   │   ├── booking/            # BookingForm component with live validation & WhatsApp
│   │   ├── home/               # Modular homepage sections (Hero, FeaturedWork, etc.)
│   │   ├── layout/             # Header, Footer, and responsive drawer navigation
│   │   ├── portfolio/          # PortfolioFilters, PortfolioGrid, ProjectCard
│   │   ├── services/           # ServiceCard with specs & deliverables
│   │   └── ui/                 # Reusable Button, SectionHeading, and SVG Icon components
│   ├── data/                   # Typed single sources of truth (site, portfolio, services, pricing, faqs)
│   ├── layouts/                # BaseLayout with SEO & JSON-LD
│   ├── lib/                    # Validation, portfolio queries, and currency formatting
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── about.astro         # Studio story, founder philosophy, & pillars
│   │   ├── booking.astro       # Dedicated booking & consultation page
│   │   ├── contact.astro       # Direct contact channels, studio address & message form
│   │   ├── pricing.astro       # Transparent package tiers & a la carte add-ons
│   │   ├── privacy.astro       # Client confidentiality & data terms
│   │   ├── terms.astro         # Booking retainers, copyright & moral rights
│   │   ├── 404.astro           # Custom editorial not-found page
│   │   └── portfolio/
│   │       ├── index.astro     # Interactive filterable portfolio gallery
│   │       └── [slug].astro    # Dynamic editorial project case studies
│   ├── scripts/
│   │   └── motion.js           # Client-side motion controller & observer engine
│   ├── styles/
│   │   ├── global.css          # Design system tokens, typography, & layouts
│   │   └── motion.css          # Keyframes, reveal classes, card hover states
│   └── types/                  # Core TypeScript interfaces
├── astro.config.mjs            # Astro configuration with sitemap integration
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+` (v20+ recommended)
- `pnpm` (or `npm`)

### Installation & Development

```bash
# Install dependencies
pnpm install

# Start local development server
pnpm dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### Typecheck & Production Build

```bash
# Run Astro TypeScript diagnostics
pnpm check

# Create production static build
pnpm build

# Preview production build locally
pnpm preview
```

---

## 🎨 Design System Tokens

| Token | Value | Purpose |
| :--- | :--- | :--- |
| `--color-ink` | `#101411` | Primary luxury background & dark accents |
| `--color-gold` | `#c7a76c` | Metallic gold brand accents & highlights |
| `--color-gold-light` | `#dfc79b` | Sub-labels, badges, and hover glows |
| `--color-paper` | `#f4f0e7` | Warm, editorial editorial paper backdrop |
| `--font-display` | `Playfair Display` | Editorial serif headings |
| `--font-body` | `DM Sans` | Modern, clean geometric sans-serif body |

---

## 🛡️ License

Copyright © 2026 Khemzy Studios Ltd. All rights reserved.
