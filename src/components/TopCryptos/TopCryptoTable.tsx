'use client'
import { useCoinsData } from '@/contexts/coins-context'
import { useEffect, useState } from 'react'
import TopCryptoTableRow from './TopCryptoTableRow'
import { CoinDataType } from '@/lib/types'

export default function TopCryptoTable() {
  const { coinsData } = useCoinsData()
  const [isExpanded, setIsExpanded] = useState(false)
  const [data, setData] = useState<CoinDataType[]>([])

  useEffect(() => {
    isExpanded ? setData(coinsData) : setData(coinsData.slice(0, 5))
  }, [coinsData, isExpanded])

  return (
    <>
      <table className="flex min-w-full flex-col text-xs">
        <thead className="cryptoTable w-full px-4 pb-2 text-secondary-500 ">
          <span className="hidden md:block">#</span>
          <span>Crypto</span>
          <span className="hidden md:block">Price</span>
          <span>Change</span>
          <span className="hidden md:block">Trade</span>
        </thead>
        <tbody className="flex flex-col">
          {data.length > 0 ? (
            data.map((coin, index) => {
              return <TopCryptoTableRow key={index} coin={coin} index={index} />
            })
          ) : (
            <tr className="flex w-full justify-center text-base">
              No cryptos found.
            </tr>
          )}
        </tbody>
      </table>

      <button
        className="mt-8 text-primary-500"
        onClick={() => {
          setIsExpanded((current) => !current)
        }}
      >
        {isExpanded ? 'View less' : 'View more +'}
      </button>
    </>
  )
}
