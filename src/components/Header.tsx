import logo from '@/../public/coinsynch-logo.svg'
import menu from '@/../public/menu-icon.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header
      className="lg:grid-row-1 grid-cols-auto mx-auto grid max-w-[1440px] grid-rows-[1fr_auto] shadow-md lg:grid-cols-[auto]
    lg:shadow-none"
    >
      {/* Logo and Nav (tablet+ only) */}
      <div className="flex h-14 items-center gap-10 pl-4 md:pl-0">
        <Link href="/">
          <Image
            src={logo}
            width={124}
            alt="CoinSynch Logo"
            className="h-4 w-fit md:h-6"
          />
        </Link>

        {/* Tablet+ */}
        <nav className="hidden gap-6 md:flex">
          <Link
            href="/about"
            className="transition-colors hover:text-primary-500"
          >
            About us
          </Link>
          <Link
            href="/top-cryptos"
            className="transition-colors hover:text-primary-500"
          >
            Top Cryptos
          </Link>
        </nav>
      </div>

      {/* Coin Carousel */}
      <div
        className="col-span-2 row-start-2 flex h-6 items-center justify-center border-t border-secondary-200
      lg:col-span-1 lg:row-start-auto lg:h-auto lg:border-none"
      >
        coin carousel
      </div>

      {/* Menu */}
      <div className="items center flex justify-end pr-4 md:pr-0 lg:col-start-3">
        {/* Mobile */}
        <button className="block md:hidden">
          <Image
            src={menu}
            width={40}
            alt="CoinSynch Logo"
            className="h-6 w-fit"
          />
        </button>

        {/* Tablet+ */}
        <div className="hidden items-center justify-end gap-6 pl-10 md:flex">
          <button className="transition-colors hover:text-primary-500">
            Sign in
          </button>
          <button className="default-button">Sign up</button>
        </div>
      </div>
    </header>
  )
}
