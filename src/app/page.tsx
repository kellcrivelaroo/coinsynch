import Hero from '@/components/Hero'
import Solutions from '@/components/Solutions'

export default function Home() {
  return (
    <main className="my-container mx-auto flex w-full flex-col items-center">
      <Hero />
      <Solutions />
    </main>
  )
}
