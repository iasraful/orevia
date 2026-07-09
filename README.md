# ORÉVIA — Quiet Luxury Womenswear Maison

A premium, pixel-perfect clone of the ORÉVIA womenswear clothing website, designed in Sydney with a Parisian sense of restraint. This project is built using a custom vanilla CSS design system and Next.js App Router.

## 🔗 Live Site
Explore the live deployment here: **[https://orevia-tau.vercel.app/](https://orevia-tau.vercel.app/)**

---

## ⚜️ Design Philosophy & Aesthetics
Replicated directly from the live maison platform:
- **Quiet Luxury Typography**: High-contrast heading combinations using `Didot`, `Bodoni 72` (escaped as `Bodoni\ 72`), and `Georgia` paired with the clean sans-serif line of `Avenir Next` and `Segoe UI` for the copy.
- **Atmospheric Palette**: A warm, high-end neutral background blend of ivory (`#fffaf2`), champagne gold (`#a9875d`), soft charcoal espresso (`#45372f`), and oxblood/burgundy accents, layered with a subtle grid grain pattern overlay.
- **Dynamic Micro-Interactions**: Smooth backdrop-filter blur headers, slide-in drawers, fade-up scale transitions, and marquee text banners.

---

## ⚡ Features Implemented

1. **Homepage**:
   - Dynamic mp4 video hero background with meta launch details panel.
   - Infinite horizontal scrolling marquee bar displaying maison design principles.
   - Section-by-section layouts (Atelier standards, lookbook grid, client care, and proof points).
2. **Shop & New Arrivals (`/shop`)**:
   - Four-column card grid populated from the `data/products.json` data layer.
   - Live query filter (`?sort=new`) for new arrivals.
   - Multi-badge tags (`NEW`/`LOVED`), product kicker info, price, and hand-finished atelier specifications.
3. **Collections Page (`/collections`)**:
   - Capsule edits: **The Atelier Edit**, **Enduring Essentials**, and **Evening**.
   - Split 50/50 horizontal layouts linking to specific products within the capsule.
4. **About Page (`/about-orevia`)**:
   - Editorial showcase layout outlining ORÉVIA design pillars: *Restraint over excess*, *Material before ornament*, and *Presence without noise*.
5. **Contact Page (`/contact`)**:
   - Direct correspondence links for fittings and availability requests, with an integrated waitlist subscription.
6. **Product Detail Route (`/products/[slug]`)**:
   - Multi-column detail page rendering pricing, custom descriptions, detailed product facts (fit, care, materials, finish), and related items matching the item rhythm.
7. **Collection Search Overlay**:
   - Instant search modal filtering items dynamically by query terms, materials, or category kicker, with quick-link tags.
8. **Interactive Bag Drawer & Checkout (`/cart`)**:
   - Slide-out drawer with subtotal sum updates, quantity controls, and delete actions.
   - Context-free state persistence using LocalStorage and browser CustomEvents to sync cart state between header drawers and the checkout page.
   - Full checkout reservation page with customer detail forms producing unique order references.

---

## 🛠️ Technology Stack
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **State Management**: LocalStorage, React state, Custom DOM Events
- **Styling**: Vanilla CSS (zero Tailwind, styled with custom variables in `app/globals.css`)
- **Data Layer**: Static JSON (`data/products.json`)

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository and install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
# or
node node_modules/next/dist/bin/next dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to inspect the application.

### 3. Build for production
```bash
npm run build
```

---

## 📂 Project Structure
```
├── app/
│   ├── components/
│   │   ├── Header.tsx        # Sticky navigation, search modal, cart drawer
│   │   ├── Footer.tsx        # Footnotes & waitlist newsletter
│   │   ├── ProductCard.tsx   # Catalog display cards with "Add to Private Edit"
│   │   └── WaitlistForm.tsx  # Dynamic waitlist subscription success handler
│   ├── about-orevia/         # About / Brand story route
│   ├── collections/          # Capsule edits route
│   ├── contact/              # Correspondence route
│   ├── cart/                 # Checkout & order placement route
│   ├── products/[slug]/      # Dynamic details route
│   ├── globals.css           # Premium vanilla CSS styling system
│   ├── layout.tsx            # Global layout, SEO metatags, structured JSON-LD
│   └── page.tsx              # 12-section Homepage markup
├── data/
│   └── products.json         # Static catalog dataset
└── public/                   # Media, editorial images, and hero video
```
