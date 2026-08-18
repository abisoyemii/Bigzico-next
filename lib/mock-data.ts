// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Brand {
  id: string;
  slug: string;
  name: string;
  logo: string;
  country: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  // Identity
  id: string;
  slug: string;
  sku: string;
  name: string;
  // Classification
  brand: string;
  brandSlug: string;
  category: string;
  categorySlug: string;
  subcategory?: string;
  // Content
  shortDescription: string;
  description: string;
  features: string[];
  specifications: ProductSpecification[];
  tags: string[];
  // Media
  thumbnail: string;
  images: string[];
  // Pricing
  price: number;
  compareAtPrice?: number;
  // Inventory
  stock: number;
  isActive: boolean;
  // Social proof
  rating: number;
  reviewCount: number;
  reviews: Review[];
  // Flags
  isFeatured: boolean;
  isFlashSale: boolean;
  isBestSeller: boolean;
  // Compatibility aliases for legacy UI
  image?: string;
  featured?: boolean;
  flashSale?: boolean;
  bestSeller?: boolean;
  oldPrice?: number;
  // After-sales
  warranty: string;
  // Category page metadata
  discount?: number;
  badge?: string;
  delivery?: string;
  whatsappMessage?: string;
  trending?: boolean;
}

// ─── Categories ──────────────────────────────────────────────────────────────

export const categories: Category[] = [
  {
    id: 'cat-001',
    slug: 'refrigerators',
    name: 'Refrigerators',
    description: 'Keep your food fresh longer with energy-efficient refrigerators from top brands. Perfect for homes, offices, and businesses across Nigeria.',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=900&q=80',
    productCount: 0,
  },
  {
    id: 'cat-002',
    slug: 'freezers',
    name: 'Freezers',
    description: 'Store bulk food, fish, meat, and frozen goods safely with our chest and upright freezers. Ideal for homes, supermarkets, and cold rooms.',
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=900&q=80',
    productCount: 0,
  },
  {
    id: 'cat-003',
    slug: 'air-conditioners',
    name: 'Air Conditioners',
    description: 'Beat the Nigerian heat with inverter and split AC units engineered for tropical climates. Energy-saving, quiet, and built to last.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    productCount: 0,
  },
  {
    id: 'cat-004',
    slug: 'washing-machines',
    name: 'Washing Machines',
    description: 'Top-load and front-load washing machines that deliver a thorough clean while saving water and electricity.',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80',
    productCount: 0,
  },
  {
    id: 'cat-005',
    slug: 'televisions',
    name: 'Televisions',
    description: 'Experience cinema-quality visuals at home with our 4K, OLED, and Smart TVs.',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?auto=format&fit=crop&w=900&q=80',
    productCount: 0,
  },
  {
    id: 'cat-006',
    slug: 'microwaves',
    name: 'Microwaves',
    description: 'Reheat, defrost, and cook faster with our range of solo and convection microwave ovens.',
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=900&q=80',
    productCount: 0,
  },
  {
    id: 'cat-007',
    slug: 'generators',
    name: 'Generators',
    description: 'Never lose power again. Reliable petrol and gas generators for homes, shops, and offices.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    productCount: 0,
  },
  {
    id: 'cat-008',
    slug: 'kitchen-appliances',
    name: 'Kitchen Appliances',
    description: 'Blenders, toasters, kettles, air fryers, and more. Quality small appliances for every Nigerian kitchen.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
    productCount: 0,
  },
];

// ─── Brands ──────────────────────────────────────────────────────────────────

export const brands: Brand[] = [
  { id: 'brand-001', slug: 'lg',               name: 'LG',               logo: '', country: 'South Korea' },
  { id: 'brand-002', slug: 'samsung',          name: 'Samsung',          logo: '', country: 'South Korea' },
  { id: 'brand-003', slug: 'hisense',          name: 'Hisense',          logo: '', country: 'China'       },
  { id: 'brand-004', slug: 'nexus',            name: 'Nexus',            logo: '', country: 'Nigeria'     },
  { id: 'brand-005', slug: 'haier-thermocool', name: 'Haier Thermocool', logo: '', country: 'Nigeria'     },
  { id: 'brand-006', slug: 'scanfrost',        name: 'Scanfrost',        logo: '', country: 'Nigeria'     },
  { id: 'brand-007', slug: 'panasonic',        name: 'Panasonic',        logo: '', country: 'Japan'       },
  { id: 'brand-008', slug: 'binatone',         name: 'Binatone',         logo: '', country: 'UK'          },
  { id: 'brand-009', slug: 'sony',             name: 'Sony',             logo: '', country: 'Japan'       },
  { id: 'brand-010', slug: 'midea',            name: 'Midea',            logo: '', country: 'China'       },
  { id: 'brand-011', slug: 'bruhm',            name: 'Bruhm',            logo: '', country: 'Nigeria'     },
  { id: 'brand-012', slug: 'maxi',             name: 'Maxi',             logo: '', country: 'Nigeria'     },
];

