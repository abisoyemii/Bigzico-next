export interface IScraper {
  readonly id: string;
  readonly name: string;
  readonly engine: string;
  fetchProducts(): Promise<unknown[]>;
  fetchProductDetail(sourceId: string): Promise<unknown>;
}

export interface IEngine {
  readonly type: string;
  execute<T>(job: () => Promise<T>): Promise<T>;
}

export interface IImporter {
  importProduct(payload: unknown): Promise<void>;
  validatePayload(payload: unknown): Promise<boolean>;
}

export interface IPlugin {
  readonly id: string;
  readonly name: string;
  readonly version: string;
  initialize(): Promise<void>;
}

export interface IPluginRegistry {
  register(plugin: IPlugin): Promise<void>;
  resolve(pluginId: string): Promise<IPlugin | undefined>;
  list(): Promise<IPlugin[]>;
}

export interface IQueue {
  enqueue(jobName: string, payload: unknown): Promise<string>;
  process(jobName: string, handler: (payload: unknown) => Promise<void>): Promise<void>;
}

export interface ILogger {
  info(message: string, meta?: Record<string, unknown>): void;
  warn(message: string, meta?: Record<string, unknown>): void;
  error(message: string, meta?: Record<string, unknown>): void;
  debug(message: string, meta?: Record<string, unknown>): void;
}

export interface IImagePipeline {
  enqueueImage(imageUrl: string, metadata?: Record<string, unknown>): Promise<string>;
  processImage(imageId: string): Promise<void>;
}

export interface IEventBus {
  publish(eventName: string, payload: Record<string, unknown>): Promise<void>;
  subscribe(eventName: string, listener: (payload: Record<string, unknown>) => Promise<void>): void;
}

export interface IConfiguration {
  get<T>(key: string): T | undefined;
  getRequired<T>(key: string): T;
  getEnvironment(): 'development' | 'testing' | 'production';
}

export interface IScheduler {
  register(jobName: string, cronExpression: string): void;
  start(): Promise<void>;
  stop(): Promise<void>;
}

export interface IHealthCheck {
  readonly name: string;
  check(): Promise<'healthy' | 'unhealthy' | 'degraded'>;
}
