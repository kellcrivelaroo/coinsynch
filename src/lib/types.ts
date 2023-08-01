export interface CoinDataProps {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  price_change_percentage_24h: number
}

export type UserDataType = {
  avatar_url: string
  id: number
  name: string
  wallet: [
    {
      id: string
      shares: number
    },
  ]
}
