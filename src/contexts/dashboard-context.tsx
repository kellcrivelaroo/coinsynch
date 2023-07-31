/* eslint-disable @typescript-eslint/no-empty-function */
'use client'
import { ReactNode, createContext, useContext, useState } from 'react'

interface ProviderProps {
  children: ReactNode
}

type DashboardContextType = {
  isMenuOpen: boolean
  toggleMenu: () => void
}

const DashboardContext = createContext<DashboardContextType>({
  isMenuOpen: false,
  toggleMenu: () => {},
})

export function DashboardContextProvider({ children }: ProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current)
  }

  return (
    <DashboardContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </DashboardContext.Provider>
  )
}

export function useDashboardContext() {
  return useContext(DashboardContext)
}