// ─── Products ─────────────────────────────────────────────────────────────────

const productCatalog: Product[] = [

  // ── Refrigerators ──────────────────────────────────────────────────────────

  {
    id: 'prod-001',
    slug: 'lg-516l-double-door-refrigerator',
    sku: 'LG-REF-516-DD',
    name: 'LG 516L Double Door Refrigerator',
    brand: 'LG',
    brandSlug: 'lg',
    category: 'Refrigerators',
    categorySlug: 'refrigerators',
    subcategory: 'Double Door',
    shortDescription: 'Frost-free double door fridge with Smart Inverter Compressor.',
    description: 'The LG 516L Double Door Refrigerator delivers superior cooling with its Smart Inverter Compressor that adjusts speed to maintain consistent temperatures. Door Cooling+ blasts cold air from both door vents and the back panel for even distribution. Linear Cooling keeps fluctuations within 0.5°C, keeping food fresh up to 2× longer — ideal for large Nigerian families.',
    features: [
      'Smart Inverter Compressor',
      'Door Cooling+ technology',
      'Linear Cooling (±0.5°C)',
      'Frost-free operation',
      'LED interior lighting',
      'Humidity-controlled crisper',
    ],
    specifications: [
      { label: 'Capacity', value: '516 Litres' },
      { label: 'Type', value: 'Double Door' },
      { label: 'Colour', value: 'Platinum Silver' },
      { label: 'Energy Rating', value: 'A+' },
      { label: 'Noise Level', value: '35 dB' },
      { label: 'Dimensions (H×W×D)', value: '179 × 70 × 74 cm' },
    ],
    tags: ['refrigerator', 'double door', 'frost-free', 'inverter', 'lg', 'large capacity'],
    thumbnail: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=900&q=80',
    ],
    price: 985000,
    compareAtPrice: 1150000,
    stock: 14,
    isActive: true,
    rating: 4.8,
    reviewCount: 143,
    reviews: [
      { id: 'rev-001a', customerName: 'Chukwuemeka Obi',   rating: 5, title: 'Excellent fridge!',   comment: 'Very spacious and keeps food fresh for days. The inverter compressor saves electricity.', date: '2025-03-12' },
      { id: 'rev-001b', customerName: 'Fatima Aliyu',      rating: 5, title: 'Worth every kobo',    comment: 'Delivery was fast and the fridge is exactly as described. Very happy.', date: '2025-02-28' },
      { id: 'rev-001c', customerName: 'Tunde Adeyemi',     rating: 4, title: 'Great product',       comment: 'Good cooling. A bit loud at first but settled after a few days.', date: '2025-01-15' },
    ],
    isFeatured: true,
    isFlashSale: false,
    isBestSeller: true,
    warranty: '2 Years Manufacturer Warranty',
  },

  {
    id: 'prod-002',
    slug: 'samsung-400l-top-mount-refrigerator',
    sku: 'SAM-REF-400-TM',
    name: 'Samsung 400L Top Mount Refrigerator',
    brand: 'Samsung',
    brandSlug: 'samsung',
    category: 'Refrigerators',
    categorySlug: 'refrigerators',
    subcategory: 'Top Mount',
    shortDescription: 'All-round cooling with Twin Cooling Plus technology.',
    description: 'The Samsung 400L Top Mount Refrigerator uses Twin Cooling Plus with two independent evaporators to keep the fridge and freezer at optimal humidity. All-Around Cooling places vents on all sides for even temperature. SpaceMax technology maximises internal capacity without increasing external size — perfect for Nigerian apartments.',
    features: [
      'Twin Cooling Plus',
      'All-Around Cooling vents',
      'SpaceMax internal design',
      'Power Freeze & Power Cool',
      'Deodorising filter',
      'Tempered glass shelves',
    ],
    specifications: [
      { label: 'Capacity', value: '400 Litres' },
      { label: 'Type', value: 'Top Mount' },
      { label: 'Colour', value: 'Refined Inox' },
      { label: 'Energy Rating', value: 'A+' },
      { label: 'Noise Level', value: '37 dB' },
      { label: 'Dimensions (H×W×D)', value: '170 × 65 × 68 cm' },
    ],
    tags: ['refrigerator', 'top mount', 'samsung', 'twin cooling', 'family size'],
    thumbnail: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=900&q=80',
    ],
    price: 845000,
    compareAtPrice: 980000,
    stock: 9,
    isActive: true,
    rating: 4.7,
    reviewCount: 118,
    reviews: [
      { id: 'rev-002a', customerName: 'Ngozi Eze',          rating: 5, title: 'Superb cooling',  comment: 'Twin cooling keeps my vegetables crisp for over a week.', date: '2025-04-01' },
      { id: 'rev-002b', customerName: 'Babatunde Fashola',  rating: 4, title: 'Solid build',     comment: 'Heavy and well-built. BIGZICO installation team was professional.', date: '2025-03-20' },
    ],
    isFeatured: true,
    isFlashSale: true,
    isBestSeller: true,
    warranty: '2 Years Manufacturer Warranty',
  },

  {
    id: 'prod-003',
    slug: 'hisense-195l-single-door-refrigerator',
    sku: 'HIS-REF-195-SD',
    name: 'Hisense 195L Single Door Refrigerator',
    brand: 'Hisense',
    brandSlug: 'hisense',
    category: 'Refrigerators',
    categorySlug: 'refrigerators',
    subcategory: 'Single Door',
    shortDescription: 'Compact and energy-efficient fridge for small households.',
    description: 'The Hisense 195L Single Door Refrigerator is ideal for small families, studio apartments, and offices. It features a mechanical thermostat, large vegetable crisper, and full-width freezer compartment. CFC-free refrigerant and low power consumption make it perfect for areas with unstable electricity supply.',
    features: [
      'Mechanical thermostat (7 settings)',
      'Full-width freezer compartment',
      'Large vegetable crisper',
      'CFC-free refrigerant',
      'Recessed door handle',
      'Low-voltage start',
    ],
    specifications: [
      { label: 'Capacity', value: '195 Litres' },
      { label: 'Type', value: 'Single Door' },
      { label: 'Colour', value: 'White' },
      { label: 'Energy Rating', value: 'A' },
      { label: 'Noise Level', value: '40 dB' },
      { label: 'Dimensions (H×W×D)', value: '143 × 55 × 57 cm' },
    ],
    tags: ['refrigerator', 'single door', 'hisense', 'compact', 'budget', 'energy saving'],
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=900&q=80',
    ],
    price: 285000,
    compareAtPrice: 320000,
    stock: 27,
    isActive: true,
    rating: 4.4,
    reviewCount: 87,
    reviews: [
      { id: 'rev-003a', customerName: 'Amaka Okonkwo', rating: 4, title: 'Good for a small flat',    comment: 'Fits perfectly in my kitchen. Keeps things cold and the freezer works well.', date: '2025-02-10' },
      { id: 'rev-003b', customerName: 'Emeka Nwosu',   rating: 5, title: 'Affordable and reliable', comment: 'Best budget fridge I have owned. Running smoothly for 6 months.', date: '2024-12-05' },
    ],
    isFeatured: false,
    isFlashSale: true,
    isBestSeller: false,
    warranty: '1 Year Manufacturer Warranty',
  },

  {
    id: 'prod-004',
    slug: 'haier-thermocool-320l-bottom-freezer-refrigerator',
    sku: 'HTC-REF-320-BF',
    name: 'Haier Thermocool 320L Bottom Freezer Refrigerator',
    brand: 'Haier Thermocool',
    brandSlug: 'haier-thermocool',
    category: 'Refrigerators',
    categorySlug: 'refrigerators',
    subcategory: 'Bottom Freezer',
    shortDescription: 'Bottom freezer design with No Frost technology for Nigerian homes.',
    description: 'The Haier Thermocool 320L Bottom Freezer Refrigerator puts the fresh food section at eye level for easy access. The No Frost system eliminates manual defrosting. Multi-airflow circulates cold air evenly, keeping food fresher longer. The large bottom freezer drawer is perfect for bulk meat, fish, and frozen goods.',
    features: [
      'No Frost system',
      'Multi-airflow cooling',
      'Bottom freezer drawer',
      'Adjustable glass shelves',
      'LED interior lighting',
      'Electronic temperature display',
    ],
    specifications: [
      { label: 'Capacity', value: '320 Litres' },
      { label: 'Type', value: 'Bottom Freezer' },
      { label: 'Colour', value: 'Inox Silver' },
      { label: 'Energy Rating', value: 'A+' },
      { label: 'Noise Level', value: '38 dB' },
      { label: 'Dimensions (H×W×D)', value: '185 × 60 × 65 cm' },
    ],
    tags: ['refrigerator', 'bottom freezer', 'haier thermocool', 'no frost', 'mid-size'],
    thumbnail: 'https://images.unsplash.com/photo-1626147116986-4601771470a6?auto=format&fit=crop&w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1626147116986-4601771470a6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=900&q=80',
    ],
    price: 620000,
    compareAtPrice: 710000,
    stock: 6,
    isActive: true,
    rating: 4.5,
    reviewCount: 64,
    reviews: [
      { id: 'rev-004a', customerName: 'Yetunde Balogun', rating: 5, title: 'Love the bottom freezer', comment: 'Very convenient. I no longer bend down to reach my vegetables.', date: '2025-03-08' },
      { id: 'rev-004b', customerName: 'Musa Garba',      rating: 4, title: 'Reliable brand',          comment: 'Thermocool never disappoints. Quiet and efficient.', date: '2025-01-22' },
    ],
    isFeatured: true,
    isFlashSale: false,
    isBestSeller: false,
    warranty: '2 Years Manufacturer Warranty',
  },

  {
    id: 'prod-005',
    slug: 'midea-560l-side-by-side-refrigerator',
    sku: 'MID-REF-560-SBS',
    name: 'Midea 560L Side-by-Side Refrigerator',
    brand: 'Midea',
    brandSlug: 'midea',
    category: 'Refrigerators',
    categorySlug: 'refrigerators',
    subcategory: 'Side by Side',
    shortDescription: 'Premium side-by-side fridge with built-in water and ice dispenser.',
    description: 'The Midea 560L Side-by-Side Refrigerator is the ultimate statement appliance for modern Nigerian homes. The built-in water and ice dispenser brings luxury convenience. No Frost across both compartments eliminates manual defrosting. Smart diagnosis self-detects issues via the LED display. Multi-zone cooling keeps different food types at ideal temperatures simultaneously.',
    features: [
      'Built-in water & ice dispenser',
      'No Frost across both compartments',
      'Smart diagnosis via LED display',
      'Multi-zone cooling',
      'Holiday mode',
      'Child lock',
    ],
    specifications: [
      { label: 'Capacity', value: '560 Litres' },
      { label: 'Type', value: 'Side by Side' },
      { label: 'Colour', value: 'Stainless Steel' },
      { label: 'Energy Rating', value: 'A++' },
      { label: 'Noise Level', value: '34 dB' },
      { label: 'Dimensions (H×W×D)', value: '178 × 91 × 72 cm' },
    ],
    tags: ['refrigerator', 'side by side', 'midea', 'premium', 'ice dispenser', 'large capacity'],
    thumbnail: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=900&q=80',
    images: [
      'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1626147116986-4601771470a6?auto=format&fit=crop&w=900&q=80',
    ],
    price: 1450000,
    compareAtPrice: 1700000,
    stock: 4,
    isActive: true,
    rating: 4.6,
    reviewCount: 39,
    reviews: [
      { id: 'rev-005a', customerName: 'Oluwaseun Adebayo', rating: 5, title: 'Absolutely stunning', comment: 'This fridge is the centrepiece of my kitchen. Ice dispenser works perfectly.', date: '2025-04-10' },
      { id: 'rev-005b', customerName: 'Hauwa Musa',        rating: 4, title: 'Premium quality',     comment: 'Very spacious and well-designed. Delivery and installation were seamless.', date: '2025-03-25' },
    ],
    isFeatured: true,
    isFlashSale: true,
    isBestSeller: true,
    warranty: '3 Years Manufacturer Warranty',
  },

];

// ─── Derived arrays (auto-computed — never manually duplicated) ───────────────

export const products: Product[] = productCatalog.map((product) => ({
  ...product,
  image: product.thumbnail,
  featured: product.isFeatured,
  flashSale: product.isFlashSale,
  bestSeller: product.isBestSeller,
  oldPrice: product.compareAtPrice,
}));

export const featuredProducts: Product[]    = products.filter((p) => p.isFeatured || p.featured);
export const flashSaleProducts: Product[]   = products.filter((p) => p.isFlashSale || p.flashSale);
export const bestSellingProducts: Product[] = products.filter((p) => p.isBestSeller || p.bestSeller);
export const newArrivalsProducts: Product[] = products.slice(0, 8);
