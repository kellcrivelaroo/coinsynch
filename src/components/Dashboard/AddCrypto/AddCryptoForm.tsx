import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import CryptoSelect from './CryptoSelect'
import { z } from 'zod'
import { addCryptoFormSchema } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import FormErrorMessage from '@/components/FormErrorMessage'
import { useDashboardContext } from '@/contexts/dashboard-context'

type AddCryptoFormType = z.infer<typeof addCryptoFormSchema>

interface AddCryptoFormProps {
  closeDialog: () => void
}

export default function AddCryptoForm({ closeDialog }: AddCryptoFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddCryptoFormType>({
    resolver: zodResolver(addCryptoFormSchema),
  })

  const { user, setUser } = useDashboardContext()

  const onSubmit: SubmitHandler<AddCryptoFormType> = (data) => {
    const userWallet = [...user.wallet]
    // check if the user already have shares of the selected coins
    const existingCoin = user.wallet.filter(
      (crypto) => crypto.id === data.coin,
    )[0]

    if (existingCoin) {
      const remainingShares = existingCoin.shares + data.shares
      const tmpWallet = user.wallet.filter((crypto) => crypto.id !== data.coin)
      tmpWallet.push({
        id: existingCoin.id,
        shares: remainingShares,
      })
      setUser({
        ...user,
        wallet: [...tmpWallet],
      })
    } else {
      userWallet.push({
        id: data.coin,
        shares: data.shares,
      })

      setUser({
        ...user,
        wallet: [...userWallet],
      })
    }
    closeDialog()
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      {/* Crypto Select */}
      <Controller
        control={control}
        name="coin"
        render={({ field }) => {
          return <CryptoSelect onValueChange={field.onChange} {...field} />
        }}
      />
      <FormErrorMessage>{errors.coin?.message}</FormErrorMessage>

      <input
        type="number"
        step="any"
        placeholder="0.00"
        className="mt-6 w-full rounded-md border border-secondary-300 px-4 py-3"
        {...register('shares', { valueAsNumber: true })}
      />
      <FormErrorMessage>{errors.shares?.message}</FormErrorMessage>

      <button className="mt-6 w-full rounded-full bg-primary-500 py-3 text-white transition-colors hover:bg-primary-400">
        Add Crypto
      </button>
    </form>
  )
}
