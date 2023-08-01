import AsideMenu from '@/components/Dashboard/AsideMenu'
import Balance from '@/components/Dashboard/Balance'
import Header from '@/components/Dashboard/Header/Header'
import { getCoinData } from '@/lib/utils'

export default async function Dashboard() {
  const coinsData = await getCoinData()

  return (
    <>
      <Header />
      <AsideMenu />
      <main className="flex flex-col gap-4 p-6 md:gap-6 md:p-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:p-10 lg:pl-[126px]">
        <Balance coinsData={coinsData} />

        <div className="flex h-full w-full items-center justify-between gap-4 md:gap-6 lg:gap-8">
          <div>DailyVariation</div>
          <div>News</div>
        </div>

        <div className="h-[1px] bg-secondary-300 md:hidden" />

        <div>Wallet</div>
      </main>
    </>
  )
}
