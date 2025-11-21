import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, TrendingUp, Building2, CreditCard, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import companyIcon from "@/assets/company-creation-icon.png";
import bankingIcon from "@/assets/banking-icon.png";
import bnpLogo from "@/assets/bnp-logo.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Company creation in 48h",
      description: "Articles of incorporation, business registration, capital deposit: we handle everything automatically. You sign, we take care of the rest.",
      image: companyIcon,
    },
    {
      icon: <CreditCard className="w-12 h-12 text-primary" />,
      title: "Business account ready in 5 min",
      description: "Your professional bank account activated automatically. Virtual card, mobile app, payments: everything operational from day one.",
      image: bankingIcon,
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-accent" />,
      title: "Premium Private Banking support",
      description: "Benefit from world-class advisory services worthy of Private Banking. Wealth management, tax optimization, succession planning: elite expertise at your service.",
    },
  ];

  const milestones = [
    { amount: "€20k", label: "First advisor meeting" },
    { amount: "€100k", label: "Pre-Private Banking journey" },
    { amount: "€250k", label: "Private Banking account" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img src={bnpLogo} alt="BNP Paribas Banque Privée" className="h-10 w-auto" />
            <span className="font-semibold text-lg">Private Launch</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/dashboard")}>
              Dashboard
            </Button>
            <Button variant="ghost" onClick={() => navigate("/wealth")}>
              Wealth
            </Button>
            <Button variant="ghost" onClick={() => navigate("/strategies")}>
              Advice & Strategies
            </Button>
            <Button variant="premium" onClick={() => navigate("/create-company")}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <div className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  ✨ BNP Paribas Private Banking
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Focus on
                <span className="text-primary"> building your business</span>,
                <span className="text-accent"> we handle everything else</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Company creation, business account, financial management and Private Banking access. Private Launch takes care of everything while you build your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="hero" onClick={() => navigate("/create-company")}>
                  Launch my project
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Discover the platform
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span className="text-sm text-muted-foreground">Secure & compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span className="text-sm text-muted-foreground">100% digital</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span className="text-sm text-muted-foreground">Dedicated support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img src={heroImage} alt="Entrepreneur travaillant sur sa croissance" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">+247%</div>
                    <div className="text-sm text-muted-foreground">Average growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              We handle the <span className="text-primary">admin</span>, you focus on <span className="text-accent">what matters</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Zero friction, zero paperwork. Private Launch automates everything that slows you down so you can focus on what matters: building your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-200 border-2 hover:border-primary/50">
                <div className="mb-6">
                  {feature.image ? (
                    <img src={feature.image} alt={feature.title} className="w-16 h-16" />
                  ) : (
                    feature.icon
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              You grow, <span className="text-accent">your services evolve</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The more your business develops, the more Private Launch gives you access to premium services and personalized support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {milestones.map((milestone, index) => (
              <Card key={index} className="p-8 text-center border-2 hover:border-accent hover:shadow-xl transition-all duration-200">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-accent mb-2">{milestone.amount}</div>
                <div className="text-muted-foreground">{milestone.label}</div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="gold" onClick={() => navigate("/create-company")}>
              Start my journey
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Stop wasting time, start building
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Hundreds of entrepreneurs have already chosen Private Launch to eliminate admin and focus on their growth
          </p>
          <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" onClick={() => navigate("/create-company")}>
            Launch my business now
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
          <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={bnpLogo} alt="BNP Paribas Banque Privée" className="h-12 w-auto" />
              </div>
              <p className="text-sm text-muted-foreground">
                BNP Paribas Private Banking
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Company Creation</li>
                <li>Business Account</li>
                <li>Banking App</li>
                <li>Private Banking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Contact</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Legal Notice</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 BNP Paribas Private Banking. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;