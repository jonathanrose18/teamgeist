import type { Id } from './types';

export type User = {
  readonly email: string;
  readonly id: Id;
  readonly name?: string | null;
};
