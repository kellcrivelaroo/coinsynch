'use client'
import close from '@/../public/close-icon.svg'

import * as Dialog from '@radix-ui/react-dialog'

import Image from 'next/image'
import { ReactNode } from 'react'
import SignInForm from './SignInForm'

interface SignInDialogProps {
  children: ReactNode
}

export default function SignInDialog({ children }: SignInDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay z-20 bg-black/30 backdrop-blur-sm" />
        <Dialog.Content className="DialogContent relative z-30 flex flex-col items-center p-4">
          {/* Close button */}
          <Dialog.Close asChild>
            <button className="fixed right-4 top-4" aria-label="Close">
              <Image src={close} alt="close button" width={16} height={16} />
            </button>
          </Dialog.Close>

          {/* Header */}
          <Dialog.Title className="mb-6 flex items-center justify-center text-base">
            Sign in to
            <span className="ml-1 font-bold text-primary-500">
              Coin<span className="text-secondary-500">Synch</span>
            </span>
          </Dialog.Title>

          {/* Form */}
          <SignInForm />

          {/* Sign Up */}
          <button className="flex text-xs font-bold hover:text-primary-500">
            Sign up to
            <span className="ml-1 text-primary-500">
              Coin<span className="text-secondary-500">Synch</span>
            </span>
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
