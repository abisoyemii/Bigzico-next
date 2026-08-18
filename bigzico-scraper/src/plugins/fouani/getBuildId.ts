import axios from "axios";

const DATA_PATH_BUILD_ID_REGEX = /\/_next\/data\/([^/"'?#]+)\//i;
const NEXT_DATA_BUILD_ID_REGEX = /"buildId"\s*:\s*"([^\"]+)"/i;
const NEXT_DATA_SCRIPT_REGEX = /<script\s+id=["']__NEXT_DATA__["']\s+type=["']application\/json["']>([\s\S]*?)<\/script>/i;

export async function getBuildId(): Promise<string> {
  const { data: html } = await axios.get<string>("https://fouanistore.com", {
    headers: {
      "User-Agent": "Mozilla/5.0",
      Accept: "text/html",
    },
    timeout: 10000,
  });

  if (!html || typeof html !== "string") {
    throw new Error("Failed to retrieve the Fouani storefront HTML; the response body was empty.");
  }

  const dataPathMatch = html.match(DATA_PATH_BUILD_ID_REGEX);
  if (dataPathMatch?.[1]) {
    return dataPathMatch[1];
  }

  const nextDataScriptMatch = html.match(NEXT_DATA_SCRIPT_REGEX);
  if (nextDataScriptMatch?.[1]) {
    const nextDataJson = nextDataScriptMatch[1];
    const nextDataBuildIdMatch = nextDataJson.match(NEXT_DATA_BUILD_ID_REGEX);
    if (nextDataBuildIdMatch?.[1]) {
      return nextDataBuildIdMatch[1];
    }
  }

  throw new Error("Unable to detect the current Next.js build ID from the Fouani storefront HTML.");
}
