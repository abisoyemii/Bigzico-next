export interface IScraper {
  readonly storeId: string;
  fetchProducts(): Promise<unknown[]>;
  fetchProductDetail(sourceId: string): Promise<unknown>;
}

export interface IImporter {
  importProduct(rawPayload: unknown): Promise<void>;
  validatePayload(rawPayload: unknown): Promise<boolean>;
}

export interface IPlugin {
  readonly name: string;
  initialize?(): Promise<void>;
}

export interface IQueue {
  enqueue(jobName: string, payload: unknown): Promise<string>;
  process(jobName: string, handler: (payload: unknown) => Promise<void>): void;
}

export interface ILogger {
  info(message: string, meta?: Record<string, unknown>): void;
  warn(message: string, meta?: Record<string, unknown>): void;
  error(message: string, meta?: Record<string, unknown>): void;
  debug(message: string, meta?: Record<string, unknown>): void;
}

export interface IEngine {
  execute<T>(action: () => Promise<T>): Promise<T>;
}

export interface IImagePipeline {
  queueImage(originalUrl: string, metadata?: Record<string, unknown>): Promise<string>;
  processImage(imageId: string): Promise<void>;
}
