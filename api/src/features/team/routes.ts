import { Hono } from 'hono';

import { getTeam, toTeamResponseDto } from './queries.js';
import type { TeamId } from './types.js';

export const teamRoutes = new Hono();

teamRoutes.get('/:id', async context => {
  try {
    const team = await getTeam(context.req.param('id') as TeamId);

    return context.json(team ? toTeamResponseDto(team) : null);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Could not fetch team';

    return context.json({ message }, 500);
  }
});
