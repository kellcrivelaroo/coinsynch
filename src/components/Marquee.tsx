'use client'
import { useCoinsData } from '@/contexts/coins-context'
import { CoinDataProps } from '@/lib/types'
import { formatCurrency } from '@/lib/utils'
import { useEffect } from 'react'

interface MarqueeProps {
  coinsData: CoinDataProps[]
}

export default function Marquee({ coinsData }: MarqueeProps) {
  const formatedCoinsData = formatData()
  const { setCoinsData } = useCoinsData()

  useEffect(() => {
    setCoinsData(coinsData)
  }, [])

  function formatData() {
    const data = []

    for (let i = 0; i < 5; i++) {
      const coin = coinsData[i]
      const positive = coin.price_change_percentage_24h >= 0

      const coinData = (
        <p key={i} className="mr-3 inline-block whitespace-nowrap">
          {`${coin.symbol.toLocaleUpperCase()} ${formatCurrency(
            coin.current_price,
          )} `}
          <span
            className={`${
              positive ? 'text-tertiary-700' : 'text-quartenary-700'
            }`}
          >
            {positive && '+'}
            {(coin.price_change_percentage_24h * 100).toFixed(3)}
          </span>
        </p>
      )

      data.push(coinData)
    }

    return data
  }

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden text-[10px] 
      2xs:text-[11px] sm:text-xs md:w-[50%] lg:w-[380px]"
    >
      <div className="hover:pause absolute flex w-[340%] animate-marquee flex-nowrap">
        <div className="pointer-events-none float-left flex w-[50%] justify-evenly">
          {formatedCoinsData.map((item) => {
            return item
          })}
        </div>
        <div className="float-left flex w-[50%] justify-evenly">
          {formatedCoinsData.map((item) => {
            return item
          })}
        </div>
      </div>
    </div>
  )
}
