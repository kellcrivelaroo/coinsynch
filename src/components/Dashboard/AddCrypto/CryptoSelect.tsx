'use client'
import * as Select from '@radix-ui/react-select'
import chevron from '@/../public/chevron-icon.svg'
import check from '@/../public/check-icon.svg'
import Image from 'next/image'
import { useDashboardContext } from '@/contexts/dashboard-context'

export default function CryptoSelect({
  onValueChange,
}: {
  onValueChange: () => void
}) {
  const { coinsData } = useDashboardContext()

  return (
    <Select.Root onValueChange={onValueChange}>
      <Select.Trigger aria-label="crypto coins" asChild>
        <button className="flex w-full items-center justify-between rounded-md border border-secondary-300 p-4 text-sm">
          <Select.Value
            placeholder="Choose"
            className="border bg-primary-400"
          />
          <Select.Icon>
            <Image src={chevron} alt="chevron" width={12} height={12} />
          </Select.Icon>
        </button>
      </Select.Trigger>

      <Select.Content
        className=" flex w-[calc(85vw_-_32px)] rounded-md border border-secondary-300 bg-white md:w-[272px] lg:w-[384px]"
        position="popper"
        sideOffset={8}
      >
        <Select.ScrollUpButton className="flex items-center justify-center">
          <Image
            src={chevron}
            alt="check"
            width={12}
            height={12}
            className="rotate-180"
          />
        </Select.ScrollUpButton>

        <Select.Viewport className="max-h-[200px]">
          <Select.Group className="divide-y divide-secondary-300">
            {coinsData.map((coin, i) => (
              <Select.Item
                key={i}
                value={coin.id}
                className="radix-disabled:opacity-50 relative flex select-none items-center px-8 py-4 text-sm focus:outline-none"
              >
                <Select.ItemText>
                  <div className="flex items-center">
                    <Image
                      src={coin.image}
                      alt="check"
                      width={16}
                      height={16}
                      className="mr-2 rounded-full"
                    />
                    {coin.name}&nbsp;
                    <span className="text-secondary-500">
                      {coin.symbol.toUpperCase()}
                    </span>
                  </div>
                </Select.ItemText>

                <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                  <Image src={check} alt="check" width={12} height={12} />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Viewport>

        <Select.ScrollDownButton className="flex items-center justify-center">
          <Image src={chevron} alt="check" width={12} height={12} />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Root>
  )
}
