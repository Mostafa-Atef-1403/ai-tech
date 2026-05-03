# Ai Tech — Website

Industrial B2B website for Ai Tech — General Supplies, Electrical Maintenance & Mobile Tower Maintenance.

Built with **Next.js 14 + TypeScript + Tailwind CSS**

---

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Google Fonts (Bebas Neue + DM Sans + Noto Kufi Arabic)

---

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        ← Root layout, metadata, fonts
│   └── page.tsx          ← Home page (assembles all sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    ← Fixed navbar, mobile menu, lang toggle
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx      ← Full-screen hero with animations
│   │   ├── Services.tsx  ← 3 service cards
│   │   ├── About.tsx     ← Company story + values
│   │   ├── WhyUs.tsx     ← 4 key differentiators
│   │   └── Contact.tsx   ← Form + contact info
│   └── ui/
│       ├── Button.tsx
│       ├── SectionLabel.tsx
│       └── ServiceCard.tsx
├── lib/
│   ├── i18n/
│   │   ├── en.ts         ← English copy
│   │   ├── ar.ts         ← Arabic copy
│   │   └── context.tsx   ← Language toggle context + hook
│   └── useReveal.ts      ← Scroll reveal animation hook
└── styles/
    └── globals.css       ← Fonts, CSS vars, utilities
```

---

## Customization

### Colors
All colors are in `tailwind.config.ts` and `globals.css` CSS variables:
- `--gold` → `#C9A84C`
- `--dark` → `#0a0a0a`
- `--offwhite` → `#F0EAD6`

### Content (text copy)
All text is in `src/lib/i18n/en.ts` (English) and `src/lib/i18n/ar.ts` (Arabic).
Edit those files to update any text on the site.

### Contact Info
In both `en.ts` and `ar.ts`, update the `contact.info` object:
```ts
info: {
  phone: '+20 xxx xxx xxxx',   // ← replace
  email: 'contact@aitech.eg',  // ← replace
  location: 'Cairo, Egypt',    // ← replace
}
```

### Contact Form (wire up)
The form in `Contact.tsx` has a `handleSubmit` function with a TODO comment.
Options:
- **EmailJS** (recommended, no backend needed): https://www.emailjs.com
- **Next.js API Route**: create `src/app/api/contact/route.ts`

---

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect the repo on vercel.com.

---

## Logo Files
Place in `/public/`:
- `Ai_Tech_Logo.jpeg` → used in Navbar
- `ico.jpeg` → used as favicon
