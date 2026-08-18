import type { Product } from '@/lib/mock-data';

export const airConditionersProducts: Product[] = Array.from({ length: 100 }, (_, i) => {
  const brands = ['Daikin', 'LG', 'Samsung', 'Midea', 'Hisense', 'Panasonic', 'TCL', 'Bosch', 'Midea', 'Hisense'];
  const subcats = ['Split AC', 'Window AC', 'Portable AC', 'Commercial AC', 'Inverter AC'];
  const brand = brands[i % brands.length];
  const subcat = subcats[i % subcats.length];
  const idx = i + 1;
  const price = 165000 + (idx * 8000);
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
  const image = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80';

  return {
    id: `air-conditioners-${idx.toString().padStart(3, '0')}`,
    slug: `air-conditioners-${idx}`,
    sku: `AC-${1000 + idx}`,
    name: `${brand} ${subcat} ${idx.toString().padStart(2, '0')}`,
    brand,
    brandSlug: brand.toLowerCase().replace(/\s+/g, '-'),
    category: 'Air Conditioners',
    categorySlug: 'air-conditioners',
    subcategory: subcat,
    shortDescription: `Reliable ${brand} ${subcat.toLowerCase()} for tropical climate.`,
    description: `${brand} ${subcat} ${idx} delivers dependable performance, modern design, and trusted value for homes, offices, and businesses across Nigeria.`,
    features: ['Inverter Technology', 'Quiet Operation', 'Rapid Cooling', 'Smart Control', 'Energy Efficient'],
    specifications: [
      { label: 'Capacity', value: 'High Output' },
      { label: 'Warranty', value: warranty },
      { label: 'Delivery', value: delivery },
      { label: 'Power', value: '220V' },
    ],
    tags: ['air-conditioners', subcat.toLowerCase(), brand.toLowerCase()],
    thumbnail: image,
    images: [image],
    price,
    compareAtPrice: oldPrice,
    stock,
    isActive: true,
    rating,
    reviewCount,
    reviews: [
      { id: `ac-${idx}-r1`, customerName: 'Ada Okafor', rating: 5, title: 'Excellent', comment: 'Great quality and very durable.', date: '2025-06-01' },
      { id: `ac-${idx}-r2`, customerName: 'Micheal Lawal', rating: 4, title: 'Reliable', comment: 'Fast delivery and easy setup.', date: '2025-05-12' },
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
    whatsappMessage: `Hello BIGZICO, I would like to order the ${brand} ${subcat}.`,
    trending,
  };
});
