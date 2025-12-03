import { Hono } from 'hono';

import { auth } from '../infrastructure/auth/better-auth.js';

const authRoutes = new Hono();

authRoutes.all('/*', context => auth.handler(context.req.raw));

export { authRoutes };
