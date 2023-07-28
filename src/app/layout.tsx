import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as robotoFlex } from 'next/font/google'
import { CoinsContextProvider } from '@/contexts/coins-context'

const roboto = robotoFlex({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CoinSynch | Crypto Currency Wallet for Easy Transactions',
  description:
    'Your reliable and secure crypto currency wallet designed to simplify your digital asset management. Manage, send, and receive various cryptocurrencies seamlessly with coinSynch!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden text-text ${roboto.className}`}>
        <CoinsContextProvider>
          <Header />
          {children}
        </CoinsContextProvider>
      </body>
    </html>
  )
}
