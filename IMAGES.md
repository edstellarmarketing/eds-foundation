# Image Requirements — Edstellar Foundation

Inventory of every image slot on the page, with rendered dimensions, recommended source resolution (2× for retina), aspect ratios, and intent.

## Summary

| # needed | Section            | Slot                         | Display size (desktop) | Source size (min)  | Aspect      | Format |
|---------:|--------------------|------------------------------|------------------------|--------------------|-------------|--------|
| 1        | Nav + Footer       | Edstellar logo               | h: 32px (nav) / 24px (footer), width auto | SVG (any) or 280×80 PNG | ~3.5:1     | **SVG** preferred |
| 1 (opt.) | Hero               | Hero image (right half)      | ~720 × 470 px          | 1600 × 1100 px     | ~3:2        | JPG / WebP |
| 2        | Our Work           | Card image (top)             | 626 × 260 px           | 1400 × 600 px      | ~2.4:1      | JPG / WebP |
| 6        | Pillars            | Card image (right of card)   | ~200 × 240 px          | 600 × 720 px       | ~5:6 portrait | JPG / WebP |
| 6        | Courses            | Category image (top of card) | 280 × 160 px           | 800 × 460 px       | ~7:4        | JPG / WebP |
| —        | Partner            | (Uses inline SVG illustration — no raster image needed) | — | — | — | — |

**Total raster images required: 15** (or 16 if Hero image is included)
**Plus:** 1 logo SVG (reused in Nav + Footer)

---

## 1. Nav + Footer — Edstellar Logo

| Property | Value |
|---|---|
| Files needed | **1** (a single SVG works for both) |
| Nav render size | `height: 32px`, width auto-scales |
| Footer render size | `height: 24px`, width auto-scales (footer inverts to white via CSS `filter: brightness(0) invert(1)`) |
| Source format | **SVG** (preferred — scales perfectly + small file) |
| Source fallback | 280 × 80 px PNG with transparent background |
| Aspect ratio | ~3.5:1 (landscape wordmark) |
| Current source | `https://cdn.prod.website-files.com/.../edstellar-logo.svg` |

> The footer applies `brightness(0) invert(1)` to render the logo white on dark navy. If you ship a brand-specific reversed logo, swap to that instead.

---

## 2. Hero — Optional Background Image

Currently the hero shows a soft-blue blob + dot pattern + radial spotlight (no image). If a photo is added back, it sits on the right ~50% of the hero, feathered into the cream background via a CSS mask.

| Property | Value |
|---|---|
| Files needed | **1** |
| Display area | ~720 × 470 px at desktop (50% width × 52vh) |
| Recommended source size | **1600 × 1100 px minimum** |
| Aspect ratio | ~3:2 landscape (allows crop) |
| Format | JPG (photo) or WebP |
| Subject placement | Subject should sit slightly **left of center** of the photo so they face the heading text on the left of the hero |
| Mood | CSR / community training / women learning / Indian context |
| Color profile | Should work against cream/light blue backdrop |

---

## 3. Our Work — Two Cards

Each card has a wide landscape image strip at the top.

| Property | Value |
|---|---|
| Files needed | **2** (one per card) |
| Display size | 626 × 260 px (desktop, in 2-col grid) |
| Recommended source size | **1400 × 600 px minimum** (≥2× for retina) |
| Aspect ratio | ~2.4:1 (very wide landscape, almost banner-style) |
| Format | JPG or WebP |

**Suggested subjects:**

| Card | Heading | Image subject |
|------|---------|----------------|
| 1 | *Practical skills for real lives* | Women / youth in a hands-on training session (sewing, computer, financial literacy) |
| 2 | *Training where people already gather* | SHG meeting, community centre, ITI workshop, or village classroom |

---

## 4. Pillars — Six Cards

Each pillar card is a horizontal 2-column layout: content on the left, image on the right (~half the card, portrait orientation).

| Property | Value |
|---|---|
| Files needed | **6** (one per pillar) |
| Display size | ~200 × 240 px (right half of each card) |
| Recommended source size | **600 × 720 px minimum** |
| Aspect ratio | ~5:6 portrait |
| Format | JPG or WebP |

**Mapping (use the existing `/pillars` folder from the original mockup if available):**

