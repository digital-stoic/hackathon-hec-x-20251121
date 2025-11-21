import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroStatusCard } from "@/components/HeroStatusCard";
import { WeeklyTasksCard } from "@/components/WeeklyTasksCard";
import { OpportunitiesCard } from "@/components/OpportunitiesCard";
import { PatrimoineOverviewCard } from "@/components/PatrimoineOverviewCard";
import { LignePatrimoineItem } from "@/components/LignePatrimoineItem";
import { CoachPreviewSimple } from "@/components/CoachPreviewSimple";
import { CoachIAChat } from "@/components/CoachIAChat";
import { RichieAssistant } from "@/components/RichieAssistant";
import { DynamicNotifications } from "@/components/DynamicNotifications";
import { portefeuilleLignes } from "@/data/mockData";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Patrimoine = () => {
  const { t } = useLanguage();
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Hero Status */}
        <HeroStatusCard />

        {/* Main Layout - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Tâches & Opportunités */}
          <div className="lg:col-span-1 space-y-6">
            <WeeklyTasksCard />
            <OpportunitiesCard />
            <CoachPreviewSimple onOpenChat={() => setIsChatOpen(true)} />
          </div>

          {/* Right Column - Patrimoine & Lignes */}
          <div className="lg:col-span-2 space-y-6">
            {/* Patrimoine Overview */}
            <div>
              <div className="mb-4">
                <h2 className="text-2xl font-serif text-foreground mb-1">
                  {t('patrimoine.title')}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {t('patrimoine.subtitle')}
                </p>
              </div>
              <PatrimoineOverviewCard />
            </div>

            {/* Lignes Principales */}
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-serif text-foreground mb-1">
                  {t('patrimoine.lines.title')}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {t('patrimoine.lines.subtitle')}
                </p>
              </div>
              <div className="space-y-3">
                {portefeuilleLignes.slice(0, 6).map((ligne, index) => (
                  <div
                    key={ligne.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <LignePatrimoineItem ligne={ligne} />
                  </div>
                ))}
              </div>
              <Link to="/patrimoine/details">
                <button className="w-full text-sm text-champagne hover:text-champagne-muted transition-colors flex items-center justify-center gap-2 group mt-4 py-3">
                  {t('patrimoine.view-all')}
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {isChatOpen && <CoachIAChat onClose={() => setIsChatOpen(false)} />}
      
      {/* Richie Assistant Floating Avatar */}
      <RichieAssistant onOpenChat={() => setIsChatOpen(true)} />
      
      {/* Dynamic Notifications */}
      <DynamicNotifications />
    </div>
  );
};

export default Patrimoine;
