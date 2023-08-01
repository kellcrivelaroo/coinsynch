import AsideMenu from '@/components/Dashboard/AsideMenu'
import Balance from '@/components/Dashboard/Balance'
import DailyVariation from '@/components/Dashboard/DailyVariation'
import Header from '@/components/Dashboard/Header/Header'
import News from '@/components/Dashboard/News'
import Wallet from '@/components/Dashboard/Wallet'
import { getCoinData } from '@/lib/utils'

export default async function Dashboard() {
  const coinsData = await getCoinData()
  const randomCoin = Math.floor(Math.random() * 10)

  return (
    <>
      <Header />
      <AsideMenu />
      <main className="flex flex-col gap-4 p-6 md:gap-6 md:p-8 lg:grid lg:grid-cols-[360px_1fr] lg:pl-[126px] xl:gap-8 xl:p-10">
        <Balance coinsData={coinsData} />

        <div className="flex h-full w-full items-center justify-between gap-4 md:gap-6 lg:gap-8">
          <DailyVariation coinInfo={coinsData[randomCoin]} />
          <News />
        </div>

        <div className="h-[1px] bg-secondary-300 md:hidden" />

        <Wallet />
      </main>
    </>
  )
}
