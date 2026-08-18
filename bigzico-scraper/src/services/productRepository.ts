import type { SupabaseClient } from '@supabase/supabase-js';
import type { CanonicalProduct } from '../common/productSchema';
import { buildSupabaseClient } from './supabase';

export type UpsertResult = {
  action: 'inserted' | 'updated' | 'failed' | 'skipped';
  productId?: string;
  error?: string;
};

export class ProductRepository {
  constructor(
    private readonly supabase: SupabaseClient | null = buildSupabaseClient()
  ) {}

  async getExistingSourceIds(
    source: string,
    sourceIds: string[]
  ): Promise<Set<string>> {
    if (!this.supabase || sourceIds.length === 0) {
      return new Set();
    }

    const { data, error } = await this.supabase
      .from('products')
      .select('source_id')
      .eq('source', source)
      .in('source_id', sourceIds);

    if (error) {
      throw new Error(
        `Existing source ID lookup failed: ${error.message}`
      );
    }

    return new Set(
      (data ?? [])
        .map((row) => String(row.source_id))
        .filter(Boolean)
    );
  }

  async upsert(
    product: CanonicalProduct,
    exists = false
  ): Promise<UpsertResult> {
    if (!this.supabase) {
      return {
        action: 'failed',
        error:
          'Supabase is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.',
      };
    }

    const payload = {
      source: product.source,
      source_id: product.sourceId,
      source_url: product.sourceUrl,

      name: product.name,
      slug: product.slug,
      sku: product.sku ?? null,
      brand: product.brand,

      category_id: null,

      short_description: product.shortDescription,
      description: product.description,

      price: Number(product.price),
      compare_at_price: product.compareAtPrice ?? null,

      stock: Number(product.stock),

      is_active: Boolean(product.isActive),

      thumbnail: product.thumbnail ?? null,
      images: product.images,
      tags: product.tags,

      rating: product.rating ?? null,
      review_count: Number(product.reviewCount ?? 0),

      warranty: product.warranty ?? null,

      scraped_at: product.scrapedAt,
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await this.supabase
      .from('products')
      .upsert(payload, {
        onConflict: 'source,source_id',
        ignoreDuplicates: false,
      })
      .select('id')
      .single();

    if (error) {
      return {
        action: 'failed',
        error: `Upsert failed: ${error.message}`,
      };
    }

    return {
      action: exists ? 'updated' : 'inserted',
      productId: data?.id,
    };
  }
}