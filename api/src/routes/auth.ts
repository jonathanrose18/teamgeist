import { Hono } from 'hono';

import { auth } from '../infrastructure/auth/better-auth.js';

const authRoutes = new Hono();

authRoutes.all('/*', c => auth.handler(c.req.raw));

export { authRoutes };
