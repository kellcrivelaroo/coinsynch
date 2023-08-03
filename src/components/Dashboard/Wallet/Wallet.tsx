'use client'
import emptyWallet from '@/../../public/empty-wallet.svg'
import plus from '@/../../public/plus-icon.svg'
import load from '@/../../public/loading-icon.svg'
import walletIcon from '@/../../public/wallet-icon.svg'

import { useDashboardContext } from '@/contexts/dashboard-context'
import { CoinDataType, WalletInfo } from '@/lib/types'
import { getUserWallet } from '@/lib/utils'

import Image from 'next/image'

import { useEffect, useState } from 'react'
import AddCryptoDialog from '../AddCrypto/AddCryptoDialog'
import CryptoCard from './CryptoCard'
import WalletTableRow from './WalletTableRow'

interface WalletProps {
  coinsData: Array<CoinDataType>
}

export default function Wallet({ coinsData }: WalletProps) {
  const { user } = useDashboardContext()
  const [walletInfo, setWalletInfo] = useState<Array<WalletInfo>>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const { coinsInfo } = getUserWallet(user, coinsData)
    setWalletInfo(coinsInfo)
    setLoading(false)
  }, [user])

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

        <AddCryptoDialog>
          <button
            className="flex items-center gap-2 rounded-full bg-primary-500 p-1.5 text-sm text-white
        transition-colors hover:bg-primary-400 md:px-4 md:py-2"
          >
            <Image src={plus} alt="wallet icon" width={12} height={12} />
            <span className="hidden md:block">Add crypto</span>
          </button>
        </AddCryptoDialog>
      </header>

      {loading && (
        <div className="flex min-h-[190px] items-center justify-center md:min-h-[308px]">
          <Image
            src={load}
            alt="loading icon"
            width={40}
            height={40}
            className="animate-spin"
          />
        </div>
      )}

      {!loading && walletInfo.length <= 0 && (
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
              className="mb-4 h-12 w-auto"
            />
            <span className="mb-2 text-base font-bold">
              Nothing here yet...
            </span>
            <span className="text-sm">Add a crypto and start earning</span>
          </div>
        </div>
      )}

      {!loading && walletInfo.length > 0 && (
        <>
          {/* Mobile */}
          <div className="grid grid-cols-1 gap-4 2xs:grid-cols-2 md:hidden">
            {walletInfo.map((coin, index) => {
              return <CryptoCard key={index} coin={coin} />
            })}
          </div>

          {/* Table+ */}
          <table className="hidden min-w-full flex-col text-xs md:flex">
            <thead
              className={`w-full px-4 pb-2 text-secondary-500 ${
                loading ? 'hidden' : 'walletTable'
              }`}
            >
              <span className="">#</span>
              <span>Crypto</span>
              <span className="">Holdings</span>
              <span>Change</span>
              <span className="flex justify-center">Trade</span>
            </thead>
            <tbody>
              {walletInfo.map((coin, index) => {
                return <WalletTableRow key={index} index={index} coin={coin} />
              })}
            </tbody>
          </table>
        </>
      )}
    </section>
  )
}
