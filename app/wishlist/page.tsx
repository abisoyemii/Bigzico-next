'use client';
import Link from 'next/link';
import { ProductGrid } from '@/components/ProductGrid';
import { useBigzicoStore } from '@/lib/store';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useBigzicoStore();

  return (
    <main className="page-transition mx-auto max-w-7xl px-4 py-12">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">Saved for later</p>
      <h1 className="mt-2 font-display text-4xl font-bold">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <div className="mt-8 rounded-2xl border bg-white p-8 text-center">
          <p className="text-lg font-semibold">No saved items yet</p>
          <p className="mt-2 text-sm text-gray-500">Save products you love for later.</p>
          <Link href="/products" className="mt-4 inline-flex rounded-full bg-teal-600 px-6 py-3 font-semibold text-white">Browse Products</Link>
        </div>
      ) : (
        <>
          <div className="mt-6 flex justify-end">
            <button onClick={() => clearWishlist()} className="text-sm font-semibold text-gray-500 hover:text-red-600">Clear wishlist</button>
          </div>
          <div className="mt-4">
            <ProductGrid products={wishlist} />
          </div>
        </>
      )}
    </main>
  );
}
