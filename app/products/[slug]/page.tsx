'use client';
import Link from 'next/link';
import { products } from '@/lib/mock-data';
import { useBigzicoStore } from '@/lib/store';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return <main className="mx-auto max-w-7xl px-4 py-12"><h1 className="font-display text-3xl font-bold">Product not found</h1></main>;
  }

  const { addToCart, addToWishlist, wishlist } = useBigzicoStore();
  const inWishlist = wishlist.some((item) => item.id === product.id);
  const related = products.filter((item) => item.categorySlug === product.categorySlug && item.id !== product.id).slice(0, 3);
  const recent = products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <main className="page-transition mx-auto max-w-7xl px-4 py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100">
            <img src={product.images[0]} alt={product.name} className="h-[420px] w-full object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {product.images.map((image) => (
              <div key={image} className="overflow-hidden rounded-2xl border bg-gray-100">
                <img src={image} alt={product.name} className="h-24 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">{product.category} · {product.brand}</p>
          <h1 className="mt-3 font-display text-4xl font-bold">{product.name}</h1>
          <div className="mt-4 flex items-center gap-2 text-amber-500">
            <span>★ {product.rating}</span>
            <span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>
          </div>
          <p className="mt-6 text-gray-600">{product.description}</p>
          <div className="mt-6 flex items-end gap-3">
            <span className="text-3xl font-bold">₦{product.price.toLocaleString()}</span>
            {product.compareAtPrice && <span className="text-gray-400 line-through">₦{product.compareAtPrice.toLocaleString()}</span>}
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-gray-500">
            <span className="rounded-full bg-teal-50 px-3 py-1 text-teal-700">SKU: {product.sku}</span>
            <span className="rounded-full bg-gray-100 px-3 py-1">Warranty: {product.warranty}</span>
            <span className="rounded-full bg-gray-100 px-3 py-1">{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => addToCart(product)} className="rounded-full bg-teal-600 px-8 py-3 font-semibold text-white hover:bg-teal-700">Add to Cart</button>
            <button onClick={() => addToWishlist(product)} className={`rounded-full border px-8 py-3 font-semibold ${inWishlist ? 'border-teal-600 bg-teal-50 text-teal-700' : 'border-gray-300 text-gray-700'}`}>
              {inWishlist ? 'Saved' : 'Add to Wishlist'}
            </button>
          </div>

          <div className="mt-10 border-t pt-6">
            <h2 className="font-display text-xl font-bold">Specifications</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.specifications.map((spec) => (
                <div key={spec.label} className="rounded-xl border bg-white p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{spec.label}</p>
                  <p className="mt-1 font-semibold text-slate-900">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border bg-white p-6">
          <h2 className="font-display text-2xl font-bold">Key Features</h2>
          <ul className="mt-4 space-y-3 text-gray-600">
            {product.features.map((feature) => <li key={feature} className="flex items-start gap-2"><span className="mt-1 text-teal-600">✓</span><span>{feature}</span></li>)}
          </ul>
        </div>
        <div className="rounded-3xl border bg-white p-6">
          <h2 className="font-display text-2xl font-bold">Customer Reviews</h2>
          <div className="mt-4 space-y-4">
            {product.reviews.map((review) => (
              <div key={review.id} className="rounded-2xl bg-gray-50 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-900">{review.customerName}</p>
                  <p className="text-sm text-amber-500">{'★'.repeat(review.rating)}</p>
                </div>
                <p className="mt-2 font-semibold">{review.title}</p>
                <p className="mt-1 text-sm text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold">Related Products</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <Link key={item.id} href={`/products/${item.slug}`} className="rounded-2xl border bg-white p-4 hover:border-teal-500">
              <img src={item.images[0]} alt={item.name} className="h-40 w-full rounded-xl object-cover" />
              <p className="mt-3 font-semibold">{item.name}</p>
              <p className="mt-1 text-sm text-gray-500">₦{item.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold">Recently Viewed</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {recent.map((item) => (
            <Link key={item.id} href={`/products/${item.slug}`} className="rounded-2xl border bg-white p-4 hover:border-teal-500">
              <img src={item.images[0]} alt={item.name} className="h-40 w-full rounded-xl object-cover" />
              <p className="mt-3 font-semibold">{item.name}</p>
              <p className="mt-1 text-sm text-gray-500">₦{item.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
