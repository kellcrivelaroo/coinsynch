export default function News() {
  return (
    <section className="flex h-full w-full flex-col justify-between overflow-hidden rounded-lg bg-white shadow-lg md:flex-row">
      <div className="flex items-center px-4 py-2">
        <div className="rounded-full bg-primary-100 p-2"></div>
        <div className="ml-2 flex flex-col leading-tight">
          <span>news</span>
          <span className="text-xs text-secondary-500">in US$</span>
        </div>
      </div>

      <div className="flex items-center bg-primary-100 px-6 py-3 text-base font-bold">
        news
      </div>
    </section>
  )
}
