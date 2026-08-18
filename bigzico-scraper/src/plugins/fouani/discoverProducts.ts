import axios from "axios";
import * as cheerio from "cheerio";

export async function discoverProducts() {
  const ids = new Set<number>();

  let page = 1;

  while (true) {
    console.log(`Scanning page ${page}...`);

    const url =
      `https://fouanistore.com/nigeria-en/shop?page=${page}`;

    const { data: html } = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const $ = cheerio.load(html);

    let foundOnPage = 0;

    $("a[href*='/product/']").each((_, el) => {
      const href = $(el).attr("href") || "";

      const match = href.match(/\/product\/(\d+)/);

      if (match) {
        ids.add(Number(match[1]));
        foundOnPage++;
      }
    });

    console.log(`Found ${foundOnPage} products.`);

    // Stop when a page contains no products
    if (foundOnPage === 0) {
      break;
    }

    page++;
  }

  return [...ids];
}