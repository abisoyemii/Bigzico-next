import { ConfigurationError } from '../domain/errors';

const requiredVariables = ['NODE_ENV', 'DATABASE_URL', 'REDIS_URL', 'LOG_LEVEL'];

export function validateEnvironment(vars: Record<string, string | undefined>): void {
  const missing = requiredVariables.filter((key) => !vars[key]);
  if (missing.length > 0) {
    throw new ConfigurationError(`Missing required environment variables: ${missing.join(', ')}`);
  }
}
