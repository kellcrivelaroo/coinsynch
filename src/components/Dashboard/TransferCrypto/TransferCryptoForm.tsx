import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { transferCryptoFormSchema } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import FormErrorMessage from '@/components/FormErrorMessage'
import { useDashboardContext } from '@/contexts/dashboard-context'
import CryptoSelect from './CryptoSelect'
import { CoinDataType } from '@/lib/types'
import { useState } from 'react'

type TransferCryptoType = z.infer<typeof transferCryptoFormSchema>

interface AddCryptoFormProps {
  coin: CoinDataType
  closeDialog: () => void
}

export default function TransferCryptoForm({
  coin,
  closeDialog,
}: AddCryptoFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TransferCryptoType>({
    resolver: zodResolver(transferCryptoFormSchema),
  })

  const { user, setUser } = useDashboardContext()
  const [customValidation, setCustomValidation] = useState('')
  const selectedCoin = user.wallet.filter((crypto) => crypto.id === coin.id)[0]

  const onSubmit: SubmitHandler<TransferCryptoType> = (data) => {
    if (data.transfer === 'out') {
      // check if user is trying to transfer out more shares than he have
      if (data.shares > selectedCoin.shares) {
        setCustomValidation('Invalid number of shares')
      } else {
        setCustomValidation('')

        // remove intire selected crypto
        if (data.shares === selectedCoin.shares) {
          const userWallet = user.wallet.filter(
            (crypto) => crypto.id !== coin.id,
          )
          setUser({
            ...user,
            wallet: [...userWallet],
          })
        } else {
          // partial removal
          const remainingShares = selectedCoin.shares - data.shares
          const userWallet = user.wallet.filter(
            (crypto) => crypto.id !== coin.id,
          )
          userWallet.push({
            id: selectedCoin.id,
            shares: remainingShares,
          })
          setUser({
            ...user,
            wallet: [...userWallet],
          })
        }
        closeDialog()
      }
    } else if (data.transfer === 'in') {
      const newShares = selectedCoin.shares + data.shares
      const userWallet = user.wallet.filter((crypto) => crypto.id !== coin.id)
      userWallet.push({
        id: selectedCoin.id,
        shares: newShares,
      })
      setUser({
        ...user,
        wallet: [...userWallet],
      })
      closeDialog()
    }
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      {/* Crypto Select */}
      <label className="pb-1 pl-2 text-sm" htmlFor="transfer">
        Transfer
      </label>
      <Controller
        control={control}
        name="transfer"
        render={({ field }) => {
          return <CryptoSelect onValueChange={field.onChange} {...field} />
        }}
      />
      <FormErrorMessage>{errors.transfer?.message}</FormErrorMessage>

      <label className="mt-6 pb-1 pl-2 text-sm " htmlFor="shares">
        Quantity
      </label>
      <input
        type="number"
        step="any"
        placeholder="0.00"
        className="w-full rounded-md border border-secondary-300 px-4 py-3"
        {...register('shares', { valueAsNumber: true })}
      />
      {errors.shares?.message ? (
        <FormErrorMessage>{errors.shares?.message}</FormErrorMessage>
      ) : (
        <FormErrorMessage>{customValidation}</FormErrorMessage>
      )}

      <button className="mt-6 w-full rounded-full bg-primary-500 py-3 text-white transition-colors hover:bg-primary-400">
        Transfer Crypto
      </button>
    </form>
  )
}
