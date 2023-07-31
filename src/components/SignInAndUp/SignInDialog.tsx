'use client'
import close from '@/../public/close-icon.svg'

import * as Dialog from '@radix-ui/react-dialog'

import Image from 'next/image'
import { ReactNode, useState } from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

interface SignInDialogProps {
  children: ReactNode
  signUpMode?: boolean
}

export default function SignInDialog({
  children,
  signUpMode = false,
}: SignInDialogProps) {
  const [open, setOpen] = useState(false)
  const [signUp, setSignUp] = useState(false)

  const closeDialog = () => {
    setOpen(false)
  }

  function activateSignUpMode() {
    setSignUp(signUpMode)
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild onClick={activateSignUpMode}>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay z-20 bg-black/30 backdrop-blur-sm" />
        <Dialog.Content
          className={`DialogContent relative z-30 flex flex-col items-center p-4 transition-all 
          md:max-w-[340px] md:p-6 lg:max-w-[448px] lg:p-8
          ${signUp ? 'min-h-[444px]' : 'min-h-[316px]'}`}
        >
          {/* Close button */}
          <Dialog.Close asChild>
            <button className="fixed right-4 top-4" aria-label="Close">
              <Image src={close} alt="close button" width={16} height={16} />
            </button>
          </Dialog.Close>

          {/* Header */}
          <Dialog.Title className="mb-6 flex items-center justify-center text-base md:text-xl lg:text-2xl">
            {signUp ? 'Sign up to' : 'Sign in to'}
            <span className="ml-1 font-bold text-primary-500">
              Coin<span className="text-secondary-500">Synch</span>
            </span>
          </Dialog.Title>

          {/* Form */}
          {signUp ? (
            <SignUpForm close={closeDialog} />
          ) : (
            <SignInForm close={closeDialog} />
          )}

          {/* Sign in/up change button */}
          <button
            className="flex text-xs font-bold hover:text-primary-500"
            onClick={() => {
              setSignUp((current) => !current)
            }}
          >
            <span className="hidden font-normal md:block">
              Already have and account?&nbsp;
            </span>
            {signUp ? 'Sign up to' : 'Sign in to'}
            <span className="ml-1 text-primary-500">
              Coin<span className="text-secondary-500">Synch</span>
            </span>
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
