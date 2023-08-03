'use client'
import close from '@/../public/close-icon.svg'

import * as Dialog from '@radix-ui/react-dialog'

import Image from 'next/image'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
import useSigninParam from '@/hooks/useSigninParam'
import { useCoinsContext } from '@/contexts/coins-context'

export default function SignInDialog() {
  const { isSignIn, isSignUp, signIn, signUp, closeSignDialog } =
    useCoinsContext()
  const router = useRouter()

  function handleLogin() {
    closeSignDialog()

    Cookie.set('auth_token', 'DU@H!(2h92HD(*@H@(*H!@98hdD@9c398y49cQWfh378dw)')
    router.push('/dashboard')
  }

  function toggleSignMode() {
    isSignIn ? signUp() : signIn()
  }

  useSigninParam(signIn)

  return (
    <Dialog.Root open={isSignIn || isSignUp} onOpenChange={closeSignDialog}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay z-20 bg-black/30 backdrop-blur-sm" />
        <Dialog.Content
          className={`DialogContent relative z-30 flex w-full max-w-[90vw] flex-col items-center p-4 transition-all 
          md:max-w-[340px] md:p-6 lg:max-w-[448px] lg:p-8
          ${isSignIn ? 'min-h-[316px]' : 'min-h-[444px]'}`}
        >
          {/* Close button */}
          <Dialog.Close asChild>
            <button className="fixed right-4 top-4" aria-label="Close">
              <Image src={close} alt="close button" width={16} height={16} />
            </button>
          </Dialog.Close>

          {/* Header */}
          <Dialog.Title className="mb-6 flex items-center justify-center text-base md:text-xl lg:text-2xl">
            {isSignIn ? 'Sign up to' : 'Sign in to'}
            <span className="ml-1 font-bold text-primary-500">
              Coin<span className="text-secondary-500">Synch</span>
            </span>
          </Dialog.Title>

          {/* Form */}
          {isSignIn ? (
            <SignInForm handleLogin={handleLogin} />
          ) : (
            <SignUpForm handleLogin={handleLogin} />
          )}

          {/* Sign in/up change button */}
          <button
            className="flex text-xs font-bold hover:text-primary-500"
            onClick={toggleSignMode}
          >
            <span className="hidden font-normal md:block">
              Already have and account?&nbsp;
            </span>
            {isSignIn ? 'Sign in to' : 'Sign up to'}
            <span className="ml-1 text-primary-500">
              Coin<span className="text-secondary-500">Synch</span>
            </span>
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
