import { ChartDataType } from '@/lib/types'
import { Area, CartesianGrid, AreaChart, ResponsiveContainer } from 'recharts'

interface CryptoChartProps {
  chartData: ChartDataType
}

export default function CryptoChart({ chartData }: CryptoChartProps) {
  const data: Array<{ price: number }> = []

  chartData?.total_volumes.forEach((price) => {
    data.push({
      price: price[1],
    })
  })

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Area dataKey="price" stroke="#ffe1b5" fill="#fff6e8" />
        <CartesianGrid stroke="#e0deea" strokeDasharray="3 3" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
