# ARAC×Whitman Impact Narrative Site

A multi-page impact narrative website for America Reads America Counts (ARAC) at Whitman College. This is a storytelling site backed by evidence—credible, warm, and community-rooted.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (custom theme tokens)
- **Framer Motion** (scroll animations)
- **Recharts** (data visualizations)
- **Radix UI** (accessible accordion)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Site Structure

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, insight strip, spotlight stories |
| `/impact` | Impact overview — reach, delivery, outcomes |
| `/evidence` | Quantitative data + qualitative themes |
| `/stories` | Spotlight stories (filterable by tag) |
| `/stories/[slug]` | Individual story page |
| `/leaders` | For future leaders |
| `/teachers` | For teachers & schools |
| `/methods` | Methods & transparency |

## Data Architecture

All content is data-driven. Edit JSON files in `/data` to update the site without touching UI code:

- `metrics.json` — Insight strip, reach, delivery, subject distribution
- `stories.json` — Spotlight story entries
- `outcomes.json` — Goals met, satisfaction
- `qualitative.json` — Themes and anonymized quotes

## Design Tokens

Colors and typography are defined in `app/globals.css` and extended in `tailwind.config.ts`. Key tokens:

- `--blue-primary` — Headers, CTAs
- `--yellow-accent` — Pull quotes, callout strips
- `--off-white` — Page background
- Fonts: DM Serif Display (headlines), Instrument Sans (body), JetBrains Mono (data)
