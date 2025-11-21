import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { 
  Building2,
  TrendingUp,
  PiggyBank,
  FileText,
  ArrowLeft,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import bnpLogo from "@/assets/bnp-logo.jpg";

const HoldingSimulator = () => {
  const navigate = useNavigate();
  
  const [companyRevenue, setCompanyRevenue] = useState(150000);
  const [profit, setProfit] = useState(50000);
  const [dividendRate, setDividendRate] = useState([30]);
  
  // Calculations
  const withoutHolding = {
    corporateTax: profit * 0.25,
    dividendTax: (profit - profit * 0.25) * 0.30,
    totalTax: profit * 0.25 + (profit - profit * 0.25) * 0.30,
    netIncome: profit - (profit * 0.25 + (profit - profit * 0.25) * 0.30)
  };
  
  const withHolding = {
    corporateTax: profit * 0.15, // Reduced IS for holding
    dividendTax: 0, // No immediate taxation when passing to holding
    reinvestmentPotential: profit - profit * 0.15,
    totalTax: profit * 0.15,
    netIncome: profit - profit * 0.15
  };
  
  const savings = withoutHolding.totalTax - withHolding.totalTax;
  const savingsPercentage = ((savings / withoutHolding.totalTax) * 100).toFixed(1);

  const benefits = [
    {
      icon: PiggyBank,
      title: "Tax Optimization",
      description: `Save up to €${savings.toLocaleString()} per year in taxes`,
    },
    {
      icon: TrendingUp,
      title: "Reinvestment Capacity",
      description: "Keep more capital available for growth investments",
    },
    {
      icon: Building2,
      title: "Asset Protection",
      description: "Separate operational and investment activities",
    },
    {
      icon: FileText,
      title: "Succession Planning",
      description: "Simplified wealth transmission to heirs",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img src={bnpLogo} alt="BNP Paribas" className="h-10 w-auto" />
          </div>
          <Button variant="ghost" onClick={() => navigate("/strategies")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Strategies
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Building2 className="w-3 h-3 mr-1" />
              Tax Simulator
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Holding Company Simulator
            </h1>
            <p className="text-xl text-muted-foreground">
              Calculate the tax benefits of creating a holding structure for your business
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Input Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Company Information</CardTitle>
                <CardDescription>
                  Enter your current financial situation to see the impact
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="revenue">Annual Revenue (€)</Label>
                  <Input
                    id="revenue"
                    type="number"
                    value={companyRevenue}
                    onChange={(e) => setCompanyRevenue(Number(e.target.value))}
                    className="text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profit">Annual Net Profit (€)</Label>
                  <Input
                    id="profit"
                    type="number"
                    value={profit}
                    onChange={(e) => setProfit(Number(e.target.value))}
                    className="text-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Dividend Distribution Rate (%)</Label>
                  <div className="flex items-center gap-4">
                    <Slider
                      value={dividendRate}
                      onValueChange={setDividendRate}
                      max={100}
                      step={5}
                      className="flex-1"
                    />
                    <span className="text-lg font-semibold w-12 text-right">
                      {dividendRate}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle>Key Benefits of a Holding Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Savings Card */}
            <Card className="border-2 border-success/50 bg-gradient-to-br from-success/5 to-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-success" />
                  Potential Annual Savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <div className="text-5xl font-bold text-success mb-2">
                    €{savings.toLocaleString()}
                  </div>
                  <div className="text-lg text-muted-foreground">
                    {savingsPercentage}% tax reduction
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comparison */}
            <div className="grid gap-4">
              {/* Without Holding */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                    Without Holding Structure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Corporate Tax (25%)</span>
                    <span className="font-semibold">€{withoutHolding.corporateTax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dividend Tax (30%)</span>
                    <span className="font-semibold">€{withoutHolding.dividendTax.toLocaleString()}</span>
                  </div>
                  <div className="pt-3 border-t flex justify-between">
                    <span className="font-semibold">Total Tax</span>
                    <span className="font-bold text-destructive">
                      €{withoutHolding.totalTax.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Net Income</span>
                    <span className="font-bold">€{withoutHolding.netIncome.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>

              {/* With Holding */}
              <Card className="border-2 border-success/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                    With Holding Structure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Corporate Tax (15%)</span>
                    <span className="font-semibold">€{withHolding.corporateTax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dividend Tax</span>
                    <span className="font-semibold">€0</span>
                  </div>
                  <div className="pt-3 border-t flex justify-between">
                    <span className="font-semibold">Total Tax</span>
                    <span className="font-bold text-success">
                      €{withHolding.totalTax.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Available for Reinvestment</span>
                    <span className="font-bold text-success">
                      €{withHolding.reinvestmentPotential.toLocaleString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-white">Ready to optimize your structure?</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Our Private Banking advisors can guide you through the process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => navigate("/private-banking")}
                >
                  Schedule a consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoldingSimulator;
