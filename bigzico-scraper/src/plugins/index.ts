// Plugin loader for scraper engine adapters and store plugins.
import path from 'path';
import fs from 'fs';
import { logger } from '../common/logger';

export function loadPlugins(dir = path.resolve(process.cwd(), 'src/plugins')) {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.js') || f.endsWith('.ts'));
  logger.info({ count: files.length }, 'Loaded plugins');
  return files.map((f) => path.join(dir, f));
}
