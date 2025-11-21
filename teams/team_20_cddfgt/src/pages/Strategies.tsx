import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Shield, 
  FileText, 
  Calculator, 
  Users, 
  Target,
  BookOpen,
  Video,
  CheckSquare,
  ArrowRight,
  Lightbulb,
  Building2,
  Coins,
  ChevronRight
} from "lucide-react";
import bnpLogo from "@/assets/bnp-logo.jpg";

const Strategies = () => {
  const navigate = useNavigate();
  
  const insights = [
    {
      id: 1,
      category: "Treasury",
      title: "Optimize your €200K excess cash",
      description: "With your current cash level, consider a managed portfolio to optimize your investments.",
      priority: "high",
      action: "Consult an expert",
      icon: Coins,
    },
    {
      id: 2,
      category: "Tax",
      title: "Reduce your corporate tax via a holding",
      description: "Your company is 2 years old and generates €150K in profits. A holding structure could optimize your taxation.",
      priority: "medium",
      action: "Simulate a holding",
      icon: Building2,
    },
    {
      id: 3,
      category: "Succession",
      title: "Prepare your wealth transmission",
      description: "Discover the Dutreil pact to transfer your business with advantageous taxation.",
      priority: "low",
      action: "Learn more",
      icon: Users,
    },
  ];

  const resources = [
    {
      type: "Guide",
      title: "Executive tax optimization guide",
      description: "Salary vs dividends: how to optimize?",
      duration: "15 min read",
      icon: BookOpen,
    },
    {
      type: "Video",
      title: "Preparing a successful exit",
      description: "Key steps to maximize your company's value",
      duration: "8 min",
      icon: Video,
    },
    {
      type: "Checklist",
      title: "Pre-fundraising checklist",
      description: "All documents and procedures to prepare",
      duration: "10 items",
      icon: CheckSquare,
    },
    {
      type: "Simulator",
      title: "Dividends vs salary simulator",
      description: "Calculate the best compensation strategy",
      duration: "5 min",
      icon: Calculator,
    },
  ];

  const strategicPaths = [
    {
      title: "Exit Preparation",
      description: "Maximize your company's value before sale",
      steps: 5,
      duration: "2-6 months",
      icon: Target,
      color: "from-primary to-primary-hover",
    },
    {
      title: "Tax Optimization",
      description: "Reduce your taxes legally and effectively",
      steps: 4,
      duration: "1-3 months",
      icon: TrendingUp,
      color: "from-accent to-[hsl(38_92%_50%)]",
    },
    {
      title: "Wealth Protection",
      description: "Secure your personal and professional assets",
      steps: 6,
      duration: "3-6 months",
      icon: Shield,
      color: "from-success to-[hsl(142_76%_40%)]",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={bnpLogo} alt="BNP Paribas" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link to="/wealth" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Wealth
            </Link>
            <Link to="/create-company" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Create Company
            </Link>
            <Link to="/strategies" className="text-sm font-medium text-primary transition-colors border-b-2 border-primary">
              Advice & Strategies
            </Link>
            <Link to="/private-banking" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Private Banking
            </Link>
          </div>
          <Button variant="outline" size="sm">
            My Account
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Lightbulb className="w-3 h-3 mr-1" />
              Expert Advice
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Advice & Strategies
            </h1>
            <p className="text-xl text-muted-foreground">
              Personalized recommendations to grow and protect your entrepreneurial wealth
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="insights" className="space-y-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
              <TabsTrigger value="insights">Recommendations</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="paths">Paths</TabsTrigger>
            </TabsList>

            {/* Insight Hub */}
            <TabsContent value="insights" className="space-y-6">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Personalized recommendations</h2>
                  <p className="text-muted-foreground">
                    Based on your activity, cash flow and goals
                  </p>
                </div>

                <div className="grid gap-6">
                  {insights.map((insight) => (
                    <Card key={insight.id} className="border-2 hover:border-primary/50 transition-all duration-200 hover:shadow-lg">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className={`p-3 rounded-lg ${
                              insight.priority === 'high' ? 'bg-primary/10' :
                              insight.priority === 'medium' ? 'bg-accent/10' :
                              'bg-muted'
                            }`}>
                              <insight.icon className={`w-6 h-6 ${
                                insight.priority === 'high' ? 'text-primary' :
                                insight.priority === 'medium' ? 'text-accent' :
                                'text-muted-foreground'
                              }`} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-xs">
                                  {insight.category}
                                </Badge>
                                {insight.priority === 'high' && (
                                  <Badge className="text-xs bg-primary/10 text-primary border-primary/20">
                                    Priority
                                  </Badge>
                                )}
                              </div>
                              <CardTitle className="text-xl mb-2">{insight.title}</CardTitle>
                              <CardDescription className="text-base">
                                {insight.description}
                              </CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-3">
                          <Button 
                            className="flex-1" 
                            variant={insight.priority === 'high' ? 'default' : 'outline'}
                            onClick={() => {
                              if (insight.id === 2) {
                                navigate('/strategies/holding-simulator');
                              }
                            }}
                          >
                            {insight.action}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <FileText className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Need personalized advice?
                    </CardTitle>
                    <CardDescription>
                      Our Private Banking experts are available to analyze your situation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/private-banking">
                      <Button variant="premium" className="w-full">
                        Schedule an appointment with an advisor
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Resource Center */}
            <TabsContent value="resources" className="space-y-6">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Resource Center</h2>
                  <p className="text-muted-foreground">
                    Guides, simulators and tools to grow your business
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {resources.map((resource, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-200 hover:border-primary/50 cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <resource.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <Badge variant="outline" className="mb-2 text-xs">
                              {resource.type}
                            </Badge>
                            <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                              {resource.title}
                            </CardTitle>
                            <CardDescription>{resource.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{resource.duration}</span>
                          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  <Card className="text-center p-6 hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary/50">
                    <Calculator className="w-10 h-10 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">Simulators</h3>
                    <p className="text-sm text-muted-foreground mb-4">Calculate your optimizations</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Access
                    </Button>
                  </Card>
                  <Card className="text-center p-6 hover:shadow-lg transition-all cursor-pointer border-2 hover:border-accent/50">
                    <Video className="w-10 h-10 mx-auto mb-4 text-accent" />
                    <h3 className="font-semibold mb-2">Webinars</h3>
                    <p className="text-sm text-muted-foreground mb-4">Online training</p>
                    <Button variant="outline" size="sm" className="w-full">
                      View schedule
                    </Button>
                  </Card>
                  <Card className="text-center p-6 hover:shadow-lg transition-all cursor-pointer border-2 hover:border-success/50">
                    <BookOpen className="w-10 h-10 mx-auto mb-4 text-success" />
                    <h3 className="font-semibold mb-2">Library</h3>
                    <p className="text-sm text-muted-foreground mb-4">All our guides</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Explore
                    </Button>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Strategic Paths */}
            <TabsContent value="paths" className="space-y-6">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Strategic Paths</h2>
                  <p className="text-muted-foreground">
                    Structured guidance to achieve your goals
                  </p>
                </div>

                <div className="grid gap-6">
                  {strategicPaths.map((path, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer group">
                      <div className={`h-2 bg-gradient-to-r ${path.color}`} />
                      <CardHeader>
                        <div className="flex items-start gap-6">
                          <div className={`p-4 rounded-xl bg-gradient-to-br ${path.color} shadow-lg`}>
                            <path.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                              {path.title}
                            </CardTitle>
                            <CardDescription className="text-base mb-4">
                              {path.description}
                            </CardDescription>
                            <div className="flex gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <CheckSquare className="w-4 h-4" />
                                {path.steps} steps
                              </div>
                              <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" />
                                Duration: {path.duration}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button 
                          variant="outline" 
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                          onClick={() => {
                            if (path.title === "Exit Preparation") {
                              navigate('/strategies/exit-preparation');
                            }
                          }}
                        >
                          Start this path
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-8 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Custom Path
                    </CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      Need specific guidance? Our experts design a path tailored to your situation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="secondary" className="w-full">
                      Request a custom path
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={bnpLogo} alt="BNP Paribas" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 BNP Paribas Private Launch. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Legal notice</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Strategies;
