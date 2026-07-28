import type { Product } from '@/lib/mock-data';

export const freezersProducts: Product[] = Array.from({ length: 100 }, (_, i) => {
  const brands = ['Hisense', 'Samsung', 'Scanfrost', 'Thermocool', 'Midea', 'Haier', 'Nexus', 'LG', 'Bruhm', 'Bosch'];
  const subcats = ['Chest Freezer', 'Upright Freezer', 'Deep Freezer', 'Commercial Freezer'];
  const brand = brands[i % brands.length];
  const subcat = subcats[i % subcats.length];
  const idx = i + 1;
  const price = 180000 + (idx * 5000);
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
  const image = 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=900&q=80';

  return {
    id: `freezers-${idx.toString().padStart(3, '0')}`,
    slug: `freezers-${idx}`,
    sku: `FRZ-${1000 + idx}`,
    name: `${brand} ${subcat} Freezer ${idx.toString().padStart(2, '0')}`,
    brand,
    brandSlug: brand.toLowerCase().replace(/\s+/g, '-'),
    category: 'Freezers',
    categorySlug: 'freezers',
    subcategory: subcat,
    shortDescription: `Reliable ${brand} ${subcat.toLowerCase()} for bulk storage.`,
    description: `${brand} ${subcat} Freezer ${idx} delivers dependable performance, modern design, and trusted value for homes, offices, and businesses across Nigeria.`,
    features: ['Deep Freeze', 'Low Power Use', 'Lockable Lid', 'Noise Reduction', 'Large Capacity'],
    specifications: [
      { label: 'Capacity', value: '120L' },
      { label: 'Warranty', value: warranty },
      { label: 'Delivery', value: delivery },
      { label: 'Power', value: '220V' },
    ],
    tags: ['freezers', subcat.toLowerCase(), brand.toLowerCase()],
    thumbnail: image,
    images: [image],
    price,
    compareAtPrice: oldPrice,
    stock,
    isActive: true,
    rating,
    reviewCount,
    reviews: [
      { id: `frz-${idx}-r1`, customerName: 'Ada Okafor', rating: 5, title: 'Excellent', comment: 'Great quality and very durable.', date: '2025-06-01' },
      { id: `frz-${idx}-r2`, customerName: 'Micheal Lawal', rating: 4, title: 'Reliable', comment: 'Fast delivery and easy setup.', date: '2025-05-12' },
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
    whatsappMessage: `Hello BIGZICO, I would like to order the ${brand} ${subcat} Freezer.`,
    trending,
  };
});
