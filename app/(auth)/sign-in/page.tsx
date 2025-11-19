import Link from 'next/link'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { SignInForm } from './sign-in-form'

export const metadata = {
  title: 'Jetzt Anmelden',
}

export default function SignInPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-background px-4'>
      <Card className='w-full max-w-lg'>
        <CardHeader>
          <CardTitle>Anmelden</CardTitle>
          <CardDescription>Melde dich mit deiner E-Mail-Adresse und deinem Passwort an.</CardDescription>
        </CardHeader>
        <CardContent>
          <SignInForm />

          <p className='mt-6 text-sm text-muted-foreground text-center'>
            Noch keinen Account?{' '}
            <Link href='/sign-up' className='underline underline-offset-4'>
              Jetzt registrieren
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
