'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { BrandLogo } from '@/components/BrandLogo';
import { useBigzicoStore } from '@/lib/store';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();
  const { cartCount, wishlistCount } = useBigzicoStore();
  const links = [['Shop All', '/products'], ['Refrigerators', '/categories/refrigerators'], ['Freezers', '/categories/freezers'], ['Generators', '/categories/generators'], ['Air Conditioners', '/categories/air-conditioners'], ['Flash Deals', '/deals']];

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      router.push('/products');
      return;
    }
    router.push(`/products?search=${encodeURIComponent(trimmed)}`);
  };

  return (
    <header className="fixed top-0 z-40 w-full text-slate-900 shadow-sm">
      <div className="hidden bg-brand-primary px-4 py-2 text-xs text-white md:block">
        <div className="mx-auto flex max-w-7xl justify-between">
          <span>+234 800 BIGZICO · support@bigzico.com</span>
          <span>Sell on BIGZICO · Track Order · Help Center</span>
        </div>
      </div>
      <div className="border-b border-gray-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center gap-4">
            <BrandLogo />
            <form onSubmit={submitSearch} className="hidden flex-1 md:flex">
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search appliances..." className="w-full rounded-l-full border border-gray-200 bg-gray-50 px-5 py-3 outline-none focus:border-teal-500" />
              <button type="submit" className="rounded-r-full bg-teal-600 px-6 text-white" aria-label="Search">⌕</button>
            </form>
            <div className="ml-auto flex items-center gap-2">
              <Link href="/wishlist" className="relative rounded-full p-2 hover:bg-gray-100" aria-label="Wishlist">♡{wishlistCount > 0 && <span className="absolute -right-1 -top-1 rounded-full bg-teal-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">{wishlistCount}</span>}</Link>
              <Link href="/cart" className="relative rounded-full p-2 hover:bg-gray-100" aria-label="Cart">🛒{cartCount > 0 && <span className="absolute -right-1 -top-1 rounded-full bg-teal-600 px-1.5 py-0.5 text-[10px] font-semibold text-white">{cartCount}</span>}</Link>
              <Link href="/login" className="hidden rounded-full p-2 text-sm font-medium hover:bg-gray-100 sm:block">Sign In</Link>
              <button onClick={() => setOpen(true)} className="rounded-lg p-2 text-xl md:hidden" aria-label="Open menu">☰</button>
            </div>
          </div>
          <form onSubmit={submitSearch} className="mt-3 flex md:hidden">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search appliances..." className="w-full rounded-l-full border border-gray-200 bg-gray-50 px-4 py-2.5 outline-none focus:border-teal-500" />
            <button type="submit" className="rounded-r-full bg-teal-600 px-4 text-white">⌕</button>
          </form>
          <div className="mt-3 hidden gap-3 md:flex">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-semibold text-gray-600 hover:text-teal-700">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {open && (
        <div className="border-b border-gray-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex flex-col gap-3">
              {links.map(([label, href]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)} className="font-semibold text-gray-700">
                  {label}
                </Link>
              ))}
              <Link href="/login" onClick={() => setOpen(false)} className="font-semibold text-teal-700">Sign In</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
