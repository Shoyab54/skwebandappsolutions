# SK Web & App Solutions — Portfolio Landing Page

## Original Problem Statement
Adapt a detailed 3D-creator portfolio landing-page spec (dark #0C0C0C theme, Kanit font, Framer Motion animations) into a company site for **SK WEB & APP Solutions**, with phone +91 7900002740, email skwebandappsolutions@gmail.com, client projects (deeplakshmi.com, kksolution.co.in, skinterior.co.in, ecoluxury.co.in, skengineeringworks.org + others), and a self-designed luxury/premium logo.

## Architecture
- Frontend-only single page: Vite + React 19 + TypeScript + Tailwind v4 + motion (framer-motion API via `motion/react`) + lucide-react.
- Font: `@fontsource/kanit` (weights 300–900), bundled at build.
- Backend: template FastAPI untouched (only `/api/status` probe exists; page is fully static and works with no backend).
- Sections in `frontend/src/sections/`: Hero, Marquee, About, Services, Projects, Contact. Reusables in `frontend/src/components/`: FadeIn, Magnet, AnimatedText, ContactButton, LiveProjectButton.
- Assets in `frontend/public/`: `brand/` (AI-generated gold SK monogram logo, hero sculpture, 4 decorative 3D objects on black, blended via `mix-blend-mode: screen` + radial mask), `projects/` (real Playwright screenshots of the 5 client websites).

## User Personas
- Prospective clients (business owners) browsing services and past work, contacting via phone/email/WhatsApp.
- Referral visitors checking credibility via live project links.

## Core Requirements (static)
- Dark luxury theme, Kanit, gradient `.hero-heading` text, smooth scroll-driven animations.
- Hero with navbar, massive "SK WEB & APP" heading, magnetic hero visual, tagline, Contact Me gradient pill.
- Scroll-reactive dual-row marquee of website preview GIFs (user-provided external URLs).
- About with 4 floating decorative 3D objects + character-by-character scroll-reveal paragraph.
- White Services section (5 offerings) with huge numerals.
- Sticky-stacking project cards with real client-site screenshots + Live Project links, ending in a "Your Project Next" CTA card.
- Contact section: phone, email, WhatsApp links + footer.

## Implemented (2026-10-06)
- Full landing page per spec, rebranded to SK Web & App Solutions with original copy.
- Custom luxury gold SK monogram logo + 5 gold 3D brand visuals (AI-generated, locally hosted).
- Real screenshots of all 5 client websites embedded in project cards.
- Contact links: tel:+917900002740, mailto:skwebandappsolutions@gmail.com, wa.me/917900002740.
- Verified: `yarn typecheck` clean, public URL 200, `/api/status` 200, desktop + mobile screenshot pass.

## Backlog
- P0: None blocking.
- P1: Custom favicon from SK logo; contact form that emails enquiries (Resend integration); OG/social share meta image.
- P2: Individual project case-study pages; testimonials section; loading performance pass (compress project PNGs to WebP).

## Next Tasks
- Add enquiry form with email delivery.
- Optimize project screenshots (~6MB total) to WebP.
- Add more client projects as the portfolio grows.
