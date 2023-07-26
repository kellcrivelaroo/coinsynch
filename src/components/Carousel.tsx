import Image from 'next/image'
import woman from '@/../public/carousel/coinsynch-woman-model.png'

export default function Carousel() {
  return (
    <>
      <Image
        src={woman}
        alt="Happy woman"
        width={600}
        className="object-contain object-left md:h-64 lg:-mt-20 lg:h-[500px]"
      />
    </>
  )
}
