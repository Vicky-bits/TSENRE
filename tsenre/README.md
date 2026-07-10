# TSENRE Technologies Limited — Corporate Website

A premium, animated corporate website built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React** icons.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

To build for production:

```bash
npm run build
npm start
```

Requires Node.js 18.18+ (Node 20 LTS recommended).

## Project Structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata, Schema.org JSON-LD
  page.tsx           Homepage — assembles all sections
  globals.css         Design tokens & signature utility classes
  sitemap.ts          Dynamic sitemap.xml
components/
  sections/           Navbar, Hero, About, Stats, Services, WhyChooseUs,
                       QualityPolicy, HSE, Projects, Contact, Footer
  ui/                  Reusable primitives — CountUp, ScrollProgress,
                       ScrollToTopButton, WhatsAppButton, LoadingScreen,
                       SectionHeading
lib/
  data.ts              Central content file — services, stats, HSE copy,
                       projects, nav links, contact info
public/
  images/              logo.png, hero-industrial.jpg (from your uploads)
```

## Design System

| Token | Value |
|---|---|
| Primary — Ocean Blue | `#0077B6` |
| Accent — Orange | `#F97316` |
| Text | `#1F2937` |
| Background | `#F8FAFC` |
| Headings | Poppins |
| Body | Inter |

The design's signature motif is a **blueprint/schematic language** (grid backdrops, coordinate-style eyebrow labels, crosshair corner marks) that echoes the derrick-and-crosshair mark in the TSENRE logo, tying the visual identity back to the brand without relying on generic gradients.

## ⚠️ Placeholder Content Still to Replace

Most company content is now sourced directly from your official corporate profile document (RC number, Mission/Vision/Core Values, Corporate Brief, Quality Policy, HSE policies, and the exact 10 service areas). What's still placeholder:

- **Contact details** — now real: office address, both phone lines, both WhatsApp numbers, and email are wired into the Contact section, Footer, the floating WhatsApp button, and the JSON-LD structured data.
- **`app/layout.tsx`** — `siteUrl` is set to your confirmed domain, `www.tsenretechnologiesltdng.com`. Social media links have been removed (footer and JSON-LD) since none were provided — the footer now links to WhatsApp instead. Add a `sameAs` array back into the JSON-LD and a socials row into the Footer whenever real profiles exist.
- **Contact form** (`components/sections/Contact.tsx`) — currently simulates submission client-side; wire up to an email service (e.g. Resend, SendGrid) or an API route before launch.
- **`STATS`** in `lib/data.ts` — "Years of Experience," "Projects Completed" and "Client Satisfaction %" are still illustrative numbers; swap in real figures when you have them.
- **Project gallery titles/categories** in `PROJECTS` — written from your folder names; confirm wording matches how TSENRE names these services publicly.

## Grounded in Your Official Corporate Profile

- **`COMPANY_INFO`** and **`MISSION_VISION_VALUES`** (`lib/data.ts`) — RC 7449180, Managing Director Prince Ernest Udoaka, the real Corporate Brief, Vision Statement, Mission Statement and Core Values (Professionalism, Innovation, Team Work, Standard), shown in the About section.
- **`SERVICES`** — rewritten to match your official "Areas of Operation" (10 items) with real detail (tank calibration, hydro testing, hull thickness gauging, OCTG inspection, training programs, etc.) pulled from the Corporate Profile page.
- **Quality Policy section** — now shows your actual signed policy statement, attributed to Prince Ernest Udoaka, plus verified badges: ISO 9001:2015, ASNT, British Safety Council membership, and your RC number (in place of the earlier illustrative API/ASME badges).
- **HSE section** — pillar bullet points and the closing pull-quote ("If you believe a job cannot be done safely, it shall not be started or continued.") are drawn from your real Emergency Response, Drug & Alcohol, and HSE Community policies.
- **Footer & structured data (`app/layout.tsx` JSON-LD)** — RC number and Managing Director now included for SEO/schema purposes.

One thing I did **not** add: the organizational chart from your profile (Managing Director → Operations/Admin/QA managers → field roles) and the ASNT/British Safety Council/other logo marks. I only had those as flattened images inside your PDF pages, not as clean standalone files — if you can send the actual logo PNGs (transparent background, ideally) and confirm whether you'd like an org-chart section, I'll add both.

## Notes on Assets

- `public/images/logo.png` and `public/images/hero-industrial.jpg` are the brand assets you originally provided; they power the hero, about, and footer.
- `public/images/projects/` contains your real field photography and video, organized into 13 project folders (one per category you sent): Barge Calibration, Calibration & Hydrotest, Crane Inspection, Crane & Valve Maintenance, Foundation Test for Vertical Tanks, Vessel Tank Inspection & Calibration, Land Rig Inspection, LPG Tank Inspection, Non-Destructive Testing (MPI), Pipeline Inspection, Rig Survey & Wire Rope Inspection, Tank Calibration, and Turbine Meter Calibration.
- Two folders (`barge-calibration`, `ndt-mpi`) include an on-site video alongside a photo. Videos were re-encoded (H.264, faststart) for smoother web playback, and a poster frame was auto-extracted for each so the gallery card shows a still image until the visitor opens it.
- The gallery lightbox (`components/sections/Projects.tsx`) supports multiple images/video per project — a thumbnail strip appears under the main viewer whenever a project has more than one item, and a play icon badges any card containing video.
- Your **"Our team"** and **"Our partners"** photos now sit side-by-side as a two-column banner beneath the Mission/Vision/Values cards in the About section.
- `lib/data.ts` defines each project as a `media: []` array of `{ type: "image" | "video", src, poster? }` — add more items to any project's array, or duplicate an entry to add a new project folder, by dropping files into `public/images/projects/<slug>/` and updating the array.

## Performance & Accessibility

- All images use `next/image` for automatic optimization, lazy-loading and responsive sizing.
- Fonts are loaded via `next/font/google` (self-hosted, zero layout shift).
- `prefers-reduced-motion` is respected globally in `app/globals.css`.
- Semantic landmarks, `aria-label`s on icon-only buttons, and visible focus states are included throughout.
