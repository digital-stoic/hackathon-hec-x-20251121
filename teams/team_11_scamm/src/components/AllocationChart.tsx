import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const data = [
  { name: 'Actions', value: 35, color: '#00965e' },
  { name: 'Obligations', value: 25, color: '#5ab888' },
  { name: 'Immobilier', value: 20, color: '#8dd3ae' },
  { name: 'Liquidités', value: 15, color: '#bce5cd' },
  { name: 'Autres', value: 5, color: '#dcf2e4' },
]

export default function AllocationChart() {
  return (
    <div>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
            formatter={(value: number) => `${value}%`}
          />
        </PieChart>
      </ResponsiveContainer>
      
      <div className="space-y-2 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-gray-700">{item.name}</span>
            </div>
            <span className="font-semibold text-bnp-dark-900">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
