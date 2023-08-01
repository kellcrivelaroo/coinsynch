import AsideMenu from '@/components/Dashboard/AsideMenu'
import Balance from '@/components/Dashboard/Balance'
import DailyVariation from '@/components/Dashboard/DailyVariation'
import Footer from '@/components/Dashboard/Footer'
import Header from '@/components/Dashboard/Header/Header'
import News from '@/components/Dashboard/News'
import Wallet from '@/components/Dashboard/Wallet/Wallet'
import { getCoinData } from '@/lib/utils'

export default async function Dashboard() {
  const coinsData = await getCoinData()
  const randomCoin = Math.floor(Math.random() * 10)

  return (
    <>
      <Header />
      <AsideMenu />
      <main
        className="flex min-h-max flex-1 flex-col gap-4 bg-gray p-6 pt-20 md:gap-6 md:p-8 md:pt-[92px] lg:grid 
        lg:grid-cols-[360px_1fr] lg:grid-rows-[auto_1fr] lg:pl-[120px] lg:pt-[96px] xl:grid-cols-2 xl:gap-8 xl:p-10 xl:pl-[126px]
        xl:pt-[104px]"
      >
        <Balance coinsData={coinsData} />

        <div
          className="flex h-full min-h-[160px] w-full justify-between gap-4 2xs:min-h-[192px] md:min-h-[112px] md:gap-6
        lg:gap-8 2xl:min-h-[140px]"
        >
          <DailyVariation coinInfo={coinsData[randomCoin]} />
          <News />
        </div>

        <div className="h-[1px] bg-secondary-300 md:hidden" />

        <div className="lg:col-span-2">
          <Wallet coinsData={coinsData} />
        </div>
      </main>
      <Footer />
    </>
  )
}
