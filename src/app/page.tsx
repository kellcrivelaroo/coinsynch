import Hero from '@/components/Hero/Hero'
import Solutions from '@/components/Solutions/Solutions'
import Subscription from '@/components/Subscription/Subscription'
import TopCryptos from '@/components/TopCryptos/TopCryptos'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <Hero />
      <Solutions />
      <TopCryptos />
      <Subscription />
    </main>
  )
}
