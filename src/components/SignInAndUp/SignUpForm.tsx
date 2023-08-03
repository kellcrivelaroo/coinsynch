import mail from '@/../public/email-icon.svg'
import eye from '@/../public/eye-icon.svg'
import lock from '@/../public/lock-icon.svg'
import user from '@/../public/user-icon.svg'
import check from '@/../public/check-icon.svg'

import Image from 'next/image'
import { useState } from 'react'

import { signUpFormSchema } from '@/lib/schemas'

import FormErrorMessage from '../FormErrorMessage'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

type SignUpFormType = z.infer<typeof signUpFormSchema>

export default function SignUpForm({
  handleLogin,
}: {
  handleLogin: () => void
}) {
  const [passwordShown, setPasswordShown] = useState(false)
  const [checked, setChecked] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
  })

  const onSubmit: SubmitHandler<SignUpFormType> = () => {
    handleLogin()
  }

  return (
    <form
      className="flex w-full flex-col overflow-hidden"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Name Input */}
      <div
        className="relative mb-6"
        onClick={() => {
          setChecked((current) => !current)
        }}
      >
        <Image
          src={user}
          alt="user"
          width={16}
          height={16}
          className="pointer-events-none absolute m-4"
        />

        <input
          type="text"
          placeholder="Name"
          className={`signInput pr-4 ${
            errors.name && 'focus:border-quartenary-700'
          }`}
          {...register('name')}
        />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </div>

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
      <div className="relative mb-6">
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
          {...register('password.password')}
        />
        <FormErrorMessage>
          {errors.password?.password?.message}
        </FormErrorMessage>

        <button
          className="absolute right-0 top-0 p-4"
          type="button"
          onClick={() => {
            setPasswordShown((current) => !current)
          }}
          tabIndex={-1}
        >
          <Image src={eye} alt="eye" width={16} height={16} />
        </button>
      </div>

      {/* Confirm Password Input */}
      <div className="relative mb-6">
        <Image
          src={lock}
          alt="lock"
          width={16}
          height={16}
          className="pointer-events-none absolute m-4"
        />

        <input
          type={passwordShown ? 'text' : 'password'}
          placeholder="Confirm password"
          className={`signInput pr-4 ${
            errors.name && 'focus:border-quartenary-700'
          }`}
          {...register('password.confirm')}
        />
        <FormErrorMessage>{errors.password?.confirm?.message}</FormErrorMessage>

        <button
          className="absolute right-0 top-0 p-4"
          type="button"
          onClick={() => {
            setPasswordShown((current) => !current)
          }}
          tabIndex={-1}
        >
          <Image src={eye} alt="eye" width={16} height={16} />
        </button>
      </div>

      {/* Terms */}
      <div className="mb-7">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="relative flex h-4 min-w-[16px] appearance-none items-center justify-center rounded border-2
            border-primary-500 text-sm"
            onClick={() => {
              setChecked((current) => !current)
            }}
            {...register('terms')}
          />
          <Image
            src={check}
            alt="check"
            width={14}
            height={14}
            className={`${checked ? 'absolute translate-x-[1px]' : 'hidden'}`}
          />
          <span className="ml-4 block text-sm leading-none">
            I have read and accept the{' '}
            <strong>Privacy Policy and Terms of User Sign up.</strong>
          </span>
        </label>
        <FormErrorMessage>{errors.terms?.message}</FormErrorMessage>
      </div>

      {/* Submit Button */}
      <button type="submit" className="defaultButton mb-4">
        Sign up
      </button>
    </form>
  )
}
