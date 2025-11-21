import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownRight, 
  Calendar,
  FileText,
  Award,
  User,
  Bell,
  Settings,
  LogOut
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import bnpLogo from "@/assets/bnp-logo.jpg";

const Dashboard = () => {
  const navigate = useNavigate();

  const transactions = [
    { id: 1, type: "income", description: "Client - Invoice #2024-001", amount: 5000, date: "15 Jan 2025", category: "Sales" },
    { id: 2, type: "expense", description: "Office 365 Subscription", amount: -120, date: "14 Jan 2025", category: "Software" },
    { id: 3, type: "income", description: "Client - Invoice #2024-002", amount: 3500, date: "13 Jan 2025", category: "Sales" },
    { id: 4, type: "expense", description: "LinkedIn Ads", amount: -450, date: "12 Jan 2025", category: "Marketing" },
    { id: 5, type: "expense", description: "OVH Cloud Hosting", amount: -89, date: "10 Jan 2025", category: "Infrastructure" },
  ];

  const milestones = [
    { threshold: 20000, label: "First advisor", reached: true, current: 25400 },
    { threshold: 100000, label: "Pre-Private Banking", reached: false, current: 25400 },
    { threshold: 250000, label: "Private Banking", reached: false, current: 25400 },
  ];

  const currentMilestone = milestones.find(m => !m.reached);
  const progressToNext = currentMilestone 
    ? (currentMilestone.current / currentMilestone.threshold) * 100 
    : 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
              <img src={bnpLogo} alt="BNP Paribas Banque Privée" className="h-10 w-auto" />
              <span className="font-semibold text-lg">Private Launch</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <Button variant="ghost" size="sm">
                Dashboard
              </Button>
              <Button variant="ghost" size="sm">
                Transactions
              </Button>
              <Button variant="ghost" size="sm">
                Invoices
              </Button>
              <Button variant="ghost" size="sm">
                Documents
              </Button>
              <Button variant="ghost" size="sm" onClick={() => navigate("/wealth")}>
                Wealth
              </Button>
              <Button variant="ghost" size="sm" onClick={() => navigate("/strategies")}>
                Advice
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Hello, Jean 👋</h1>
          <p className="text-muted-foreground">Here's an overview of your activity</p>
        </div>

        {/* Private Banking Alert */}
        {milestones[0].reached && (
          <Card className="p-6 mb-8 bg-gradient-to-r from-accent/10 to-accent/5 border-2 border-accent/20">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">🎉 Congratulations! You're eligible for a Private Banking advisor</h3>
                  <p className="text-muted-foreground mb-4">
                    You've crossed the €20,000 revenue threshold. A dedicated advisor can now support you.
                  </p>
                  <Button variant="gold" onClick={() => navigate("/private-banking")}>
                    Schedule appointment
                    <Calendar className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">Current balance</span>
              <CreditCard className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-1">€48,520</div>
            <div className="flex items-center text-sm text-success">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              <span>+12.5% this month</span>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">Revenue this month</span>
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <div className="text-3xl font-bold mb-1">€25,400</div>
            <div className="flex items-center text-sm text-success">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              <span>+8.3% vs last month</span>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">Expenses</span>
              <ArrowDownRight className="w-5 h-5 text-destructive" />
            </div>
            <div className="text-3xl font-bold mb-1">€8,450</div>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>33% of revenue</span>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">VAT collected</span>
              <FileText className="w-5 h-5 text-info" />
            </div>
            <div className="text-3xl font-bold mb-1">€5,080</div>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>To be paid</span>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Transactions */}
            <Card>
              <div className="p-6 border-b border-border">
                <h2 className="text-xl font-bold">Recent transactions</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === "income" ? "bg-success/10" : "bg-destructive/10"
                        }`}>
                          {transaction.type === "income" ? (
                            <ArrowUpRight className="w-5 h-5 text-success" />
                          ) : (
                            <ArrowDownRight className="w-5 h-5 text-destructive" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{transaction.description}</div>
                          <div className="text-sm text-muted-foreground">{transaction.category} · {transaction.date}</div>
                        </div>
                      </div>
                      <div className={`text-lg font-semibold ${
                        transaction.type === "income" ? "text-success" : "text-foreground"
                      }`}>
                        {transaction.amount > 0 ? "+" : ""}{transaction.amount.toLocaleString()}€
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4">
                  View all transactions
                </Button>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Milestone Progress */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                Private Banking Progress
              </h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{milestone.label}</span>
                      <span className="text-sm text-muted-foreground">
                        {milestone.threshold.toLocaleString()}€
                      </span>
                    </div>
                    <Progress 
                      value={milestone.reached ? 100 : (milestone.current / milestone.threshold) * 100} 
                      className={milestone.reached ? "bg-success/20" : ""}
                    />
                    {milestone.reached && (
                      <p className="text-xs text-success mt-1 flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        Milestone reached
                      </p>
                    )}
                  </div>
                ))}
                {currentMilestone && (
                  <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Next milestone</p>
                    <p className="text-lg font-semibold">
                      €{(currentMilestone.threshold - currentMilestone.current).toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">remaining to unlock {currentMilestone.label}</p>
                  </div>
                )}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Quick actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Create invoice
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Manage clients
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Order a card
                </Button>
              </div>
            </Card>

            {/* Company Info */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">My Company</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Name</span>
                  <p className="font-medium">My Super Company SASU</p>
                </div>
                <div>
                  <span className="text-muted-foreground">SIRET</span>
                  <p className="font-medium">123 456 789 00012</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Creation date</span>
                  <p className="font-medium">January 01, 2025</p>
                </div>
              </div>
              <Button variant="ghost" className="w-full mt-4">
                View all documents
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;