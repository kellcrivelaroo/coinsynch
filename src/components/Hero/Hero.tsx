import arrow from '@/../public/arrow-right-icon.svg'
import Image from 'next/image'
// import Carousel from './Carousel'
import SignInDialog from '../SignInAndUp/SignInDialog'

export default function Hero() {
  return (
    <section
      className="defaultContainer mb-[160px] w-full px-4 pt-14 md:mb-[247px] md:px-0 md:pt-16 lg:mb-0 
    lg:min-h-[calc(100vh_-_20px)] lg:pt-40"
    >
      <div className="flex w-full gap-16">
        <div className="z-10 flex flex-col items-center text-center md:basis-1/2 md:items-start md:text-start">
          <h1 className="mb-2 text-xl font-bold leading-tight text-primary-500 md:mb-4 md:text-[32px] lg:text-5xl">
            Lorem ipsum dolor sit amet, consectetur
          </h1>

          <p className="mb-6 text-base leading-normal lg:mb-8 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>

          <SignInDialog signUpMode={true}>
            <button
              className="defaultButton mb-6 flex w-[180px] items-center justify-center gap-2 uppercase md:mb-10 md:w-[232px] md:py-3
          md:text-base lg:mb-20 lg:w-[276px]"
            >
              sign up now
              <Image src={arrow} alt="arrow" width={12} />
            </button>
          </SignInDialog>

          <div className="space-x-4 text-primary-500 md:space-x-6 lg:space-x-8 lg:text-lg">
            <button
              className="rounded bg-primary-100 px-4 py-1 transition-colors hover:bg-primary-400
            hover:text-primary-100"
            >
              Cryptos
            </button>
            <button
              className="rounded bg-primary-100 px-4 py-1 transition-colors hover:bg-primary-400
            hover:text-primary-100"
            >
              NFTs
            </button>
            <button
              className="rounded bg-primary-100 px-4 py-1 transition-colors hover:bg-primary-400
            hover:text-primary-100"
            >
              Games
            </button>
          </div>
        </div>

        {/* Tablet+ */}
        <div className="hidden w-full basis-1/2 md:flex">
          {/* <Carousel /> */}
        </div>
      </div>
      {/* Waves */}
      <div
        className="absolute left-0 -mt-8 h-[180px] w-[100vw] bg-[url(../../public/waves.svg)] bg-cover bg-[50%] bg-no-repeat 
        md:mt-0 md:h-[247px] lg:-bottom-20 lg:h-[50%] lg:bg-top"
      />
    </section>
  )
}
