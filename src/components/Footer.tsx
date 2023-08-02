import logo from '@/../public/coinsynch-logo.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="defaultContainer flex h-14 w-full items-center justify-center md:h-16 md:justify-between lg:h-20">
      <span className="hidden text-sm md:block">
        Copyright © 2023 - All rights reserved
      </span>
      <Image src={logo} width={94} alt="CoinSynch Logo" className="h-4 w-fit" />
    </footer>
  )
}
