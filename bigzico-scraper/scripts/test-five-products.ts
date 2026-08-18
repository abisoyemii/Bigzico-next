import * as dotenv from 'dotenv';
import * as path from 'path';
import { getBuildId } from '../src/plugins/fouani/getBuildId';
import { fetchProduct } from '../src/plugins/fouani/fetchProduct';
import { parseProduct } from '../src/plugins/fouani/parser';
import { normalizeProduct } from '../src/plugins/fouani/normalizer';
import { canonicalizeFouaniProduct } from '../src/plugins/fouani/canonicalize';
import { ProductRepository } from '../src/services/productRepository';

const ids = [273, 1091, 839, 70, 350];

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function countProducts() {
  if (!supabaseUrl || !supabaseKey) {
    return { exists: false, count: null, error: 'MISSING_ENV' };
  }

  try {
    const base = supabaseUrl.replace(/\/rest\/v1\/?$/, '');
    const url = new URL('/rest/v1/products?select=count', base).toString();
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${supabaseKey}`,
        apikey: supabaseKey,
        Accept: 'application/json',
      },
    });

    if (response.status === 404) {
      return { exists: false, count: 0, error: 'TABLE_NOT_FOUND' };
    }

    const text = await response.text();
    if (!response.ok) {
      return { exists: false, count: null, error: `HTTP_${response.status}: ${text.slice(0, 200)}` };
    }

    const parsed = JSON.parse(text);
    const count = Array.isArray(parsed)
      ? Number(parsed[0]?.count ?? 0)
      : Number(parsed?.count ?? 0);

    return { exists: true, count, error: null };
  } catch (error) {
    return {
      exists: false,
      count: null,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

async function saveFive(idsToRun: number[]) {
  const results = {
    productsFetched: 0,
    productsNormalized: 0,
    productsSaved: 0,
    productsFailed: 0,
    savedRows: [] as Array<{ source: string; source_id: string; action: string }>,
    errors: [] as string[],
  };

  const buildId = await getBuildId();

  for (const id of idsToRun) {
    try {
      results.productsFetched += 1;
      const raw = await fetchProduct(buildId, id);
      const parsed = parseProduct(raw);
      const normalized = normalizeProduct(parsed);
      const canonical = canonicalizeFouaniProduct(normalized);
      results.productsNormalized += 1;

      const repo = new ProductRepository();
      const upsertResult = await repo.upsert(canonical);

      if (upsertResult.action === 'inserted' || upsertResult.action === 'updated') {
        results.productsSaved += 1;
        results.savedRows.push({
          source: canonical.source,
          source_id: canonical.sourceId,
          action: upsertResult.action,
        });
      } else {
        results.productsFailed += 1;
        results.errors.push(`ID ${id}: ${upsertResult.error ?? 'upsert failed'}`);
      }
    } catch (error) {
      results.productsFailed += 1;
      results.errors.push(`ID ${id}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  return results;
}

async function main() {
  const before = await countProducts();
  const first = await saveFive(ids);
  const afterFirst = await countProducts();
  const second = await saveFive(ids);
  const afterSecond = await countProducts();

  console.log(JSON.stringify({
    productsFetched: first.productsFetched,
    productsSuccessfullyNormalized: first.productsNormalized,
    productsSuccessfullySaved: first.productsSaved,
    productsFailed: first.productsFailed,
    supabaseRowCountBefore: before.count,
    supabaseRowCountAfterFirstRun: afterFirst.count,
    supabaseRowCountAfterSecondRun: afterSecond.count,
    sourceAndSourceIdsSaved: first.savedRows,
    duplicateRowsCreated: afterSecond.count !== afterFirst.count ? 'yes' : 'no',
    errors: first.errors.concat(second.errors),
    secondRunSaved: second.productsSaved,
  }, null, 2));
}

main().catch((error) => {
  console.error('TOP_LEVEL_ERROR=' + (error instanceof Error ? error.message : String(error)));
  process.exit(1);
});
