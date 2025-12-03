import { Hono } from 'hono';

import { toTeamResponseDto } from '../interfaces/http/dto/team-dto.js';
import type { AppEnv } from '../types.js';
import type { Team, TeamId } from '../domain/team.js';
import type { UseCaseWithParams } from '../domain/types/index.js';

const teamRoutes = new Hono<AppEnv>();

teamRoutes.get('/:id', async context => {
  const container = context.get('container');
  const getTeamUseCase = container.resolve<UseCaseWithParams<Team | null, TeamId>>('getTeamUseCase');

  try {
    const team = await getTeamUseCase.execute(context.req.param('id') as TeamId);

    return context.json(team ? toTeamResponseDto(team) : null);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Could not fetch team';

    return context.json({ message }, 500);
  }
});

export { teamRoutes };
