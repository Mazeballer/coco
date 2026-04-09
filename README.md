# Coco Cado Website

Modern, playful snack brand website built with **Astro + Tailwind v4 + GSAP + Lenis**.

## Tech Stack

| Layer         | Choice                        |
| ------------- | ----------------------------- |
| Framework     | Astro 5                       |
| Styling       | Tailwind CSS v4 (Vite plugin) |
| Animations    | GSAP + ScrollTrigger          |
| Smooth Scroll | Lenis                         |
| Forms/Email   | Web3Forms (free, no backend)  |
| Hosting       | Vercel (free)                 |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.astro       ← sticky nav, mobile menu
│   ├── Footer.astro       ← footer + newsletter form
│   └── ProductCard.astro  ← reusable product card
├── layouts/
│   └── BaseLayout.astro   ← root layout, SEO meta
├── pages/
│   ├── index.astro        ← Home
│   ├── about.astro
│   ├── products.astro
│   ├── ambassadors.astro
│   ├── news.astro
│   ├── where-to-buy.astro
│   ├── distributor.astro
│   ├── contact.astro
│   └── privacy.astro
└── styles/
    └── global.css         ← Tailwind v4 + brand tokens + custom classes

public/
├── images/                ← add product images here
└── favicon.svg
```

---

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:4321

# 3. Production build
npm run build

# 4. Preview production build locally
npm run preview
```

---

## Before Deploying

1. **Web3Forms key** — Replace `YOUR_WEB3FORMS_KEY` in:
   - `src/components/Footer.astro` (newsletter)
   - `src/pages/contact.astro` (inquiry form)
   - `src/pages/distributor.astro` (distributor form)
     Get your free key at https://web3forms.com

2. **Domain** — Update `site` in `astro.config.mjs`:

   ```js
   site: "https://yourclientdomain.com";
   ```

3. **Images** — Add real product images to `public/images/`:
   - `hero-product.png`
   - `product-salted.png`
   - `product-blackpepper.png`
   - `product-tomato.png`
   - `product-popping.png`
   - `brand-lifestyle.jpg`
   - `og-image.jpg` (1200×630px for social sharing)

---

## Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts — it auto-detects Astro
```

Or connect your GitHub repo directly at vercel.com for auto-deploys on every push.
