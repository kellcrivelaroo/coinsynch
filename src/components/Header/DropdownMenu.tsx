'use client'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import menu from '@/../public/menu-icon.svg'
import Image from 'next/image'
import Sign from './Sign'
import Link from 'next/link'
import { useState } from 'react'

export default function DropdownMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Dropdown.Root open={open} onOpenChange={setOpen}>
      <Dropdown.Trigger className="md:hidden">
        <Image
          src={menu}
          width={40}
          alt="CoinSynch Logo"
          className="h-6 w-fit"
        />
      </Dropdown.Trigger>

      <Dropdown.Portal>
        <Dropdown.Content
          className={`DropdownMenuContent z-50 flex flex-col gap-2 rounded bg-white p-4 text-sm
          text-secondary-500 drop-shadow-[0_0_10px_rgba(0,0,0,0.08)]`}
          sideOffset={-12}
          align="end"
          arrowPadding={0}
          onClick={() => {
            setOpen(false)
          }}
        >
          <nav className="flex flex-col items-center">
            <Link
              href="#top-cryptos"
              className="transition-colors hover:text-primary-500"
            >
              Top Cryptos
            </Link>
          </nav>

          <div className="h-px w-full min-w-[120px] bg-secondary-300" />

          <Sign />
          <Dropdown.Arrow className="fill-white drop-shadow-lg" />
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  )
}
