import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Search,
  Star,
  MapPin,
  Calendar,
  Briefcase,
  Scale,
  FileText,
  Building2,
} from "lucide-react";
import { useState } from "react";
import { RichieAssistant } from "@/components/RichieAssistant";
import { DynamicNotifications } from "@/components/DynamicNotifications";
import { CoachIAChat } from "@/components/CoachIAChat";

type ExpertType = "comptable" | "avocat" | "fiscaliste" | "conseil";

interface Expert {
  id: string;
  name: string;
  type: ExpertType;
  specialty: string;
  location: string;
  rating: number;
  reviewCount: number;
  description: string;
  available: boolean;
}

const experts: Expert[] = [
  {
    id: "1",
    name: "Sophie Mercier",
    type: "comptable",
    specialty: "Comptabilité entreprises tech",
    location: "Paris 8ème",
    rating: 4.9,
    reviewCount: 47,
    description:
      "Experte en comptabilité pour startups et scale-ups. Spécialisée dans l'optimisation fiscale des entrepreneurs.",
    available: true,
  },
  {
    id: "2",
    name: "Marc Dubois",
    type: "avocat",
    specialty: "Droit des affaires & M&A",
    location: "Paris 2ème",
    rating: 4.8,
    reviewCount: 63,
    description:
      "Avocat spécialisé en fusions-acquisitions et structuration juridique d'entreprises.",
    available: true,
  },
  {
    id: "3",
    name: "Claire Fontaine",
    type: "fiscaliste",
    specialty: "Fiscalité internationale",
    location: "Neuilly-sur-Seine",
    rating: 5.0,
    reviewCount: 38,
    description:
      "Conseil en optimisation fiscale pour patrimoine international et holdings.",
    available: false,
  },
  {
    id: "4",
    name: "Thomas Bernard",
    type: "avocat",
    specialty: "Droit fiscal & patrimoine",
    location: "Paris 16ème",
    rating: 4.7,
    reviewCount: 52,
    description:
      "Spécialiste transmission de patrimoine et optimisation fiscale familiale.",
    available: true,
  },
  {
    id: "5",
    name: "Isabelle Rousseau",
    type: "comptable",
    specialty: "Gestion patrimoniale",
    location: "Lyon 6ème",
    rating: 4.9,
    reviewCount: 41,
    description:
      "Expertise en gestion comptable de patrimoine immobilier et financier.",
    available: true,
  },
  {
    id: "6",
    name: "Laurent Petit",
    type: "fiscaliste",
    specialty: "Crypto & actifs numériques",
    location: "Paris 9ème",
    rating: 4.6,
    reviewCount: 29,
    description:
      "Pionnier de la fiscalité crypto en France, conseil pour entrepreneurs du web3.",
    available: true,
  },
  {
    id: "7",
    name: "Émilie Garnier",
    type: "conseil",
    specialty: "Stratégie patrimoniale",
    location: "Paris 1er",
    rating: 4.9,
    reviewCount: 55,
    description:
      "Conseil en stratégie patrimoniale globale pour entrepreneurs et dirigeants.",
    available: true,
  },
  {
    id: "8",
    name: "Antoine Moreau",
    type: "avocat",
    specialty: "Contentieux commercial",
    location: "Paris 17ème",
    rating: 4.8,
    reviewCount: 44,
    description: "Avocat spécialisé en litiges commerciaux et droit des sociétés.",
    available: false,
  },
];

const typeIcons: Record<ExpertType, any> = {
  comptable: FileText,
  avocat: Scale,
  fiscaliste: Briefcase,
  conseil: Building2,
};

const Experts = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<ExpertType | "all">("all");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const typeLabels: Record<ExpertType, string> = {
    comptable: t('experts.type.comptable'),
    avocat: t('experts.type.avocat'),
    fiscaliste: t('experts.type.fiscaliste'),
    conseil: t('experts.type.conseil'),
  };

  const filteredExperts = experts.filter((expert) => {
    const matchesSearch =
      expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || expert.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-champagne mb-3">
            {t('experts.title')}
          </h1>
          <p className="text-muted-foreground text-lg">
            {t('experts.subtitle')}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t('experts.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 bg-white/60 border-border/50 text-foreground"
            />
          </div>

          <div className="flex gap-3 flex-wrap">
            <Button
              variant={selectedType === "all" ? "default" : "outline"}
              onClick={() => setSelectedType("all")}
              className={
                selectedType === "all"
                  ? "bg-champagne text-white hover:bg-champagne-muted"
                  : "border-champagne/50 text-champagne hover:bg-champagne/10"
              }
            >
              {t('experts.all')}
            </Button>
            {(Object.keys(typeLabels) as ExpertType[]).map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => setSelectedType(type)}
                className={
                  selectedType === type
                    ? "bg-champagne text-white hover:bg-champagne-muted"
                    : "border-champagne/50 text-champagne hover:bg-champagne/10"
                }
              >
                {typeLabels[type]}
              </Button>
            ))}
          </div>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperts.map((expert) => {
            const IconComponent = typeIcons[expert.type];
            return (
              <div
                key={expert.id}
                className="bg-white backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-champagne/50 transition-all hover:shadow-premium"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-champagne/20 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-champagne" />
                  </div>
                  <Badge
                    variant="secondary"
                    className={
                      expert.available
                        ? "bg-jade/20 text-jade border-jade/30"
                        : "bg-muted/50 text-muted-foreground border-muted"
                    }
                  >
                    {expert.available ? t('experts.available') : t('experts.full')}
                  </Badge>
                </div>

                <h3 className="text-xl font-serif text-champagne mb-2">
                  {expert.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-1">
                  {typeLabels[expert.type]}
                </p>
                <p className="text-sm font-medium text-foreground mb-3">
                  {expert.specialty}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-champagne fill-champagne" />
                    <span className="text-foreground font-mono">
                      {expert.rating}
                    </span>
                    <span>({expert.reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{expert.location}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {expert.description}
                </p>

                <Button
                  className="w-full bg-champagne text-white hover:bg-champagne-muted"
                  disabled={!expert.available}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {t('experts.meeting')}
                </Button>
              </div>
            );
          })}
        </div>

        {filteredExperts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              {t('experts.no-results')}
            </p>
          </div>
        )}
      </main>

      <RichieAssistant onOpenChat={() => setIsChatOpen(true)} />
      <DynamicNotifications />
      {isChatOpen && <CoachIAChat onClose={() => setIsChatOpen(false)} />}
    </div>
  );
};

export default Experts;
