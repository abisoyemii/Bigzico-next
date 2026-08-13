import axios from "axios";

export async function fetchProduct(
  buildId: string,
  productId: number
) {
  const url =
    `https://fouanistore.com/_next/data/${buildId}` +
    `/nigeria-en/product/${productId}.json` +
    `?branchLocale=nigeria-en&id=${productId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "application/json",
      },
      timeout: 15000,
    });

    return response.data;
  } catch (err: any) {
    const separator = "=".repeat(34);
    const requestUrl = err?.config?.url ?? url;
    const status = err?.response?.status ?? "no response";
    const message = err?.message ?? "Unknown error";
    const responseData = err?.response?.data;
    const responseBody = responseData
      ? typeof responseData === "string"
        ? responseData
        : JSON.stringify(responseData, null, 2)
      : "<no response body>";

    console.error(separator);
    console.error(`Product ID: ${productId}`);
    console.error(`Request URL: ${requestUrl}`);
    console.error(`HTTP Status: ${status}`);
    console.error(`Axios Error: ${message}`);
    console.error(
      `Response Body (first 300 characters): ${String(responseBody).slice(0, 300)}`
    );
    console.error(separator);

    if (!err.response) {
      console.error(err.stack ?? String(err));
    }

    throw err;
  }
}