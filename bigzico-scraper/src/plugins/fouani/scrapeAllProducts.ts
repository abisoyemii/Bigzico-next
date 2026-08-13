import { getBuildId } from "./getBuildId";
import { discoverProducts } from "./discoverProducts";
import { scrapeBatch } from "./scrapeBatch";

export async function scrapeAllProducts() {
  // Get the current Next.js build ID
  const buildId = await getBuildId();

  // Discover all product IDs
  const ids = await discoverProducts();

  console.log(`\nFound ${ids.length} products\n`);

  // Process products concurrently (20 at a time)
  const products = await scrapeBatch(buildId, ids);

  return products;
}