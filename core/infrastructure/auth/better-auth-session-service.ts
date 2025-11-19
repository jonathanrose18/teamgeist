import type { SessionService } from '@/core/application/ports/session-service'
import type { Session } from '@/core/domain/session'

import { auth } from './better-auth'

type BetterAuthSession = Awaited<ReturnType<typeof auth.api.getSession>>

const toDomainSession = (session: NonNullable<BetterAuthSession>): Session => ({
  user: {
    id: session.user.id,
    name: session.user.name ?? session.user.email,
    email: session.user.email,
    image: session.user.image,
  },
})

class BetterAuthSessionService implements SessionService {
  async getSession(headers: Headers): Promise<Session | null> {
    const session = await auth.api.getSession({ headers })
    if (!session) return null

    return toDomainSession(session)
  }
}

export const betterAuthSessionService = new BetterAuthSessionService()
