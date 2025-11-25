import { Pool } from 'pg';
import { betterAuth } from 'better-auth';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not set');
}

const appOrigin = process.env.APP_ORIGIN;

if (!appOrigin) {
  throw new Error('APP_ORIGIN is not set');
}

export const auth = betterAuth({
  trustedOrigins: [process.env.APP_ORIGIN ?? 'http://localhost:3000'],
  baseURL: process.env.BETTER_AUTH_URL,
  basePath: '/auth',
  secret: process.env.BETTER_AUTH_SECRET,
  database: new Pool({ connectionString: databaseUrl }),
  emailAndPassword: {
    enabled: true,
    disableSignUp: false,
  },
});
