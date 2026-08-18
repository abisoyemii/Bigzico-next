import type { Product } from '@/lib/mock-data';

export const laptopsProducts: Product[] = Array.from({ length: 100 }, (_, i) => {
  const brands = ['Dell', 'HP', 'Lenovo', 'Acer', 'Asus', 'Apple', 'Microsoft', 'Toshiba', 'Chuwi', 'Huawei'];
  const subcats = ['Business', 'Gaming', 'Student', 'Ultrabook', '2-in-1'];
  const brand = brands[i % brands.length];
  const subcat = subcats[i % subcats.length];
  const idx = i + 1;
  const price = 320000 + (idx * 11000);
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
  const image = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80';

  return {
    id: `laptops-${idx.toString().padStart(3, '0')}`,
    slug: `laptops-${idx}`,
    sku: `LAP-${1000 + idx}`,
    name: `${brand} ${subcat} Laptop ${idx.toString().padStart(2, '0')}`,
    brand,
    brandSlug: brand.toLowerCase().replace(/\s+/g, '-'),
    category: 'Laptops',
    categorySlug: 'laptops',
    subcategory: subcat,
    shortDescription: `Reliable ${brand} ${subcat.toLowerCase()} laptop for productivity.`,
    description: `${brand} ${subcat} Laptop ${idx} delivers dependable performance, modern design, and trusted value for homes, offices, and businesses across Nigeria.`,
    features: ['Portable', 'Long Battery Life', 'Fast SSD', 'HD Display', 'Lightweight'],
    specifications: [
      { label: 'Capacity', value: 'Powerful' },
      { label: 'Warranty', value: warranty },
      { label: 'Delivery', value: delivery },
      { label: 'Power', value: 'Intel i5' },
    ],
    tags: ['laptops', subcat.toLowerCase(), brand.toLowerCase()],
    thumbnail: image,
    images: [image],
    price,
    compareAtPrice: oldPrice,
    stock,
    isActive: true,
    rating,
    reviewCount,
    reviews: [
      { id: `lap-${idx}-r1`, customerName: 'Ada Okafor', rating: 5, title: 'Excellent', comment: 'Great quality and very durable.', date: '2025-06-01' },
      { id: `lap-${idx}-r2`, customerName: 'Micheal Lawal', rating: 4, title: 'Reliable', comment: 'Fast delivery and easy setup.', date: '2025-05-12' },
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
    whatsappMessage: `Hello BIGZICO, I would like to order the ${brand} ${subcat} Laptop.`,
    trending,
  };
});
