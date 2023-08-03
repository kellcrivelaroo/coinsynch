'use client'

import { useCoinsContext } from '@/contexts/coins-context'

export default function SignUpButton() {
  const { signUp } = useCoinsContext()
  return (
    <button
      className="hidden w-[176px] min-w-[100px] justify-center rounded-full bg-primary-500 px-4 py-3 text-white 
        transition-colors hover:bg-primary-400 lg:flex"
      onClick={signUp}
    >
      Sign up now
    </button>
  )
}
