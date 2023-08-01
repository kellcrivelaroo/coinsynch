import { api } from './axios'

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
