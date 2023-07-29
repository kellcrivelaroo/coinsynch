import { z } from 'zod'

export const subscriptionFormSchema = z.object({
  email: z
    .string({ required_error: 'Required field' })
    .email({ message: 'Invalid email address' }),
})
