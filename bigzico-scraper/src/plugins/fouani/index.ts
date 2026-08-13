import { normalizeProduct } from "./normalizer";
import { saveProducts } from "./saveProducts";
import { scrapeAllProducts } from "./scrapeAllProducts";

export * from "./parser";
export * from "./normalizer";
export * from "./discovery";

export async function runFouaniDiscovery() {
  console.log("=== Fouani Discovery ===");

  // Scrape all products
  const products = await scrapeAllProducts();

  // Normalize products
  const normalized = products.map(normalizeProduct);

  // Save to products.json
  saveProducts(normalized);

  console.log("\nFinished");
  console.log(`Products scraped: ${normalized.length}`);

  if (normalized.length > 0) {
    console.log("\nFirst Product:");
    console.log(normalized[0]);
  }
}