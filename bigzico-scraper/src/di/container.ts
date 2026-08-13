import { DependencyInjectionError } from '../domain/errors';
import { ILogger } from '../domain/interfaces';
import { logger } from '../common/logger';

const services = new Map<string, unknown>();

export function registerService<T>(name: string, implementation: T): void {
  if (services.has(name)) {
    throw new DependencyInjectionError(`Service already registered: ${name}`);
  }
  services.set(name, implementation);
}

export function resolveService<T>(name: string): T {
  if (!services.has(name)) {
    throw new DependencyInjectionError(`Service not registered: ${name}`);
  }
  return services.get(name) as T;
}

export function initializeContainer(): void {
  registerService<ILogger>('Logger', logger);
}
