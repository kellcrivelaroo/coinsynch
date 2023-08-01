/* eslint-disable @typescript-eslint/no-empty-function */
'use client'
import { UserDataType } from '@/lib/types'
import { ReactNode, createContext, useContext, useState } from 'react'

interface ProviderProps {
  children: ReactNode
}

type DashboardContextType = {
  isMenuOpen: boolean
  toggleMenu: () => void
  user: UserDataType | null
  setUser: (user: UserDataType) => void
}

const DashboardContext = createContext<DashboardContextType>({
  isMenuOpen: false,
  toggleMenu: () => {},
  user: null,
  setUser: () => {},
})

export function DashboardContextProvider({ children }: ProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [user, setUser] = useState<UserDataType | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current)
  }

  return (
    <DashboardContext.Provider
      value={{ isMenuOpen, toggleMenu, user, setUser }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export function useDashboardContext() {
  return useContext(DashboardContext)
}
