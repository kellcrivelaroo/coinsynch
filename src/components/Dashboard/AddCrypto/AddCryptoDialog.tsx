'use client'
import close from '@/../public/close-icon.svg'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { ReactNode, useState } from 'react'
import AddCryptoForm from './AddCryptoForm'

interface AddCryptoDialogProps {
  children: ReactNode
}

export default function AddCryptoDialog({ children }: AddCryptoDialogProps) {
  const [open, setOpen] = useState(false)

  const closeDialog = () => {
    setOpen(false)
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay z-20 bg-black/30 backdrop-blur-sm" />
        <Dialog.Content
          className="DialogContent z-50 w-[85vw] bg-white p-4 md:w-[320px] md:p-6
        lg:w-[448px] lg:p-8"
        >
          {/* Close button */}
          <Dialog.Close asChild>
            <button className="fixed right-4 top-4" aria-label="Close">
              <Image src={close} alt="close button" width={16} height={16} />
            </button>
          </Dialog.Close>

          <Dialog.Title className="mb-6 flex items-center justify-center text-base font-bold md:text-xl lg:text-2xl">
            <span>Add Crypto</span>
          </Dialog.Title>

          <AddCryptoForm closeDialog={closeDialog} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
