import type { CanonicalProduct } from '../../common/productSchema';
import type { NormalizedProduct } from './normalizer';

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'product';
}

function buildUniqueSlug(name: string, sourceId: string): string {
  const base = slugify(name || `product-${sourceId}`);
  return `${base}-${sourceId}`;
}

export function canonicalizeFouaniProduct(product: NormalizedProduct): CanonicalProduct {
  const sourceId = String(product.externalId ?? product.sku ?? Date.now());
  const sourceUrl = product.metadata?.url || product.metadata?.sourceUrl || `https://fouanistore.com/nigeria-en/product/${sourceId}`;
  const images = Array.isArray(product.images) && product.images.length > 0
    ? Array.from(new Set(product.images.filter(Boolean)))
    : [product.brandImage ?? 'https://placehold.co/600x600?text=BigZico'];

  const categoryName = product.categoryName || 'Others';
  const categorySlug = categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'others';
  const name = product.name || 'Unnamed product';
  const description = product.description || product.metadata?.description || 'No description available.';
  const shortDescription = description.length > 160 ? `${description.slice(0, 157)}...` : description;
  const brandName = product.brandName || product.metadata?.brand?.name || 'Unbranded';
  const price = Number(product.price ?? 0);

  return {
    source: 'fouani',
    sourceId,
    sourceUrl,
    name,
    slug: buildUniqueSlug(product.name || `${brandName} ${categoryName} ${sourceId}`, sourceId),
    sku: product.sku ?? null,
    brand: brandName,
    category: categoryName,
    categorySlug,
    subcategory: product.subcategoryName ?? null,
    shortDescription,
    description,
    price,
    compareAtPrice: product.discountedPrice && product.discountedPrice > 0 ? Number(product.discountedPrice) : undefined,
    currency: 'NGN',
    stock: Number(product.stock ?? 0),
    isActive: Number(product.stock ?? 0) > 0,
    thumbnail: images[0] ?? null,
    images,
    tags: Array.isArray(product.tags) ? product.tags : [],
    features: product.metadata?.features ?? [],
    specifications: Array.isArray(product.metadata?.specifications) ? product.metadata.specifications : [],
    rating: typeof product.rating === 'number' ? product.rating : null,
    reviewCount: Number(product.metadata?.reviewCount ?? 0),
    warranty: product.metadata?.warranty ?? null,
    scrapedAt: new Date().toISOString(),
  };
}
