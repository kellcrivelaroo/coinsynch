/* eslint-disable @typescript-eslint/no-empty-function */
'use client'
import { ReactNode, createContext, useContext, useState } from 'react'
import { CoinDataType } from '@/lib/types'

interface ProviderProps {
  children: ReactNode
}

type CoinsDataContextType = {
  coinsData: CoinDataType[]
  setCoinsData: (coinsData: CoinDataType[]) => void
  isSignIn: boolean
  isSignUp: boolean
  signIn: () => void
  signUp: () => void
  closeSignDialog: () => void
}

const CoinsDataContext = createContext<CoinsDataContextType>({
  coinsData: [],
  setCoinsData: () => {},
  isSignIn: false,
  isSignUp: false,
  signIn: () => {},
  signUp: () => {},
  closeSignDialog: () => {},
})

export function CoinsContextProvider({ children }: ProviderProps) {
  const [coinsData, setCoinsData] = useState<CoinDataType[]>([])
  const [isSignIn, setIsSignIn] = useState<boolean>(false)
  const [isSignUp, setIsSignUp] = useState<boolean>(false)

  function signIn() {
    setIsSignIn(true)
    setIsSignUp(false)
  }

  function signUp() {
    setIsSignUp(true)
    setIsSignIn(false)
  }

  function closeSignDialog() {
    setIsSignIn(false)
    setIsSignUp(false)
  }

  return (
    <CoinsDataContext.Provider
      value={{
        coinsData,
        setCoinsData,
        isSignIn,
        isSignUp,
        signIn,
        signUp,
        closeSignDialog,
      }}
    >
      {children}
    </CoinsDataContext.Provider>
  )
}

export function useCoinsContext() {
  return useContext(CoinsDataContext)
}
