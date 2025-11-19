import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { getCurrentSession } from '@/core/application/use-cases/get-current-session'
import { betterAuthSessionService } from '@/core/infrastructure/auth/better-auth-session-service'

export default async function DashboardPage() {
  const session = await getCurrentSession({
    sessionService: betterAuthSessionService,
    headers: await headers(),
  })

  if (!session) {
    redirect('/sign-in')
  }

  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
    </div>
  )
}
