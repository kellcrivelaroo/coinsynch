import axios from 'axios'

const COIN_API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`

const COIN_API_CHART =
  'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=3&interval=daily'

// const localCoins = 'http://localhost:3333/coins'

const localUsers = 'http://localhost:3333/users/1'

const config = {
  Accept: 'application/json',
}

export const coinApi = axios.create({
  baseURL: COIN_API_URL,
  headers: config,
})

export const userApi = axios.create({
  baseURL: localUsers,
  headers: config,
})

export const chartApi = axios.create({
  baseURL: COIN_API_CHART,
  headers: config,
})
