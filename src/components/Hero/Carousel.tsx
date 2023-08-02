import Image from 'next/image'
import woman from '@/../public/carousel/coinsynch-woman-model.png'
import man from '@/../public/carousel/coinsynch-man-model.png'
import womanGray from '@/../public/carousel/coinsynch-woman-model-gray.png'
import coin from '@/../public/coin-icon.svg'
import chart from '@/../public/chart-icon.svg'
import devices from '@/../public/devices-icon.svg'
import atom from '@/../public/atom-icon.svg'

export default function Carousel() {
  return (
    <div className="absolute flex w-full gap-10 lg:-mt-20">
      <div className="relative w-fit pl-10">
        <Image
          src={woman}
          alt="Happy woman"
          width={420}
          className="object-contain object-left md:h-64 lg:h-[500px]"
        />

        <div className="absolute left-0 top-16 animate-float-2 rounded-md bg-primary-100 p-2 shadow-lg">
          <Image
            src={coin}
            alt="coin icon"
            width={64}
            height={64}
            className="md:w-10 lg:w-16"
          />
        </div>

        <div className="absolute bottom-20 right-0 animate-float-2.5 rounded-md bg-primary-100 p-2 shadow-lg">
          <Image
            src={chart}
            alt="chart icon"
            width={64}
            height={64}
            className="md:w-10 lg:w-16"
          />
        </div>
      </div>

      <div className="relative w-fit pl-10">
        <Image
          src={man}
          alt="Happy man"
          width={420}
          className="object-contain object-left md:h-64 lg:h-[500px]"
        />

        <div className="absolute left-0 top-24 animate-float-2 rounded-md bg-primary-100 p-2 shadow-lg">
          <Image
            src={devices}
            alt="devices icon"
            width={64}
            height={64}
            className="md:w-10 lg:w-16"
          />
        </div>

        <div className="absolute right-0 top-6 animate-float-2.5 rounded-md bg-primary-100 p-2 shadow-lg">
          <Image
            src={atom}
            alt="devices icon"
            width={64}
            height={64}
            className="md:w-10 lg:w-16"
          />
        </div>
      </div>

      <div className="relative w-fit pl-10">
        <Image
          src={womanGray}
          alt="Happy woman"
          width={420}
          className="object-contain object-left md:h-64 lg:h-[500px]"
        />

        <div className="absolute bottom-40 left-0 animate-float-2 rounded-md bg-primary-100 p-2 shadow-lg">
          <Image
            src={coin}
            alt="coin icon"
            width={64}
            height={64}
            className="md:w-10 lg:w-16"
          />
        </div>

        <div className="absolute bottom-10 right-0 animate-float-2.5 rounded-md bg-primary-100 p-2 shadow-lg">
          <Image
            src={chart}
            alt="coin icon"
            width={64}
            height={64}
            className="md:w-10 lg:w-16"
          />
        </div>
      </div>
    </div>
  )
}
