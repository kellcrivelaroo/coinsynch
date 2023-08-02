'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import spinner from '@/../public/spinner-icon.svg'

import { subscriptionFormSchema } from '@/lib/schemas'
import FormErrorMessage from '../FormErrorMessage'
import ConfirmationToast from './ConfirmationToast'

type SubscriptionFormType = z.infer<typeof subscriptionFormSchema>

export default function SubscriptionForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionFormType>({
    resolver: zodResolver(subscriptionFormSchema),
  })

  const onSubmit: SubmitHandler<SubscriptionFormType> = () => {
    setIsLoading(true)
    setTimeout(() => {
      setSuccess(true)
      setIsLoading(false)
      reset({ email: '' })
    }, 2000)
  }

  return (
    <form
      className="flex basis-1/2 flex-col lg:w-[384px] lg:basis-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="email" className="mb-2">
        Email
      </label>
      <div className="mb-6">
        <input
          className={`h-10 w-full rounded-md p-4 text-primary-800 shadow-lg
          transition-colors duration-300 focus:bg-primary-100 focus:outline-none disabled:opacity-80 ${
            errors.email?.message && 'focus:bg-quartenary-100'
          }`}
          disabled={isLoading}
          {...register('email')}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </div>

      <button
        type="submit"
        className="defaultButton flex w-full justify-center gap-2 shadow-lg"
        disabled={isLoading}
      >
        Subscribe
        {isLoading && (
          <Image src={spinner} alt="spinner" width={24} height={24} />
        )}
      </button>
      <ConfirmationToast open={success} setOpen={setSuccess} />
    </form>
  )
}
