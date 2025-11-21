import { Header } from "@/components/Header";
import { portefeuilleLignes } from "@/data/mockData";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RichieAssistant } from "@/components/RichieAssistant";
import { DynamicNotifications } from "@/components/DynamicNotifications";
import { CoachIAChat } from "@/components/CoachIAChat";
import { useState } from "react";

const PortfolioDetails = () => {
  const { language, t } = useLanguage();
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const formatCurrency = (value: number) => {
    const locale = language === 'fr' ? 'fr-FR' : 'en-US';
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getTypeLabel = (type: string) => {
    return t(`patrimoine.type.${type}`);
  };

  const groupedByType = portefeuilleLignes.reduce((acc, ligne) => {
    if (!acc[ligne.type]) {
      acc[ligne.type] = [];
    }
    acc[ligne.type].push(ligne);
    return acc;
  }, {} as Record<string, typeof portefeuilleLignes>);

  const totalByType = Object.entries(groupedByType).map(([type, items]) => ({
    type,
    total: items.reduce((sum, item) => sum + item.valeur, 0),
    performance: items.reduce((sum, item) => sum + item.performanceAbsolute, 0),
    items,
  }));

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
            {language === 'fr' ? 'Vue détaillée de votre portefeuille' : 'Detailed portfolio view'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'fr' 
              ? 'Analyse complète de tous vos investissements par catégorie' 
              : 'Complete analysis of all your investments by category'}
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">
              {language === 'fr' ? 'Tout' : 'All'}
            </TabsTrigger>
            <TabsTrigger value="immobilier">
              {getTypeLabel('immobilier')}
            </TabsTrigger>
            <TabsTrigger value="action">
              {getTypeLabel('action')}
            </TabsTrigger>
            <TabsTrigger value="crypto">
              {getTypeLabel('crypto')}
            </TabsTrigger>
            <TabsTrigger value="liquidite">
              {getTypeLabel('liquidite')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {totalByType.map(({ type, total, performance, items }) => (
              <div key={type} className="glass-card p-6 rounded-xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-serif text-champagne mb-1">
                      {getTypeLabel(type)}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {items.length} {language === 'fr' ? 'ligne(s)' : 'line(s)'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-mono text-champagne font-bold">
                      {formatCurrency(total)}
                    </p>
                    <div className={`flex items-center justify-end gap-1 text-sm mt-1 ${
                      performance >= 0 ? 'text-jade' : 'text-red-500'
                    }`}>
                      {performance >= 0 ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span className="font-mono">
                        {performance >= 0 ? '+' : ''}{formatCurrency(performance)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {items.map((ligne) => (
                    <div
                      key={ligne.id}
                      className="bg-background/50 rounded-lg p-4 border border-border/30 hover:border-champagne/30 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-foreground mb-2">{ligne.nom}</h3>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-muted-foreground">
                              {ligne.allocation}% {t('patrimoine.item.of-total')}
                            </span>
                            <span className={ligne.performance >= 0 ? 'text-jade' : 'text-red-500'}>
                              {ligne.performance >= 0 ? '+' : ''}{ligne.performance}%
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-mono text-champagne font-bold mb-1">
                            {formatCurrency(ligne.valeur)}
                          </p>
                          <p className={`text-sm font-mono ${
                            ligne.performanceAbsolute >= 0 ? 'text-jade' : 'text-red-500'
                          }`}>
                            {ligne.performanceAbsolute >= 0 ? '+' : ''}
                            {formatCurrency(ligne.performanceAbsolute)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          {Object.keys(groupedByType).map((type) => (
            <TabsContent key={type} value={type} className="space-y-4">
              {groupedByType[type].map((ligne) => (
                <div
                  key={ligne.id}
                  className="glass-card p-6 rounded-xl hover:border-champagne/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-serif text-champagne mb-2">{ligne.nom}</h3>
                      <span className="text-sm text-muted-foreground">
                        {ligne.allocation}% {t('patrimoine.item.of-total')}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-mono text-champagne font-bold mb-1">
                        {formatCurrency(ligne.valeur)}
                      </p>
                      <div className={`flex items-center justify-end gap-1 text-sm ${
                        ligne.performance >= 0 ? 'text-jade' : 'text-red-500'
                      }`}>
                        {ligne.performance >= 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        <span className="font-mono">
                          {ligne.performance >= 0 ? '+' : ''}{ligne.performance}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-background/50 rounded-lg">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        {language === 'fr' ? 'Performance absolue' : 'Absolute performance'}
                      </p>
                      <p className={`text-lg font-mono font-bold ${
                        ligne.performanceAbsolute >= 0 ? 'text-jade' : 'text-red-500'
                      }`}>
                        {ligne.performanceAbsolute >= 0 ? '+' : ''}
                        {formatCurrency(ligne.performanceAbsolute)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        {language === 'fr' ? 'Type d\'actif' : 'Asset type'}
                      </p>
                      <p className="text-lg font-medium text-champagne">
                        {getTypeLabel(ligne.type)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 h-16 flex items-end gap-1">
                    {ligne.sparkline.map((value, idx) => (
                      <div
                        key={idx}
                        className="flex-1 bg-champagne/20 rounded-t"
                        style={{
                          height: `${(value / Math.max(...ligne.sparkline)) * 100}%`,
                          minHeight: '8px'
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <RichieAssistant onOpenChat={() => setIsChatOpen(true)} />
      <DynamicNotifications />
      {isChatOpen && <CoachIAChat onClose={() => setIsChatOpen(false)} />}
    </div>
  );
};

export default PortfolioDetails;
