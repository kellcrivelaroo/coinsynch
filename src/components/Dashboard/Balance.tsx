'use client'
import Image from 'next/image'
import balanceIcon from '@/../public/balance-icon.svg'
import { useDashboardContext } from '@/contexts/dashboard-context'
import { useEffect, useState } from 'react'
import { formatCurrency, getUserWallet } from '@/lib/utils'
import { CoinDataType } from '@/lib/types'

interface BalanceProps {
  coinsData: Array<CoinDataType>
}

export default function Balance({ coinsData }: BalanceProps) {
  const [balance, setBalance] = useState(0)
  const { user } = useDashboardContext()

  useEffect(() => {
    if (user) {
      const { totalBalance } = getUserWallet(user, coinsData)
      setBalance(totalBalance)
    }
  }, [user])

  return (
    <section className="flex w-full justify-between overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="flex items-center gap-2 px-4 py-2 2xl:gap-4 2xl:p-6">
        <div className="rounded-full bg-primary-100 p-2">
          <Image
            src={balanceIcon}
            width={40}
            alt="balance"
            className="w-5 md:w-8 2xl:w-10"
          />
        </div>

        <div
          className="flex flex-col leading-tight md:w-[10rem] md:flex-row md:flex-wrap md:items-center md:text-xl
        lg:text-lg xl:text-xl"
        >
          <span>Balance&nbsp;</span>
          <span className="text-xs text-secondary-500 md:text-xl md:text-text">
            in US$
          </span>
          <span className="hidden text-sm text-secondary-500 md:block">
            (approximately)
          </span>
        </div>
      </div>

      <div
        className="flex items-center justify-center bg-primary-100 px-6 py-3 text-base font-bold md:basis-2/5 md:text-2xl 
        lg:px-3 lg:text-xl xl:px-6 2xl:basis-1/2 2xl:text-3xl"
      >
        {formatCurrency(balance)}
      </div>
    </section>
  )
}
