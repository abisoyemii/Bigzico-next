import axios from "axios";

export interface DiscoveryResult {
  baseUrl: string;
  platform: string;
  productEndpoint: string;
}

export async function discover(): Promise<DiscoveryResult> {
  return {
    baseUrl: "https://fouanistore.com",
    platform: "Next.js",
    productEndpoint: "/_next/data/{BUILD_ID}/nigeria-en/product/{id}.json",
  };
}