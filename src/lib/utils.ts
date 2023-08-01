import { api } from './axios'
import { CoinDataType, UserDataType, UserWalletInfoType } from './types'

export const formatCurrency = (value: number): string => {
  const dolarFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return dolarFormat.format(value)
}

export const formatChangeInPercentage = (value: number, fixed = 3): string => {
  const positive = value >= 0 ? '+' : ''
  const formatedValue = positive + value.toFixed(fixed) + '%'
  return formatedValue
}

export const getCoinData = async () => {
  return api
    .get('/coins')
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return []
    })
}

export const getUserInfo = async () => {
  return api
    .get(`/users/1`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
}

export const getUserWallet = (
  user: UserDataType,
  coinsData: Array<CoinDataType>,
) => {
  const userCoinsInfo: UserWalletInfoType = {
    userId: user.id,
    coinsInfo: [],
    totalBalance: 0,
  }
  let total = 0

  user.wallet.forEach((wallet) => {
    let coinValue = 0
    for (let i = 0; i < coinsData.length; i++) {
      if (coinsData[i].id === wallet.id) {
        // saves the coin info into the user's info
        userCoinsInfo.coinsInfo.push({
          ...coinsData[i],
          shares: wallet.shares,
        })
        coinValue = coinsData[i].current_price
        break
      }
    }
    total += coinValue * wallet.shares
  })

  userCoinsInfo.totalBalance = total
  return userCoinsInfo
}
