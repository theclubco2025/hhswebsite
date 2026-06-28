# Harmony Home Services

Rough-draft homepage for Harmony Home Services (owner: Blake Winn). Built with Next.js 15, Tailwind CSS, and Framer Motion. Lead form backend reuses the Sullivan's Exterior email-lead pattern (Resend).

## Setup

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY, EMAIL_FROM, EMAIL_TO
npm run dev
```

## Known placeholders (for Blake to replace)

- Hero background image ("HERO PROPERTY IMAGE")
- About section bio copy + headshot ("BLAKE PHOTO PLACEHOLDER")
- Before/After gallery images
- Customer review quotes + names
- Logo file (the official Harmony logo was provided as an image — drop it into `public/logo.png` and swap the text logo in `components/Nav.tsx` for an `<Image>` once added)

## Stack

- Next.js 15 (App Router)
- Tailwind CSS
- Framer Motion
- Lucide icons
- Zod + Resend (quote form backend, mirrors the Sullivan's Exterior site)
