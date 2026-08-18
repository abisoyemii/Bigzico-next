import type { Product } from '@/lib/mock-data';

export const refrigeratorsProducts: Product[] = Array.from({ length: 100 }, (_, i) => {
  const brands = ['LG', 'Samsung', 'Hisense', 'Haier Thermocool', 'Midea', 'Bosch', 'Panasonic', 'Scanfrost', 'Nexus', 'Bruhm'];
  const subcats = ['Double Door', 'Top Mount', 'Single Door', 'Side by Side', 'French Door', 'Mini Fridge', 'Bottom Freezer'];
  const brand = brands[i % brands.length];
  const subcat = subcats[i % subcats.length];
  const idx = i + 1;
  const price = 285000 + (idx * 7000);
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
  const image = 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=900&q=80';

  return {
    id: `refrigerators-${idx.toString().padStart(3, '0')}`,
    slug: `refrigerators-${idx}`,
    sku: `REF-${1000 + idx}`,
    name: `${brand} ${subcat} Refrigerator ${idx.toString().padStart(2, '0')}`,
    brand,
    brandSlug: brand.toLowerCase().replace(/\s+/g, '-'),
    category: 'Refrigerators',
    categorySlug: 'refrigerators',
    subcategory: subcat,
    shortDescription: `Reliable ${brand} ${subcat.toLowerCase()} refrigerator designed for everyday performance.`,
    description: `${brand} ${subcat} Refrigerator ${idx} delivers dependable performance, modern design, and trusted value for homes, offices, and businesses across Nigeria.`,
    features: ['Frost Free', 'Energy Saving', 'Low Noise', 'Large Capacity', 'Fast Cooling'],
    specifications: [
      { label: 'Capacity', value: '250L' },
      { label: 'Warranty', value: warranty },
      { label: 'Delivery', value: delivery },
      { label: 'Power', value: '220V' },
    ],
    tags: ['refrigerators', subcat.toLowerCase(), brand.toLowerCase()],
    thumbnail: image,
    images: [image],
    price,
    compareAtPrice: oldPrice,
    stock,
    isActive: true,
    rating,
    reviewCount,
    reviews: [
      { id: `ref-${idx}-r1`, customerName: 'Ada Okafor', rating: 5, title: 'Excellent', comment: 'Great quality and very durable.', date: '2025-06-01' },
      { id: `ref-${idx}-r2`, customerName: 'Micheal Lawal', rating: 4, title: 'Reliable', comment: 'Fast delivery and easy setup.', date: '2025-05-12' },
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
    whatsappMessage: `Hello BIGZICO, I would like to order the ${brand} ${subcat} Refrigerator.`,
    trending,
  };
});
