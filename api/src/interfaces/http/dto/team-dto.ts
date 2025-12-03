import type { Team } from '../../../domain/team.js';

export type TeamResponseDto = {
  readonly createdAt: string;
  readonly id: string;
  readonly name: string;
  readonly updatedAt: string;
};

export function toTeamResponseDto(team: Team): TeamResponseDto {
  return {
    createdAt: team.createdAt.toISOString(),
    id: team.id,
    name: team.name,
    updatedAt: team.updatedAt.toISOString(),
  };
}
