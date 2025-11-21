import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, CreditCard, Users, TrendingUp, Home, Shield, Briefcase, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { RichieAssistant } from "@/components/RichieAssistant";
import { DynamicNotifications } from "@/components/DynamicNotifications";
import { CoachIAChat } from "@/components/CoachIAChat";
import { useState } from "react";

interface Opportunity {
  id: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  type: "credit" | "expert" | "investissement" | "immobilier" | "assurance";
  amount?: string;
  roi?: string;
  risk?: "low" | "medium" | "high";
  badge?: string;
}

const opportunities: Opportunity[] = [
  {
    id: "1",
    titleFr: "Capacité d'emprunt de 650K€",
    titleEn: "650K€ borrowing capacity",
    descriptionFr: "Profitez de taux avantageux à 3.2% pour financer votre prochain investissement immobilier. Simulation personnalisée disponible.",
    descriptionEn: "Take advantage of attractive rates at 3.2% to finance your next real estate investment. Personalized simulation available.",
    type: "credit",
    amount: "650,000€",
    badge: "Taux exclusif",
  },
  {
    id: "2",
    titleFr: "SCPI Rendement Premium",
    titleEn: "Premium SCPI Yield",
    descriptionFr: "Investissement en immobilier commercial avec un rendement de 5.2% et une faible volatilité. Entrée minimale 5K€.",
    descriptionEn: "Commercial real estate investment with 5.2% yield and low volatility. Minimum entry 5K€.",
    type: "investissement",
    roi: "5.2%",
    risk: "low",
    amount: "5,000€ min",
  },
  {
    id: "3",
    titleFr: "Consultation Fiscaliste Crypto",
    titleEn: "Crypto Tax Specialist Consultation",
    descriptionFr: "Marie Dubois peut vous aider à optimiser vos moins-values crypto et réduire votre fiscalité 2024.",
    descriptionEn: "Marie Dubois can help you optimize your crypto losses and reduce your 2024 taxes.",
    type: "expert",
    badge: "Recommandé",
  },
  {
    id: "4",
    titleFr: "Appartement Paris 11ème",
    titleEn: "Paris 11th Apartment",
    descriptionFr: "T3 de 65m² avec travaux de rénovation à prévoir. Rendement locatif estimé à 4.5%. Prix négociable.",
    descriptionEn: "65m² 2-bedroom with renovation needed. Estimated rental yield 4.5%. Negotiable price.",
    type: "immobilier",
    roi: "4.5%",
    risk: "medium",
    amount: "485,000€",
  },
  {
    id: "5",
    titleFr: "Assurance-vie Premium",
    titleEn: "Premium Life Insurance",
    descriptionFr: "Contrat multisupport avec fonds euros garantis à 2.8% + options d'investissement en UC. Frais réduits.",
    descriptionEn: "Multi-support contract with guaranteed euro funds at 2.8% + UC investment options. Reduced fees.",
    type: "assurance",
    roi: "2.8%",
    risk: "low",
  },
  {
    id: "6",
    titleFr: "ETF Monde Diversifié",
    titleEn: "Diversified World ETF",
    descriptionFr: "Portefeuille diversifié répliquant le MSCI World. Performance historique de 8.2% sur 10 ans.",
    descriptionEn: "Diversified portfolio replicating MSCI World. Historical 10-year performance of 8.2%.",
    type: "investissement",
    roi: "8.2%",
    risk: "medium",
    amount: "100€ min",
  },
  {
    id: "7",
    titleFr: "Expert Transmission Patrimoine",
    titleEn: "Wealth Transfer Expert",
    descriptionFr: "Thomas Laurent, avocat spécialisé en succession et donation. Optimisation fiscale familiale.",
    descriptionEn: "Thomas Laurent, lawyer specializing in inheritance and donation. Family tax optimization.",
    type: "expert",
    badge: "Expert vérifié",
  },
  {
    id: "8",
    titleFr: "SCPI Résidentiel Allemagne",
    titleEn: "German Residential SCPI",
    descriptionFr: "Investissement immobilier résidentiel en Allemagne. Rendement 4.8%, marché stable.",
    descriptionEn: "Residential real estate investment in Germany. 4.8% yield, stable market.",
    type: "investissement",
    roi: "4.8%",
    risk: "low",
    amount: "10,000€ min",
  },
];

