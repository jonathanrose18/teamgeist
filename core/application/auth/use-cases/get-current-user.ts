import type { UseCaseWithParams } from '@/core/domain/types';
import type { User } from '@/core/domain/user';

import type { AuthPort } from '../ports';

type Dependencies = {
  readonly authPort: AuthPort;
};

export const makeGetCurrentUserUseCase = ({ authPort }: Dependencies): UseCaseWithParams<User | null, Headers> => ({
  execute: headers => authPort.getCurrentUser(headers),
});
