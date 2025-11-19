import type { AuthPort } from '@/core/application/auth/ports';
import type { User } from '@/core/domain/user';

import { auth } from './auth';

export class BetterAuthPort implements AuthPort {
  async getCurrentUser(headers: Headers): Promise<User | null> {
    const session = await auth.api.getSession({ headers });

    if (!session) return null;

    const u = session.user;

    return {
      id: u.id,
      email: u.email,
      name: u.name || null,
    };
  }
}
