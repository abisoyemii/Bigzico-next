import { logger } from '../common/logger';
import { loadStoreManifests } from '../registry';

export async function startWorker() {
  const manifests = loadStoreManifests();
  logger.info({ count: manifests.length }, 'Worker starting');
  // Worker loop placeholder - real job handling will be added in Phase 2
}
