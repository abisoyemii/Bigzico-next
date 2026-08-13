export type ScraperJob = {
  id: string;
  storeId: string;
  mode: 'full' | 'incremental' | 'price-only';
  startedAt?: string;
};

export type RawProduct = Record<string, unknown>;

export type NormalizedProduct = {
  source: string;
  sourceId: string;
  sourceUrl: string;
  scrapedAt: string;
};
