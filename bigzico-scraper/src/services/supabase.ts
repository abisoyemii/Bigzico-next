import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { loadConfig } from '../common/config';

export function buildSupabaseClient(): SupabaseClient | null {
  const { supabaseUrl, supabaseServiceRoleKey } = loadConfig();

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
