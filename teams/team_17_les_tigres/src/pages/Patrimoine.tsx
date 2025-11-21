import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroStatusCard } from "@/components/HeroStatusCard";
import { WeeklyTasksCard } from "@/components/WeeklyTasksCard";
import { OpportunitiesCard } from "@/components/OpportunitiesCard";
import { PatrimoineOverviewCard } from "@/components/PatrimoineOverviewCard";
import { LignePatrimoineItem } from "@/components/LignePatrimoineItem";
import { CoachPreviewSimple } from "@/components/CoachPreviewSimple";
import { CoachIAChat } from "@/components/CoachIAChat";
import { portefeuilleLignes } from "@/data/mockData";

const Patrimoine = () => {
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
                  Votre patrimoine
                </h2>
                <p className="text-sm text-muted-foreground">
                  Répartition et performance
                </p>
              </div>
              <PatrimoineOverviewCard />
            </div>

            {/* Lignes Principales */}
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-serif text-foreground mb-1">
                  Lignes principales
                </h2>
                <p className="text-sm text-muted-foreground">
                  Performance en temps réel
                </p>
              </div>
              <div className="space-y-3">
                {portefeuilleLignes.slice(0, 6).map((ligne) => (
                  <LignePatrimoineItem key={ligne.id} ligne={ligne} />
                ))}
              </div>
              <button className="w-full text-sm text-champagne hover:text-champagne-muted transition-colors flex items-center justify-center gap-2 group mt-4 py-3">
                Voir toutes les lignes
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {isChatOpen && <CoachIAChat onClose={() => setIsChatOpen(false)} />}
    </div>
  );
};

export default Patrimoine;
