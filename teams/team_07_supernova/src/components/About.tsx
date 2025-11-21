import { TrendingUp, Brain, Building2, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Learn to invest through play",
      description: "Master investment concepts in a risk-free gaming environment"
    },
    {
      icon: Brain,
      title: "Improve your financial literacy",
      description: "Build essential money management skills that last a lifetime"
    },
    {
      icon: Building2,
      title: "Construct and manage your financial village",
      description: "Watch your knowledge grow as your village expands"
    },
    {
      icon: Target,
      title: "Make decisions on risk, liquidity, and timing",
      description: "Practice real-world financial strategies in your own pace"
    }
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            About <span className="text-gradient">Finance Clash</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Finance Clash turns financial learning into an epic village-building adventure. 
            Earn coins, unlock buildings, invest in simplified financial products, complete 
            daily quizzes, and progress through your own financial world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
