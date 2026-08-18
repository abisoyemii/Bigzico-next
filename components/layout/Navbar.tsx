'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';
import { useState, useEffect } from 'react';
import { BrandLogo } from '@/components/BrandLogo';
import { useBigzicoStore } from '@/lib/store';
import { categoryNavigation } from '@/data/categories';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  const [expandCategories, setExpandCategories] = useState(false);
  const router = useRouter();
  const { cartCount, wishlistCount } = useBigzicoStore();

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (stored) {
      setTheme(stored);
    } else {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(isDark ? 'dark' : 'light');
    }
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      return newTheme;
    });
  };

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      router.push('/products');
      return;
    }
    router.push(`/products?search=${encodeURIComponent(trimmed)}`);
  };

  const closeMenu = () => {
    setOpen(false);
    setExpandCategories(false);
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 z-40 w-full bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white">
      <div className="hidden bg-brand-primary px-3 py-2 text-[11px] text-white md:block dark:bg-slate-950 sm:px-4 sm:text-xs">
        <div className="mx-auto flex max-w-7xl justify-between">
          <span>+234 800 BIGZICO · support@bigzico.com</span>
          <span className="hidden sm:inline">Track Order · Help Center</span>
        </div>
      </div>
      <div className="border-b border-gray-200 bg-white/95 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/95">
        <div className="mx-auto w-full max-w-7xl px-3 py-2 sm:px-4 sm:py-3">
          <div className="flex min-h-12 items-center justify-between gap-2 sm:gap-3">
            <BrandLogo />
            <form onSubmit={submitSearch} className="hidden flex-1 gap-1 md:flex">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search appliances..."
                className="min-w-0 flex-1 rounded-l-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm outline-none focus:border-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
              />
              <button type="submit" className="rounded-r-full bg-teal-600 px-4 text-white hover:bg-teal-700 sm:px-6" aria-label="Search">
                ⌕
              </button>
            </form>
            <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
              <button
                onClick={toggleTheme}
                className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-slate-800"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <Link href="/wishlist" className="relative rounded-full p-2 hover:bg-gray-100 dark:hover:bg-slate-800" aria-label="Wishlist">
                ♡
                {wishlistCount > 0 && (
                  <span className="absolute -right-1 -top-1 rounded-full bg-teal-600 px-1 py-0.5 text-[9px] font-bold text-white">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link href="/cart" className="relative rounded-full p-2 hover:bg-gray-100 dark:hover:bg-slate-800" aria-label="Cart">
                🛒
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 rounded-full bg-teal-600 px-1 py-0.5 text-[9px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link href="/login" className="hidden rounded-full px-3 py-2 text-xs font-medium hover:bg-gray-100 dark:hover:bg-slate-800 sm:block sm:px-4 sm:text-sm">
                Sign In
              </Link>
              <button
                onClick={() => setOpen(!open)}
                className="rounded-lg p-2 text-lg hover:bg-gray-100 dark:hover:bg-slate-800 md:hidden"
                aria-label="Open menu"
                aria-expanded={open}
              >
                ☰
              </button>
            </div>
          </div>
          <form onSubmit={submitSearch} className="mt-2 flex gap-1 md:hidden">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search..."
              className="min-w-0 flex-1 rounded-l-full border border-gray-200 bg-gray-50 px-3 py-2 text-xs outline-none focus:border-teal-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400 sm:text-sm"
            />
            <button type="submit" className="rounded-r-full bg-teal-600 px-3 text-white hover:bg-teal-700 sm:px-4">
              ⌕
            </button>
          </form>
          <div className="mt-3 hidden gap-2 md:flex lg:gap-3">
            <Link href="/products" className="text-sm font-semibold text-gray-600 hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400 lg:text-base">
              Shop All
            </Link>
            <div className="group relative">
              <button className="text-sm font-semibold text-gray-600 hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400 lg:text-base">
                Categories ▼
              </button>
              <div className="absolute left-0 top-full hidden max-h-96 w-48 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg group-hover:block dark:border-slate-700 dark:bg-slate-800">
                {categoryNavigation.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/categories/${cat.slug}`}
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-700 dark:text-gray-300 dark:hover:bg-slate-700 dark:hover:text-teal-400"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/deals" className="text-sm font-semibold text-gray-600 hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400 lg:text-base">
              Flash Deals
            </Link>
            <Link href="/services" className="text-sm font-semibold text-gray-600 hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400 lg:text-base">
              Services
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          className="fixed inset-0 top-16 z-40 bg-black/30 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      {open && (
        <div className="fixed left-0 right-0 top-16 z-50 max-h-[calc(100vh-64px)] overflow-y-auto border-b border-gray-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900 md:hidden">
          <div className="mx-auto max-w-7xl px-3 py-4 sm:px-4">
            <div className="flex flex-col gap-3">
              <Link href="/" onClick={closeMenu} className="py-2 font-semibold text-gray-700 hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400">
                Home
              </Link>
              <Link href="/products" onClick={closeMenu} className="py-2 font-semibold text-gray-700 hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400">
                Shop All
              </Link>

              {/* Categories Section */}
              <div className="border-t border-gray-200 pt-3 dark:border-slate-700">
                <button
                  onClick={() => setExpandCategories(!expandCategories)}
                  className="flex w-full items-center justify-between py-2 font-semibold text-gray-700 hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400"
                >
                  Categories
                  <span className="text-sm">{expandCategories ? '▼' : '▶'}</span>
                </button>
                {expandCategories && (
                  <div className="mt-2 flex max-h-64 flex-col gap-2 overflow-y-auto border-l-2 border-teal-200 pl-4 dark:border-teal-900">
                    {categoryNavigation.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/categories/${cat.slug}`}
                        onClick={closeMenu}
                        className="py-1 text-sm font-medium text-gray-600 hover:text-teal-700 dark:text-gray-400 dark:hover:text-teal-400"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/deals" onClick={closeMenu} className="py-2 font-semibold text-gray-700 hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400">
                Flash Deals
              </Link>
              <Link href="/services" onClick={closeMenu} className="py-2 font-semibold text-gray-700 hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400">
                Services
              </Link>
              <Link href="/contact" onClick={closeMenu} className="py-2 font-semibold text-gray-700 hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400">
                Contact
              </Link>
              <Link href="/faq" onClick={closeMenu} className="py-2 font-semibold text-gray-700 hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400">
                FAQ
              </Link>
              <Link href="/warranty" onClick={closeMenu} className="py-2 font-semibold text-gray-700 hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400">
                Warranty
              </Link>

              <div className="border-t border-gray-200 pt-3 dark:border-slate-700">
                <Link href="/login" onClick={closeMenu} className="block py-2 font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300">
                  Sign In
                </Link>
              </div>

              <div className="flex gap-2 border-t border-gray-200 pt-3 dark:border-slate-700">
                <Link href="/wishlist" onClick={closeMenu} className="flex-1 rounded-full bg-gray-100 py-3 text-center text-sm font-semibold text-gray-700 hover:bg-gray-200 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700">
                  Wishlist
                </Link>
                <Link href="/cart" onClick={closeMenu} className="flex-1 rounded-full bg-teal-600 py-3 text-center text-sm font-semibold text-white hover:bg-teal-700">
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
