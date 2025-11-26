import { Hono } from 'hono';
import { db } from '../infrastructure/database/postgres.js';
import { club as clubTable } from '../infrastructure/database/schema.js';

const clubRoutes = new Hono();

clubRoutes.get('/', async c => {
  const clubs = await db.select().from(clubTable);

  return c.json(clubs[0] || null);
});

export { clubRoutes };
