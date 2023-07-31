'use client'
import Image from 'next/image'
import avatar from '@/../public/avatar.png'
import logout from '@/../public/logout-icon.svg'
import chevron from '@/../public/chevron-icon.svg'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export default function Avatar() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center justify-end gap-1">
        <Image
          src={avatar}
          alt="avatar"
          width={32}
          height={32}
          className="w-6 md:w-8"
        />
        <span className="hidden md:block">Aulus</span>
        <Image src={chevron} alt="chevron" width={12} height={12} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="DropdownMenuContent rounded bg-white px-6 py-4 text-secondary-500 drop-shadow-[0_0_10px_rgba(0,0,0,0.08)]"
          sideOffset={4}
          align="end"
          arrowPadding={0}
        >
          <button className="flex items-center gap-4">
            <Image
              src={logout}
              alt="logout"
              width={24}
              height={24}
              className="w-4"
            />
            Logout
          </button>
          <DropdownMenu.Arrow className="fill-white drop-shadow-lg" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
