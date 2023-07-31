import coin from '@/../public/coin-icon.svg'
import atom from '@/../public/atom-icon.svg'
import chart from '@/../public/chart-icon.svg'
import device from '@/../public/devices-icon.svg'
import SolutionsCard from './SolutionsCard'
import SignInDialog from '../SignInAndUp/SignInDialog'

const cards = [
  {
    id: 1,
    icon: coin,
    alt: 'Crypto Coin',
  },
  {
    id: 2,
    icon: atom,
    alt: 'Atom',
  },
  {
    id: 3,
    icon: chart,
    alt: 'Chart',
  },
  {
    id: 4,
    icon: device,
    alt: 'Devices',
  },
]

export default function Solutions() {
  return (
    <section
      id="about"
      className="w-[100vw] bg-gradient-to-b from-white to-secondary-200"
    >
      <div
        className="defaultContainer flex w-full flex-col items-center overflow-hidden py-14 md:overflow-visible md:py-20
        lg:flex-row-reverse lg:gap-4 lg:px-0 lg:py-32 2xl:gap-12"
      >
        <div className="mb-3 flex flex-col px-7 md:w-[500px] lg:w-[600px] 2xl:w-fit">
          <span className="mb-1 text-base font-bold text-primary-500 lg:text-xl">
            Lorem ipsum
          </span>
          <h2 className="mb-4 text-2xl font-bold md:text-[32px] lg:text-[40px]">
            Lorem ipsum
          </h2>
          <p className="mb-10 text-sm leading-relaxed md:text-base lg:mr-10 2xl:mr-40 2xl:w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla u rna,
            porttitor
          </p>
          <SignInDialog isSignUp={true}>
            <button
              className="hidden w-[176px] min-w-[100px] justify-center rounded-full bg-primary-500 px-4 py-3 text-white 
        transition-colors hover:bg-primary-400 lg:flex"
            >
              Sign up now
            </button>
          </SignInDialog>
        </div>

        <div
          className="flex w-full flex-nowrap gap-4 self-start overflow-x-scroll px-7 pb-4 md:flex-wrap md:gap-6 md:overflow-visible
      md:px-6 md:pb-4 lg:gap-8 lg:px-0 2xl:w-fit md:[&>*:nth-child(3)]:ml-auto "
        >
          {cards.map((card) => {
            return (
              <SolutionsCard key={card.id} icon={card.icon} alt={card.alt} />
            )
          })}
        </div>
      </div>
    </section>
  )
}
