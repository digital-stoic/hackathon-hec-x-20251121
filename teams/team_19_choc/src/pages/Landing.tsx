import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Building2, 
  Users, 
  ChevronRight,
  Play,
  CheckCircle2
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import bnpLogo from "@/assets/bnp-paribas-logo.png";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import heroBackground from "@/assets/hero-background.png";

const Landing = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const testimonials = [
    {
      name: "Sophie Anderson",
      role: "CEO, TechFlow",
      text: "BIVWAK+ transformed my wealth management. The platform's comprehensive approach saved me significantly on taxes and secured my family's future."
    },
    {
      name: "Marcus Chen",
      role: "Founder, InnovateLabs",
      text: "The 360° diagnostic revealed critical gaps in my wealth strategy. BNP's team truly understands the challenges entrepreneurs face."
    },
    {
      name: "Elena Rossi",
      role: "Co-founder, DataSync",
      text: "Best decision for my business exit strategy. The tax optimization and succession planning were exceptional."
    }
  ];

  const quizQuestions = [
    { 
      question: "What is your age range?", 
      options: ["25-35 years", "36-45 years", "46-55 years", "56+ years"] 
    },
    { 
      question: "Your company stage:", 
      options: ["Series A-B", "Series C+", "Profitable SME", "Succession phase"] 
    },
    { 
      question: "Estimated personal assets:", 
      options: ["< $500K", "$500K-$2M", "$2M-$5M", "> $5M"] 
    },
    { 
      question: "How long until your planned exit?", 
      options: ["< 2 years", "2-5 years", "5-10 years", "Not planned"] 
    }
  ];

  const pillars = [
    {
      icon: CheckCircle2,
      title: "360° Wealth Diagnostic",
      description: "Complete analysis of your personal, professional, and holding company situation",
      features: [
        "Comprehensive financial flow mapping",
        "Risk/return analysis by asset class",
        "Automatic inefficiency detection",
        "Personalized PDF report"
      ]
    },
    {
      icon: Building2,
      title: "Legal & Tax Structure",
      description: "Optimize your structure to maximize tax efficiency",
      features: [
        "Holding company simulation",
        "Compensation/dividend optimization",
        "Tax integration strategy",
        "Succession planning"
      ]
    },
    {
      icon: TrendingUp,
      title: "Investment & Diversification",
      description: "Build resilient wealth beyond your business",
      features: [
        "Custom asset allocation",
        "Private equity & real estate access",
        "Tax-optimized strategies",
        "Real-time performance tracking"
      ]
    },
    {
      icon: Shield,
      title: "Executive Protection",
      description: "Secure your family and assets",
      features: [
        "Insurance coverage audit",
        "Legal asset protection",
        "Key person insurance",
        "Estate planning"
      ]
    },
    {
      icon: ArrowRight,
      title: "Succession & Exit",
      description: "Prepare and optimize your entrepreneurial exit",
      features: [
        "Cap table dilution simulation",
        "Exit modeling (LBO, sale, IPO)",
        "Tax exit strategy",
        "Post-exit support"
      ]
    },
    {
      icon: Users,
      title: "Entrepreneur Community",
      description: "Exclusive network of successful entrepreneurs",
      features: [
        "Monthly events (pitch, networking)",
        "Peer-to-peer mentoring",
        "Private Slack group",
        "Early-stage deal access"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img src={bnpLogo} alt="BNP Paribas" className="h-10" />
            <nav className="hidden md:flex gap-6">
              <a href="#diagnostic" className="text-sm hover:text-primary transition-colors">Diagnostic</a>
              <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
              <a href="#community" className="text-sm hover:text-primary transition-colors">Community</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate('/login')}>
              Login
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                360° Wealth Management for Entrepreneurs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive platform designed exclusively for business leaders and entrepreneurs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="text-lg px-8 group" onClick={() => navigate('/login')}>
                Start Your Diagnostic
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Discover Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Your Financial Command Center</h2>
              <p className="text-xl text-muted-foreground">Real-time insights and control over your entire wealth portfolio</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/eh5_2K1-baE"
                title="Dashboard Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Section */}
      <section id="diagnostic" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Free Wealth Diagnostic</h2>
              <p className="text-xl text-muted-foreground">Discover your wealth optimization potential</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">35%</h3>
                <p className="text-sm font-medium mb-2">Average Tax Savings</p>
                <p className="text-xs text-muted-foreground">Optimized through strategic structuring</p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">€2.4M</h3>
                <p className="text-sm font-medium mb-2">Average Assets Protected</p>
                <p className="text-xs text-muted-foreground">Through legal structuring</p>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">7.2%</h3>
                <p className="text-sm font-medium mb-2">Average Annual Returns</p>
                <p className="text-xs text-muted-foreground">On diversified portfolios</p>
              </Card>
            </div>

            <Card className="p-8 shadow-xl">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold">Get Your Personalized Wealth Analysis</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our diagnostic evaluates your current wealth structure across 7 key pillars and provides
                  actionable recommendations to optimize your financial strategy.
                </p>
                <div className="flex flex-wrap justify-center gap-6 pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Tax Efficiency Score</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Protection Assessment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Growth Opportunities</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Succession Planning</span>
                  </div>
                </div>
                <Button size="lg" onClick={() => navigate("/login")} className="mt-6">
                  Start Free Diagnostic
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 7 Pillars Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">7 Pillars of Wealth Management</h2>
              <p className="text-xl text-muted-foreground">Comprehensive solutions for every aspect of your financial life</p>
            </div>

            <Tabs defaultValue="0" className="w-full">
              <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
                {pillars.map((pillar, index) => (
                  <TabsTrigger key={index} value={index.toString()} className="flex items-center gap-2">
                    <pillar.icon className="h-4 w-4" />
                    <span className="hidden lg:inline">{pillar.title.split(' ')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {pillars.map((pillar, index) => (
                <TabsContent key={index} value={index.toString()}>
                  <Card className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="p-4 rounded-lg bg-primary/10">
                        <pillar.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{pillar.title}</h3>
                        <p className="text-muted-foreground">{pillar.description}</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {pillar.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => {
                const images = [testimonial1, testimonial2, testimonial3];
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={images[index]} 
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Entrepreneur Community</h2>
              <p className="text-xl text-muted-foreground">Connect with fellow business leaders and access exclusive resources</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Exclusive Networking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Connect with a vetted community of successful entrepreneurs</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Building2 className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Premium Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Access exclusive masterclasses and networking events</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Expert Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Benefit from curated financial and legal insights</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links to New Pages */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => navigate('/articles')}>
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <TrendingUp className="h-16 w-16 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Financial Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Stay informed with the latest articles on wealth management and taxation</p>
                  <Button variant="ghost" className="group w-full">
                    Explore Articles
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => navigate('/podcasts')}>
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Play className="h-16 w-16 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Legal Podcasts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Listen to expert discussions on legal and tax topics for entrepreneurs</p>
                  <Button variant="ghost" className="group w-full">
                    Browse Podcasts
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => navigate('/team')}>
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Our Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Meet our team of dedicated wealth management professionals</p>
                  <Button variant="ghost" className="group w-full">
                    Meet The Team
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <Card className="bg-gradient-primary text-white p-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-bold">Ready to Take Control of Your Wealth?</h2>
              <p className="text-xl text-white/90">Start your personalized diagnostic today and discover how to optimize your financial future</p>
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8"
                onClick={() => navigate('/login')}
              >
                Get Started Now
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">BNP Paribas Entrepreneurs</h3>
              <p className="text-sm text-muted-foreground">Exclusive wealth management for business leaders</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Wealth Diagnostic</a></li>
                <li><a href="#" className="hover:text-primary">Tax Optimization</a></li>
                <li><a href="#" className="hover:text-primary">Investment</a></li>
                <li><a href="#" className="hover:text-primary">Protection</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary" onClick={() => navigate('/articles')}>Articles</a></li>
                <li><a href="#" className="hover:text-primary" onClick={() => navigate('/podcasts')}>Podcasts</a></li>
                <li><a href="#" className="hover:text-primary" onClick={() => navigate('/team')}>Our Team</a></li>
                <li><a href="#" className="hover:text-primary">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 BNP Paribas Entrepreneurs. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Landing;
