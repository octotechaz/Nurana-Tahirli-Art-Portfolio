# Nurana th — Design System

Simple personal art portfolio for illustrator "Nurana th" (`nurana.art`).
Tone: warm pastel gallery, quiet confidence, art-first. Breathing whitespace. Interface never competes with artwork.

## Atmosphere

- Density: Art Gallery Airy
- Motion: restrained micro-interactions only (150–250ms)
- Feel: friendly, orderly, calm — quieter than arikabooboo.com
- Not a SaaS product, marketing site, or CMS-forward UI on public pages

## Color

| Role | Hex | Use |
| --- | --- | --- |
| Primary | `#E07A5F` Soft Terracotta | CTA, active link |
| Secondary | `#81B29A` Sage Green | Tags, soft cues |
| Accent | `#F2CC8F` Warm Ochre | Hover highlight |
| Background | `#FDFBF7` Warm Cream | Page |
| Surface | `#F4F1DE` Soft Almond | Cards |
| Text | `#2B2D42` Dark Slate | Headings/body |
| Text muted | `#6C757D` | Meta |
| Border | `#E9ECEF` | Hairlines |

Banned: neon, purple glow, pure black, dense chrome, heavy shadows.

## Type

- Headings: Plus Jakarta Sans
- Body: DM Sans
- Meta/tags: JetBrains Mono 12px uppercase

Hero display ~48px; H1 36; body 16–18; generous line-height 1.6.

## Layout

- 8pt spacing: 8 / 16 / 24 / 32 / 48 / 64 / 96
- Desktop max-width ~1200px; lots of empty air
- Homepage first viewport: logo/nav + short bio + one CTA + one illustration only; category cards below
- No stats strips, promo chips, footer marketing, or CMS hints on public home

## Components

- Primary button: terracotta pill, white text, padding 14×28
- Secondary: almond pill
- Inputs: white, 12px radius, terracotta focus ring
- Category cards: almond, 20px radius, light hover scale
- Project thumbs: 16px radius; hover shows title overlay
- Header: sticky frosted cream blur; logo left; Categories / About / Contact + EN|AZ right

## Pages in scope

1. Home — sparse welcome + 3 category cards
2. Category — breadcrumb, pill subcategory tabs, 3-col gallery
3. Case study — banner, thin metadata, short story, WIP, vertical finals, Next
4. About + Contact — bio + social icon cards + simple form
5. Admin preview — one minimal login or light dashboard (not a full suite)
6. Mobile home — same sparse hierarchy, drawer nav

## Anti-patterns

- Overbuilt homepage sections
- Merging CMS into public marketing chrome
- Aggressive animation / scroll-jack
- Clutter that shadows the art
