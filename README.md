# Sunshine Sips

Premium pastel website and lightweight ecommerce-ready experience for the Sunshine Sips lemonade, drinks, and cozy lifestyle brand.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui source components
- Framer Motion
- Lucide React

## Local Setup

PowerShell script execution is disabled on this machine, so use `npm.cmd` instead of `npm`.

```bash
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm.cmd run lint
npm.cmd run build
```

## Pages

- `/` home page with hero, features, featured favorites, journal preview, and newsletter
- `/recipes` searchable and filterable recipe grid
- `/shop` mock storefront with filters, wishlist toggles, and mock cart state
- `/about` brand story and mission
- `/blog` lifestyle notes
- `/contact` contact form, social links, and FAQ

## Current v1 Scope

This version is intentionally static and frontend-only. No real payments, database writes, or CMS requests are made.

## Future Architecture Notes

### Stripe

Use Stripe Checkout Sessions for a first real payment release. Add a server route that creates checkout sessions from product IDs stored in a trusted backend source, never from client-provided prices.

### Shopify

If Sunshine Sips grows into a product-heavy shop, use Shopify as the product and order backend. Replace mock product data with Storefront API queries and map Shopify variants into the existing `ProductCard` UI.

### Supabase

The provided Supabase project can support newsletter signups, contact submissions, recipe data, product metadata, and admin-only content workflows. Recommended starting tables:

- `newsletter_signups`: email, source, created_at
- `contact_messages`: name, email, message, created_at, status
- `recipes`: title, category, difficulty, prep_time, description, image_url, published

### CMS

For editorial content, add a headless CMS such as Sanity, Contentful, or Supabase-backed admin screens. Keep the current `BlogPost` and `Recipe` types as the frontend contract.

## Deployment

The app is ready for Vercel. Connect the GitHub repo `jdraphael/sunshinesips` to the existing Vercel project and deploy from `main`.
