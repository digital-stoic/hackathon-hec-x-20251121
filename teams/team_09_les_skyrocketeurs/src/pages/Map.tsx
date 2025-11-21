import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock, CheckCircle, Play, Star, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo.png";
import zone1Img from "@/assets/zone1-bay.png";
import zone2Img from "@/assets/zone2-desert.png";
import zone3Img from "@/assets/zone3-forest.png";
import zone4Img from "@/assets/zone4-mountains.png";
import zone5Img from "@/assets/zone5-rivers.png";
import zone6Img from "@/assets/zone6-glacier.png";
import zone7Img from "@/assets/zone7-palace.png";

const zones = [
  {
    id: 1,
    name: "La Baie des Fondamentaux",
    description: "Risque, rendement, inflation et bases de l'investissement",
    status: "unlocked",
    color: "from-blue-500 to-blue-700",
    icon: "🌊",
    image: zone1Img,
    levels: 5,
    completedLevels: 5,
    xp: 500,
    stars: 5,
    rewards: ["Badge Explorateur", "150 InvestCoins"]
  },
  {
    id: 2,
    name: "Le Désert de la Volatilité",
    description: "Fluctuations et psychologie du marché",
    status: "current",
    color: "from-orange-500 to-orange-700",
    icon: "🏜️",
    image: zone2Img,
    levels: 5,
    completedLevels: 3,
    xp: 300,
    stars: 3,
    rewards: ["Badge Aventurier", "200 InvestCoins", "Power-Up Streak"]
  },
  {
    id: 3,
    name: "La Forêt de la Diversification",
    description: "Allocation d'actifs, ETF et corrélation",
    status: "locked",
    color: "from-green-500 to-green-700",
    icon: "🌲",
    image: zone3Img,
    levels: 6,
    completedLevels: 0,
    xp: 0,
    stars: 0,
    rewards: ["Badge Stratège", "250 InvestCoins", "Accès Portfolio"]
  },
  {
    id: 4,
    name: "Les Montagnes du Rendement",
    description: "Long terme, composition des gains et performance",
    status: "locked",
    color: "from-gray-500 to-gray-700",
    icon: "⛰️",
    image: zone4Img,
    levels: 7,
    completedLevels: 0,
    xp: 0,
    stars: 0,
    rewards: ["Badge Investisseur", "300 InvestCoins", "Calculateur ROI"]
  },
  {
    id: 5,
    name: "Les Rivières des Cash-Flows",
    description: "Dividendes, coupons et flux financiers",
    status: "locked",
    color: "from-cyan-500 to-cyan-700",
    icon: "💧",
    image: zone5Img,
    levels: 6,
    completedLevels: 0,
    xp: 0,
    stars: 0,
    rewards: ["Badge Capitaliste", "350 InvestCoins", "Tracker Dividendes"]
  },
  {
    id: 6,
    name: "Le Glacier de la Préservation",
    description: "Sécurité, obligations et protection du capital",
    status: "locked",
    color: "from-indigo-400 to-indigo-600",
    icon: "🧊",
    image: zone6Img,
    levels: 5,
    completedLevels: 0,
    xp: 0,
    stars: 0,
    rewards: ["Badge Protecteur", "400 InvestCoins", "Shield Bonus"]
  },
  {
    id: 7,
    name: "Le Palais du Patrimoine",
    description: "Gestion globale, PEA, assurance-vie et transmission",
    status: "locked",
    color: "from-yellow-500 to-yellow-700",
    icon: "🏛️",
    image: zone7Img,
    levels: 8,
    completedLevels: 0,
    xp: 0,
    stars: 0,
    rewards: ["Badge Maître", "500 InvestCoins", "Certificat Expert", "Consultation BNP"]
  }
];

