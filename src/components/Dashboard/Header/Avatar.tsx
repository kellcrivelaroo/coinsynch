'use client'
import chevron from '@/../public/chevron-icon.svg'
import logout from '@/../public/logout-icon.svg'
import Image from 'next/image'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { useDashboardContext } from '@/contexts/dashboard-context'
import { UserDataType } from '@/lib/types'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import Cookie from 'js-cookie'

export default function Avatar({ user }: { user: UserDataType }) {
  const { setUser } = useDashboardContext()
  const router = useRouter()

  useEffect(() => {
    setUser(user)
  }, [])

  const handleLogout = () => {
    Cookie.remove('auth_token')
    router.push('/')
  }

  return (
    // Still need to deal with the layout shift that happens when opening the dropdownmenu with the fixed header and the page have scrollbar
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center justify-end gap-2">
        <Image
          src={user.avatar_url}
          alt="avatar"
          width={32}
          height={32}
          className="w-6 md:w-8"
        />
        <span className="hidden md:block">{user.name}</span>
        <Image src={chevron} alt="chevron" width={12} height={12} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={`DropdownMenuContent z-50 rounded bg-white px-6 py-4 text-secondary-500
          drop-shadow-[0_0_10px_rgba(0,0,0,0.08)]`}
          sideOffset={4}
          align="end"
          arrowPadding={0}
        >
          <button className="flex items-center gap-4" onClick={handleLogout}>
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
