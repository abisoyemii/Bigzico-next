import { CanonicalProductSchema, validateCanonicalProduct } from '../common/productSchema';

describe('CanonicalProductSchema', () => {
  it('accepts a valid scraped product', () => {
    const result = CanonicalProductSchema.safeParse({
      source: 'fouani',
      sourceId: '123456',
      sourceUrl: 'https://fouanistore.com/nigeria-en/product/123456',
      name: 'Samsung Refrigerator',
      slug: 'samsung-refrigerator',
      sku: 'SAM-REF-400',
      brand: 'Samsung',
      category: 'Refrigerators',
      categorySlug: 'refrigerators',
      shortDescription: 'A premium fridge',
      description: 'A premium fridge for a busy household',
      price: 450000,
      compareAtPrice: 520000,
      currency: 'NGN',
      stock: 12,
      isActive: true,
      thumbnail: 'https://example.com/thumb.jpg',
      images: ['https://example.com/thumb.jpg'],
      tags: ['refrigerator'],
      features: ['Inverter compressor'],
      specifications: [{ label: 'Capacity', value: '400L' }],
      rating: 4.7,
      reviewCount: 25,
      warranty: '12 months',
      scrapedAt: new Date().toISOString(),
    });

    expect(result.success).toBe(true);
  });

  it('rejects invalid products', () => {
    const result = validateCanonicalProduct({
      source: 'fouani',
      sourceId: '',
      sourceUrl: 'not-a-url',
      name: '',
      slug: '',
      price: 0,
      stock: -1,
      images: [],
    });

    expect(result.success).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });
});
