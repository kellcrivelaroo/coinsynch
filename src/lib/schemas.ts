import { z } from 'zod'

export const subscriptionFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

export const signInFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().nonempty({ message: 'Required field' }),
})
