import SubscriptionForm from './SubscriptionForm'

export default function Subscription() {
  return (
    <section className="relative z-10 w-full bg-gradient-to-br from-primary-500 to-primary-700">
      {/* Content */}
      <div className="defaultContainer defaultContainerPadding z-10 flex flex-col text-white md:flex-row md:gap-8 lg:px-28">
        <div className="basis-1/2">
          <span className="mb-1 text-base font-bold text-primary-200 lg:text-xl">
            Lorem ipsum
          </span>
          <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-[40px]">
            Lorem ipsum
          </h2>
          <p className="mb-10 text-sm leading-relaxed md:mb-0 md:text-base lg:mr-10 2xl:mr-40 2xl:w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
        </div>

        <SubscriptionForm />
      </div>

      {/* Waves */}
      <div
        className="absolute inset-0 z-[-1] h-full w-full 
      bg-[url(../../public/waves-footer.svg)] bg-cover bg-center bg-no-repeat"
      />
    </section>
  )
}
