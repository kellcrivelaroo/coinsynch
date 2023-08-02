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

export const addCryptoFormSchema = z.object({
  coin: z
    .string({
      invalid_type_error: 'You must choose a crypto',
      required_error: 'You must choose a crypto',
    })
    .nonempty({ message: 'You must choose a crypto' }),
  shares: z
    .number({
      invalid_type_error: 'Required field',
    })
    .positive({ message: 'Must be greater than zero' }),
})

export const transferCryptoFormSchema = z.object({
  transfer: z
    .string({
      invalid_type_error: 'You must choose a transfer mode',
      required_error: 'You must choose a transfer mode',
    })
    .nonempty({ message: 'You must choose a transfer mode' }),
  shares: z
    .number({
      invalid_type_error: 'Required field',
    })
    .positive({ message: 'Must be greater than zero' }),
})
