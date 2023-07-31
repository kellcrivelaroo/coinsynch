import logo from '@/../public/coinsynch-logo.svg'
import menu from '@/../public/menu-icon.svg'
import Image from 'next/image'
import Avatar from './Avatar'

export default function Header() {
  return (
    <header className="flex h-14 items-center justify-between px-6 shadow-lg shadow-[#4d4d4d1a] md:h-[60px] md:px-10 lg:h-16">
      <div className="flex basis-1/3 items-center lg:hidden">
        <button>
          <Image
            src={menu}
            width={40}
            alt="CoinSynch Logo"
            className="h-6 w-fit"
          />
        </button>
      </div>

      <div className="flex basis-1/3 justify-center  lg:justify-start">
        <Image
          src={logo}
          width={124}
          alt="CoinSynch Logo"
          className="h-4 w-fit md:h-6"
        />
      </div>

      <div className="flex basis-1/3 justify-end ">
        <Avatar />
      </div>
    </header>
  )
}
