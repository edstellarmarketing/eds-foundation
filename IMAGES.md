# Image Requirements — Edstellar Foundation

Inventory of every image slot on the page, with rendered dimensions, recommended source resolution (2× for retina), aspect ratios, and intent.

## Summary

| # needed | Section            | Slot                         | Display size (desktop) | Source size (min)  | Aspect      | Format |
|---------:|--------------------|------------------------------|------------------------|--------------------|-------------|--------|
| 1        | Nav + Footer       | Edstellar logo               | h: 32px (nav) / 24px (footer), width auto | SVG (any) or 280×80 PNG | ~3.5:1     | **SVG** preferred |
| 1 (opt.) | Hero               | Hero image (right half)      | ~720 × 470 px          | 1600 × 1100 px     | ~3:2        | JPG / WebP |
| 2        | Our Work           | Card image (top)             | 626 × 260 px           | 1400 × 600 px      | ~2.4:1      | JPG / WebP |
| 6        | Pillars            | Card image (right of card)   | ~200 × 240 px          | 600 × 720 px       | ~5:6 portrait | JPG / WebP |
| 6        | Courses (categories) | Category card image (top)  | 280 × 160 px           | 800 × 460 px       | ~7:4        | JPG / WebP |
| 22       | Courses (individual) | Course card image (top)    | 280 × 160 px           | 800 × 460 px       | ~7:4        | JPG / WebP |
| —        | Partner            | (Uses inline SVG illustration, no raster image needed) | — | — | — | — |

**Total raster images:**
- **Minimum to launch: 9 images + 1 logo SVG** (reuse 6 Pillar images for all 22 courses + 6 category cards; skip Hero)
- **Recommended: 15 images + 1 logo SVG** (Pillars + 2 Our Work + 6 Course category landscape crops + Hero)
- **Maximum (unique per course): 37 images + 1 logo SVG** (Pillars 6 + Our Work 2 + Hero 1 + Category landscape 6 + 22 unique course images)

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

Each card in the courses carousel has a landscape image at the top. The carousel renders **6 category cards** on the "All Courses" pill and **22 individual course cards** across the other pills.

| Property | Value |
|---|---|
| Files needed | **6 category** + **22 course** (28 total for unique-per-course, or 6 if reusing the category image) |
| Display size | 280 × 160 px (fixed card width) |
| Recommended source size | **800 × 460 px minimum** |
| Aspect ratio | ~7:4 landscape |
| Format | JPG or WebP |

### Three sourcing options

| Option | Images | Tradeoff |
|--------|-------:|----------|
| **Budget** | 6 (one per category, reused across all courses inside) | Cheap, fast, but every Digital Literacy course shows the same photo |
| **Recommended** | 28 (6 categories + 22 unique courses) | Each course card is visually distinct, helps users skim and pick |
| **Reuse Pillars** | 0 new (crop `pillars/*.jpg` to landscape) | Free, ships immediately, only 6 distinct images across 28 cards |

### 5a. Category cards (6 images)

Used on the "All Courses" pill. Subjects mirror the Pillars (categories overlap exactly), so the existing `pillars/*.jpg` files cropped to ~7:4 landscape work for this slot.

| Category | Image subject |
|----------|---------------|
| Financial Empowerment | Woman counting rupee notes at a kitchen table with an SHG passbook beside |
| Digital Literacy & Technology | Two women sharing a laptop, focused on the screen, simple home interior |
| Online Safety | Hands holding a smartphone, a shield or lock graphic subtly overlaid on the screen |
| Employability & Workplace Skills | Young Indian woman in a formal kurta sitting across from an interviewer, resume in hand |
| Entrepreneurship & Income Generation | Tailor at a sewing machine in a small home unit, finished garments hanging behind |
| Career Guidance | Class 11 student in uniform with a counsellor pointing at a career roadmap on paper |

### 5b. Individual course cards (22 images)

Each course gets its own image idea below. All subjects assume Indian context, natural lighting, real (non-stock-looking) settings, learner-focused composition.

#### Financial Empowerment (4 courses)

| # | Course | Image idea |
|---|--------|------------|
| 1 | Financial Literacy for Women | Five rural women seated cross-legged in a circle, one writing in a budget notebook, a steel coin jar in the centre |
| 2 | Banking & Digital Payments | Close-up of a woman scanning a UPI QR code at a vegetable stall with her smartphone, folded notes in her other hand |
| 3 | Understanding Debt & Credit | Open bank passbook on a wooden table, a finger tracing a row, calculator and pen alongside |
| 4 | Government Schemes & Benefits | Hand holding an Aadhaar card and a printed scheme form, a CSC (Common Service Centre) counter blurred in the background |

#### Digital Literacy & Technology (7 courses)

