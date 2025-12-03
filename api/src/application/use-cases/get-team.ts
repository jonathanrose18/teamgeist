import type { Team, TeamId } from '../../domain/team.js';
import type { TeamRepository } from '../ports/team-repository.js';
import type { UseCaseWithParams } from '../../domain/types/index.js';

type Dependencies = {
  readonly teamRepository: TeamRepository;
};

export const makeGetTeamUseCase = ({ teamRepository }: Dependencies): UseCaseWithParams<Team | null, TeamId> => ({
  execute: (id: TeamId) => teamRepository.get(id),
});
