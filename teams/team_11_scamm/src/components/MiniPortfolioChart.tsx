import { LineChart, Line, ResponsiveContainer } from 'recharts'

interface MiniPortfolioChartProps {
  portfolioId: number
}

// Mock data - different per portfolio
const generateData = (id: number) => {
  const baseData = [
    { value: 200000 + id * 10000 },
    { value: 205000 + id * 10000 },
    { value: 203000 + id * 10000 },
    { value: 210000 + id * 10000 },
    { value: 215000 + id * 10000 },
    { value: 220000 + id * 10000 },
    { value: 218000 + id * 10000 },
    { value: 225000 + id * 10000 },
    { value: 230000 + id * 10000 },
    { value: 235000 + id * 10000 },
  ]
  return baseData
}

export default function MiniPortfolioChart({ portfolioId }: MiniPortfolioChartProps) {
  const data = generateData(portfolioId)

  return (
    <ResponsiveContainer width="100%" height={80}>
      <LineChart data={data}>
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#00965e" 
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
