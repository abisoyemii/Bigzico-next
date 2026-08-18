import pino from 'pino';
import { loadConfig } from './config';

const cfg = loadConfig();
export const logger = pino({ level: cfg.logLevel });
