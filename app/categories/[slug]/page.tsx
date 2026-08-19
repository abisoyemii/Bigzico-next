import { notFound } from 'next/navigation';
import { CategoryPageTemplate } from '@/components/category/CategoryPageTemplate';
import { getCategoryPageContent } from '@/data/categories';
import type { Product } from '@/lib/product';
import { prisma } from '@/lib/prisma';

const categoryNames: Record<string, string> = {
  refrigerators: 'Refrigerators',
  freezers: 'Freezers',
  'air-conditioners': 'Air Conditioners',
  'washing-machines': 'Washing Machines',
  televisions: 'Televisions',
  generators: 'Generators',
  microwaves: 'Microwaves',
  'kitchen-appliances': 'Kitchen Appliances',
  smartphones: 'Smartphones',
  laptops: 'Laptops',
};

const CATEGORY_RULES = [
  {
    slug: 'refrigerators',
    name: 'Refrigerators',
    keywords: ['refrigerator', 'fridge'],
  },
  {
    slug: 'freezers',
    name: 'Freezers',
    keywords: ['freezer', 'deep freezer', 'chest freezer'],
  },
  {
    slug: 'air-conditioners',
    name: 'Air Conditioners',
    keywords: [
      'air conditioner',
      'airconditioner',
      'split ac',
      'inverter ac',
      'standing ac',
    ],
  },
  {
    slug: 'washing-machines',
    name: 'Washing Machines',
    keywords: ['washing machine', 'washer', 'washer dryer'],
  },
  {
    slug: 'televisions',
    name: 'Televisions',
    keywords: [
      'television',
      'smart tv',
      'led tv',
      'oled tv',
      'qled',
      'qned',
      'google tv',
    ],
  },
  {
    slug: 'generators',
    name: 'Generators',
    keywords: ['generator', 'genset'],
  },
  {
    slug: 'microwaves',
    name: 'Microwaves',
    keywords: ['microwave', 'microwave oven'],
  },
  {
    slug: 'kitchen-appliances',
    name: 'Kitchen Appliances',
    keywords: [
      'mixer',
      'blender',
      'air fryer',
      'kettle',
      'toaster',
      'cooker',
      'oven',
      'food processor',
      'coffee maker',
      'kitchen machine',
      'rice cooker',
    ],
  },
  {
    slug: 'smartphones',
    name: 'Smartphones',
    keywords: [
      'smartphone',
      'iphone',
      'android phone',
      'mobile phone',
      'galaxy',
    ],
  },
  {
    slug: 'laptops',
    name: 'Laptops',
    keywords: ['laptop', 'notebook', 'macbook', 'chromebook'],
  },
];

function detectCategory(product: {
  name: string;
  brand?: string | null;
  tags?: unknown;
}) {
  const tags = Array.isArray(product.tags)
    ? product.tags.map(String).join(' ')
    : '';

  const text = [
    product.name,
    product.brand ?? '',
    tags,
  ]
    .join(' ')
    .toLowerCase();

  const match = CATEGORY_RULES.find((rule) =>
    rule.keywords.some((keyword) =>
      text.includes(keyword.toLowerCase())
    )
  );

  return match
    ? {
        category: match.name,
        categorySlug: match.slug,
      }
    : {
        category: 'Other Appliances',
        categorySlug: 'other-appliances',
      };
}

