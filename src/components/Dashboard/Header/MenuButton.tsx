'use client'
import Image from 'next/image'
import menu from '@/../public/menu-icon.svg'
import { useDashboardContext } from '@/contexts/dashboard-context'

export default function MenuButton() {
  const { toggleMenu } = useDashboardContext()

  return (
    <button onClick={toggleMenu}>
      <Image src={menu} width={40} alt="CoinSynch Logo" className="h-6 w-fit" />
    </button>
  )
}
