import type { User } from '@/core/domain/user';

export interface AuthPort {
  getCurrentUser(headers: Headers): Promise<User | null>;
}