function serializeProduct(product: any): Product {
  const category = detectCategory(product);

  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    description: product.description,
    shortDescription: product.short_description,

    price: Number(product.price),
    compareAtPrice:
      product.compare_at_price !== null
        ? Number(product.compare_at_price)
        : null,

    stock: product.stock,
    sku: product.sku,
    brand: product.brand,

    categoryId: product.category_id,
    category: category.category,
    categorySlug: category.categorySlug,

    images: Array.isArray(product.images)
      ? product.images
      : [],

    thumbnail: product.thumbnail,

    isFeatured: product.is_featured,
    isActive: product.is_active,

    tags: Array.isArray(product.tags)
      ? product.tags.map(String)
      : [],

    rating:
      product.rating !== null
        ? Number(product.rating)
        : null,

    reviewCount: product.review_count,

    warranty: product.warranty,
    dimensions: product.dimensions,

    weight:
      product.weight !== null
        ? Number(product.weight)
        : null,

    source: product.source,
    sourceId: product.source_id,
    sourceUrl: product.source_url,

    scrapedAt: product.scraped_at?.toISOString?.() ?? null,
    createdAt: product.created_at?.toISOString?.(),
    updatedAt: product.updated_at?.toISOString?.(),

    isFlashSale: false,
    isBestSeller: false,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getCategoryPageContent(slug);

  return {
    title: `${content.name} | BIGZICO`,
    description: content.description,
    keywords: content.keywords.join(', '),
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const content = getCategoryPageContent(slug);
  const categoryName = categoryNames[slug];

  if (!categoryName) {
    notFound();
  }

  const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

const dbProducts = await prisma.products.findMany({
  where: {
    is_active: true,
  },
  orderBy: {
    created_at: 'desc',
  },
});

const products: Product[] = dbProducts.map((product: any) => {
  const name = product.name.toLowerCase();

  let categorySlug = 'other-appliances';
  let category = 'Other Appliances';

  if (
    name.includes('refrigerator') ||
    name.includes('fridge')
  ) {
    categorySlug = 'refrigerators';
    category = 'Refrigerators';
  } else if (
    name.includes('freezer')
  ) {
    categorySlug = 'freezers';
    category = 'Freezers';
  } else if (
    name.includes('air conditioner') ||
    name.includes('split ac') ||
    name.includes('inverter ac')
  ) {
    categorySlug = 'air-conditioners';
    category = 'Air Conditioners';
  } else if (
    name.includes('washing machine') ||
    name.includes('washer')
  ) {
    categorySlug = 'washing-machines';
    category = 'Washing Machines';
  } else if (
    name.includes('television') ||
    name.includes('smart tv') ||
    name.includes(' led tv') ||
    name.includes(' oled') ||
    name.includes(' qled') ||
    name.includes(' qned') ||
    name.includes(' tv ')
  ) {
    categorySlug = 'televisions';
    category = 'Televisions';
  } else if (
    name.includes('generator') ||
    name.includes('genset')
  ) {
    categorySlug = 'generators';
    category = 'Generators';
  } else if (
    name.includes('microwave')
  ) {
    categorySlug = 'microwaves';
    category = 'Microwaves';
  } else if (
    name.includes('mixer') ||
    name.includes('blender') ||
    name.includes('air fryer') ||
    name.includes('kettle') ||
    name.includes('toaster') ||
    name.includes('cooker') ||
    name.includes('oven')
  ) {
    categorySlug = 'kitchen-appliances';
    category = 'Kitchen Appliances';
  } else if (
    name.includes('smartphone') ||
    name.includes('iphone') ||
    name.includes('galaxy')
  ) {
    categorySlug = 'smartphones';
    category = 'Smartphones';
  } else if (
    name.includes('laptop') ||
    name.includes('macbook') ||
    name.includes('chromebook')
  ) {
    categorySlug = 'laptops';
    category = 'Laptops';
  }

  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    description: product.description,
    shortDescription: product.short_description,
    price: Number(product.price),
    compareAtPrice:
      product.compare_at_price !== null
        ? Number(product.compare_at_price)
        : null,
    stock: product.stock,
    sku: product.sku,
    brand: product.brand,
    categoryId: product.category_id,
    category,
    categorySlug,
    images: Array.isArray(product.images) ? product.images : [],
    thumbnail: product.thumbnail,
    isFeatured: product.is_featured,
    isActive: product.is_active,
    tags: Array.isArray(product.tags)
      ? product.tags.map(String)
      : [],
    rating:
      product.rating !== null
        ? Number(product.rating)
        : null,
    reviewCount: product.review_count,
    warranty: product.warranty,
    dimensions: product.dimensions,
    weight:
      product.weight !== null
        ? Number(product.weight)
        : null,
    source: product.source,
    sourceId: product.source_id,
    sourceUrl: product.source_url,
    scrapedAt: product.scraped_at?.toISOString?.() ?? null,
    createdAt: product.created_at?.toISOString?.(),
    updatedAt: product.updated_at?.toISOString?.(),
    isFlashSale: false,
    isBestSeller: false,
  };
});

  const categoryProducts = products.filter(
    (product) => product.categorySlug === slug
  );

  const category = {
    slug,
    name: categoryName,
    description: content.description,
    image: content.image,
  };

  return (
    <CategoryPageTemplate
      category={category}
      content={content}
      products={categoryProducts}
    />
  );
}