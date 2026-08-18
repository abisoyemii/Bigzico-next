import path from 'path';
import fs from 'fs';
import { z } from 'zod';
import { logger } from '../common/logger';
import { PluginManifest, PluginManifestSchema } from '../common/manifest';

export function loadStoreManifests(manifestsDir = path.resolve(process.cwd(), 'src/registry/manifests')): PluginManifest[] {
  if (!fs.existsSync(manifestsDir)) return [];
  const files = fs.readdirSync(manifestsDir).filter((f) => f.endsWith('.json'));
  const manifests = files.map((f) => {
    const raw = fs.readFileSync(path.join(manifestsDir, f), 'utf8');
    const parsed = JSON.parse(raw);
    return PluginManifestSchema.parse(parsed);
  });
  logger.info({ count: manifests.length }, 'Loaded store manifests');
  return manifests;
}

export function validateManifestSchema(manifest: unknown): PluginManifest {
  return PluginManifestSchema.parse(manifest);
}
