import { serve } from '@hono/node-server';
import { Hono } from 'hono';

import 'dotenv/config';

const app = new Hono();

app.get('/', c => c.json({ status: 'ok' }));

const port = Number(process.env.PORT) || 4000;

serve({ fetch: app.fetch, port });

console.log(`API listening on http://localhost:${port}`);
