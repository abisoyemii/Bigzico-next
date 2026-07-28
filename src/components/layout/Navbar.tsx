import Link from 'next/link';

type NavbarProps = {
  links?: Array<{ label: string; href: string }>;
  cartCount?: number;
};

export function Navbar({ links = [{ label: 'Shop', href: '/products' }, { label: 'Categories', href: '/categories' }, { label: 'Deals', href: '/deals' }], cartCount = 2 }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/20 text-sm font-semibold text-teal-300">
            BZ
          </div>
          <div>
            <p className="text-lg font-semibold tracking-[0.2em] text-white">BIGZICO</p>
            <p className="text-xs text-slate-400">Premium appliances</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-teal-300">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/wishlist" className="rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-300">
            Wishlist
          </Link>
          <Link href="/cart" className="rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-400">
            Cart ({cartCount})
          </Link>
        </div>
      </div>
    </header>
  );
}
