import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'

const data = [
  { month: 'Jan', value: 420000 },
  { month: 'Fév', value: 435000 },
  { month: 'Mar', value: 428000 },
  { month: 'Avr', value: 445000 },
  { month: 'Mai', value: 452000 },
  { month: 'Juin', value: 465000 },
  { month: 'Juil', value: 471000 },
  { month: 'Août', value: 468000 },
  { month: 'Sep', value: 475000 },
  { month: 'Oct', value: 480000 },
  { month: 'Nov', value: 487650 },
]

export default function PortfolioChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00965e" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#00965e" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis 
          dataKey="month" 
          stroke="#9ca3af"
          style={{ fontSize: '12px' }}
        />
        <YAxis 
          stroke="#9ca3af"
          style={{ fontSize: '12px' }}
          tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'white',
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}
          formatter={(value: number) => [`${value.toLocaleString('fr-FR')} €`, 'Patrimoine']}
        />
        <Area 
          type="monotone" 
          dataKey="value" 
          stroke="#00965e" 
          strokeWidth={3}
          fill="url(#colorValue)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
