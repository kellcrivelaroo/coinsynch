/* eslint-disable @typescript-eslint/no-empty-function */
'use client'
import { ReactNode, createContext, useContext, useState } from 'react'
import { CoinDataProps } from '@/lib/types'

interface ProviderProps {
  children: ReactNode
}

type CoinsDataContextType = {
  coinsData: CoinDataProps[]
  setCoinsData: (coinsData: CoinDataProps[]) => void
}

const CoinsDataContext = createContext<CoinsDataContextType>({
  coinsData: [],
  setCoinsData: () => {},
})

export function CoinsContextProvider({ children }: ProviderProps) {
  const [coinsData, setCoinsData] = useState<CoinDataProps[]>([])

  return (
    <CoinsDataContext.Provider value={{ coinsData, setCoinsData }}>
      {children}
    </CoinsDataContext.Provider>
  )
}

export function useCoinsData() {
  return useContext(CoinsDataContext)
}
