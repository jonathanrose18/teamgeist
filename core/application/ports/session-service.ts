import type { Session } from '@/core/domain/session'

export interface SessionService {
  getSession: (headers: Headers) => Promise<Session | null>
}
