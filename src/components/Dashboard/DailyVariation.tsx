'use client'
import { ChartDataType, CoinDataType } from '@/lib/types'
import { formatChangeInPercentage } from '@/lib/utils'
import Image from 'next/image'
import CryptoChart from './CryptoChart'

interface DailyVariationProps {
  coinInfo: CoinDataType
  chartData: ChartDataType
}

export default function DailyVariation({
  coinInfo,
  chartData,
}: DailyVariationProps) {
  const change = formatChangeInPercentage(
    coinInfo?.price_change_percentage_24h,
    2,
  )

  return (
    <section
      className="flex min-h-full w-full basis-1/2 flex-col justify-between overflow-hidden rounded-lg bg-white
    shadow-lg md:flex-row"
    >
      <div className="flex h-fit flex-col items-start gap-2 p-2 2xl:px-6 2xl:py-4">
        <span className="text-xs text-secondary-500 md:mb-2">
          Daily Variation
        </span>

        <div className="flex w-full items-center gap-2 text-xs md:flex-col md:items-start md:text-sm">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 overflow-hidden rounded-full shadow-sm md:h-6 md:w-6">
              <Image
                src={coinInfo?.image}
                alt={coinInfo?.name}
                width={40}
                height={40}
              />
            </div>
            <span>{coinInfo?.symbol.toUpperCase()}</span>
          </div>

          <span
            className={`ml-2 text-sm md:text-base ${
              coinInfo?.price_change_percentage_24h >= 0
                ? 'text-tertiary-700'
                : 'text-quartenary-700'
            }`}
          >
            {change}
          </span>
        </div>
      </div>

      <div className="flex flex-1">
        <CryptoChart chartData={chartData} />
      </div>
    </section>
  )
}
