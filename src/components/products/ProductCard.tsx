import Link from 'next/link';
import type { Product } from '@/types';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-900/70 shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-teal-400/40">
      <div className="relative">
        <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="p-5">
        <p className="text-sm text-teal-300">{product.category}</p>
        <Link href={`/products/${product.slug}`} className="mt-2 block text-xl font-semibold text-white transition hover:text-teal-300">
          {product.name}
        </Link>
        <p className="mt-3 text-sm leading-6 text-slate-400">{product.shortDescription}</p>

        <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
          <span>⭐ {product.rating.toFixed(1)} ({product.reviewCount})</span>
          <span className="font-semibold text-white">₦{product.price.toLocaleString()}</span>
        </div>

        {product.compareAtPrice ? (
          <p className="mt-2 text-sm text-slate-500 line-through">₦{product.compareAtPrice.toLocaleString()}</p>
        ) : null}

        <div className="mt-5 flex gap-3">
          <Link href={`/products/${product.slug}`} className="flex-1 rounded-full border border-slate-700 px-4 py-2 text-center text-sm font-semibold text-slate-200 transition hover:border-teal-400 hover:text-teal-300">
            View details
          </Link>
          <button className="rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-400">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
