import type { Team } from '../../domain/team.js';

export interface TeamRepository {
  get(id: string): Promise<Team | null>;
}
