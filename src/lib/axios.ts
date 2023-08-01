import axios from 'axios'

// const COIN_API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'

const local = 'http://localhost:3333/'

const config = {
  Accept: 'application/json',
}

export const api = axios.create({
  baseURL: local,
  headers: config,
})
