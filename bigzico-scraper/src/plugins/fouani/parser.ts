export function parseProduct(raw: any) {
  const product = raw?.pageProps?.data?.data;

  if (!product) {
    throw new Error("Invalid product response.");
  }

  // ===========================
  // Images
  // ===========================
  const images: string[] = [];

  // Main image
  if (product.image?.base_url && product.image?.origin) {
    images.push(`${product.image.base_url}/${product.image.origin}`);
  }

  // Gallery images
  if (Array.isArray(product.images)) {
    for (const img of product.images) {
      if (img?.base_url && img?.origin) {
        images.push(`${img.base_url}/${img.origin}`);
      }
    }
  }

  // Remove duplicates
  const uniqueImages = [...new Set(images)];

  // ===========================
  // Brand
  // ===========================
  const brand = product.brand ?? {};

  const brandImage =
    brand.image?.base_url && brand.image?.origin
      ? `${brand.image.base_url}/${brand.image.origin}`
      : null;

  // ===========================
  // Category
  // ===========================
  const category = product.product_categories?.[0] ?? {};

  const subcategory = category.sub_categories?.[0] ?? {};

  return {
    // Identity
    id: product.id ?? null,
    uuid: product.uuid ?? null,

    // Basic Info
    name: product.name ?? null,
    sku: product.product_branch?.sku ?? null,
    description: product.description ?? null,

    // Brand
    brandId: brand.id ?? null,
    brandName: brand.name ?? null,
    brandImage,

    // Category
    categoryId: category.id ?? null,
    categoryName: category.name ?? null,

    subcategoryId: subcategory.id ?? null,
    subcategoryName: subcategory.name ?? null,

    // Pricing
    price: product.display_price ?? 0,
    discountedPrice: product.display_discounted_price ?? 0,

    // Inventory
    stock: product.display_quantity ?? 0,

    // Images
    images: uniqueImages,

    // Rating
    rating: product.rating ?? null,

    // Extras
    barcodes: product.barcodes ?? [],
    attributes: product.attributes ?? [],
    variants: product.variants ?? [],
    variations: product.variations ?? [],
    related: product.related ?? [],
    files: product.files ?? [],
    tags: product.tags ?? [],

    // Statistics
    views: product.nb_views ?? 0,

    // Dates
    createdAt: product.created_at ?? null,
    updatedAt: product.last_synced_at ?? null,

    // Keep original API response
    metadata: product,
  };
}