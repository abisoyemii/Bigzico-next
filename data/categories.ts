export interface CategoryPageContent {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  filters: string[];
  benefits: string[];
  faqs: Array<{ question: string; answer: string }>;
  keywords: string[];
}

export const categoryPageContent: CategoryPageContent[] = [
  {
    slug: 'air-conditioners',
    name: 'Air Conditioners',
    subtitle: 'Premium cooling for modern homes and offices',
    description: 'Cool every room with powerful AC units and professional installation support from BIGZICO.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    filters: ['Split AC', 'Window AC', 'Portable AC', 'Commercial AC'],
    benefits: ['Rapid Cooling', 'Energy Efficient', 'Smart Control', 'Quiet Operation'],
    faqs: [
      { question: 'How fast is delivery?', answer: 'We offer same-day delivery in major Nigerian cities and fast dispatch nationwide.' },
      { question: 'Do you provide installation?', answer: 'Yes. We provide installation support for split, window, and inverter AC units.' },
      { question: 'Are the products genuine?', answer: 'All products are sourced from trusted brands and backed by warranty coverage.' },
    ],
    keywords: ['air conditioner', 'split ac', 'inverter ac', 'window ac'],
  },
  {
    slug: 'refrigerators',
    name: 'Refrigerators',
    subtitle: 'Fresh food storage that keeps every meal safe',
    description: 'Keep food fresh longer with premium refrigerators from trusted brands.',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1200&q=80',
    filters: ['Double Door', 'Side by Side', 'French Door', 'Mini Fridge'],
    benefits: ['Large Storage', 'Energy Saving', 'Smart Cooling', 'Fresh Food Technology'],
    faqs: [
      { question: 'Do you offer delivery and installation?', answer: 'Yes. Our team delivers and helps install large refrigerator units at your preferred location.' },
      { question: 'What warranty is included?', answer: 'Most models include a manufacturer warranty and optional extended support.' },
      { question: 'Which fridge size suits me?', answer: 'We help you choose based on household size, kitchen space, and cooling needs.' },
    ],
    keywords: ['fridge', 'freezer', 'double door refrigerator', 'frost-free'],
  },
  {
    slug: 'freezers',
    name: 'Freezers',
    subtitle: 'Reliable cold storage for homes and businesses',
    description: 'Store bulk food, fish, meat, and frozen goods safely with dependable freezers.',
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=1200&q=80',
    filters: ['Chest Freezer', 'Upright Freezer', 'Deep Freezer', 'Commercial Freezer'],
    benefits: ['Deep Freeze Capacity', 'Energy Saving', 'Easy Access', 'Commercial Grade'],
    faqs: [
      { question: 'Do you deliver to businesses?', answer: 'Yes. We work with homes, restaurants, and stores across Nigeria.' },
      { question: 'Are freezers suitable for power fluctuations?', answer: 'Many of our units are built with efficient compressors that help preserve performance.' },
    ],
    keywords: ['freezer', 'chest freezer', 'upright freezer'],
  },
  {
    slug: 'washing-machines',
    name: 'Washing Machines',
    subtitle: 'Modern laundry solutions with smart efficiency',
    description: 'Modern washing solutions with smart technology and energy efficiency for every home.',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80',
    filters: ['Front Load', 'Top Load', 'Semi Automatic', 'Twin Tub'],
    benefits: ['Fast Wash', 'Energy Saving', 'Gentle Care', 'Smart Programs'],
    faqs: [
      { question: 'Do you deliver washing machines?', answer: 'Yes. We deliver and can arrange installation for selected units.' },
      { question: 'Which model is best for family use?', answer: 'We recommend based on load capacity, energy usage, and available space.' },
    ],
    keywords: ['washing machine', 'front load', 'top load', 'laundry'],
  },
  {
    slug: 'televisions',
    name: 'Televisions',
    subtitle: 'Immersive entertainment with crystal-clear visuals',
    description: 'Enjoy cinema-style viewing with premium smart TVs and rich sound quality.',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?auto=format&fit=crop&w=1200&q=80',
    filters: ['Smart TV', '4K', 'OLED', 'LED'],
    benefits: ['4K Visuals', 'Smart Connectivity', 'Immersive Sound', 'Energy Efficient'],
    faqs: [
      { question: 'Do you provide wall mounting?', answer: 'Yes. We can arrange installation and wall-mount support for compatible TVs.' },
      { question: 'Are smart TVs available?', answer: 'Yes. We stock both smart TVs and standard LED models.' },
    ],
    keywords: ['smart tv', '4k tv', 'oled tv', 'television'],
  },
  {
    slug: 'generators',
    name: 'Generators',
    subtitle: 'Reliable power backup for homes and businesses',
    description: 'Enjoy peace of mind with dependable generators engineered for Nigerian power conditions.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    filters: ['Petrol', 'Diesel', 'Silent Generator', 'Industrial'],
    benefits: ['Instant Backup', 'Fuel Efficient', 'Long Runtime', 'Business Ready'],
    faqs: [
      { question: 'Which generator is right for me?', answer: 'We help match the output, fuel type, and runtime to your needs.' },
      { question: 'Do you offer installation?', answer: 'We can advise on setup for homes, offices, and small commercial sites.' },
    ],
    keywords: ['generator', 'petrol generator', 'inverter generator', 'silent generator'],
  },
  {
    slug: 'laptops',
    name: 'Laptops',
    subtitle: 'Powerful computing for work, study, and play',
    description: 'Choose stylish laptops designed for speed, clarity, and all-day productivity.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80',
    filters: ['Business', 'Student', 'Gaming', 'Ultra Slim'],
    benefits: ['Portable Performance', 'Long Battery', 'Fast Storage', 'High Resolution'],
    faqs: [
      { question: 'Do you sell branded laptops?', answer: 'Yes. We stock reliable laptop brands and accessories.' },
      { question: 'Are there financing options?', answer: 'We offer flexible payment options on select devices.' },
    ],
    keywords: ['laptop', 'portable computer', 'gaming laptop'],
  },
  {
    slug: 'smartphones',
    name: 'Smartphones',
    subtitle: 'Modern mobile technology in your hands',
    description: 'Browse the latest smartphones with impressive cameras, long battery life, and smooth performance.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
    filters: ['Android', 'iOS', 'Budget', '5G'],
    benefits: ['Fast Performance', 'Great Camera', '5G Ready', 'All-Day Battery'],
    faqs: [
      { question: 'Do you offer warranty?', answer: 'Yes. Eligible devices include manufacturer warranty and after-sales support.' },
      { question: 'Can I order from anywhere?', answer: 'Yes. Nationwide delivery is available for most models.' },
    ],
    keywords: ['smartphone', 'android phone', 'mobile phone'],
  },
];

export function getCategoryPageContent(slug: string) {
  return categoryPageContent.find((item) => item.slug === slug) ?? categoryPageContent[0];
}

export const categoryNavigation = categoryPageContent.map((item) => ({
  name: item.name,
  slug: item.slug,
  image: item.image,
}));
