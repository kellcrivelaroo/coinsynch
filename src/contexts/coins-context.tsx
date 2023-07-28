'use client'
import { ReactNode, createContext, useContext, useState } from 'react'
import { CoinDataProps } from '@/lib/types'

interface ProviderProps {
  children: ReactNode
}

export const CoinsDataContext = createContext({
  coinsData: [],
  setCoinsData: (_value: CoinDataProps[]) => {},
})

export function CoinsContextProvider({ children }: ProviderProps) {
  const [coinsData, setCoinsData] = useState([])

  return (
    <CoinsDataContext.Provider value={{ coinsData, setCoinsData }}>
      {children}
    </CoinsDataContext.Provider>
  )
}

export function useCoinsData() {
  return useContext(CoinsDataContext)
}
