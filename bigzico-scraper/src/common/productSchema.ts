import { z } from 'zod';

export const ProductSpecificationSchema = z.object({
  label: z.string().min(1, 'Specification label is required'),
  value: z.string().min(1, 'Specification value is required'),
});

export const CanonicalProductSchema = z.object({
  source: z.string().min(1, 'Source is required'),
  sourceId: z.string().min(1, 'sourceId is required'),
  sourceUrl: z.string().url('sourceUrl must be a valid URL'),
  name: z.string().min(1, 'Product name is required'),
  slug: z.string().min(1, 'Slug is required'),
  sku: z.string().nullable().optional(),
  brand: z.string().min(1, 'Brand is required'),
  category: z.string().min(1, 'Category is required'),
  categorySlug: z.string().min(1, 'categorySlug is required'),
  subcategory: z.string().nullable().optional(),
  shortDescription: z.string().min(1, 'shortDescription is required'),
  description: z.string().min(1, 'description is required'),
  price: z.number().positive('price must be greater than 0'),
  compareAtPrice: z.number().nonnegative().optional(),
  currency: z.string().default('NGN'),
  stock: z.number().int().nonnegative('stock must be zero or greater'),
  isActive: z.boolean().default(true),
  thumbnail: z.string().url('thumbnail must be a valid URL').nullable().optional(),
  images: z.array(z.string().url('Image URL is invalid')).min(1, 'At least one image URL is required'),
  tags: z.array(z.string()).default([]),
  features: z.array(z.string()).default([]),
  specifications: z.array(ProductSpecificationSchema).default([]),
  rating: z.number().min(0).max(5).nullable().optional(),
  reviewCount: z.number().int().nonnegative().default(0),
  warranty: z.string().nullable().optional(),
  scrapedAt: z.string().datetime({ offset: true }).default(() => new Date().toISOString()),
});

export type CanonicalProduct = z.infer<typeof CanonicalProductSchema>;

export function validateCanonicalProduct(input: unknown) {
  const result = CanonicalProductSchema.safeParse(input);

  if (!result.success) {
    return {
      success: false as const,
      errors: result.error.issues.map((issue) => `${issue.path.join('.') || 'root'}: ${issue.message}`),
      data: null,
    };
  }

  return {
    success: true as const,
    errors: [],
    data: result.data,
  };
}
