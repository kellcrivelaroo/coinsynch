import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero/Hero'
import Solutions from '@/components/Solutions/Solutions'
import Subscription from '@/components/Subscription/Subscription'
import TopCryptos from '@/components/TopCryptos/TopCryptos'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <Header />
      <Hero />
      <Solutions />
      <TopCryptos />
      <Subscription />
      <Footer />
    </main>
  )
}
