import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface ProjectionChartProps {
  projections: {
    prudent: { year5: number; year10: number; year15: number };
    balanced: { year5: number; year10: number; year15: number };
    ambitious: { year5: number; year10: number; year15: number };
  };
  horizon: number;
  initialWealth: number;
}

const ProjectionChart = ({ projections, horizon, initialWealth }: ProjectionChartProps) => {
  const data = [
    {
      year: 0,
      Prudent: initialWealth,
      Balanced: initialWealth,
      Ambitious: initialWealth,
    },
    {
      year: 5,
      Prudent: projections.prudent.year5,
      Balanced: projections.balanced.year5,
      Ambitious: projections.ambitious.year5,
    },
  ];

  if (horizon >= 10) {
    data.push({
      year: 10,
      Prudent: projections.prudent.year10,
      Balanced: projections.balanced.year10,
      Ambitious: projections.ambitious.year10,
    });
  }

  if (horizon >= 15) {
    data.push({
      year: 15,
      Prudent: projections.prudent.year15,
      Balanced: projections.balanced.year15,
      Ambitious: projections.ambitious.year15,
    });
  }

  const formatYAxis = (value: number) => {
    return `€${(value / 1000000).toFixed(1)}M`;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
        <XAxis 
          dataKey="year" 
          label={{ value: 'Years', position: 'insideBottom', offset: -5 }}
        />
        <YAxis 
          tickFormatter={formatYAxis}
          label={{ value: 'Portfolio Value', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip 
          formatter={(value: number) => `€${value.toLocaleString()}`}
          contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="Prudent" 
          stroke="hsl(220, 70%, 50%)" 
          strokeWidth={2}
          dot={{ r: 4 }}
        />
        <Line 
          type="monotone" 
          dataKey="Balanced" 
          stroke="hsl(160, 100%, 12%)" 
          strokeWidth={3}
          dot={{ r: 5 }}
        />
        <Line 
          type="monotone" 
          dataKey="Ambitious" 
          stroke="hsl(45, 90%, 50%)" 
          strokeWidth={2}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ProjectionChart;