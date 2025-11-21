import megaVillage from "@/assets/mega-village.png";
import beginnerVillage from "@/assets/beginner-village.png";
import { Sparkles, ArrowRight } from "lucide-react";

const VillageProgression = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            From Beginner Village to{" "}
            <span className="text-gradient">Mega-Village</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Start small with the Bank, Quiz House, and Financial Advisor Tower. 
            Progress through the game to unlock advanced buildings like Stock Market, 
            Private Equity, Venture Capital, Crowdfunding, and more.
          </p>
        </div>

        <div className="relative">
          {/* Progression visualization */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Beginner Village */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-medium">
                <img 
                  src={beginnerVillage} 
                  alt="Beginner Village" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-primary uppercase tracking-wider">Start Here</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Beginner Village</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Bank - Your first financial institution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Quiz House - Test your knowledge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Advisor Tower - Get expert guidance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="p-4 bg-secondary rounded-full shadow-strong">
                <ArrowRight className="w-8 h-8 text-secondary-foreground" />
              </div>
            </div>

            {/* Mega Village */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 to-secondary/30 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-medium">
                <img 
                  src={megaVillage} 
                  alt="Advanced Mega Village" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-5 h-5 text-gold" />
                    <span className="text-sm font-bold gold-gradient bg-clip-text text-transparent uppercase tracking-wider">
                      Master Level
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Mega-Village</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>Stock Market - Trade like a pro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>Private Equity & Venture Capital</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>Crowdfunding & Advanced Markets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillageProgression;
