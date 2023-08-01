import { DashboardContextProvider } from '@/contexts/dashboard-context'
import type { Metadata } from 'next'
import { Roboto_Flex as robotoFlex } from 'next/font/google'
import '../globals.css'

const roboto = robotoFlex({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CoinSynch | Dashboard',
  description: 'Control all your cryptos in one place!',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <section
        className={`flex min-h-screen flex-col text-text ${roboto.className}`}
      >
        <DashboardContextProvider>{children}</DashboardContextProvider>
      </section>
    </html>
  )
}
