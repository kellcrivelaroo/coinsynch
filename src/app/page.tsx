import Hero from '@/components/Hero'
import Solutions from '@/components/Solutions'
import Subscription from '@/components/Subscription'
import TopCryptos from '@/components/TopCryptos'

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
