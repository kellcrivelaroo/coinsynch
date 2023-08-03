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

      <button className="defaultButton" onClick={signUp}>
        Sign up
      </button>
    </>
  )
}
