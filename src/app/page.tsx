import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import SignInDialog from '@/components/SignInAndUp/SignDialog'
import Solutions from '@/components/Solutions/Solutions'
import Subscription from '@/components/Subscription/Subscription'
import TopCryptos from '@/components/TopCryptos/TopCryptos'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center overflow-x-hidden">
      <Header />
      <SignInDialog />
      <Hero />
      <Solutions />
      <TopCryptos />
      <Subscription />
      <Footer />
    </main>
  )
}
