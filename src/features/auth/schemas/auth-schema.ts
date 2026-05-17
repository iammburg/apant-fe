import { z } from 'zod'

import type { LoginPayload } from '#/features/auth/types'

const emailSchema = z.string().email('Email tidak valid')

export const loginFormSchema = z.object({
  identifier: z.string().min(1, 'Username atau email wajib diisi'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
})

export const registerFormSchema = z
  .object({
    username: z.string().min(3, 'Username minimal 3 karakter'),
    email: z.string().email('Email tidak valid'),
    password: z.string().min(6, 'Password minimal 6 karakter'),
    confirmPassword: z.string().min(6, 'Konfirmasi password minimal 6 karakter'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export function buildLoginPayload(identifier: string, password: string): LoginPayload {
  const emailResult = emailSchema.safeParse(identifier)

  if (emailResult.success) {
    return { email: emailResult.data, password }
  }

  return { username: identifier, password }
}
