import type { Product } from '@/lib/mock-data';

export const washingMachinesProducts: Product[] = Array.from({ length: 100 }, (_, i) => {
  const brands = ['LG', 'Samsung', 'Bosch', 'Hisense', 'Thermocool', 'Midea', 'Panasonic', 'Nexus', 'Bruhm', 'Scanfrost'];
  const subcats = ['Front Load', 'Top Load', 'Semi Automatic', 'Twin Tub', 'Compact Washer'];
  const brand = brands[i % brands.length];
  const subcat = subcats[i % subcats.length];
  const idx = i + 1;
  const price = 240000 + (idx * 6000);
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
  const image = 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80';

  return {
    id: `washing-machines-${idx.toString().padStart(3, '0')}`,
    slug: `washing-machines-${idx}`,
    sku: `WSH-${1000 + idx}`,
    name: `${brand} ${subcat} Washer ${idx.toString().padStart(2, '0')}`,
    brand,
    brandSlug: brand.toLowerCase().replace(/\s+/g, '-'),
    category: 'Washing Machines',
    categorySlug: 'washing-machines',
    subcategory: subcat,
    shortDescription: `Reliable ${brand} ${subcat.toLowerCase()} washer for clean laundry.`,
    description: `${brand} ${subcat} Washer ${idx} delivers dependable performance, modern design, and trusted value for homes, offices, and businesses across Nigeria.`,
    features: ['Quick Wash', 'Gentle Care', 'Steam Cleaning', 'Eco Mode', 'Smart Sensor'],
    specifications: [
      { label: 'Capacity', value: '6kg' },
      { label: 'Warranty', value: warranty },
      { label: 'Delivery', value: delivery },
      { label: 'Power', value: '220V' },
    ],
    tags: ['washing-machines', subcat.toLowerCase(), brand.toLowerCase()],
    thumbnail: image,
    images: [image],
    price,
    compareAtPrice: oldPrice,
    stock,
    isActive: true,
    rating,
    reviewCount,
    reviews: [
      { id: `wsh-${idx}-r1`, customerName: 'Ada Okafor', rating: 5, title: 'Excellent', comment: 'Great quality and very durable.', date: '2025-06-01' },
      { id: `wsh-${idx}-r2`, customerName: 'Micheal Lawal', rating: 4, title: 'Reliable', comment: 'Fast delivery and easy setup.', date: '2025-05-12' },
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
    whatsappMessage: `Hello BIGZICO, I would like to order the ${brand} ${subcat} Washer.`,
    trending,
  };
});
