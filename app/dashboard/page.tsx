import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { makeGetCurrentUserUseCase } from '@/core/application/auth/use-cases/get-current-user';
import { BetterAuthPort } from '@/infrastructure/auth/auth-port';

export default async function DashboardPage() {
  const h = await headers();
  const authPort = new BetterAuthPort();
  const getCurrentUserUseCase = makeGetCurrentUserUseCase({ authPort });
  const user = await getCurrentUserUseCase.execute(h);

  if (!user) {
    redirect('/login');
  }

  return (
    <main className='p-6'>
      <h1 className='text-2xl font-semibold'>Hi {user.email}</h1>
      <p>Du bist eingeloggt 🎉</p>
    </main>
  );
}
