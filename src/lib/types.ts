export type CoinDataType = {
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

export interface WalletInfo extends CoinDataType {
  shares: number
}

export type UserWalletInfoType = {
  userId: number
  coinsInfo: WalletInfo[]
  totalBalance: number
}
