import wallet from '@/../../public/wallet-icon.svg'
import emptyWallet from '@/../../public/empty-wallet.svg'
import plus from '@/../../public/plus-icon.svg'
import Image from 'next/image'

export default function Wallet() {
  return (
    <section className="flex flex-col rounded-lg md:bg-white md:shadow-lg">
      <header className="mb-4 flex items-center justify-between border-secondary-200 md:border-b md:p-6">
        <div className="flex items-center gap-4">
          <Image
            src={wallet}
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

      <div
        className="flex min-h-[190px] items-center justify-center overflow-hidden rounded-lg bg-white shadow-lg 
      md:min-h-[308px] md:shadow-none"
      >
        <div className="flex flex-col items-center">
          <Image
            src={emptyWallet}
            alt="wallet icon"
            width={80}
            height={80}
            className="mb-4 h-12"
          />
          <span className="mb-2 text-base font-bold">Nothing here yet...</span>
          <span className="text-sm">Add a crypto and start earning</span>
        </div>
      </div>
    </section>
  )
}
