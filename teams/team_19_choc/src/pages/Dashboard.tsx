import { StatsCard } from "@/components/StatsCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wallet, 
  TrendingUp, 
  Shield, 
  Clock,
  ArrowUpRight,
  AlertCircle
} from "lucide-react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar
} from "recharts";

const COLORS = ['hsl(158, 64%, 42%)', 'hsl(45, 80%, 65%)', 'hsl(220, 18%, 40%)', 'hsl(200, 70%, 50%)'];

const portfolioData = [
  { name: 'Business', value: 45 },
  { name: 'Real Estate', value: 25 },
  { name: 'Cash', value: 20 },
  { name: 'Other Investments', value: 10 },
];

const projectionData = [
  { year: '2024', value: 5200 },
  { year: '2025', value: 6100 },
  { year: '2026', value: 7300 },
  { year: '2027', value: 8800 },
  { year: '2028', value: 10500 },
];

const cashFlowData = [
  { month: 'Jan', personal: 120, holding: 280 },
  { month: 'Feb', personal: 135, holding: 295 },
  { month: 'Mar', personal: 145, holding: 310 },
  { month: 'Apr', personal: 130, holding: 325 },
  { month: 'May', personal: 155, holding: 340 },
  { month: 'Jun', personal: 160, holding: 355 },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">360° Dashboard</h1>
        <p className="text-muted-foreground">Overview of your wealth</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Net Worth"
          value="€8.5M"
          subtitle="Personal + Professional + Holding"
          icon={Wallet}
          trend={{ value: "+12.5% vs. last year", positive: true }}
        />
        <StatsCard
          title="Risk Level"
          value="Moderate"
          subtitle="Score: 6.5/10"
          icon={Shield}
        />
        <StatsCard
          title="Business Dependency"
          value="68%"
          subtitle="Wealth tied to business"
          icon={AlertCircle}
        />
        <StatsCard
          title="5-Year Projection"
          value="€10.5M"
          subtitle="Median scenario"
          icon={TrendingUp}
          trend={{ value: "+23.5%", positive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card border-border p-6 shadow-card">
          <h3 className="text-lg font-semibold text-foreground mb-4">Wealth Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={portfolioData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {portfolioData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card className="bg-gradient-card border-border p-6 shadow-card">
          <h3 className="text-lg font-semibold text-foreground mb-4">Wealth Projection (5 years)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={projectionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 18%, 22%)" />
              <XAxis dataKey="year" stroke="hsl(210, 20%, 65%)" />
              <YAxis stroke="hsl(210, 20%, 65%)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(220, 22%, 12%)', 
                  border: '1px solid hsl(220, 18%, 22%)',
                  borderRadius: '8px'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(158, 64%, 42%)" 
                strokeWidth={3}
                dot={{ fill: 'hsl(158, 64%, 42%)', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-card border-border p-6 shadow-card lg:col-span-2">
          <h3 className="text-lg font-semibold text-foreground mb-4">Cash Flow: Personal vs Holding</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cashFlowData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 18%, 22%)" />
              <XAxis dataKey="month" stroke="hsl(210, 20%, 65%)" />
              <YAxis stroke="hsl(210, 20%, 65%)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(220, 22%, 12%)', 
                  border: '1px solid hsl(220, 18%, 22%)',
                  borderRadius: '8px'
                }} 
              />
              <Legend />
              <Bar dataKey="personal" fill="hsl(45, 80%, 65%)" name="Personal (k€)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="holding" fill="hsl(158, 64%, 42%)" name="Holding (k€)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <div className="space-y-4">
          <Card className="bg-gradient-card border-border p-6 shadow-card">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="h-5 w-5 text-accent" />
              <h3 className="text-sm font-semibold text-foreground">Important Deadlines</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-foreground">IFI Declaration</p>
                  <p className="text-xs text-muted-foreground">June 15, 2024</p>
                </div>
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">15 days</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-foreground">Annual General Meeting</p>
                  <p className="text-xs text-muted-foreground">June 30, 2024</p>
                </div>
                <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">30 days</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-foreground">Strategic Review</p>
                  <p className="text-xs text-muted-foreground">July 15, 2024</p>
                </div>
                <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">45 days</span>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-accent border-border p-6 shadow-card">
            <h3 className="text-sm font-semibold text-accent-foreground mb-2">Family Protection</h3>
            <p className="text-xs text-accent-foreground/80 mb-4">Status: Partially covered</p>
            <Button className="w-full bg-background/20 hover:bg-background/30 text-accent-foreground">
              Analyze risks
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;