| Pillar | Image subject | Existing file (from old static site) |
|--------|----------------|--------------------------------------|
| Financial Empowerment | Woman holding rupee notes / banking / SHG passbook | `pillars/financial.jpg` |
| Digital Literacy & Technology | Hands on a laptop / smartphone training | `pillars/digital.jpg` |
| Online Safety | Person on phone / lock icon overlay / family using internet | `pillars/safety.jpg` |
| Employability & Workplace Skills | Youth in interview / professional handshake / resume on laptop | `pillars/employability.jpg` |
| Entrepreneurship & Income Generation | Small business owner / vendor / tailor / shop | `pillars/entrepreneurship.jpg` |
| Career Guidance | Class 10–12 student / mentor session / career chart | `pillars/career.jpg` |

> The 6 portrait images from the original static `edstellar.html` (`pillars/*.jpg`) can be reused directly. They were sized to fit this exact slot.

---

## 5. Courses — Category & Course Cards

Each card in the courses carousel has a landscape image at the top.

| Property | Value |
|---|---|
| Files needed | **6** (one per category, shared by all courses inside it) |
| Display size | 280 × 160 px (fixed card width) |
| Recommended source size | **800 × 460 px minimum** |
| Aspect ratio | ~7:4 landscape |
| Format | JPG or WebP |

> A single image per category gets reused across:
> 1. The **category card** on the "All Courses" pill
> 2. **All N courses** inside that category when the pill is selected
>
> So the same Digital Literacy & Technology image appears on 1 category card + 7 course cards = 8 places total.

**Subjects:** Same as Pillars (the categories overlap exactly). Can reuse the `pillars/*.jpg` files **cropped to landscape** for this slot.

| Category | Image |
|----------|--------|
| Financial Empowerment | Same as Pillars #1, landscape crop |
| Digital Literacy & Technology | Same as Pillars #2, landscape crop |
| Online Safety | Same as Pillars #3, landscape crop |
| Employability & Workplace Skills | Same as Pillars #4, landscape crop |
| Entrepreneurship & Income Generation | Same as Pillars #5, landscape crop |
| Career Guidance | Same as Pillars #6, landscape crop |

---

## 6. Partner Section — No Raster Image

The illustration card uses an inline SVG (two connected figures with a directional arrow), baked into `Partner.tsx`. **No external image file needed.**

If you want to replace the SVG with a photo:

| Property | Value |
|---|---|
| Display size | 64 × 64 px (icon-sized) |
| Source size | 256 × 256 px |
| Format | SVG preferred, or PNG with transparency |

---

## File Organization

Recommended layout inside the Next.js app:

```
edstellar-app/
└── public/
    ├── logo.svg                  # Nav + Footer
    ├── hero.jpg                  # Hero (optional)
    ├── work/
    │   ├── practical-skills.jpg  # Our Work card 1
    │   └── community-training.jpg # Our Work card 2
    ├── pillars/
    │   ├── financial.jpg         # Pillar + Course (portrait)
    │   ├── digital.jpg
    │   ├── safety.jpg
    │   ├── employability.jpg
    │   ├── entrepreneurship.jpg
    │   └── career.jpg
    └── courses/                  # Optional — landscape crops if you don't want to reuse pillars/
        ├── financial.jpg
        ├── digital.jpg
        ├── safety.jpg
        ├── employability.jpg
        ├── entrepreneurship.jpg
        └── career.jpg
```

---

## Image Optimization Recommendations

1. **Use `next/image`** for all raster images — Next.js will auto-serve WebP/AVIF, generate responsive `srcset`, and lazy-load below the fold.
2. **Source files at 2× display size** for retina/high-DPI screens. Next.js will downsize for smaller viewports automatically.
3. **Compress before commit**: target ≤150 KB per JPG, ≤80 KB per WebP. Use [Squoosh](https://squoosh.app) or [ImageOptim](https://imageoptim.com).
4. **Provide meaningful `alt` text** on every `<img>` / `<Image>` — accessibility + SEO.
5. **Hero image is largest** — consider serving multiple sizes (mobile 800w, tablet 1200w, desktop 1600w).

---

## Quick Order-Of-Operations

If you're sourcing photos fresh, prioritize:

1. **Pillars (6 portrait images)** — most impactful and easiest to reuse for Courses too
2. **Hero (1 image)** — sets the tone of the entire site
3. **Our Work (2 landscape images)** — needed for the first content section after hero
4. **Logo** — usually already exists as brand asset; provide white-on-transparent SVG if possible

Total minimum to launch: **9 images + 1 logo** (Pillars reused for Courses; skip Hero image initially since the design works without it).