const Opportunities = () => {
  const { language, t } = useLanguage();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("all");

  const getIcon = (type: string) => {
    switch (type) {
      case "credit":
        return <CreditCard className="w-6 h-6" />;
      case "expert":
        return <Users className="w-6 h-6" />;
      case "investissement":
        return <TrendingUp className="w-6 h-6" />;
      case "immobilier":
        return <Home className="w-6 h-6" />;
      case "assurance":
        return <Shield className="w-6 h-6" />;
      default:
        return <Briefcase className="w-6 h-6" />;
    }
  };

  const getRiskBadge = (risk?: string) => {
    if (!risk) return null;
    const riskLabels = {
      low: { fr: "Faible risque", en: "Low risk", color: "bg-jade/20 text-jade" },
      medium: { fr: "Risque modéré", en: "Medium risk", color: "bg-champagne/20 text-champagne" },
      high: { fr: "Risque élevé", en: "High risk", color: "bg-red-500/20 text-red-600" },
    };
    const riskInfo = riskLabels[risk as keyof typeof riskLabels];
    return (
      <Badge className={`${riskInfo.color} border-0`}>
        {language === 'fr' ? riskInfo.fr : riskInfo.en}
      </Badge>
    );
  };

  const filteredOpportunities = selectedType === "all" 
    ? opportunities 
    : opportunities.filter(opp => opp.type === selectedType);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="mb-6">
          <Link to="/patrimoine">
            <Button variant="ghost" className="gap-2 text-champagne hover:text-champagne-muted">
              <ArrowLeft className="w-4 h-4" />
              {language === 'fr' ? 'Retour' : 'Back'}
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-serif text-champagne mb-2">
            {language === 'fr' ? 'Opportunités pour vous' : 'Opportunities for you'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'fr' 
              ? 'Découvrez les opportunités d\'investissement et d\'optimisation sélectionnées pour votre profil' 
              : 'Discover investment and optimization opportunities selected for your profile'}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button
            variant={selectedType === "all" ? "default" : "outline"}
            onClick={() => setSelectedType("all")}
            className={selectedType === "all" ? "bg-champagne text-white hover:bg-champagne-muted" : ""}
          >
            {language === 'fr' ? 'Tout' : 'All'}
          </Button>
          <Button
            variant={selectedType === "investissement" ? "default" : "outline"}
            onClick={() => setSelectedType("investissement")}
            className={selectedType === "investissement" ? "bg-champagne text-white hover:bg-champagne-muted" : ""}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Investissements' : 'Investments'}
          </Button>
          <Button
            variant={selectedType === "credit" ? "default" : "outline"}
            onClick={() => setSelectedType("credit")}
            className={selectedType === "credit" ? "bg-champagne text-white hover:bg-champagne-muted" : ""}
          >
            <CreditCard className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Crédit' : 'Credit'}
          </Button>
          <Button
            variant={selectedType === "immobilier" ? "default" : "outline"}
            onClick={() => setSelectedType("immobilier")}
            className={selectedType === "immobilier" ? "bg-champagne text-white hover:bg-champagne-muted" : ""}
          >
            <Home className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Immobilier' : 'Real Estate'}
          </Button>
          <Button
            variant={selectedType === "expert" ? "default" : "outline"}
            onClick={() => setSelectedType("expert")}
            className={selectedType === "expert" ? "bg-champagne text-white hover:bg-champagne-muted" : ""}
          >
            <Users className="w-4 h-4 mr-2" />
            {language === 'fr' ? 'Experts' : 'Experts'}
          </Button>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredOpportunities.map((opp, index) => (
            <div
              key={opp.id}
              className="glass-card p-6 rounded-xl hover:border-champagne/30 transition-all hover:scale-[1.02] cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-champagne/10 text-champagne">
                  {getIcon(opp.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-serif text-champagne">
                      {language === 'fr' ? opp.titleFr : opp.titleEn}
                    </h3>
                    {opp.badge && (
                      <Badge className="bg-jade/20 text-jade border-0 ml-2">
                        {opp.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'fr' ? opp.descriptionFr : opp.descriptionEn}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {opp.amount && (
                  <Badge variant="outline" className="border-champagne/30 text-foreground">
                    <LineChart className="w-3 h-3 mr-1" />
                    {opp.amount}
                  </Badge>
                )}
                {opp.roi && (
                  <Badge variant="outline" className="border-jade/30 text-jade">
                    {language === 'fr' ? 'Rendement' : 'Yield'}: {opp.roi}
                  </Badge>
                )}
                {getRiskBadge(opp.risk)}
              </div>

              <Button className="w-full bg-champagne text-white hover:bg-champagne-muted">
                {language === 'fr' ? 'En savoir plus' : 'Learn more'}
              </Button>
            </div>
          ))}
        </div>
      </main>

      <RichieAssistant onOpenChat={() => setIsChatOpen(true)} />
      <DynamicNotifications />
      {isChatOpen && <CoachIAChat onClose={() => setIsChatOpen(false)} />}
    </div>
  );
};

export default Opportunities;
