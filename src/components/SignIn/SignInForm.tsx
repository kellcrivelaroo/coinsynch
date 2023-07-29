import mail from '@/../public/email-icon.svg'
import eye from '@/../public/eye-icon.svg'
import lock from '@/../public/lock-icon.svg'

import Image from 'next/image'
import { useState } from 'react'

import { signInFormSchema } from '@/lib/schemas'

import FormErrorMessage from '../FormErrorMessage'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

type SignInFormType = z.infer<typeof signInFormSchema>

export default function SignInForm() {
  const [passwordShown, setPasswordShown] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormType>({
    resolver: zodResolver(signInFormSchema),
  })

  const onSubmit: SubmitHandler<SignInFormType> = () => {
    router.push('/dashboard')
  }

  return (
    <form className="flex w-full flex-col" onSubmit={handleSubmit(onSubmit)}>
      {/* E-mail Input */}
      <div className="relative mb-6">
        <Image
          src={mail}
          alt="mail"
          width={16}
          height={16}
          className="pointer-events-none absolute m-4"
        />

        <input
          type="text"
          placeholder="Email"
          className={`signInput pr-4 ${
            errors.email && 'focus:border-quartenary-700'
          }`}
          {...register('email')}
        />

        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </div>

      {/* Password Input */}
      <div className="relative mb-2">
        <Image
          src={lock}
          alt="lock"
          width={16}
          height={16}
          className="pointer-events-none absolute m-4"
        />
        <input
          type={passwordShown ? 'text' : 'password'}
          placeholder="Password"
          className={`signInput pr-10 ${
            errors.password && 'focus:border-quartenary-700'
          }`}
          {...register('password')}
        />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>

        {/* Submit Button */}
        <button
          className="absolute right-0 top-0 p-4"
          type="button"
          onClick={() => {
            setPasswordShown((current) => !current)
          }}
        >
          <Image src={eye} alt="eye" width={16} height={16} />
        </button>
      </div>

      <button
        className="mb-4 self-end text-xs text-secondary-500 hover:text-primary-500"
        type="button"
      >
        Forgot password?
      </button>
      {/* <Dialog.Close asChild> */}
      <button type="submit" className="defaultButton mb-4">
        Sign in
      </button>
      {/* </Dialog.Close> */}
    </form>
  )
}
