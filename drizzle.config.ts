import type { Config } from 'drizzle-kit';
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required.');
}

export default {
  schema: './lib/db/schema.ts',
  out: './lib/db/migrations',
  driver: 'mysql2',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
} satisfies Config;
