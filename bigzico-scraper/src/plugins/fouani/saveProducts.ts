import fs from "fs";

export function saveProducts(products: any[]) {
  fs.writeFileSync(
    "products.json",
    JSON.stringify(products, null, 2),
    "utf8"
  );

  console.log(`Saved ${products.length} products to products.json`);
}