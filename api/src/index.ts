import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { serve } from '@hono/node-server';
import 'dotenv/config';

import { authRoutes } from './routes/auth.js';
import { clubRoutes } from './routes/club.js';

const app = new Hono();

app.use(logger());
app.use(
  '/*',
  cors({
    allowHeaders: ['Content-Type', 'Authorization', 'User-Agent'],
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
    origin: process.env.APP_ORIGIN || 'http://localhost:3000',
  })
);

app.route('/auth', authRoutes);
app.route('/club', clubRoutes);

const port = Number(process.env.PORT || 4000);

serve({ fetch: app.fetch, port });
