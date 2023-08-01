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
      <div className="flex items-center px-4 py-2">
        <div className="rounded-full bg-primary-100 p-2">
          <Image src={balanceIcon} width={20} alt="balance" className="" />
        </div>
        <div className="ml-2 flex flex-col leading-tight">
          <span>Balance</span>
          <span className="text-xs text-secondary-500">in US$</span>
        </div>
      </div>

      <div className="flex items-center bg-primary-100 px-6 py-3 text-base font-bold">
        {formatCurrency(balance)}
      </div>
    </section>
  )
}
