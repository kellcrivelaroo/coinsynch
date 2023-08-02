'use client'
import * as Select from '@radix-ui/react-select'
import chevron from '@/../public/chevron-icon.svg'
import check from '@/../public/check-icon.svg'
import Image from 'next/image'

export default function CryptoSelect({
  onValueChange,
}: {
  onValueChange: () => void
}) {
  return (
    <Select.Root onValueChange={onValueChange}>
      <Select.Trigger aria-label="transfer coins" asChild>
        <button className="flex w-full items-center justify-between rounded-md border border-secondary-300 p-4 text-sm text-secondary-500">
          <Select.Value placeholder="Select transfer" />
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
        <Select.Viewport className="max-h-[200px]">
          <Select.Group className="divide-y divide-secondary-300 text-secondary-500">
            <Select.Item
              className="flex select-none items-center px-8 py-2"
              value="in"
            >
              <Select.ItemText>Transfer in</Select.ItemText>

              <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                <Image src={check} alt="check" width={12} height={12} />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Item
              className="flex select-none items-center px-8 py-2"
              value="out"
            >
              <Select.ItemText>Transfer out</Select.ItemText>

              <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                <Image src={check} alt="check" width={12} height={12} />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  )
}
