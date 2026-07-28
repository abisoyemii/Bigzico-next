import type { CartItemType, Category, Product } from '@/types';

export const featuredCategories: Category[] = [
  {
    id: 'fridges',
    name: 'Refrigerators',
    slug: 'refrigerators',
    description: 'Energy-efficient cooling for modern homes and businesses.',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=900&q=80',
    productCount: 24
  },
  {
    id: 'ac',
    name: 'Air Conditioners',
    slug: 'air-conditioners',
    description: 'Premium cooling systems built for Nigerian climates.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    productCount: 18
  },
  {
    id: 'washers',
    name: 'Washing Machines',
    slug: 'washing-machines',
    description: 'Fast, quiet, and reliable laundry solutions.',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80',
    productCount: 12
  }
];

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Samsung 2-Door Refrigerator',
    slug: 'samsung-2-door-refrigerator',
    price: 845000,
    compareAtPrice: 980000,
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=900&q=80',
    shortDescription: 'Frost-free cooling with smart temperature control.',
    category: 'Refrigerators',
    rating: 4.8,
    reviewCount: 132,
    badge: 'Best Seller'
  },
  {
    id: '2',
    name: 'LG Inverter Air Conditioner',
    slug: 'lg-inverter-air-conditioner',
    price: 620000,
    compareAtPrice: 750000,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    shortDescription: 'Efficient cooling for homes, offices, and retail spaces.',
    category: 'Air Conditioners',
    rating: 4.7,
    reviewCount: 98,
    badge: 'New Arrival'
  },
  {
    id: '3',
    name: 'Scanfrost Microwave Oven',
    slug: 'scanfrost-microwave-oven',
    price: 280000,
    compareAtPrice: 330000,
    image: 'https://images.unsplash.com/photo-1584269606748-7e3b9a1f2d2d?auto=format&fit=crop&w=900&q=80',
    shortDescription: 'Modern convection and defrost performance in one unit.',
    category: 'Kitchen Appliances',
    rating: 4.6,
    reviewCount: 73
  }
];

export const cartItems: CartItemType[] = [
  {
    id: 'cart-1',
    productId: '1',
    name: 'Samsung 2-Door Refrigerator',
    slug: 'samsung-2-door-refrigerator',
    price: 845000,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'cart-2',
    productId: '2',
    name: 'LG Inverter Air Conditioner',
    slug: 'lg-inverter-air-conditioner',
    price: 620000,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80'
  }
];
