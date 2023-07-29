'use client'
import * as Toast from '@radix-ui/react-toast'
import Image from 'next/image'
import check from '@/../public/check-icon.svg'

interface ConfirmationToastProps {
  open: boolean
  setOpen: (value: boolean) => void
}

export default function ConfirmationToast({
  open,
  setOpen,
}: ConfirmationToastProps) {
  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className="ToastRoot"
        duration={4000}
      >
        <Toast.Title className="ToastTitle flex gap-1 border-b border-secondary-300 px-2 pb-1 text-base font-bold text-text md:text-lg">
          <Image src={check} alt="check" width={24} height={24} />
          Success
        </Toast.Title>
        <Toast.Description className="ToastDescription px-3 pt-2 text-sm text-text md:text-base">
          Email registered for crypto news updates.
          <br />
          <strong>Welcome aboard! 🚀</strong>
        </Toast.Description>
      </Toast.Root>

      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  )
}
