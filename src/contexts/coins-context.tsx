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
}

const CoinsDataContext = createContext<CoinsDataContextType>({
  coinsData: [],
  setCoinsData: () => {},
})

export function CoinsContextProvider({ children }: ProviderProps) {
  const [coinsData, setCoinsData] = useState<CoinDataType[]>([])

  return (
    <CoinsDataContext.Provider value={{ coinsData, setCoinsData }}>
      {children}
    </CoinsDataContext.Provider>
  )
}

export function useCoinsData() {
  return useContext(CoinsDataContext)
}
