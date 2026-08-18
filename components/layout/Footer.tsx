import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';
import { categoryNavigation } from '@/data/categories';

export function Footer() {
  return (
    <footer className="mt-12 sm:mt-16 bg-brand-primary text-gray-300 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-12 md:grid-cols-5">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-3 sm:mb-4">
            <BrandLogo className="text-white" />
          </div>
          <p className="text-xs sm:text-sm text-gray-400 leading-5">Nigeria&apos;s trusted destination for quality home appliances and professional technician services.</p>
        </div>
        <div>
          <h3 className="mb-2 sm:mb-4 text-sm sm:text-base font-bold text-white">Shop</h3>
          <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            <Link className="block hover:text-teal-400 transition" href="/products">
              Shop All
            </Link>
            <Link className="block hover:text-teal-400 transition" href="/deals">
              Flash Deals
            </Link>
            <Link className="block hover:text-teal-400 transition" href="/services">
              Book Technician
            </Link>
          </div>
        </div>
        <div>
          <h3 className="mb-2 sm:mb-4 text-sm sm:text-base font-bold text-white">Categories</h3>
          <div className="max-h-48 space-y-1 sm:space-y-2 text-xs sm:text-sm overflow-y-auto">
            {categoryNavigation.map((cat) => (
              <Link key={cat.slug} className="block hover:text-teal-400 transition line-clamp-1" href={`/categories/${cat.slug}`}>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-2 sm:mb-4 text-sm sm:text-base font-bold text-white">Support</h3>
          <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            <Link className="block hover:text-teal-400 transition" href="/contact">
              Contact Us
            </Link>
            <Link className="block hover:text-teal-400 transition" href="/faq">
              FAQs
            </Link>
            <Link className="block hover:text-teal-400 transition" href="/warranty">
              Warranty
            </Link>
          </div>
        </div>
        <div>
          <h3 className="mb-2 sm:mb-4 text-sm sm:text-base font-bold text-white">Contact</h3>
          <p className="text-xs sm:text-sm">+234 800 BIGZICO</p>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm">support@bigzico.com</p>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm">Lagos · Abuja · Port Harcourt</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-3 sm:py-5 px-3 sm:px-4 text-center text-[10px] sm:text-xs text-gray-500">© 2026 BIGZICO. All rights reserved.</div>
    </footer>
  );
}