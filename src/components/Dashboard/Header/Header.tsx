import logo from '@/../public/coinsynch-logo.svg'
import Image from 'next/image'
import Avatar from './Avatar'
import MenuButton from './MenuButton'
import { getUserInfo } from '@/lib/utils'

export default async function Header() {
  const user = await getUserInfo()

  return (
    <header
      className=" z-30 flex h-14 items-center justify-between bg-white px-6 shadow-lg shadow-[#4d4d4d1a] 
    md:h-[60px] md:px-10 lg:h-16"
    >
      <div className="flex basis-1/3 items-center lg:hidden">
        <MenuButton />
      </div>

      <div className="flex basis-1/3 justify-center lg:justify-start">
        <Image
          src={logo}
          width={124}
          alt="CoinSynch Logo"
          className="h-4 w-fit md:h-6"
        />
      </div>

      <div className="flex basis-1/3 justify-end ">
        <Avatar user={user} />
      </div>
    </header>
  )
}
