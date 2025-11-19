import Link from 'next/link'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { SignUpForm } from './sign-up-form'

export const metadata = {
  title: 'Jetzt Registrieren',
}

export default function Page() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-background px-4'>
      <Card className='w-full max-w-lg'>
        <CardHeader>
          <CardTitle>Account erstellen</CardTitle>
          <CardDescription>Registriere dich mit deiner E-Mail-Adresse, um loszulegen.</CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />

          <p className='mt-6 text-sm text-muted-foreground text-center'>
            Besitzt du bereits einen Account?{' '}
            <Link href='/sign-in' className='underline underline-offset-4'>
              Jetzt anmelden
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
