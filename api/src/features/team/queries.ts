import type { Team, TeamId, TeamResponseDto } from './types.js';

export async function getTeam(id: TeamId): Promise<Team | null> {
  // TODO: Implement actual database query
  return null;
}

export function toTeamResponseDto(team: Team): TeamResponseDto {
  return {
    createdAt: team.createdAt.toISOString(),
    id: team.id,
    name: team.name,
    updatedAt: team.updatedAt.toISOString(),
  };
}
