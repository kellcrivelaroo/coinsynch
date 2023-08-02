'use client'
import close from '@/../public/close-icon.svg'
import { CoinDataType } from '@/lib/types'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { ReactNode, useState } from 'react'
import TransferCryptoForm from './TransferCryptoForm'

interface AddCryptoDialogProps {
  children: ReactNode
  coin: CoinDataType
}

export default function TransferCryptoDialog({
  children,
  coin,
}: AddCryptoDialogProps) {
  const [open, setOpen] = useState(false)

  const closeDialog = () => {
    setOpen(false)
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay z-20 bg-black/30 backdrop-blur-sm" />
        <Dialog.Content className="DialogContent z-50 w-[85vw] bg-white p-4 md:w-[320px] md:p-6 lg:w-[448px] lg:p-8">
          {/* Close button */}
          <Dialog.Close asChild>
            <button className="fixed right-4 top-4" aria-label="Close">
              <Image src={close} alt="close button" width={16} height={16} />
            </button>
          </Dialog.Close>

          <Dialog.Title
            className="mb-4 flex flex-col items-center justify-center gap-4 text-base font-bold md:text-xl
           lg:text-2xl"
          >
            <span>Transfer Crypto</span>
            <div className="h-px w-full bg-secondary-200" />
          </Dialog.Title>

          <div className="mb-6 flex items-center justify-between px-1 text-xs text-secondary-400 md:justify-evenly md:text-sm">
            You are transfering
            <div className="items-centerc flex text-base text-text">
              <Image
                src={coin.image}
                alt={coin.name}
                width={32}
                height={32}
                className="h-6 w-6"
              />
              <span className="ml-2 mr-1">{coin.name}</span>
              <span className="text-secondary-500">
                {coin.symbol.toUpperCase()}
              </span>
            </div>
          </div>

          <TransferCryptoForm closeDialog={closeDialog} coin={coin} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
