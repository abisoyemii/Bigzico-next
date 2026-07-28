'use client';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductGrid } from '@/components/ProductGrid';
import { categories, products } from '@/lib/mock-data';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') ?? '';
  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sort, setSort] = useState('featured');
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    setSearch(initialSearch);
  }, [initialSearch]);

  const filteredProducts = useMemo(() => {
    const query = search.toLowerCase();
    const filtered = products.filter((product) => {
      const categoryMatch = selectedCategory === 'all' || product.categorySlug === selectedCategory;
      const brandMatch = selectedBrand === 'all' || product.brandSlug === selectedBrand;
      const priceMatch = selectedPrice === 'all' || product.price <= Number(selectedPrice);
      const searchMatch = !query || [product.name, product.brand, product.category, product.description].join(' ').toLowerCase().includes(query);
      return categoryMatch && brandMatch && priceMatch && searchMatch;
    });

    return filtered.sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return b.isFeatured ? 1 : -1;
    });
  }, [search, selectedCategory, selectedBrand, selectedPrice, sort]);

  useEffect(() => {
    setVisibleCount(8);
  }, [search, selectedCategory, selectedBrand, selectedPrice, sort]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <main className="page-transition mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600">BIGZICO shop</p>
          <h1 className="mt-2 font-display text-4xl font-bold">All Products</h1>
          <p className="mt-1 text-gray-600">Genuine appliances with warranty and nationwide delivery.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products" className="rounded-full border border-gray-300 bg-white px-4 py-2 outline-none focus:border-teal-500" />
          <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)} className="rounded-full border border-gray-300 bg-white px-4 py-2">
            <option value="all">All categories</option>
            {categories.map((category) => <option key={category.slug} value={category.slug}>{category.name}</option>)}
          </select>
          <select value={selectedBrand} onChange={(event) => setSelectedBrand(event.target.value)} className="rounded-full border border-gray-300 bg-white px-4 py-2">
            <option value="all">All brands</option>
            {[...new Set(products.map((product) => product.brandSlug))].map((brandSlug) => {
              const brand = products.find((product) => product.brandSlug === brandSlug);
              return <option key={brandSlug} value={brandSlug}>{brand?.brand}</option>;
            })}
          </select>
          <select value={selectedPrice} onChange={(event) => setSelectedPrice(event.target.value)} className="rounded-full border border-gray-300 bg-white px-4 py-2">
            <option value="all">Any price</option>
            <option value="300000">Under ₦300k</option>
            <option value="500000">Under ₦500k</option>
            <option value="1000000">Under ₦1M</option>
            <option value="2000000">Under ₦2M</option>
          </select>
          <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-gray-300 bg-white px-4 py-2">
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed bg-white p-10 text-center">
          <h2 className="font-display text-2xl font-bold">No products match your filters</h2>
          <p className="mt-2 text-gray-600">Try a different search term or explore a different category.</p>
        </div>
      ) : (
        <>
          <div className="mt-8">
            <ProductGrid products={visibleProducts} />
          </div>
          {visibleCount < filteredProducts.length && (
            <div className="mt-8 text-center">
              <button onClick={() => setVisibleCount((count) => count + 8)} className="rounded-full bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700">Load More</button>
            </div>
          )}
        </>
      )}
    </main>
  );
}
