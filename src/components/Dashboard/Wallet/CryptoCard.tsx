import { WalletInfo } from '@/lib/types'
import { formatChangeInPercentage, formatCurrency } from '@/lib/utils'
import Image from 'next/image'
import TransferCryptoDialog from '../TransferCrypto/TransferCryptoDialog'

interface CryptoCardsProps {
  coin: WalletInfo
}

export default function CryptoCards({ coin }: CryptoCardsProps) {
  const symbol = coin.symbol.toUpperCase()
  return (
    <div className="flex flex-col overflow-hidden rounded-md bg-white shadow-lg">
      <header className="flex items-center justify-center bg-primary-100 p-4 text-sm">
        <Image
          src={coin.image}
          alt={coin.name}
          width={32}
          height={32}
          className="w-4 rounded-full shadow-md"
        />
        <span className="ml-2 mr-1">{coin.name}</span>
        <span className="text-secondary-500">{symbol}</span>
      </header>

      <div className="p-4">
        <div className="flex flex-col">
          <span className="text-xs text-secondary-500">Holdings</span>
          <span className="text-sm">
            {formatCurrency(coin.current_price * coin.shares)}
          </span>
          <span className="text-xs text-primary-500">{`${coin.shares} ${symbol}`}</span>
        </div>

        <div className="my-4 h-px bg-secondary-200" />

        <div className="mb-4 flex flex-col">
          <span className="text-xs text-secondary-500">Change</span>
          <span
            className={`text-sm ${
              coin.price_change_percentage_24h >= 0
                ? 'text-tertiary-700'
                : 'text-quartenary-700'
            }`}
          >
            {formatChangeInPercentage(coin.price_change_percentage_24h)}
          </span>
        </div>

        <TransferCryptoDialog coin={coin}>
          <button className="w-full rounded-full bg-primary-500 py-1 text-sm text-white hover:bg-primary-400">
            Trade
          </button>
        </TransferCryptoDialog>
      </div>
    </div>
  )
}
