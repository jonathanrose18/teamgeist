import type { SessionService } from '@/core/application/ports/session-service'
import type { Session } from '@/core/domain/session'

type Dependencies = {
  sessionService: SessionService
  headers: Headers
}

export function getCurrentSession({ sessionService, headers }: Dependencies): Promise<Session | null> {
  return sessionService.getSession(headers)
}
