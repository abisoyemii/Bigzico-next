import { loadConfig } from './common/config';
import { runFouaniDiscovery } from './plugins/fouani';

async function main() {
  const config = loadConfig();

  if (config.supabaseUrl && !config.supabaseServiceRoleKey) {
    console.warn('Supabase URL detected without service-role key. Scraping will continue, but database writes will be skipped.');
  }

  await runFouaniDiscovery();
}

main().catch(console.error);