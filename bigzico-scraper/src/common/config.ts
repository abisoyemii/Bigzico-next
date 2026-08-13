import dotenv from 'dotenv';
import path from 'path';

export function loadConfig() {
  const envPath = process.env.ENV_FILE || path.resolve(process.cwd(), '.env');
  dotenv.config({ path: envPath });

  return {
    nodeEnv: process.env.NODE_ENV || 'development',
    databaseUrl: process.env.DATABASE_URL || '',
    redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
    cloudinary: {
      name: process.env.CLOUDINARY_CLOUD_NAME || '',
      key: process.env.CLOUDINARY_API_KEY || '',
      secret: process.env.CLOUDINARY_API_SECRET || ''
    },
    logLevel: process.env.LOG_LEVEL || 'info'
  };
}
