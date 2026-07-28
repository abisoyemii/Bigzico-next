'use client';
import Link from 'next/link';
import type { Product } from '@/lib/mock-data';
import { useBigzicoStore } from '@/lib/store';

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, addToWishlist, wishlist } = useBigzicoStore();
  const inWishlist = wishlist.some((item) => item.id === product.id);
  const discount = product.compareAtPrice ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100) : 0;

  return (
    <article className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_50px_-25px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-25px_rgba(15,23,42,0.35)]">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-slate-100">
          <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-900/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
              {product.isFeatured ? 'Featured' : product.brand}
            </span>
            {discount > 0 ? (
              <span className="rounded-full bg-teal-600 px-3 py-1 text-[11px] font-semibold text-white">-{discount}%</span>
            ) : null}
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              addToWishlist(product);
            }}
            className={`absolute right-3 top-3 rounded-full border border-white/80 bg-white/90 p-2 text-lg shadow-sm transition ${inWishlist ? 'text-teal-700' : 'text-slate-700'} hover:bg-white`}
            aria-label="Add to wishlist"
          >
            {inWishlist ? '♥' : '♡'}
          </button>
        </div>
        <div className="p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-600">{product.category}</p>
          <h3 className="mt-2 min-h-12 text-base font-semibold text-slate-900">{product.name}</h3>
          <div className="mt-2 flex items-center gap-1 text-sm text-amber-500">
            ★ <span className="text-slate-500">{product.rating} ({product.reviewCount})</span>
          </div>
          <div className="mt-3 flex items-end gap-2">
            <span className="text-lg font-semibold text-slate-900">₦{product.price.toLocaleString()}</span>
            {product.compareAtPrice ? <span className="text-sm text-slate-400 line-through">₦{product.compareAtPrice.toLocaleString()}</span> : null}
          </div>
          <p className="mt-2 text-sm text-slate-500">{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</p>
        </div>
      </Link>
      <div className="flex items-center gap-2 border-t border-slate-200 p-4">
        <button onClick={() => addToCart(product)} className="flex-1 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
          Add to Cart
        </button>
      </div>
    </article>
  );
}
