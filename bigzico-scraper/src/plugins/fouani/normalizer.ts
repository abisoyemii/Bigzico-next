export interface NormalizedProduct {
  source: string;

  externalId: number | null;

  sku: string | null;

  name: string | null;

  description: string | null;

  // Brand
  brandId: number | null;
  brandName: string | null;
  brandImage: string | null;

  // Category
  categoryId: number | null;
  categoryName: string | null;

  // Subcategory
  subcategoryId: number | null;
  subcategoryName: string | null;

  // Pricing
  price: number;

  discountedPrice: number;

  // Inventory
  stock: number;

  // Images
  images: string[];

  // Rating
  rating: any;

  // Extras
  barcodes: string[];
  attributes: any[];
  variants: any[];
  variations: any[];
  related: any[];
  files: any[];
  tags: any[];

  // Dates
  createdAt: string | null;
  updatedAt: string | null;

  // Raw data
  metadata: any;
}

export function normalizeProduct(product: any): NormalizedProduct {
  return {
    source: "fouani",

    externalId: product.id ?? null,

    sku: product.sku ?? null,

    name: product.name ?? null,

    description: product.description ?? null,

    // --------------------
    // Brand
    // --------------------
    brandId: product.brandId ?? null,
    brandName: product.brandName ?? null,
    brandImage: product.brandImage ?? null,

    // --------------------
    // Category
    // --------------------
    categoryId: product.categoryId ?? null,
    categoryName: product.categoryName ?? null,

    // --------------------
    // Subcategory
    // --------------------
    subcategoryId: product.subcategoryId ?? null,
    subcategoryName: product.subcategoryName ?? null,

    // --------------------
    // Pricing
    // --------------------
    price: product.price ?? 0,
    discountedPrice: product.discountedPrice ?? 0,

    // --------------------
    // Inventory
    // --------------------
    stock: product.stock ?? 0,

    // --------------------
    // Images
    // --------------------
    images: product.images ?? [],

    // --------------------
    // Rating
    // --------------------
    rating: product.rating ?? null,

    // --------------------
    // Product Extras
    // --------------------
    barcodes: product.barcodes ?? [],
    attributes: product.attributes ?? [],
    variants: product.variants ?? [],
    variations: product.variations ?? [],
    related: product.related ?? [],
    files: product.files ?? [],
    tags: product.tags ?? [],

    // --------------------
    // Dates
    // --------------------
    createdAt: product.createdAt ?? null,
    updatedAt: product.updatedAt ?? null,

    // --------------------
    // Preserve raw data
    // --------------------
    metadata: product.metadata ?? product,
  };
}