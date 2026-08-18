import { z } from 'zod';

export const PluginManifestSchema = z.object({
  id: z.string(),
  name: z.string(),
  engine: z.enum(['playwright', 'http', 'api', 'graphql']),
  baseUrl: z.string().url(),
  selectors: z.record(z.string()).optional(),
  rateLimit: z.number().int().positive().optional(),
  metadata: z.record(z.unknown()).optional(),
});

export type PluginManifest = z.infer<typeof PluginManifestSchema>;
