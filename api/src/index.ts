import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { serve } from '@hono/node-server';

import 'dotenv/config';

import { authRoutes } from './features/auth/routes.js';
import { corsMiddleware } from './lib/cors.js';
import { teamRoutes } from './features/team/routes.js';

const app = new Hono();

app.use(logger());
app.use('/*', corsMiddleware);

app.route('/auth', authRoutes);
app.route('/teams', teamRoutes);

const port = Number(process.env.PORT || 4000);

serve({ fetch: app.fetch, port });
