import { Hono } from 'hono';

import { auth } from './config.js';

export const authRoutes = new Hono();

authRoutes.all('/*', context => auth.handler(context.req.raw));
