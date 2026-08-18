import { loadConfig } from '../../common/config';
import { validateCanonicalProduct } from '../../common/productSchema';
import { mapCategory } from '../../services/categoryMapper';
import { ProductRepository } from '../../services/productRepository';
import { canonicalizeFouaniProduct } from './canonicalize';
import { normalizeProduct } from './normalizer';
import { saveProducts } from './saveProducts';
import { scrapeAllProducts } from './scrapeAllProducts';

export * from './parser';
export * from './normalizer';
export * from './discovery';

export async function runFouaniDiscovery() {
  const config = loadConfig();
  const start = Date.now();
  const repo = new ProductRepository();

  console.log('=== Fouani Discovery ===');
  console.log('[DATABASE] Direct Supabase import enabled');

  // 1. Discover products from Fouani
  const discovered = await scrapeAllProducts();

  console.log(`[DISCOVERY] Found ${discovered.length} products`);

  // 2. Normalize all discovered products
  const normalized = discovered.map((product) =>
    normalizeProduct(product)
  );

  console.log(`[NORMALIZER] Processed ${normalized.length} products`);

  // 3. Get source IDs so we can distinguish inserts from updates
  const sourceIds = normalized
    .map((product) => product.externalId)
    .filter((id): id is number => id !== null)
    .map(String);

  let existingSourceIds = new Set<string>();

  try {
    existingSourceIds = await repo.getExistingSourceIds(
      'fouani',
      sourceIds
    );

    console.log(
      `[DATABASE] Existing Fouani products: ${existingSourceIds.size}`
    );
  } catch (error) {
    console.error(
      '[DATABASE] Existing product lookup failed:',
      error instanceof Error ? error.message : error
    );

    return;
  }

  let inserted = 0;
  let updated = 0;
  let invalid = 0;
  let failed = 0;

  // 4. Canonicalize → validate → write directly to Supabase
  for (const product of normalized) {
    const canonical = canonicalizeFouaniProduct(product);

    const mapped = {
      ...canonical,
      ...mapCategory(canonical.category),
    };

    const validation = validateCanonicalProduct(mapped);

    if (!validation.success) {
      invalid += 1;

      console.error('[VALIDATION ERROR]');
      console.error(`Source: ${canonical.source}`);
      console.error(`Source ID: ${canonical.sourceId}`);
      console.error(`Product: ${canonical.name}`);
      console.error(validation.errors.join('\n'));

      continue;
    }

    const exists = existingSourceIds.has(
      validation.data.sourceId
    );

    console.log(
      `[FOUANI ${exists ? 'UPDATE' : 'INSERT'}] ` +
      `sourceId=${validation.data.sourceId} ` +
      `name=${validation.data.name}`
    );

    const result = await repo.upsert(
      validation.data,
      exists
    );

    if (result.action === 'inserted') {
      inserted += 1;
    } else if (result.action === 'updated') {
      updated += 1;
    } else if (result.action === 'failed') {
      failed += 1;

      console.error(
        '[UPSERT FAILED]',
        result.error
      );
    }
  }

  // Optional local JSON backup.
  // SAVE_JSON=false by default.
  if (config.saveJson) {
    saveProducts(normalized);
  }

  const elapsedMs = Date.now() - start;
  const duration = new Date(elapsedMs)
    .toISOString()
    .slice(11, 19);

  console.log('\n====================================');
  console.log('BIGZICO SCRAPER RESULT');
  console.log('====================================');
  console.log(`Source: Fouani`);
  console.log(`Discovered: ${discovered.length}`);
  console.log(`Fetched: ${normalized.length}`);
  console.log(`Valid: ${inserted + updated}`);
  console.log(`Invalid: ${invalid}`);
  console.log(`Inserted: ${inserted}`);
  console.log(`Updated: ${updated}`);
  console.log(`Failed: ${failed}`);
  console.log(`Duration: ${duration}`);
  console.log('====================================');
}