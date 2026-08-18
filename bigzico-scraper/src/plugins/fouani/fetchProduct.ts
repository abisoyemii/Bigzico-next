import axios from "axios";

const RETRY_DELAYS_MS = [2000, 5000];

function isRetryableAxiosError(err: any): boolean {
  if (!err) {
    return false;
  }

  const status = err?.response?.status;
  if (status === 400 || status === 401 || status === 403 || status === 404) {
    return false;
  }

  if (status && status >= 400 && status < 500) {
    return false;
  }

  if (status && status >= 500) {
    return true;
  }

  if (err.code === "ECONNABORTED" || err.code === "ECONNRESET" || err.code === "ETIMEDOUT") {
    return true;
  }

  if (err.message && /timeout|network|socket|fetch/i.test(err.message)) {
    return true;
  }

  return true;
}

export async function fetchProduct(
  buildId: string,
  productId: number
) {
  const url =
    `https://fouanistore.com/_next/data/${buildId}` +
    `/nigeria-en/product/${productId}.json` +
    `?branchLocale=nigeria-en&id=${productId}`;

  let lastError: any = null;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await axios.get(url, {
        headers: {
          "User-Agent": "Mozilla/5.0",
          Accept: "application/json",
        },
        timeout: 30000,
      });

      return response.data;
    } catch (err: any) {
      lastError = err;
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
      console.error(`Attempt: ${attempt}/3`);
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

      const shouldRetry = attempt < 3 && isRetryableAxiosError(err);
      if (!shouldRetry) {
        throw err;
      }

      const delayMs = RETRY_DELAYS_MS[attempt - 1] ?? 5000;
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  throw lastError;
}