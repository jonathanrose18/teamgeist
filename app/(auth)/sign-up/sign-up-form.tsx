'use client'

import { useRouter } from 'next/navigation'
import { type FormEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signUp } from '@/lib/auth-client'
import { cn } from '@/lib/utils'

export function SignUpForm() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormError(null)
    setIsSubmitting(true)

    try {
      const { error } = await signUp.email({
        name,
        email,
        password,
        callbackURL: '/dashboard', // Ziel nach erfolgreicher Registrierung
      })

      if (error) {
        setFormError(error.message ?? 'Registrierung fehlgeschlagen.')
        return
      }

      router.push('/')
    } catch (err: any) {
      setFormError(err?.message ?? 'Etwas ist schiefgelaufen.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-6', 'w-full max-w-md')}>
      <div className='space-y-2'>
        <Label htmlFor='name'>Name</Label>
        <Input id='name' name='name' autoComplete='name' value={name} onChange={e => setName(e.target.value)} required />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='email'>E-Mail</Label>
        <Input id='email' type='email' name='email' autoComplete='email' value={email} onChange={e => setEmail(e.target.value)} required />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='password'>Passwort</Label>
        <Input
          id='password'
          type='password'
          name='password'
          autoComplete='new-password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          minLength={8}
        />
      </div>

      {formError && <p className='text-sm text-destructive'>{formError}</p>}

      <Button type='submit' className='w-full' disabled={isSubmitting}>
        {isSubmitting ? 'Wird erstellt…' : 'Account erstellen'}
      </Button>
    </form>
  )
}
