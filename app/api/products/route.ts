import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const CATEGORY_RULES = [
  {
    slug: 'refrigerators',
    name: 'Refrigerators',
    keywords: ['refrigerator', 'fridge', 'double door fridge', 'single door fridge'],
  },
  {
    slug: 'freezers',
    name: 'Freezers',
    keywords: ['freezer', 'deep freezer', 'chest freezer', 'upright freezer'],
  },
  {
    slug: 'air-conditioners',
    name: 'Air Conditioners',
    keywords: ['air conditioner', 'airconditioner', 'split ac', 'inverter ac', 'standing ac', 'ac unit'],
  },
  {
    slug: 'washing-machines',
    name: 'Washing Machines',
    keywords: ['washing machine', 'washer', 'washer dryer', 'washing'],
  },
  {
    slug: 'televisions',
    name: 'Televisions',
    keywords: [
      'television',
      'tv',
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
    keywords: ['generator', 'genset', 'inverter generator'],
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
  source?: string | null;
}) {
  const tags = Array.isArray(product.tags)
    ? product.tags.map(String).join(' ')
    : '';

  const text = [
    product.name,
    product.brand ?? '',
    tags,
    product.source ?? '',
  ]
    .join(' ')
    .toLowerCase();

  const category = CATEGORY_RULES.find((rule) =>
    rule.keywords.some((keyword) => text.includes(keyword.toLowerCase()))
  );

  if (category) {
    return {
      category: category.name,
      categorySlug: category.slug,
    };
  }

  return {
    category: 'Other Appliances',
    categorySlug: 'other-appliances',
  };
}

function serializeProduct(product: any) {
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

    // These are calculated from the existing scraped product data.
    category: category.category,
    categorySlug: category.categorySlug,

    images: Array.isArray(product.images)
      ? product.images
      : [],

    thumbnail: product.thumbnail,

    isFeatured: product.is_featured,
    isActive: product.is_active,

    tags: Array.isArray(product.tags)
      ? product.tags
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

    scrapedAt: product.scraped_at,
    createdAt: product.created_at,
    updatedAt: product.updated_at,

    isFlashSale: false,
    isBestSeller: false,
  };
}

export async function GET() {
  try {
    const products = await prisma.products.findMany({
      where: {
        is_active: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    return NextResponse.json(products.map(serializeProduct));
  } catch (error) {
    console.error('GET /api/products error:', error);

    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}