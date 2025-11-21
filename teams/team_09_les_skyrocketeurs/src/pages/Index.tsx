import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Trophy, Coins, TrendingUp, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import bnpLogo from "@/assets/bnp-logo.png";
import zone1 from "@/assets/zone1-bay.png";
import zone2 from "@/assets/zone2-desert.png";
import zone3 from "@/assets/zone3-forest.png";

const Index = () => {
  // Date de fin du challenge (5 jours et 3 heures à partir de maintenant)
  const challengeEndDate = new Date();
  challengeEndDate.setDate(challengeEndDate.getDate() + 5);
  challengeEndDate.setHours(challengeEndDate.getHours() + 3);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = challengeEndDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
          <img src={bnpLogo} alt="BNP Paribas" className="h-24 sm:h-28" />
          <div className="flex gap-2 sm:gap-3">
            <Link to="/news">
              <Button variant="outline" className="font-semibold">News</Button>
            </Link>
            <Link to="/map">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-premium text-sm sm:text-base px-3 sm:px-4">
                Commencer
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-2 sm:px-4 py-8 sm:py-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 animate-fade-in">
          {/* Title Flow */}
          <div className="mb-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
              Flow
            </h1>
          </div>

          {/* Prize Banner */}
          <div className="mb-6 sm:mb-8 p-6 sm:p-8 rounded-xl bg-card border-2 border-primary shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              <h3 className="text-3xl sm:text-5xl font-bold text-foreground">
                50.000€
              </h3>
            </div>
            <p className="text-sm sm:text-lg text-muted-foreground">
              à gagner dans le challenge
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-xl bg-card border-2 border-border shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <h4 className="text-base sm:text-xl font-bold text-foreground">
                Le challenge se termine dans :
              </h4>
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-primary to-secondary p-3 sm:p-4 rounded-lg">
                <div className="text-2xl sm:text-4xl font-bold text-white">{timeLeft.days}</div>
                <div className="text-xs sm:text-sm text-white/80 font-medium">Jours</div>
              </div>
              <div className="bg-gradient-to-br from-primary to-secondary p-3 sm:p-4 rounded-lg">
                <div className="text-2xl sm:text-4xl font-bold text-white">{timeLeft.hours}</div>
                <div className="text-xs sm:text-sm text-white/80 font-medium">Heures</div>
              </div>
              <div className="bg-gradient-to-br from-primary to-secondary p-3 sm:p-4 rounded-lg">
                <div className="text-2xl sm:text-4xl font-bold text-white">{timeLeft.minutes}</div>
                <div className="text-xs sm:text-sm text-white/80 font-medium">Minutes</div>
              </div>
              <div className="bg-gradient-to-br from-primary to-secondary p-3 sm:p-4 rounded-lg">
                <div className="text-2xl sm:text-4xl font-bold text-white">{timeLeft.seconds}</div>
                <div className="text-xs sm:text-sm text-white/80 font-medium">Secondes</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center pt-4 sm:pt-6 px-4">
            <Link to="/map" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-premium text-base sm:text-xl px-6 sm:px-10 py-5 sm:py-7">
                Commencer l'aventure
              </Button>
            </Link>
          </div>

          {/* Dashboard Card */}
          <Link to="/dashboard" className="block max-w-md mx-auto mt-6 sm:mt-8">
            <div className="bg-card rounded-lg border border-border p-4 sm:p-6 shadow-lg hover:shadow-premium hover:border-primary/50 transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-base sm:text-xl font-semibold text-foreground">Tableau de bord</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Accède à tes stats et progression</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="container mx-auto px-2 sm:px-4 py-6 sm:py-10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8 sm:mb-12">
            Comment ça marche ?
          </h3>
          
          <div className="space-y-4 sm:space-y-5">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">Explore la Carte</h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Débute ton voyage dans la Baie des Fondamentaux et progresse à travers 7 zones thématiques.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">Complète les Défis</h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Réponds à des quiz, regarde des vidéos et relève des défis quotidiens pour avancer.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">Gagne des Récompenses</h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Accumule des InvestCoins, débloque des badges et grimpe dans le classement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-2 sm:px-4 py-10 sm:py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-6 sm:p-12 rounded-lg bg-gradient-to-br from-primary to-secondary shadow-premium">
            <h3 className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Prêt à devenir un expert financier ?
            </h3>
            <p className="text-sm sm:text-lg text-white/90 font-medium mb-6 sm:mb-8 px-2">
              Rejoins des milliers d'utilisateurs qui transforment leur avenir financier chaque jour.
            </p>
            <Link to="/map">
              <Button size="lg" className="bg-white hover:bg-white/90 text-primary font-semibold shadow-lg text-base sm:text-xl px-8 sm:px-12 py-5 sm:py-7">
                Démarrer maintenant
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm py-6 sm:py-8 relative z-10">
        <div className="container mx-auto px-2 sm:px-4 text-center">
          <p className="text-xs sm:text-base font-medium text-muted-foreground">© 2024 Flow. Transforme ton apprentissage financier en aventure.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
