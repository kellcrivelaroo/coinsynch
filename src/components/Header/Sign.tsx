'use client'
import { useCoinsContext } from '@/contexts/coins-context'

export default function Sign() {
  const { signIn, signUp } = useCoinsContext()
  return (
    <>
      <button
        className="transition-colors hover:text-primary-500"
        onClick={signIn}
      >
        Sign in
      </button>

      <button
        className="mx-2 rounded-full bg-primary-500 px-3 py-px text-white
        transition-colors md:mx-0 md:min-w-[100px] md:px-4 md:py-2.5"
        onClick={signUp}
      >
        Sign up
      </button>
    </>
  )
}
