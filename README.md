# DataNest BD — Official Website

Premium digital agency website for [datanestbd.com](https://www.datanestbd.com).  
Built with **Next.js 15 (static export)** — deployable on any shared hosting via FTP.

---

## Project Structure

```
datanest-bd-website/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (metadata, fonts, JSON-LD)
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles + Tailwind
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── blog/page.tsx
│   ├── case-studies/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── refund-policy/page.tsx
│   ├── terms-conditions/page.tsx
│   └── services/
│       ├── page.tsx
│       ├── whatsapp-api/page.tsx
│       ├── web-development/page.tsx
│       ├── saas-development/page.tsx
│       ├── ai-automation/page.tsx
│       ├── digital-marketing/page.tsx
│       ├── landing-page/page.tsx
│       └── facebook-business/page.tsx
│
├── components/                 # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── FloatingWhatsApp.tsx
│   └── sections/               # Page section blocks
│       ├── Hero.tsx
│       ├── TrustSignals.tsx
│       ├── ServicesSection.tsx
│       ├── WhyChooseUs.tsx
│       ├── ProcessSection.tsx
│       ├── WhatsAppPricing.tsx
│       ├── Testimonials.tsx
│       ├── FAQSection.tsx
│       ├── LeadCapture.tsx
│       └── FinalCTA.tsx
│
├── public/                     # Static assets (uploaded as-is)
│   ├── .htaccess               # Apache config for Hostinger
│   ├── robots.txt
│   ├── sitemap.xml
│   └── [favicon, og-image, etc.]
│
├── next.config.ts              # Static export config
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Tech Stack

| Layer     | Technology                                          |
|-----------|-----------------------------------------------------|
| Framework | Next.js 15 (App Router)                             |
| Language  | TypeScript 5.8                                      |
| Styling   | Tailwind CSS 3 + custom CSS                         |
| Icons     | Lucide React                                        |
| Fonts     | Inter + Poppins (self-hosted via next/font)         |
| Build     | Static HTML/CSS/JS (`output: export`)               |
| Hosting   | Hostinger Shared Hosting                            |

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# Opens at http://localhost:3000
```

---

## Build for Production

```bash
npm run build
```

This generates a fully static site in the **`/out`** folder — pure HTML, CSS, and JS.  
No Node.js server is needed at runtime.

```
out/
├── index.html          → datanestbd.com/
├── about/index.html    → datanestbd.com/about/
├── contact/index.html  → datanestbd.com/contact/
├── services/...
├── _next/              → hashed JS/CSS bundles (auto-cached 1 year)
└── ...
```

---

## Deploy to Hostinger (Step-by-Step)

### Option A — File Manager (Recommended for beginners)

1. Run `npm run build` locally
2. Log in to [hPanel](https://hpanel.hostinger.com)
3. Go to **File Manager** → open `public_html/`
4. Delete old files (or upload into a clean folder)
5. Upload the entire **contents** of the `/out` folder  
   _(not the `out` folder itself — upload what's inside it)_
6. The `.htaccess` file in `public/` is automatically included in the build output.  
   Enable "show hidden files" in File Manager to confirm it uploaded.

### Option B — FTP Upload

```bash
# Build first
npm run build

# Connect via FTP (FileZilla, Cyberduck, etc.)
# Host:     ftp.datanestbd.com  (check Hostinger hPanel for exact FTP hostname)
# User:     your Hostinger FTP username
# Password: your Hostinger FTP password
# Port:     21

# Upload all files from /out/ into /public_html/
```

### Option C — Hostinger Terminal (SSH)

```bash
# On your local machine:
npm run build
zip -r site.zip out/

# Upload site.zip via File Manager, then in Hostinger Terminal:
cd public_html
unzip ~/site.zip
mv out/* .
rm -rf out/ site.zip
```

---

## Critical: .htaccess Must Be Present

After upload, `public_html/` must contain `.htaccess`:

```
public_html/
├── .htaccess         ← REQUIRED (URL routing + security + caching)
├── index.html
├── about/
├── contact/
├── services/
├── _next/
├── robots.txt
└── sitemap.xml
```

> If `.htaccess` is missing, all pages except `/` will return 404.

---

## Contact Form

The contact form submits to the Vercel backend when `NEXT_PUBLIC_API_URL` is configured.
If no backend URL is configured, it falls back to opening WhatsApp with the lead details.

```
Frontend form: components/sections/LeadCapture.tsx
Backend API: backend/api/index.js
```

---

## Optimizations Applied

- Static HTML export — no Node.js at runtime, near-instant TTFB on shared hosting
- Fonts self-hosted via `next/font/google` — no Google Fonts network request at page load
- JS/CSS bundles are content-hashed by Next.js — 1-year browser cache via `.htaccess`
- GZIP compression enabled in `.htaccess`
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.) via `.htaccess`
- Removed entire legacy Vite codebase (see below)

---

## Removed in Cleanup

The following files from a previous Vite-based version were deleted:

| Removed                    | Reason                              |
|----------------------------|-------------------------------------|
| `src/` (entire folder)     | Legacy Vite structure, completely unused |
| `dist/`                    | Old Vite build output               |
| `vite.config.ts`           | Replaced by Next.js                 |
| `index.html` (root)        | Old Vite entry point                |
| `privacy-policy.html`      | Now a proper page at `app/privacy-policy/` |
| `refund-policy.html`       | Now a proper page at `app/refund-policy/`  |
| `terms-conditions.html`    | Now a proper page at `app/terms-conditions/` |
| `cleanup.cjs`              | One-off utility script, no longer needed |
| `replace_colors.cjs`       | One-off utility script, no longer needed |
| `metadata.json`            | Unused file                         |
| `404.html` (root)          | Generated automatically by Next.js build |

---

## Maintenance Notes

- **Adding a page**: Create `app/[page-name]/page.tsx`, rebuild, re-upload `out/[page-name]/`
- **Editing text/copy**: Edit the relevant component in `components/sections/`
- **Changing contact/WhatsApp number**: Search for `8801804277420` across all files
- **Updating pricing**: Edit `components/sections/WhatsAppPricing.tsx`
- **Changing services**: Edit `components/sections/ServicesSection.tsx`
