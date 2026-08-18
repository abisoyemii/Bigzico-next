import { loadConfig } from '../../common/config';
import { getBuildId } from './getBuildId';
import { discoverProducts } from './discoverProducts';
import { scrapeBatch } from './scrapeBatch';

export async function scrapeAllProducts() {
  const config = loadConfig();

  // Get the current Next.js build ID
  const buildId = await getBuildId();

  // Discover all product IDs
  let ids = await discoverProducts();

  // Apply optional product limit
  if (config.fouaniMaxProducts > 0) {
    ids = ids.slice(0, config.fouaniMaxProducts);
    console.log(
      `\nFOUANI_MAX_PRODUCTS=${config.fouaniMaxProducts} — limiting run to ${ids.length} products\n`
    );
  } else {
    console.log(`\nFound ${ids.length} products\n`);
  }

  // Process products concurrently
  const products = await scrapeBatch(buildId, ids);

  return products;
}