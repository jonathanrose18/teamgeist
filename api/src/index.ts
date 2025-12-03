import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { serve } from '@hono/node-server';

import 'dotenv/config';

import { appContainerMiddleware } from './interfaces/http/middleware/app-container.js';
import { authRoutes } from './routes/auth.js';
import { corsMiddleware } from './interfaces/http/middleware/cors.js';
import { teamRoutes } from './routes/team.js';

const app = new Hono();

app.use(logger());
app.use('/*', appContainerMiddleware);
app.use('/*', corsMiddleware);

app.route('/auth', authRoutes);
app.route('/teams', teamRoutes);

const port = Number(process.env.PORT || 4000);

serve({ fetch: app.fetch, port });
