import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';

export function Footer() {
  return (
    <footer className="mt-16 bg-brand-primary text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-4"><BrandLogo className="text-white" /></div>
          <p className="text-sm text-gray-400">Nigeria&apos;s trusted destination for quality home appliances and professional technician services.</p>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-white">Quick Links</h3>
          <div className="space-y-2 text-sm"><Link className="block hover:text-teal-400" href="/products">Shop All</Link><Link className="block hover:text-teal-400" href="/services">Book Technician</Link><Link className="block hover:text-teal-400" href="/deals">Flash Deals</Link></div>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-white">Customer Service</h3>
          <div className="space-y-2 text-sm"><Link className="block hover:text-teal-400" href="/contact">Contact Us</Link><Link className="block hover:text-teal-400" href="/faq">FAQs</Link><Link className="block hover:text-teal-400" href="/warranty">Warranty</Link></div>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-white">Contact</h3>
          <p className="text-sm">+234 800 BIGZICO</p><p className="mt-2 text-sm">support@bigzico.com</p><p className="mt-2 text-sm">Lagos · Abuja · Port Harcourt</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-gray-500">© 2026 BIGZICO. All rights reserved.</div>
    </footer>
  );
}