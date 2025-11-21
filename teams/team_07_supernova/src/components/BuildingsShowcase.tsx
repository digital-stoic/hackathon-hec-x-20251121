import buildingBank from "@/assets/building-bank.jpg";
import buildingQuiz from "@/assets/building-quiz.jpg";
import buildingAdvisor from "@/assets/building-advisor.jpg";
import buildingStocks from "@/assets/building-stocks.jpg";
import buildingPrivateEquity from "@/assets/building-private-equity.jpeg";
import buildingVentureCapital from "@/assets/building-venture-capital.jpeg";
import buildingCrowdfunding from "@/assets/building-crowdfunding.jpeg";
import buildingLibrary from "@/assets/building-library.jpeg";
import { Building2, HelpCircle, Users, TrendingUp, Briefcase, Rocket, Users2, BookOpen } from "lucide-react";

const BuildingsShowcase = () => {
  const buildings = [
    {
      name: "Bank",
      image: buildingBank,
      icon: Building2,
      description: "Your first financial institution. Store coins safely and earn steady interest on deposits."
    },
    {
      name: "Quiz House",
      image: buildingQuiz,
      icon: HelpCircle,
      description: "Test your financial knowledge daily. Answer correctly to earn bonus coins and unlock achievements."
    },
    {
      name: "Advisor Tower",
      image: buildingAdvisor,
      icon: Users,
      description: "Receive expert guidance on investments. Upgrade advisors for better returns and strategic insights."
    },
    {
      name: "Stock Market",
      image: buildingStocks,
      icon: TrendingUp,
      description: "Trade public company shares. Learn about market dynamics, risk management, and portfolio diversification."
    },
    {
      name: "Private Equity",
      image: buildingPrivateEquity,
      icon: Briefcase,
      description: "Invest in private companies before they go public. High risk, high reward opportunities for experienced players."
    },
    {
      name: "Venture Capital",
      image: buildingVentureCapital,
      icon: Rocket,
      description: "Fund innovative startups at early stages. Support emerging businesses and watch your investments grow exponentially."
    },
    {
      name: "Crowdfunding",
      image: buildingCrowdfunding,
      icon: Users2,
      description: "Join community-funded projects. Collaborate with other players to unlock exclusive investment opportunities."
    },
    {
      name: "Documentation Library",
      image: buildingLibrary,
      icon: BookOpen,
      description: "Access comprehensive financial guides. Research advanced strategies and deepen your understanding of markets."
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Discover Your <span className="text-gradient">Buildings</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each building unlocks new financial concepts and opportunities to grow your wealth
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {buildings.map((building, index) => {
            const Icon = building.icon;
            const hasImage = building.image;
            
            return (
              <div
                key={index}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image or Icon Background */}
                {hasImage ? (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={building.image} 
                      alt={building.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                  </div>
                ) : (
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Icon className="w-20 h-20 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
                  </div>
                )}
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{building.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {building.description}
                  </p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-2xl transition-colors pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuildingsShowcase;
