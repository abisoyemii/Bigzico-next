# BigZico Next.js Rebuild Architecture

## 1. Why the old architecture was not scalable

The existing BigZico site was built as a collection of static HTML pages such as freezer.html, microwave.html, television.html, and similar files. That approach worked for a small catalog, but it creates several problems as the business grows:

- Each product category needs a separate page manually, which is hard to maintain.
- Product data is embedded in markup instead of living in a database.
- There is no single source of truth for products, categories, orders, customers, and inventory.
- The UI and business logic are tightly coupled, making future changes expensive.
- Search, filtering, reviews, wishlist, cart persistence, and admin operations are difficult to implement consistently.

## 2. New architecture direction

The rebuild should move from static pages to a database-driven e-commerce platform.

### Core principles

- Product pages should be generated dynamically from PostgreSQL via /products/[slug].
- Shared layout and UI components should be reused across all pages.
- API routes should manage data access for products, categories, orders, auth, and admin actions.
- Prisma should be the single ORM layer for database access.
- Authentication should be centralized through NextAuth/Auth.js.
- Images should be uploaded to Cloudinary and stored as public URLs.

## 3. Recommended project structure

```text
bigzico-next/
├─ app/
│  ├─ (public)/
│  │  ├─ page.tsx
│  │  ├─ products/page.tsx
│  │  ├─ products/[slug]/page.tsx
│  │  ├─ categories/[slug]/page.tsx
│  │  ├─ cart/page.tsx
│  │  ├─ checkout/page.tsx
│  │  ├─ account/page.tsx
│  │  ├─ wishlist/page.tsx
│  │  └─ search/page.tsx
│  ├─ admin/
│  │  ├─ page.tsx
│  │  ├─ products/page.tsx
│  │  ├─ orders/page.tsx
│  │  └─ users/page.tsx
│  ├─ api/
│  │  ├─ auth/[...nextauth]/route.ts
│  │  ├─ products/route.ts
│  │  ├─ categories/route.ts
│  │  ├─ orders/route.ts
│  │  └─ payments/route.ts
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ not-found.tsx
├─ components/
│  ├─ layout/
│  │  ├─ Navbar.tsx
│  │  └─ Footer.tsx
│  ├─ products/
│  │  ├─ ProductCard.tsx
│  │  ├─ ProductGrid.tsx
│  │  └─ ProductFilters.tsx
│  └─ admin/
│     └─ AdminSidebar.tsx
├─ lib/
│  ├─ auth.ts
│  ├─ prisma.ts
│  ├─ cloudinary.ts
│  └─ payments.ts
├─ prisma/
│  ├─ schema.prisma
│  └─ seed.ts
├─ types/
│  └─ index.ts
├─ package.json
├─ tsconfig.json
├─ tailwind.config.ts
└─ .env.example
```

## 4. Required pages

### Customer-facing pages

- Homepage: featured products, promotions, categories, trust signals
- Product listing: all products with filters and pagination
- Category pages: dynamic category-based product listing
- Product details: full product information, gallery, price, stock, reviews
- Search: keyword search and advanced filters
- Cart: quantity updates, totals, coupon support
- Checkout: delivery address, payment selection, order summary
- Account: profile, order history, address management
- Wishlist: saved products
- Reviews: public ratings and customer feedback

### Admin pages

- Admin dashboard: sales overview, low-stock alerts, pending orders
- Product management: create, update, and delete products
- Category management: add/update/remove categories
- Order management: view, update status, export orders
- User management: role management, account review
- Inventory management: stock updates and SKU management

## 5. Required components

- Navbar and Footer
- Hero section
- ProductCard
- ProductGrid
- ProductFilters
- CategoryShowcase
- CartSummary
- CheckoutForm
- ReviewForm
- AdminStatsWidget
- DataTable for admin records

## 6. Required API routes

- GET /api/products
- POST /api/products
- GET /api/products/[id]
- GET /api/categories
- POST /api/orders
- GET /api/orders/[id]
- POST /api/auth/[...nextauth]
- POST /api/payments
- GET /api/reviews
- POST /api/reviews

## 7. Required database models

- User
- Category
- Product
- Cart
- CartItem
- Order
- OrderItem
- Payment
- Review
- Wishlist

## 8. Database schema design

The Prisma schema in this folder is the foundation for the new platform.
