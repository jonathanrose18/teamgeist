import type { Team } from '../../domain/team.js';
import type { TeamRepository } from '../../application/ports/team-repository.js';

export const makeTeamRepository = (): TeamRepository => {
  const get = async (): Promise<Team | null> => null;

  return { get };
};
