import type { Product } from '@/lib/mock-data';

export const smartphonesProducts: Product[] = Array.from({ length: 100 }, (_, i) => {
  const brands = ['Samsung', 'Apple', 'Tecno', 'Infinix', 'Xiaomi', 'Google', 'Oppo', 'Vivo', 'Nokia', 'OnePlus'];
  const subcats = ['Android', 'iOS', 'Budget', '5G', 'Gaming'];
  const brand = brands[i % brands.length];
  const subcat = subcats[i % subcats.length];
  const idx = i + 1;
  const price = 215000 + (idx * 9000);
  const oldPrice = Math.floor(price * 1.12);
  const discount = 5 + ((idx * 3) % 16);
  const rating = Math.round((4.0 + ((idx % 8) / 10)) * 10) / 10;
  const reviewCount = 40 + ((idx * 7) % 180);
  const stock = 15 + (idx % 10);
  const featured = idx % 6 === 0;
  const bestSeller = idx % 5 === 0;
  const trending = idx % 7 === 0;
  const badge = discount > 10 ? 'Hot Deal' : idx % 3 === 0 ? 'New Arrival' : 'Best Buy';
  const warranty = idx % 2 === 0 ? '2 Years Warranty' : '3 Years Warranty';
  const delivery = idx % 2 === 0 ? 'Free Delivery' : 'Express Delivery';
  const image = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80';

  return {
    id: `smartphones-${idx.toString().padStart(3, '0')}`,
    slug: `smartphones-${idx}`,
    sku: `SMT-${1000 + idx}`,
    name: `${brand} ${subcat} ${idx.toString().padStart(2, '0')}`,
    brand,
    brandSlug: brand.toLowerCase().replace(/\s+/g, '-'),
    category: 'Smartphones',
    categorySlug: 'smartphones',
    subcategory: subcat,
    shortDescription: `Reliable ${brand} ${subcat.toLowerCase()} smartphone.`,
    description: `${brand} ${subcat} ${idx} delivers dependable performance, modern design, and trusted value for homes, offices, and businesses across Nigeria.`,
    features: ['5G Ready', 'AI Camera', 'Fast Charging', 'Large Display', 'Secure Lock'],
    specifications: [
      { label: 'Capacity', value: '5G Ready' },
      { label: 'Warranty', value: warranty },
      { label: 'Delivery', value: delivery },
      { label: 'Power', value: 'Dual SIM' },
    ],
    tags: ['smartphones', subcat.toLowerCase(), brand.toLowerCase()],
    thumbnail: image,
    images: [image],
    price,
    compareAtPrice: oldPrice,
    stock,
    isActive: true,
    rating,
    reviewCount,
    reviews: [
      { id: `smt-${idx}-r1`, customerName: 'Ada Okafor', rating: 5, title: 'Excellent', comment: 'Great quality and very durable.', date: '2025-06-01' },
      { id: `smt-${idx}-r2`, customerName: 'Micheal Lawal', rating: 4, title: 'Reliable', comment: 'Fast delivery and easy setup.', date: '2025-05-12' },
    ],
    isFeatured: featured,
    isFlashSale: discount > 10,
    isBestSeller: bestSeller,
    image,
    featured,
    flashSale: discount > 10,
    bestSeller,
    oldPrice,
    discount,
    badge,
    warranty,
    delivery,
    whatsappMessage: `Hello BIGZICO, I would like to order the ${brand} ${subcat} smartphone.`,
    trending,
  };
});
