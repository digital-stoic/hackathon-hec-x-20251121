import { Coins, LineChart, TrendingUp } from "lucide-react";

const GameplaySteps = () => {
  const steps = [
    {
      number: "01",
      icon: Coins,
      title: "Earn Coins",
      description: "Through quizzes and village production.",
      color: "from-gold to-gold-light"
    },
    {
      number: "02",
      icon: LineChart,
      title: "Invest Strategically",
      description: "Choose among simplified financial products with different risks and durations.",
      color: "from-primary to-accent"
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Upgrade Your Village",
      description: "Unlock advanced sectors as you master the basics.",
      color: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            How to <span className="text-gradient">Play</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to building your financial empire
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Connecting line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -z-10"></div>
                )}
                
                <div className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-medium">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-4 bg-gradient-to-br ${step.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GameplaySteps;
