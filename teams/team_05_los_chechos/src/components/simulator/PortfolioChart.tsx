import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface PortfolioChartProps {
  portfolio: {
    cash: number;
    equities: number;
    privateEquity: number;
    realEstate: number;
    alternatives: number;
  };
}

const PortfolioChart = ({ portfolio }: PortfolioChartProps) => {
  const data = [
    { name: "Cash", value: portfolio.cash },
    { name: "Equities", value: portfolio.equities },
    { name: "Private Equity", value: portfolio.privateEquity },
    { name: "Real Estate", value: portfolio.realEstate },
    { name: "Alternatives", value: portfolio.alternatives },
  ];

  const COLORS = [
    "hsl(220, 70%, 50%)",
    "hsl(160, 100%, 12%)",
    "hsl(200, 70%, 45%)",
    "hsl(45, 90%, 50%)",
    "hsl(280, 60%, 50%)",
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, value }) => `${name}: ${value}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value: number) => `${value}%`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PortfolioChart;