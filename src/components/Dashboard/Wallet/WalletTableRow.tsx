import { WalletInfo } from '@/lib/types'
import { formatChangeInPercentage, formatCurrency } from '@/lib/utils'
import Image from 'next/image'
import trade from '@/../../public/trade-icon.svg'

interface WalletTableRowProps {
  index: number
  coin: WalletInfo
}

export default function WalletTableRow({ index, coin }: WalletTableRowProps) {
  const change = formatChangeInPercentage(coin.price_change_percentage_24h, 2)
  const grayRow = index % 2 ? 'bg-secondary-100/50' : ''

  return (
    <tr className={`walletTable h-16 items-center px-4 ${grayRow}`}>
      {/* Index */}
      <span className="to-secondary-500 text-sm">
        {(index + 1).toString().padStart(2, '0')}
      </span>

      {/* Crypto */}
      <div className="flex items-center text-base">
        <Image
          src={coin.image}
          alt={coin.name}
          width={32}
          height={32}
          className="w-8"
        />
        <span className="ml-2 mr-1">{coin.name}</span>
        <span className="text-secondary-500">{coin.symbol.toUpperCase()}</span>
      </div>

      {/* Price */}
      <div className="flex flex-col">
        <span className=" text-base">
          {formatCurrency(coin.current_price * coin.shares)}
        </span>
        <span className="text-primary-500">{`${
          coin.shares
        } ${coin.symbol.toUpperCase()}`}</span>
      </div>

      {/* Change */}
      <span
        className={`text-base ${
          coin.price_change_percentage_24h >= 0
            ? 'text-tertiary-700'
            : 'text-quartenary-700'
        }`}
      >
        {change}
      </span>

      {/* Button */}
      <button className="flex justify-center">
        <Image src={trade} alt="trade" width={24} height={24} />
      </button>
    </tr>
  )
}
