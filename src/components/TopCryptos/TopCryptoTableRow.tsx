'use client'
import chevron from '@/../public/chevron-prim-300.svg'
import { useCoinsContext } from '@/contexts/coins-context'
import { CoinDataType } from '@/lib/types'
import { formatCurrency } from '@/lib/utils'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@radix-ui/react-collapsible'
import Cookie from 'js-cookie'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface TopCryptoTableRowProps {
  coin: CoinDataType
  index: number
}

export default function TopCryptoTableRow({
  coin,
  index,
}: TopCryptoTableRowProps) {
  const [open, setOpen] = useState(false)
  const { signIn } = useCoinsContext()
  const router = useRouter()

  const positive = coin.price_change_percentage_24h >= 0
  const grayRow = index % 2 ? 'bg-secondary-100/50' : ''

  const price = `US${formatCurrency(coin.current_price)}`

  function handleClick() {
    if (!Cookie.get('auth_token')) {
      signIn()
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <tr className={`${grayRow}`}>
      <Collapsible key={coin.id} open={open} onOpenChange={setOpen}>
        <div className="cryptoTable flex h-14 items-center justify-between px-4 md:h-16">
          {/* Index */}
          <span className="hidden text-sm md:block">
            {(index + 1).toString().padStart(2, '0')}
          </span>

          {/* Crypto */}
          <div className="flex items-center text-base">
            <Image
              src={coin.image}
              alt={coin.name}
              width={32}
              height={32}
              className="w-6 md:w-8"
            />
            <span className="ml-2 mr-1">{coin.name}</span>
            <span className="text-secondary-500">
              {coin.symbol.toUpperCase()}
            </span>
          </div>

          {/* Price */}
          <span className="hidden text-base text-text md:block">{price}</span>

          {/* Change */}
          <span
            className={`hidden text-base md:block ${
              positive ? 'text-tertiary-700' : 'text-quartenary-700'
            }`}
          >
            {positive && '+'}
            {(coin.price_change_percentage_24h * 100).toFixed(3)}%
          </span>

          {/* Button */}
          <button
            className="hidden rounded-full bg-tertiary-700 px-4 py-2 text-white hover:bg-tertiary-600 md:block"
            onClick={handleClick}
          >
            Buy
          </button>

          <CollapsibleTrigger className="md:hidden">
            <button className="mr-1">
              <Image
                src={chevron}
                width={16}
                alt=""
                className={`${open && 'rotate-180'} transition-transform`}
              />
            </button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent
          className={`flex flex-col text-secondary-500 md:hidden ${
            open && 'border-t border-secondary-200'
          }`}
        >
          <tr className="flex w-full justify-between p-4">
            Price <span className="text-sm text-text">{price}</span>
          </tr>
          <tr className="flex w-full justify-between px-4 pb-4">
            Change{' '}
            <span
              className={`text-sm ${
                positive ? 'text-tertiary-700' : 'text-quartenary-700'
              }`}
            >
              {positive && '+'}
              {(coin.price_change_percentage_24h * 100).toFixed(3)}%
            </span>
          </tr>
        </CollapsibleContent>
      </Collapsible>
    </tr>
  )
}
