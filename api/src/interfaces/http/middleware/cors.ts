import { cors } from 'hono/cors';

const appOrigin = process.env.APP_ORIGIN;

if (!appOrigin) {
  throw new Error('APP_ORIGIN is not set');
}

export const corsMiddleware = cors({
  allowHeaders: ['Content-Type', 'Authorization', 'User-Agent'],
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  origin: appOrigin,
});
