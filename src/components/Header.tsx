import logo from '@/../public/coinsynch-logo.svg'
import menu from '@/../public/menu-icon.svg'
import Image from 'next/image'
import Link from 'next/link'
import Marquee from './Marquee'
import SignInDialog from './SignInAndUp/SignInDialog'
import { getCoinData } from '@/lib/utils'

export default async function Header() {
  const data = await getCoinData()

  return (
    <header
      className="grid-cols-auto mx-auto grid grid-rows-[1fr_auto] text-sm shadow-md md:w-full md:px-2
      lg:max-w-[1000px] lg:grid-cols-[auto_1fr_auto] lg:grid-rows-1 lg:shadow-none xl:max-w-[1240px] 2xl:max-w-[1400px]"
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
            href="#about"
            className="transition-colors hover:text-primary-500"
          >
            About us
          </Link>
          <Link
            href="#top-cryptos"
            className="transition-colors hover:text-primary-500"
          >
            Top Cryptos
          </Link>
        </nav>
      </div>

      {/* Coin Carousel */}
      <div
        className="col-span-2 row-start-2 flex h-6 w-full items-center justify-center border-t border-secondary-200 
        lg:col-span-1 lg:row-start-auto lg:h-full lg:justify-end lg:border-none "
      >
        {/* Tryied to use native `marquee` html tag, but seens like jsx doesn't have support, so i made my custom 
          component and animation with tailwind */}
        {data ? <Marquee coinsData={data} /> : 'loading'}
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
          <SignInDialog>
            <button className="transition-colors hover:text-primary-500">
              Sign in
            </button>
          </SignInDialog>
          <SignInDialog signUpMode={true}>
            <button className="defaultButton">Sign up</button>
          </SignInDialog>
        </div>
      </div>
    </header>
  )
}