| # | Course | Image idea |
|---|--------|------------|
| 1 | Canva for Everyone | Laptop screen showing a bright Canva poster mid-design, a young woman's hands on the trackpad |
| 2 | Google & Internet for Daily Life | Older man on a charpai being shown a Google search bar on a smartphone by a younger relative |
| 3 | WhatsApp for Personal & Business Use | Smartphone displaying a WhatsApp Business catalog of saree photos, fabric swatches around it |
| 4 | Government Apps & Online Services | Phone screen showing DigiLocker or UMANG app, person tapping it at a community centre desk |
| 5 | Basic Computer Skills & MS Office | Two students in school uniform at a shared desktop, one typing in MS Word, the other watching |
| 6 | Google Sheets & Data Basics | Laptop on a wooden table showing a Google Sheets inventory tracker, a handwritten ledger book beside |
| 7 | AI Tools for Everyday Life | Smartphone held in hand showing a chat interface with a typed question, a notebook with sketches nearby |

#### Online Safety (3 courses)

| # | Course | Image idea |
|---|--------|------------|
| 1 | Online Safety for Teens (Class 8 to 12) | Class 9 student on a phone in a school corridor, parent or teacher gently glancing over, padlock motif on the screen |
| 2 | Cybersecurity for Women | Woman holding a smartphone showing a blurred OTP message, raised palm gesture suggesting "do not share" |
| 3 | Spotting Scams & Digital Fraud | Elderly woman holding a phone displaying a suspicious SMS, a younger family member pointing at a warning icon |

#### Employability & Workplace Skills (4 courses)

| # | Course | Image idea |
|---|--------|------------|
| 1 | Spoken English for Workplace | Group of trainees seated in a semicircle, instructor at a whiteboard with conversational English phrases |
| 2 | Customer Service & Communication | Young woman wearing a headset at a small call centre style desk, smiling, monitor showing a call script |
| 3 | Interview Skills & Resume Building | Mock interview setup at a community centre, a trainee in a formal shirt handing over a printed resume |
| 4 | Professional Workplace Etiquette | Trainee group standing in a circle practising handshakes, name tags visible on shirts |

#### Entrepreneurship & Income Generation (3 courses)

| # | Course | Image idea |
|---|--------|------------|
| 1 | Starting Your Micro-Business | Woman tailor at her sewing machine in a small home-based unit, finished blouses on a hanger behind |
| 2 | Digital Marketing for Small Businesses | Smartphone propped on a small tripod taking a top-down photo of a homemade pickle jar, soft ring light |
| 3 | Basic Bookkeeping for Small Businesses | Shopkeeper at a kirana store counter writing in a ledger book, calculator and bill pad visible |

#### Career Guidance (1 course)

| # | Course | Image idea |
|---|--------|------------|
| 1 | Career Planning for Class 10 to 12 Students | School counsellor and a Class 11 student in uniform reviewing a printed career roadmap together |

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
    └── courses/                  # Optional, landscape crops if you don't want to reuse pillars/
        ├── categories/            # 6 category cards (shown on "All Courses" pill)
        │   ├── financial.jpg
        │   ├── digital.jpg
        │   ├── safety.jpg
        │   ├── employability.jpg
        │   ├── entrepreneurship.jpg
        │   └── career.jpg
        ├── financial/             # 4 individual course images
        │   ├── financial-literacy-women.jpg
        │   ├── banking-digital-payments.jpg
        │   ├── debt-credit.jpg
        │   └── government-schemes.jpg
        ├── digital/               # 7 individual course images
        │   ├── canva.jpg
        │   ├── google-internet.jpg
        │   ├── whatsapp-business.jpg
        │   ├── govt-apps.jpg
        │   ├── computer-ms-office.jpg
        │   ├── google-sheets.jpg
        │   └── ai-tools.jpg
        ├── safety/                # 3 individual course images
        │   ├── teens-safety.jpg
        │   ├── cybersecurity-women.jpg
        │   └── scam-spotting.jpg
        ├── employability/         # 4 individual course images
        │   ├── spoken-english.jpg
        │   ├── customer-service.jpg
        │   ├── interview-resume.jpg
        │   └── workplace-etiquette.jpg
        ├── entrepreneurship/      # 3 individual course images
        │   ├── micro-business.jpg
        │   ├── digital-marketing.jpg
        │   └── bookkeeping.jpg
        └── career/                # 1 individual course image
            └── career-planning-students.jpg
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

If you're sourcing photos fresh, prioritize in this order:

1. **Pillars (6 portrait images)**, most impactful, and the landscape crop doubles as the 6 category card images
2. **Our Work (2 landscape images)**, needed for the first content section after hero
3. **Hero (1 image)**, sets the tone of the entire site
4. **Logo**, usually already exists as brand asset, provide white-on-transparent SVG if possible
5. **Individual course images (22)**, the big lift, do this last and stage by category. Start with the two largest categories (Digital Literacy: 7 courses, Financial Empowerment: 4 courses) since they dominate the carousel.

Launch tiers:
- **Tier 1 minimum: 9 images + 1 logo SVG** (Pillars reused for both category cards and all 22 course cards, skip Hero)
- **Tier 2 polished: 15 images + 1 logo SVG** (Pillars + Our Work + Hero + 6 dedicated landscape category crops)
- **Tier 3 fully unique: 37 images + 1 logo SVG** (everything above + 22 unique course card images)
