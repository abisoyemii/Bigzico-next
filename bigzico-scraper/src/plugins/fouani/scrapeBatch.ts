import pLimit from "p-limit";

import { fetchProduct } from "./fetchProduct";
import { parseProduct } from "./parser";
import { normalizeProduct } from "./normalizer";

const limit = pLimit(8);

export async function scrapeBatch(
  buildId: string,
  ids: number[]
) {
  const jobs = ids.map((id) =>
    limit(async () => {
      try {
        console.log(`Fetching ${id}...`);

        const raw = await fetchProduct(buildId, id);
        const parsed = parseProduct(raw);

        console.log({
          parsedId: parsed.id,
          parsedName: parsed.name,
        });

        return normalizeProduct(parsed);
      } catch (err: any) {
        const separator = "=".repeat(34);
        const requestUrl = err?.config?.url ?? "<unknown>";
        const status = err?.response?.status ?? "no response";
        const message = err?.message ?? "Unknown error";
        const responseData = err?.response?.data;
        const responseBody = responseData
          ? typeof responseData === "string"
            ? responseData
            : JSON.stringify(responseData, null, 2)
          : "<no response body>";

        console.error(separator);
        console.error(`Product ID: ${id}`);
        console.error(`Request URL: ${requestUrl}`);
        console.error(`HTTP Status: ${status}`);
        console.error(`Axios Error: ${message}`);
        console.error(
          `Response Body (first 300 characters): ${String(responseBody).slice(0, 300)}`
        );
        console.error(err.stack ?? String(err));
        console.error(separator);

        return null;
      }
    })
  );

  const results = await Promise.all(jobs);

  return results.filter(Boolean);
}