import { ProductGrid } from '@/components/ProductGrid';
import { products } from '@/lib/mock-data';

export function CatalogLanding({ title, slug, description }: { title: string; slug?: string; description?: string }) {
  const visibleProducts = slug ? products.filter((product) => product.categorySlug === slug) : products;
  return <main className="page-transition mx-auto max-w-7xl px-4 py-12"><div className="rounded-3xl bg-gradient-to-r from-brand-primary to-teal-800 px-6 py-12 text-white sm:px-10"><p className="text-sm font-semibold uppercase tracking-widest text-teal-300">BIGZICO shop</p><h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{title}</h1><p className="mt-4 max-w-2xl text-gray-200">{description ?? 'Genuine appliances, dependable warranties, and fast delivery across Nigeria.'}</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{visibleProducts.map((product) => <ProductGrid key={product.id} products={[product]} />)}</div></main>;
}