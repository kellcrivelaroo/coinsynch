'use client'
import Image from 'next/image'
import arrow from '@/../public/arrow-right-icon.svg'
import { useCoinsContext } from '@/contexts/coins-context'

export default function SignUpButton() {
  const { signUp } = useCoinsContext()
  return (
    <button
      className="defaultButton mb-6 flex w-[180px] items-center justify-center gap-2 uppercase md:mb-10 md:w-[232px] md:py-3
          md:text-base lg:mb-20 lg:w-[276px]"
      onClick={signUp}
    >
      sign up now
      <Image src={arrow} alt="arrow" width={12} />
    </button>
  )
}
