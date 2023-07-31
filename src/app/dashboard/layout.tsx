import { DashboardContextProvider } from '@/contexts/dashboard-context'
import type { Metadata } from 'next'
import { Roboto_Flex as robotoFlex } from 'next/font/google'
import '../globals.css'

const roboto = robotoFlex({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CoinSynch | Dashboard',
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
      <body className={`bg-gray-100 text-text ${roboto.className}`}>
        <DashboardContextProvider>{children}</DashboardContextProvider>
      </body>
    </html>
  )
}
