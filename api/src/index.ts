import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';

import 'dotenv/config';

import { auth } from './auth.js';

const app = new Hono();

app.use(
  '/auth/*',
  cors({
    allowHeaders: ['Content-Type', 'Authorization', 'User-Agent'],
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
    origin: process.env.APP_ORIGIN ?? 'http://localhost:3000',
  })
);

app.all('/auth/*', c => auth.handler(c.req.raw));

const port = Number(process.env.PORT || 4000);

serve({ fetch: app.fetch, port });
