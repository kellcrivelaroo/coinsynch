'use client'
import Image from 'next/image'
import balanceIcon from '@/../public/balance-icon.svg'
import { useDashboardContext } from '@/contexts/dashboard-context'
import { useEffect, useState } from 'react'
import { formatCurrency } from '@/lib/utils'
import { CoinDataProps } from '@/lib/types'

interface BalanceProps {
  coinsData: Array<CoinDataProps>
}

export default function Balance({ coinsData }: BalanceProps) {
  const [balance, setBalance] = useState(0)
  const { user } = useDashboardContext()

  const calculateTotalBalance = () => {
    let totalBalance = 0
    user?.wallet.forEach((wallet) => {
      let coinValue = 0
      for (let i = 0; i < coinsData.length; i++) {
        if (coinsData[i].id === wallet.id) {
          coinValue = coinsData[i].current_price
          break
        }
      }
      totalBalance += coinValue * wallet.shares
    })
    return totalBalance
  }

  useEffect(() => {
    const totalBalance = calculateTotalBalance()
    setBalance(totalBalance)
  }, [user])

  return (
    <section className="flex w-full justify-between overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="flex items-center gap-2 px-4 py-2 lg:gap-4 lg:p-6">
        <div className="rounded-full bg-primary-100 p-2">
          <Image
            src={balanceIcon}
            width={40}
            alt="balance"
            className="w-5 md:w-8 lg:w-10"
          />
        </div>

        <div className="flex flex-col leading-tight md:w-[10rem] md:flex-row md:flex-wrap md:items-center md:text-xl">
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
      lg:basis-1/2 lg:text-3xl"
      >
        {formatCurrency(balance)}
      </div>
    </section>
  )
}
