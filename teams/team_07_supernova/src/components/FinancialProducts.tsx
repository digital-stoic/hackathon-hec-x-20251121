import { PiggyBank, Calendar, Shield, Star } from "lucide-react";

const FinancialProducts = () => {
  const products = [
    {
      name: "Savings Account",
      icon: PiggyBank,
      description: "Risk-free savings with guaranteed interest",
      duration: "Anytime",
      performance: 2,
      risk: 1,
      liquidity: 3,
      iconColor: "text-gold",
      bgColor: "from-gold/10 to-gold-light/10"
    },
    {
      name: "Fixed Deposit",
      icon: Calendar,
      description: "Locked deposit earning higher returns over time",
      duration: "3 days",
      performance: 2,
      risk: 2,
      liquidity: 2,
      iconColor: "text-accent",
      bgColor: "from-accent/10 to-accent/20"
    },
    {
      name: "Life Insurance",
      icon: Shield,
      description: "Long-term investment with tax benefits",
      duration: "8 days",
      performance: 3,
      risk: 2,
      liquidity: 2,
      iconColor: "text-primary",
      bgColor: "from-primary/10 to-primary/20"
    }
  ];

  const renderStars = (count: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(count)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-gold text-gold" />
        ))}
      </div>
    );
  };

  const renderBar = (level: number, color: string) => {
    return (
      <div className="flex gap-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`h-2 w-8 rounded-full ${
              i < level ? color : "bg-muted"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Discover <span className="text-gradient">Financial Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn about different investment options and their characteristics
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            
            return (
              <div
                key={index}
                className="group relative bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon Section */}
                <div className={`relative h-48 bg-gradient-to-br ${product.bgColor} flex flex-col items-center justify-center p-8`}>
                  <Icon className={`w-24 h-24 ${product.iconColor} mb-4`} />
                  <h3 className="text-2xl font-bold text-center">{product.name}</h3>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground text-center min-h-[40px]">
                    {product.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Duration</span>
                      <span className="text-muted-foreground">{product.duration}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Performance</span>
                      {renderStars(product.performance)}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Risk</span>
                      {renderBar(product.risk, "bg-accent")}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Liquidity</span>
                      {renderBar(product.liquidity, "bg-gold")}
                    </div>
                  </div>
                </div>
                
                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-3xl transition-colors pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FinancialProducts;