import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm';
import { config } from './env';

const pool = new Pool({
  connectionString: config.databaseUrl,
  ssl: config.env === 'production' ? { rejectUnauthorized: false } : false,
  max: config.dbMaxConnections || 10, // New database setting
  idleTimeoutMillis: config.dbIdleTimeout || 30000, // New database setting
});

const db = drizzle(pool);

export default db;
