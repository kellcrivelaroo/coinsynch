'use client'
import wallet from '@/../public/wallet-icon.svg'
import atom from '@/../public/atom-icon.svg'
import coin from '@/../public/coin-icon.svg'
import chart from '@/../public/chart-icon.svg'
import arrow from '@/../public/arrow-prim-500.svg'
import { useDashboardContext } from '@/contexts/dashboard-context'

import * as Tooltip from '@radix-ui/react-tooltip'
import Image from 'next/image'

const MenuItems = [
  {
    icon: wallet,
    alt: 'wallet',
    title: 'Lorem Ipsum',
  },
  {
    icon: atom,
    alt: 'atom',
    title: 'Lorem Ipsum',
  },
  {
    icon: coin,
    alt: 'coin',
    title: 'Lorem Ipsum',
  },
  {
    icon: chart,
    alt: 'chart',
    title: 'Lorem Ipsum',
  },
]

export default function AsideMenu() {
  const { isMenuOpen, toggleMenu } = useDashboardContext()

  return (
    <div className="pointer-events-none fixed flex h-full w-screen">
      <aside
        data-open={isMenuOpen}
        className="pointer-events-auto h-full overflow-hidden border-t border-secondary-300 bg-white transition-all
        data-[open=false]:min-w-0 data-[open=true]:min-w-[224px] data-[open=false]:max-w-0 data-[open=true]:max-w-[224px]
        md:data-[open=true]:min-w-[240px] md:data-[open=true]:max-w-[240px] lg:min-w-[86px] lg:data-[open=false]:min-w-[86px]"
      >
        <nav className="whitespace-nowrap px-6 py-10">
          <ul className="mb-10 flex flex-col gap-8 md:mb-20">
            {MenuItems.map((item) => {
              return (
                <li key={item.alt}>
                  <Tooltip.Provider delayDuration={0}>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <button className="flex items-center gap-4 transition-colors hover:text-primary-500">
                          <Image
                            src={item.icon}
                            alt={item.alt}
                            width={32}
                            height={32}
                            className="w-6 md:w-8"
                          />
                          <span className="lg:hidden">{item.title}</span>
                        </button>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content
                          side="right"
                          sideOffset={12}
                          className="TooltipContent hidden rounded bg-primary-500 px-6 py-2 text-white shadow-lg 
                          shadow-black/10 lg:block"
                        >
                          {item.title}
                          <Tooltip.Arrow className="fill-primary-500" />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                </li>
              )
            })}
          </ul>
          <button
            className="rounded-full border border-primary-500 p-1 md:p-2 lg:hidden"
            onClick={toggleMenu}
          >
            <Image
              src={arrow}
              alt={arrow}
              width={16}
              height={16}
              className="w-4"
            />
          </button>
        </nav>
      </aside>
      <div
        id="portal"
        data-open={isMenuOpen}
        className="pointer-events-none h-full w-full transition-colors data-[open=true]:pointer-events-auto 
        data-[open=true]:bg-black/30 data-[open=true]:backdrop-blur-sm lg:hidden"
        onClick={toggleMenu}
      />
    </div>
  )
}
