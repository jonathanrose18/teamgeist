import { admin, organization } from 'better-auth/plugins';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

import { pool } from '../../lib/db.js';

const appOrigin = process.env.APP_ORIGIN;

if (!appOrigin) {
  throw new Error('APP_ORIGIN is not set');
}

const baseURL = process.env.BETTER_AUTH_URL;

if (!baseURL) {
  throw new Error('BETTER_AUTH_URL is not set');
}

const secret = process.env.BETTER_AUTH_SECRET;

if (!secret) {
  throw new Error('BETTER_AUTH_SECRET is not set');
}

export const auth = betterAuth({
  basePath: '/auth',
  baseURL: baseURL,
  database: drizzleAdapter(pool, { provider: 'pg' }),
  emailAndPassword: { enabled: true, disableSignUp: true },
  plugins: [admin(), organization()],
  secret: secret,
  trustedOrigins: [appOrigin],
});

export type AuthType = {
  session: typeof auth.$Infer.Session.session | null;
  user: typeof auth.$Infer.Session.user | null;
};
