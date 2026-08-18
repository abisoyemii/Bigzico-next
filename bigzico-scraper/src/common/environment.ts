import { ConfigurationError } from '../domain/errors';

export function validateEnvironment(vars: Record<string, string | undefined>): void {
  const hasSupabaseUrl = Boolean(vars.SUPABASE_URL);
  const hasSupabaseKey = Boolean(vars.SUPABASE_SERVICE_ROLE_KEY);

  if (hasSupabaseUrl !== hasSupabaseKey) {
    throw new ConfigurationError('Supabase configuration is incomplete. Set both SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.');
  }

  if (!vars.NODE_ENV) {
    throw new ConfigurationError('Missing required environment variable: NODE_ENV');
  }
}