const Map = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 flex items-center justify-between gap-2">
          <Link to="/">
            <Button variant="ghost" size="sm" className="font-semibold h-8 sm:h-10 px-2 sm:px-4">
              <ArrowLeft className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Retour</span>
            </Button>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Flow
            </h1>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 shadow-lg">
              <span className="text-base sm:text-xl">🪙</span>
              <span className="font-bold text-sm sm:text-base text-primary-foreground">1,250</span>
            </div>
            <Link to="/dashboard" className="hidden sm:block">
              <Button variant="outline" className="font-semibold">Tableau de bord</Button>
            </Link>
            <Link to="/dashboard" className="sm:hidden">
              <Button variant="outline" size="sm" className="font-semibold h-8 px-2">
                📊
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* World Header */}
      <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-12 text-center relative z-10">
        <h1 className="text-2xl sm:text-5xl font-bold text-foreground tracking-tight mb-4 sm:mb-6">
          Le Monde de la Finance
        </h1>
        
        {/* Classement Button */}
        <div className="mb-4 sm:mb-6">
          <Link to="/classement">
            <Button 
              variant="outline" 
              className="font-semibold border-primary/50 hover:bg-primary/10 hover:border-primary"
            >
              🏆 Classement
            </Button>
          </Link>
        </div>
        
        {/* Stats Bar */}
        <div className="flex items-center justify-center gap-3 sm:gap-6">
          <div className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-card/90 backdrop-blur rounded-lg border border-border shadow-md">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-secondary fill-secondary" />
            <span className="font-semibold text-sm sm:text-base text-foreground">800 XP</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-card/90 backdrop-blur rounded-lg border border-border shadow-md">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-accent" />
            <span className="font-semibold text-sm sm:text-base text-foreground">1/7 Zones</span>
          </div>
        </div>
      </div>

      {/* Game Map Path */}
      <div className="container mx-auto px-2 sm:px-4 pb-10 sm:pb-20 relative">
        <div className="max-w-5xl mx-auto relative">
          {/* SVG Path connecting zones - Hidden on mobile for cleaner look */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block" style={{ zIndex: 0 }}>
            <path
              d="M 150 100 Q 200 150, 250 100 T 450 100 Q 550 150, 650 200 T 850 300 Q 900 400, 800 500 T 450 600 Q 300 650, 150 700"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="20,10"
            />
          </svg>

          {/* Zone Nodes */}
          <div className="relative space-y-8 sm:space-y-32 pt-4 sm:pt-10" style={{ zIndex: 1 }}>
            {zones.map((zone, index) => {
              const isUnlocked = zone.status === "unlocked";
              const isCurrent = zone.status === "current";
              const isLocked = zone.status === "locked";
              
              // Alternating left/right positioning
              const isLeft = index % 2 === 0;
              const positions = [
                { x: 150, y: 100 },   // Zone 1 - left
                { x: 650, y: 200 },   // Zone 2 - right
                { x: 200, y: 300 },   // Zone 3 - left
                { x: 700, y: 400 },   // Zone 4 - right
                { x: 250, y: 500 },   // Zone 5 - left
                { x: 650, y: 600 },   // Zone 6 - right
                { x: 300, y: 700 }    // Zone 7 - left
              ];

              return (
                <div
                  key={zone.id}
                  className={`flex flex-col sm:flex-row items-center gap-3 sm:gap-8 ${isLeft ? 'sm:justify-start' : 'sm:justify-end'} justify-center animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Zone Content Card */}
                  <Card 
                    className={`w-full sm:w-80 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                      isCurrent ? 'border-primary ring-2 ring-primary/50' :
                      isUnlocked ? 'border-secondary ring-1 ring-secondary/30' :
                      'border-border opacity-60'
                    } ${isLeft ? 'sm:order-2' : 'sm:order-1'}`}
                  >
                    <div className="p-0 overflow-hidden">
                      {/* Zone Image */}
                      <div className="relative h-32 sm:h-48 overflow-hidden">
                        <img 
                          src={zone.image} 
                          alt={zone.name}
                          className={`w-full h-full object-cover ${isLocked ? 'grayscale' : ''}`}
                        />
                        {isLocked && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
                            <Lock className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                          </div>
                        )}
                      </div>
                      
                      {/* Zone Info */}
                      <div className="p-4 sm:p-5 bg-card">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-base sm:text-xl text-foreground">{zone.name}</h3>
                          {isUnlocked && <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-secondary fill-secondary" />}
                          {isCurrent && <Play className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary animate-pulse" />}
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">{zone.description}</p>
                        
                        {/* Progress for unlocked/current zones */}
                        {(isUnlocked || isCurrent) && (
                          <div className="mb-3 sm:mb-4">
                            <div className="flex items-center justify-between text-xs mb-1.5">
                              <span className="font-semibold text-muted-foreground">Niveaux</span>
                              <span className="font-bold text-foreground">{zone.completedLevels}/{zone.levels}</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden border border-border">
                              <div 
                                className={`h-full bg-gradient-to-r ${zone.color}`}
                                style={{ width: `${(zone.completedLevels / zone.levels) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                        
                        {/* Action Button */}
                        {(isUnlocked || isCurrent) ? (
                          <Link to={`/quiz/${zone.id}`}>
                            <Button 
                              className={`w-full font-semibold shadow-md text-sm sm:text-base ${
                                isCurrent 
                                  ? 'bg-primary hover:bg-primary/90' 
                                  : 'bg-secondary hover:bg-secondary/90'
                              }`}
                            >
                              {isCurrent ? '▶ JOUER' : '↻ REJOUER'}
                            </Button>
                          </Link>
                        ) : (
                          <Button disabled className="w-full font-semibold opacity-50 text-sm sm:text-base">
                            🔒 VERROUILLÉ
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>

                  {/* Zone Node/Icon */}
                  <div className={`relative ${isLeft ? 'sm:order-1' : 'sm:order-2'} hidden sm:block`}>
                    {/* Stars Display */}
                    {zone.stars > 0 && (
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < zone.stars
                                ? 'text-secondary fill-secondary'
                                : 'text-muted fill-muted'
                            } drop-shadow-md`}
                          />
                        ))}
                      </div>
                    )}
                    
                    <div 
                      className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-4xl sm:text-5xl border-2 shadow-xl transition-transform duration-300 ${
                        isCurrent 
                          ? 'bg-gradient-to-br from-primary to-primary/80 border-primary animate-pulse' 
                          : isUnlocked 
                          ? 'bg-gradient-to-br from-secondary to-secondary/80 border-secondary' 
                          : 'bg-gradient-to-br from-muted to-muted/60 border-border grayscale'
                      }`}
                    >
                      {zone.icon}
                    </div>
                    
                    {/* Zone Number */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-9 h-9 bg-card border-2 border-border rounded-full flex items-center justify-center font-bold text-foreground shadow-md">
                      {zone.id}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Map;
