# ENFUNA website

Responsive marketing website built in the existing React + TypeScript + Vite scaffold with Tailwind CSS v4 and its official Vite plugin.

## Development

- `npm install`
- `npm run dev`
- `npm run build` creates the production site in `dist/`.
- `npm run preview` serves the production build.

## Pages

Home, About, How It Works, Who We Serve, Features, Business Records, Payments & Wallet, Become Fundable, Partners & Ecosystem, Help / FAQ, Get Started and Login. Hash routes work on static hosting without server rewrite rules. Payments and Partners are available in the footer.

The supplied website mockups guide the colours, typography, layouts, content and photography. `ENFUNA Business Flow Mockup-3.png` is intentionally excluded. Images are optimized WebP derivatives; original references remain in `UI-MOCKUPS`.

FAQ search, category filters, answer expansion, mobile navigation, device selection and preview balance visibility work locally. Phone screens are presentation previews, not account data. Authentication, wallet transactions and support services are not connected. Official App Store and Google Play links must be supplied before download buttons can go live. No credentials or personal information are collected.

Brand colours are defined in the CSS-first `@theme` in `src/index.css`. Page content lives in `src/content.ts`. Fonts use Google Fonts with system fallbacks.
