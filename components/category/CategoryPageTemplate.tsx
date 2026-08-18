"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { Product } from '@/lib/product';;
import { CategoryHero } from '@/components/category/CategoryHero';
import { CategoryFilters } from '@/components/category/CategoryFilters';
import { Benefits } from '@/components/category/Benefits';
import { Testimonials } from '@/components/category/Testimonials';
import { FAQ } from '@/components/category/FAQ';
import { WhatsAppButton } from '@/components/category/WhatsAppButton';
import type { CategoryPageContent } from '@/data/categories';
import { getCategorySettings } from '@/data/categorySettings';



export function CategoryPageTemplate({
  category,
  content,
  products,
}: {
  category: {
    slug: string;
    name: string;
    description: string;
    image: string;
  };
  content: CategoryPageContent;
  products: Product[];
}) {
  const [activeFilter, setActiveFilter] = useState('All');
  const settings = getCategorySettings(category.slug);

  const visibleProducts = useMemo(() => {
  if (activeFilter === 'All') return products;

  return products.filter((product) => {
    const filter = activeFilter.toLowerCase();

    return (
      product.tags?.some(
        (tag) => tag.toLowerCase() === filter
      ) ||
      product.category?.toLowerCase() === filter
    );
  });
}, [activeFilter, products]);

  const featuredProducts = visibleProducts.filter((product) => product.isFeatured).slice(0, 4);
  const bestSellers = visibleProducts.filter((product) => product.isBestSeller).slice(0, 4);
  const trendingProducts = visibleProducts.slice(0, 4);

  return (
    <main className="page-transition bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-3 py-4 sm:px-4 sm:py-6 lg:px-8 lg:py-8">
        {/* Header Section */}
        {settings.showHeader && (
          <header className="rounded-lg sm:rounded-[24px] border border-slate-200 bg-white/90 px-3 sm:px-6 py-3 sm:py-4 shadow-sm backdrop-blur">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link href="/" className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg sm:rounded-2xl bg-slate-900 text-sm sm:text-lg font-bold text-white">B</div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-teal-600">BIGZICO</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900">Premium Appliances</p>
                </div>
              </Link>
              <nav className="hidden items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-700 md:flex">
                <Link href="/" className="hover:text-teal-600">Home</Link>
                <Link href="/products" className="hover:text-teal-600">Products</Link>
                <Link href="/services" className="hover:text-teal-600">Services</Link>
                <Link href="/contact" className="hover:text-teal-600">Contact</Link>
              </nav>
            </div>
          </header>
        )}

        {/* Hero Section */}
        {settings.showHero && (
          <div className="mt-4 sm:mt-6">
            <CategoryHero category={content} productCount={visibleProducts.length} />
          </div>
        )}

        {/* Filters Section */}
        {settings.showFilters && (
          <section className="mx-auto max-w-7xl px-0 py-6 sm:py-8">
            <div className="mb-4 sm:mb-6 flex flex-col gap-3 sm:gap-4 rounded-lg sm:rounded-[24px] border border-slate-200 bg-white p-3 sm:p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-teal-600">Quick filters</p>
                <h2 className="mt-1 sm:mt-2 text-lg sm:text-2xl font-bold text-slate-900">Find the right fit</h2>
              </div>
              <CategoryFilters filters={content.filters} activeFilter={activeFilter} onChange={setActiveFilter} />
            </div>
          </section>
        )}

        {/* Main Collection Section - MOVED TO PRIORITY POSITION */}
        {settings.showMainCollection && (
          <section className="mx-auto max-w-7xl px-0 py-6 sm:py-8">
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">Products</p>
                  <h2 className="mt-2 font-display text-2xl font-bold text-slate-900">Browse {category.name}</h2>
                </div>
                <div className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
                  {visibleProducts.length} products
                </div>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {visibleProducts.map((product) => (
                  <article key={product.id} className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                    <div className="relative aspect-video overflow-hidden rounded-[18px]">
                      <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
                      <span className="absolute left-3 top-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white">{product.stock > 0 ? 'In stock' : 'Out of stock'}</span>
                    </div>
                    <div className="mt-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">{product.category}</p>
                      <h3 className="mt-2 font-semibold text-slate-900">{product.name}</h3>
                      <p className="mt-2 text-sm text-slate-600">{product.shortDescription}</p>
                      <div className="mt-3 flex items-center gap-2 text-sm text-amber-500">{'★'.repeat(Math.round(product.rating ?? 0))} <span className="text-slate-500">{product.reviewCount} reviews</span></div>
                      <div className="mt-4 flex items-end justify-between">
                        <div>
                          <p className="text-lg font-bold text-slate-900">₦{product.price.toLocaleString()}</p>
                          {product.compareAtPrice ? <p className="text-sm text-slate-400 line-through">₦{product.compareAtPrice.toLocaleString()}</p> : null}
                        </div>
                        <WhatsAppButton label="WhatsApp" className="px-3 py-2" />
                      </div>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">SKU {product.sku}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Featured Products Section */}
        {settings.showFeaturedProducts && (
          <section id="products" className="mx-auto max-w-7xl px-0 py-6 sm:py-8">
            <div className="mb-6 flex items-end justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">Featured products</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl">Featured Products</h2>
                <p className="mt-2 text-sm text-slate-600 sm:text-base">Featured items selected for performance, value, and reliability.</p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featuredProducts.map((product) => (
                <article key={product.id} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-square bg-slate-100">
                    <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
                    <span className="absolute left-3 top-3 rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">Featured</span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">{product.category}</p>
                    <h3 className="mt-2 font-semibold text-slate-900">{product.name}</h3>
                    <div className="mt-2 flex items-center gap-2 text-sm text-amber-500">{'★'.repeat(Math.round(product.rating ?? 0))} <span className="text-slate-500">{(product.rating ?? 0).toFixed(1)}</span></div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold text-slate-900">₦{product.price.toLocaleString()}</p>
                        {product.compareAtPrice ? <p className="text-sm text-slate-400 line-through">₦{product.compareAtPrice.toLocaleString()}</p> : null}
                      </div>
                      <WhatsAppButton label="WhatsApp" className="px-3 py-2" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Best Sellers Section */}
        {settings.showBestSellers && (
          <section className="mx-auto max-w-7xl px-0 py-6 sm:py-8">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">Best sellers</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 sm:text-4xl">Best Sellers</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {bestSellers.map((product) => (
                <div key={product.id} className="flex flex-col gap-4 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm sm:flex-row">
                  <img src={product.images[0]} alt={product.name} className="h-32 w-full rounded-[18px] object-cover sm:w-40" />
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">{product.category}</p>
                    <h3 className="mt-2 font-semibold text-slate-900">{product.name}</h3>
                    <p className="mt-2 text-sm text-slate-600">{product.shortDescription}</p>
                    <div className="mt-3 flex items-center gap-2 text-sm text-amber-500">{'★'.repeat(Math.round(product.rating ?? 0))} <span className="text-slate-500">{(product.rating ?? 0).toFixed(1)}</span></div>
                    <p className="mt-3 text-lg font-bold text-slate-900">₦{product.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Limited Offer Section */}
        {settings.showLimitedOffer && (
          <section className="mx-auto max-w-7xl px-0 py-6 sm:py-8">
            <div className="rounded-lg sm:rounded-[28px] border border-slate-200 bg-gradient-to-r from-slate-900 to-teal-800 p-4 sm:p-8 text-white shadow-lg">
              <div className="flex flex-col gap-3 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-teal-300">Limited offer</p>
                  <h2 className="mt-1 sm:mt-2 text-lg sm:text-3xl font-bold">Save on Selected Home Appliances</h2>
                  <p className="mt-2 sm:mt-3 max-w-2xl text-xs sm:text-sm lg:text-base text-slate-200">Enjoy exclusive savings on premium products while stocks last.</p>
                </div>
                <Link href="/deals" className="inline-flex shrink-0 rounded-full bg-white px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-base font-semibold text-slate-900 whitespace-nowrap mt-2 sm:mt-0">Shop Deals</Link>
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        {settings.showBenefits && <Benefits benefits={content.benefits} />}

        {/* Trending & Browse Section */}
        {(settings.showTrendingNow || settings.showBrowseCategories) && (
          <section className="mx-auto max-w-7xl px-0 py-6 sm:py-8">
            <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
              {settings.showTrendingNow && (
                <div className="rounded-lg sm:rounded-[24px] border border-slate-200 bg-white p-3 sm:p-6 shadow-sm">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-teal-600">Trending now</p>
                  <h2 className="mt-1 sm:mt-2 text-lg sm:text-2xl font-bold text-slate-900">Trending Now</h2>
                  <div className="mt-3 sm:mt-6 space-y-2 sm:space-y-3">
                    {trendingProducts.map((product) => (
                      <div key={product.id} className="flex items-center justify-between rounded-lg sm:rounded-2xl bg-slate-50 p-2 sm:p-3">
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-sm font-semibold text-slate-900 truncate">{product.name}</p>
                          <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-slate-600">₦{product.price.toLocaleString()}</p>
                        </div>
                        <div className="shrink-0 rounded-full bg-amber-500 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-white ml-2">Trending</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {settings.showBrowseCategories && (
                <div className="rounded-lg sm:rounded-[24px] border border-slate-200 bg-white p-3 sm:p-6 shadow-sm">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-teal-600">Browse by category</p>
                  <h2 className="mt-1 sm:mt-2 text-lg sm:text-2xl font-bold text-slate-900">Explore more categories</h2>
                  <div className="mt-3 sm:mt-6 grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2">
                    {[
  { slug: 'refrigerators', name: 'Refrigerators' },
  { slug: 'freezers', name: 'Freezers' },
  { slug: 'air-conditioners', name: 'Air Conditioners' },
  { slug: 'washing-machines', name: 'Washing Machines' },
  { slug: 'televisions', name: 'Televisions' },
  { slug: 'generators', name: 'Generators' },
].map((item) => (
                      <Link key={item.slug} href={`/categories/${item.slug}`} className="rounded-lg sm:rounded-2xl border border-slate-200 bg-slate-50 p-2 sm:p-4 transition hover:border-teal-500">
                        <p className="text-xs sm:text-sm font-semibold text-slate-900">{item.name}</p>
                        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600">Explore now</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Trusted Brands Section */}
        {settings.showTrustedBrands && (
          <section className="mx-auto max-w-7xl px-0 py-6 sm:py-8">
            <div className="rounded-lg sm:rounded-[24px] border border-slate-200 bg-white p-3 sm:p-6 shadow-sm">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-teal-600">Trusted brands</p>
              <div className="mt-3 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3 text-center text-xs sm:text-sm font-semibold text-slate-700 sm:grid-cols-3 lg:grid-cols-5">
                {['LG', 'Samsung', 'Midea', 'Hisense', 'Thermocool', 'Daikin', 'Bosch', 'Sony', 'Philips', 'Anker'].map((brand) => <div key={brand} className="rounded-lg sm:rounded-2xl bg-slate-50 px-2 sm:px-4 py-2 sm:py-3">{brand}</div>)}
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Section */}
        {settings.showWhyChoose && (
          <section className="mx-auto max-w-7xl px-0 py-6 sm:py-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                ['Genuine Products', '100% authentic items with manufacturer warranty.'],
                ['Fast Delivery', 'Same-day dispatch in major Nigerian cities.'],
                ['Secure Checkout', 'Safe payment options.'],
                ['24/7 Support', 'Customer care and technical support.'],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{copy}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Testimonials Section */}
        {settings.showTestimonials && <Testimonials products={visibleProducts} categoryName={category.name} />}

        {/* Newsletter Section */}
        {settings.showNewsletter && (
          <section className="mx-auto max-w-7xl px-0 py-6 sm:py-8">
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">Newsletter</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-slate-900">Stay Updated on New Deals</h2>
              </div>
              <div className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
                <input type="email" placeholder="Enter your email" className="flex-1 rounded-full border border-slate-200 px-4 py-3" />
                <button className="rounded-full bg-slate-900 px-5 py-3 font-semibold text-white">Subscribe</button>
              </div>
            </div>
          </section>
        )}

        {/* WhatsApp CTA Section */}
        {settings.showWhatsAppCTA && (
          <section className="mx-auto max-w-7xl px-0 py-6 sm:py-8">
            <div className="rounded-[24px] border border-slate-200 bg-gradient-to-r from-green-600 to-emerald-700 p-8 text-white shadow-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-100">Quick order</p>
                  <h2 className="mt-2 font-display text-3xl font-bold">Order via WhatsApp Instantly</h2>
                  <p className="mt-2 text-sm text-green-50">24/7 support • Fast confirmation • Product details included</p>
                </div>
                <WhatsAppButton label="Chat on WhatsApp" className="px-6 py-3" />
              </div>
            </div>
          </section>
        )}

        {/* Delivery Services Section */}
        {settings.showDeliveryServices && (
          <section className="mx-auto max-w-7xl px-0 py-6 sm:py-8">
            <div className="grid gap-4 md:grid-cols-3">
              {['Nationwide Delivery', 'Installation Services', 'Warranty & Returns'].map((title) => (
                <div key={title} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">Trusted support and service coverage across Nigeria.</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {settings.showFAQ && <FAQ category={content} />}

        {/* Related Products Section */}
        {settings.showRelatedProducts && (
          <section className="mx-auto max-w-7xl px-0 py-6 sm:py-8">
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">Related products</p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {visibleProducts.slice(0, 3).map((product) => (
                  <div key={product.id} className="rounded-[20px] bg-slate-50 p-4">
                    <p className="font-semibold text-slate-900">{product.name}</p>
                    <p className="mt-2 text-sm text-slate-600">{product.shortDescription}</p>
                    <p className="mt-3 text-lg font-bold text-slate-900">₦{product.price.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer Section */}
      {settings.showFooter && (
        <footer className="border-t border-slate-200 bg-white/90">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4 sm:px-6 lg:px-8">
            <div>
              <p className="text-lg font-bold text-slate-900">BIGZICO</p>
              <p className="mt-3 text-sm text-slate-600">Premium appliances and home services in Nigeria.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Quick Links</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Categories</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
{[
  { slug: 'refrigerators', name: 'Refrigerators' },
  { slug: 'freezers', name: 'Freezers' },
  { slug: 'air-conditioners', name: 'Air Conditioners' },
  { slug: 'washing-machines', name: 'Washing Machines' },
  { slug: 'televisions', name: 'Televisions' },
  { slug: 'generators', name: 'Generators' },
].map((item) => (
  <li key={item.slug}>
    <Link href={`/categories/${item.slug}`}>{item.name}</Link>
  </li>
))}              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Support</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>hello@bigzico.com</li>
                <li>+234 800 000 0000</li>
                <li>Abuja, Lagos, Port Harcourt</li>
              </ul>
            </div>
          </div>
        </footer>
      )}
    </main>
  );
}

