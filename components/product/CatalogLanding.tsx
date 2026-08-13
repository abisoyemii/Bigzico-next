import { ProductGrid } from '@/components/ProductGrid';
import type { Product } from '@/lib/mock-data';
import { products } from '@/lib/mock-data';

function buildShowcaseProducts(items: Product[]) {
  if (items.length === 0) return [];
  return Array.from({ length: 100 }, (_, index) => items[index % items.length]);
}

export function CatalogLanding({ title, slug, description }: { title: string; slug?: string; description?: string }) {
  const visibleProducts = slug ? products.filter((product) => product.categorySlug === slug) : products;
  const displayProducts = buildShowcaseProducts(visibleProducts);

  return (
    <main className="page-transition mx-auto max-w-7xl px-4 py-12">
      <div className="rounded-3xl bg-gradient-to-r from-brand-primary to-teal-800 px-6 py-12 text-white sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">BIGZICO shop</p>
        <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-gray-200">{description ?? 'Genuine appliances, dependable warranties, and fast delivery across Nigeria.'}</p>
      </div>

      <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">Featured selection</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Browse {displayProducts.length} products</h2>
          </div>
          <p className="text-sm text-slate-500">Curated for easy browsing and a product showcase feel.</p>
        </div>
        <ProductGrid products={displayProducts} />
      </div>
    </main>
  );
}