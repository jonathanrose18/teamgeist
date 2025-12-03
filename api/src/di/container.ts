import { createContainer, asFunction, type AwilixContainer, InjectionMode } from 'awilix';

import { makeGetTeamUseCase } from '../application/use-cases/get-team.js';
import { makeTeamRepository } from '../infrastructure/repositories/team-repository.js';

export type AppContainer = AwilixContainer;

export function createAppContainer(): AppContainer {
  const container = createContainer({ injectionMode: InjectionMode.CLASSIC });

  container.register({
    // Infrastructure
    teamRepository: asFunction(makeTeamRepository).singleton(),

    // Use Cases
    getTeamUseCase: asFunction(makeGetTeamUseCase).scoped(),
  });

  return container;
}
