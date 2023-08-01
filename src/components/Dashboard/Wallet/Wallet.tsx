'use client'
import emptyWallet from '@/../../public/empty-wallet.svg'
import plus from '@/../../public/plus-icon.svg'
import walletIcon from '@/../../public/wallet-icon.svg'
import { useDashboardContext } from '@/contexts/dashboard-context'
import { CoinDataType } from '@/lib/types'
import { getUserWallet } from '@/lib/utils'
import Image from 'next/image'
import CryptoCard from './CryptoCard'
import WalletTableRow from './WalletTableRow'

interface WalletProps {
  coinsData: Array<CoinDataType>
}

export default function Wallet({ coinsData }: WalletProps) {
  const { user } = useDashboardContext()
  const { coinsInfo } = getUserWallet(user, coinsData)
  const windowSize = window.innerWidth

  return (
    <section className="flex flex-col rounded-lg md:bg-white md:shadow-lg">
      <header className="mb-4 flex items-center justify-between border-secondary-200 md:border-b md:p-6">
        <div className="flex items-center gap-4">
          <Image
            src={walletIcon}
            alt="wallet icon"
            width={32}
            height={32}
            className="w-6 md:w-8"
          />
          <span className="text-xl font-bold md:text-2xl">My Wallet</span>
        </div>

        <button
          className="flex items-center gap-2 rounded-full bg-primary-500 p-1.5 text-sm text-white
        transition-colors hover:bg-primary-300 md:px-4 md:py-2"
        >
          <Image src={plus} alt="wallet icon" width={12} height={12} />
          <span className="hidden md:block">Add crypto</span>
        </button>
      </header>

      {coinsInfo.length <= 0 && (
        <div
          className="flex min-h-[190px] items-center justify-center overflow-hidden rounded-lg bg-white shadow-lg 
      md:min-h-[308px] md:shadow-none"
        >
          {/* Empty wallet */}
          <div className="flex flex-col items-center">
            <Image
              src={emptyWallet}
              alt="wallet icon"
              width={80}
              height={80}
              className="mb-4 h-12"
            />
            <span className="mb-2 text-base font-bold">
              Nothing here yet...
            </span>
            <span className="text-sm">Add a crypto and start earning</span>
          </div>
        </div>
      )}

      {/* Mobile */}
      {windowSize <= 767 ? (
        <div className="flex gap-4 md:hidden">
          {coinsInfo.map((coin) => {
            return <CryptoCard key={coin.id} coin={coin} />
          })}
        </div>
      ) : (
        <table className="hidden min-w-full flex-col text-xs md:flex">
          <thead className="walletTable w-full px-4 pb-2 text-secondary-500 ">
            <span className="">#</span>
            <span>Crypto</span>
            <span className="">Holdings</span>
            <span>Change</span>
            <span className="flex justify-center">Trade</span>
          </thead>
          {coinsInfo.map((coin, index) => {
            return <WalletTableRow key={index} index={index} coin={coin} />
          })}
        </table>
      )}
    </section>
  )
}
