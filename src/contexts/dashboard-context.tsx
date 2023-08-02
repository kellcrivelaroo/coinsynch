/* eslint-disable @typescript-eslint/no-empty-function */
'use client'
import { CoinDataType, UserDataType, UserWalletInfoType } from '@/lib/types'
import { ReactNode, createContext, useContext, useState } from 'react'

interface ProviderProps {
  children: ReactNode
}

type DashboardContextType = {
  isMenuOpen: boolean
  toggleMenu: () => void
  user: UserDataType
  setUser: (user: UserDataType) => void
  coinsData: Array<CoinDataType>
  setCoinsData: (coins: Array<CoinDataType>) => void
  wallet: UserWalletInfoType
  setWallet: (wallet: UserWalletInfoType) => void
}

const DashboardContext = createContext<DashboardContextType>({
  isMenuOpen: false,
  toggleMenu: () => {},
  user: {
    avatar_url: '',
    id: 0,
    name: '',
    wallet: [
      {
        id: '',
        shares: 0,
      },
    ],
  },
  setUser: () => {},
  coinsData: [],
  setCoinsData: () => {},
  wallet: { coinsInfo: [], totalBalance: 0, userId: 0 },
  setWallet: () => {},
})

export function DashboardContextProvider({ children }: ProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [coinsData, setCoinsData] = useState<Array<CoinDataType>>([])
  const [user, setUser] = useState<UserDataType>({
    id: 0,
    avatar_url: '',
    name: '',
    wallet: [
      {
        id: '',
        shares: 0,
      },
    ],
  })
  const [wallet, setWallet] = useState<UserWalletInfoType>({
    coinsInfo: [],
    totalBalance: 0,
    userId: 0,
  })

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current)
  }

  return (
    <DashboardContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        user,
        setUser,
        coinsData,
        setCoinsData,
        wallet,
        setWallet,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export function useDashboardContext() {
  return useContext(DashboardContext)
}
