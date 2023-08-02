import logo from '@/../public/coinsynch-logo.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer
      className="z-30 flex h-14 shrink-0 items-center justify-center bg-white text-xs shadow-[0_-4px_8px] 
      shadow-[#4d4d4d1a] md:justify-between md:px-12 md:text-sm lg:h-16 lg:px-20"
    >
      Copyright © 2023 - All rights reserved
      <Image
        src={logo}
        width={94}
        alt="CoinSynch Logo"
        className="hidden h-4 w-fit md:block"
      />
    </footer>
  )
}
