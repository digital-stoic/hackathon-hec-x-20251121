import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Shield, 
  Building2, 
  Landmark,
  Users,
  FileText,
  Target,
  Briefcase,
  PieChart,
  Globe,
  GraduationCap,
  ChevronRight,
  ArrowRight,
  DollarSign,
  BarChart3,
  LineChart
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import bnpLogo from "@/assets/bnp-logo.jpg";

const Wealth = () => {
  const navigate = useNavigate();

  const investmentProducts = [
    {
      icon: Shield,
      title: "Managed Portfolio",
      subtitle: "Discretionary Management",
      description: "Let our investment team manage your assets based on your risk profile.",
      color: "from-primary to-primary-hover",
    },
    {
      icon: Target,
      title: "Advised Portfolio",
      subtitle: "Guided Investing",
      description: "You stay in control, we provide curated opportunities and alerts.",
      color: "from-accent to-[hsl(38_92%_50%)]",
    },
    {
      icon: Briefcase,
      title: "Private Assets & Club Deals",
      subtitle: "Exclusive Access",
      description: "Access private equity funds, co-investments, and exclusive deals.",
      color: "from-[hsl(220_70%_50%)] to-[hsl(220_70%_40%)]",
    },
    {
      icon: Landmark,
      title: "Real Estate & Real Assets",
      subtitle: "Tangible Investments",
      description: "Invest in real estate, infrastructure, and tangible assets.",
      color: "from-success to-[hsl(142_76%_40%)]",
    },
    {
      icon: Building2,
      title: "Corporate Treasury",
      subtitle: "Liquidity Optimization",
      description: "Optimize company cash with short-term, low-volatility instruments.",
      color: "from-[hsl(280_70%_50%)] to-[hsl(280_70%_40%)]",
    },
    {
      icon: FileText,
      title: "Wealth Strategy",
      subtitle: "Structuring & Planning",
      description: "Simulate cash-outs, holding strategies, tax impacts, and succession.",
      color: "from-[hsl(15_70%_50%)] to-[hsl(15_70%_40%)]",
    },
  ];

  const allocationStrategies = [
    {
      name: "Defensive",
      allocation: "80% Cash & Bonds / 20% Equities",
      risk: "Low",
      description: "Capital preservation with steady, predictable returns",
      riskColor: "text-success",
    },
    {
      name: "Balanced",
      allocation: "40% Public / 40% Private / 20% Alternatives",
      risk: "Medium",
      description: "Diversified exposure across public and private markets",
      riskColor: "text-accent",
    },
    {
      name: "Growth",
      allocation: "60% Private Equity / 30% VC / 10% Cash",
      risk: "High",
      description: "Maximum growth potential through private markets",
      riskColor: "text-destructive",
    },
  ];

  const companies = [
    {
      name: "Audiance SAS",
      liquidity: "€180,000",
      status: "Healthy",
      recommendation: "6 months operating expenses secured • Invest surplus in low-risk yield solutions",
    },
    {
      name: "Tech Ventures SARL",
      liquidity: "€420,000",
      status: "Excellent",
      recommendation: "Strong cash position • Consider diversification into private markets",
    },
  ];

  const opportunities = [
    {
      title: "European Growth Fund IV",
      type: "Private Equity",
      minTicket: "€250,000",
      risk: "Medium-High",
      deadline: "Q2 2025",
      category: "funds",
    },
    {
      title: "Co-Investment: SaaS Platform",
      type: "Direct Deal",
      minTicket: "€100,000",
      risk: "High",
      deadline: "30 days",
      category: "funds",
    },
    {
      title: "Infrastructure Bonds (EUR)",
      type: "Fixed Income",
      minTicket: "€50,000",
      risk: "Low",
      deadline: "Open",
      category: "tactical",
    },
    {
      title: "ESG Real Estate Fund",
      type: "Real Assets",
      minTicket: "€150,000",
      risk: "Medium",
      deadline: "Q1 2025",
      category: "tactical",
    },
  ];

  const news = [
    {
      category: "Tax & Structuring",
      title: "New holding company regulations for 2025",
      time: "2 hours ago",
    },
    {
      category: "Exit Planning",
      title: "Preparing your company for acquisition: 12-month checklist",
      time: "1 day ago",
    },
    {
      category: "Private Markets",
      title: "European tech valuations: Q4 2024 report",
      time: "3 days ago",
    },
  ];

  const playbooks = [
    {
      title: "Salary, dividends, or management fees: what to choose?",
      duration: "12 min read",
      level: "Essential",
    },
    {
      title: "How to diversify after a liquidity event",
      duration: "18 min read",
      level: "Advanced",
    },
    {
      title: "Holding vs Personal account: tax impact explained",
      duration: "15 min read",
      level: "Intermediate",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img src={bnpLogo} alt="BNP Paribas Private Banking" className="h-10 w-auto" />
            <span className="font-semibold text-lg">Private Launch</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/dashboard")}>
              Dashboard
            </Button>
            <Button variant="ghost" onClick={() => navigate("/strategies")}>
              Advice & Strategies
            </Button>
            <Button variant="ghost" onClick={() => navigate("/wealth")}>
              Wealth
            </Button>
            <Button variant="premium" onClick={() => navigate("/private-banking")}>
              Private Banking
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
              <Globe className="w-4 h-4 mr-2" />
              Private Wealth Management
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Grow and protect your
              <br />
              <span className="text-primary">entrepreneurial wealth</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Investment solutions tailored to your companies, your liquidity, and your long-term goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="premium" className="text-base px-8">
                Start Investing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" onClick={() => navigate("/private-banking")}>
                Book a call with your Private Banker
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Products */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3">Investment Solutions</h2>
            <p className="text-muted-foreground text-lg">
              Choose the approach that matches your goals and involvement level
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 cursor-pointer overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${product.color}`} />
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4`}>
                    <product.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-xs font-medium text-primary">
                    {product.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Allocation Strategies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-3">Allocation strategies recommended for you</h2>
            <p className="text-muted-foreground text-lg">
              Based on your profile, goals, and risk tolerance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {allocationStrategies.map((strategy, index) => (
              <Card key={index} className="hover:shadow-lg transition-all border-2 hover:border-primary/30 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">{strategy.name}</CardTitle>
                    <Badge variant="outline" className={strategy.riskColor}>
                      {strategy.risk} Risk
                    </Badge>
                  </div>
                  <CardDescription className="text-base font-medium text-foreground">
                    {strategy.allocation}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{strategy.description}</p>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Treasury */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-3">Your Companies</h2>
            <p className="text-muted-foreground text-lg">
              Optimize treasury across your business entities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {companies.map((company, index) => (
              <Card key={index} className="border-2 hover:border-primary/30 transition-all cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">{company.name}</CardTitle>
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-primary">{company.liquidity}</span>
                        <Badge className="bg-success/10 text-success border-success/20">
                          {company.status}
                        </Badge>
                      </div>
                    </div>
                    <Building2 className="w-8 h-8 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{company.recommendation}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Optimize Treasury
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-3">Opportunities to consider</h2>
            <p className="text-muted-foreground text-lg">
              Curated investment opportunities matching your profile
            </p>
          </div>
          <Tabs defaultValue="funds" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
              <TabsTrigger value="funds">New Funds & Deals</TabsTrigger>
              <TabsTrigger value="tactical">Tactical Opportunities</TabsTrigger>
            </TabsList>
            <TabsContent value="funds" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {opportunities
                  .filter((opp) => opp.category === "funds")
                  .map((opportunity, index) => (
                    <Card key={index} className="border-2 hover:border-primary/30 transition-all cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <Badge variant="outline" className="w-fit">{opportunity.type}</Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Minimum</span>
                            <span className="font-semibold">{opportunity.minTicket}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Risk Level</span>
                            <span className="font-semibold">{opportunity.risk}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Closing</span>
                            <span className="font-semibold">{opportunity.deadline}</span>
                          </div>
                          <Button variant="outline" className="w-full mt-4">
                            Request Information
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="tactical" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {opportunities
                  .filter((opp) => opp.category === "tactical")
                  .map((opportunity, index) => (
                    <Card key={index} className="border-2 hover:border-primary/30 transition-all cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                          <LineChart className="w-5 h-5 text-accent" />
                        </div>
                        <Badge variant="outline" className="w-fit">{opportunity.type}</Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Minimum</span>
                            <span className="font-semibold">{opportunity.minTicket}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Risk Level</span>
                            <span className="font-semibold">{opportunity.risk}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Availability</span>
                            <span className="font-semibold">{opportunity.deadline}</span>
                          </div>
                          <Button variant="outline" className="w-full mt-4">
                            Request Information
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* News & Education */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* News Feed */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3">For your situation as an entrepreneur</h2>
                <p className="text-muted-foreground text-lg">
                  Relevant insights and market intelligence
                </p>
              </div>
              <div className="space-y-4">
                {news.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary/30">
                    <CardHeader>
                      <Badge variant="outline" className="w-fit mb-2 text-xs">
                        {item.category}
                      </Badge>
                      <CardTitle className="text-lg leading-snug hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-xs">{item.time}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
                <Button variant="ghost" className="w-full">
                  View all insights
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3">Entrepreneur Playbooks</h2>
                <p className="text-muted-foreground text-lg">
                  Essential knowledge for wealth optimization
                </p>
              </div>
              <div className="space-y-4">
                {playbooks.map((playbook, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-accent/30 group">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                            {playbook.title}
                          </CardTitle>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span>{playbook.duration}</span>
                            <span>•</span>
                            <Badge variant="outline" className="text-xs">
                              {playbook.level}
                            </Badge>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardHeader>
                  </Card>
                ))}
                <Button variant="outline" className="w-full">
                  Explore all playbooks
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-hover text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 text-center relative">
          <Shield className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to optimize your wealth strategy?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a confidential consultation with your dedicated Private Banking advisor
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8"
            onClick={() => navigate("/private-banking")}
          >
            Book Your Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={bnpLogo} alt="BNP Paribas Private Banking" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 BNP Paribas Private Banking. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Legal</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Disclosures</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Wealth;
