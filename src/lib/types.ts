export type CoinDataType = {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  price_change_percentage_24h: number
}

export interface IUserWallet {
  wallet: [
    {
      id: string
      shares: number
    },
  ]
}

export type UserDataType = {
  avatar_url: string
  id: number
  name: string
  wallet: {
    id: string
    shares: number
  }[]
}

export interface WalletInfo extends CoinDataType {
  shares: number
}

export type UserWalletInfoType = {
  userId: number
  coinsInfo: WalletInfo[]
  totalBalance: number
}

export type ChartDataType = {
  market_caps: Array<Array<number>>
  prices: Array<Array<number>>
  total_volumes: Array<Array<number>>
}
