'use client'
import Image from 'next/image'
import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'

import spinner from '@/../public/spinner-icon.svg'

import { subscriptionFormSchema } from '@/lib/schemas'
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

  const onSubmit: SubmitHandler<SubscriptionFormType> = (data) => {
    setIsLoading(true)
    setTimeout(() => {
      console.log(data)
      setSuccess(true)
      setIsLoading(false)
      reset({ email: '' })
    }, 600)
  }

  return (
    <form
      className="flex basis-1/2 flex-col lg:w-[384px] lg:basis-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="email" className={`mb-2`}>
        Email
      </label>
      <input
        className={`defaultInput ${
          errors?.email?.message && 'focus:bg-quartenary-200/70'
        }`}
        disabled={isLoading}
        {...register('email')}
      />
      {errors.email && (
        <span className="-mt-6 mb-1 ml-2 text-sm text-quartenary-700">
          {errors.email.message}
        </span>
      )}

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
