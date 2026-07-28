import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { CategoryCard } from '@/components/products/CategoryCard';
import { ProductGrid } from '@/components/products/ProductGrid';
import { cartItems, featuredCategories, featuredProducts } from '@/lib/mock-data';
import { CartItem } from '@/components/cart/CartItem';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar cartCount={cartItems.length} />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Hero
          title="Premium electronics and home appliances for modern Nigerian homes"
          subtitle="Shop refrigerators, air conditioners, kitchen appliances, and more with fast delivery, genuine warranties, and expert support."
          primaryAction={{ label: 'Shop products', href: '/products' }}
          secondaryAction={{ label: 'Explore categories', href: '/categories' }}
        />

        <section className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">Popular categories</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Curated collections for every room</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">Featured products</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Best-selling essentials for your home</h2>
            </div>
          </div>
          <ProductGrid products={featuredProducts} />
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-2xl font-semibold text-white">Your cart preview</h3>
            <div className="mt-6 space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-slate-800 bg-gradient-to-br from-teal-500/15 to-slate-900 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">Why customers choose BigZico</p>
            <ul className="mt-6 space-y-4 text-sm text-slate-300">
              <li>• Genuine products with manufacturer warranty</li>
              <li>• Flexible delivery options across Nigeria</li>
              <li>• Certified installation and after-sales support</li>
              <li>• Secure payments with Paystack and Flutterwave</li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
