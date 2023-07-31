import { z } from 'zod'

export const subscriptionFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

export const signInFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().nonempty({ message: 'Required field' }),
})

export const signUpFormSchema = z.object({
  name: z
    .string({ required_error: 'Required field' })
    .min(6, { message: 'Minimum of 6 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .object({
      password: z.string().min(8, 'Minimum of 8 characters'),
      confirm: z.string(),
    })
    .refine((data) => data.password === data.confirm, {
      message: "Passwords don't match",
      path: ['confirm'],
    }),
  terms: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms and conditions' }),
  }),
})
