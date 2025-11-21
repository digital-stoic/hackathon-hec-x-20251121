import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, TrendingUp, Shield, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { userData } from "@/data/mockData";
import { useLanguage } from "@/contexts/LanguageContext";
import { RichieAssistant } from "@/components/RichieAssistant";
import { DynamicNotifications } from "@/components/DynamicNotifications";
import { CoachIAChat } from "@/components/CoachIAChat";
import richie3D from "@/assets/richie-3d.png";

const Home = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="flex flex-col items-center mb-8 animate-scale-in">
            <img
              src={richie3D}
              alt="Richie"
              className="h-64 w-auto object-contain animate-fade-in"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.25)) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))',
                transform: 'perspective(1000px) rotateY(-5deg)',
              }}
            />
            <div className="h-3 w-32 bg-champagne rounded-full mt-4"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-champagne mb-6 leading-tight">
            {t('home.hero.title.1')}
            <br />
            {t('home.hero.title.2')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/patrimoine">
              <Button className="bg-champagne text-white hover:bg-champagne-muted h-14 px-8 text-base w-full sm:w-auto">
                {t('home.hero.btn.patrimoine')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/profil-investisseur">
              <Button className="bg-jade text-white hover:bg-jade-light h-14 px-8 text-base w-full sm:w-auto">
                {t('home.hero.btn.profile')}
              </Button>
            </Link>
          </div>
          <div className="mt-4 flex justify-center">
            <Link to="/conseil">
              <Button
                variant="outline"
                className="border-champagne text-champagne hover:bg-champagne/10 h-12 px-6 text-base"
              >
                {t('home.hero.btn.conseil')}
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white backdrop-blur-sm border border-border/50 rounded-lg p-8 text-center">
              <TrendingUp className="w-12 h-12 text-champagne mx-auto mb-4" />
              <p className="text-3xl font-mono text-champagne font-bold mb-2">
                {formatCurrency(userData.patrimoine)}
              </p>
              <p className="text-sm text-muted-foreground">{t('home.stats.patrimoine')}</p>
            </div>
            <div className="bg-white backdrop-blur-sm border border-border/50 rounded-lg p-8 text-center">
              <BarChart3 className="w-12 h-12 text-jade mx-auto mb-4" />
              <p className="text-3xl font-mono text-jade font-bold mb-2">
                +{userData.performance}%
              </p>
              <p className="text-sm text-muted-foreground">{t('home.stats.performance')}</p>
            </div>
            <div className="bg-white backdrop-blur-sm border border-border/50 rounded-lg p-8 text-center">
              <Shield className="w-12 h-12 text-champagne mx-auto mb-4" />
              <p className="text-3xl font-mono text-champagne font-bold mb-2">
                {t('home.stats.protected')}
              </p>
              <p className="text-sm text-muted-foreground">{t('home.stats.by')}</p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-champagne text-center mb-12">
            {t('home.services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gestion Patrimoine */}
            <Link
              to="/patrimoine"
              className="group bg-white backdrop-blur-sm border border-border/50 rounded-lg p-10 hover:border-champagne/50 transition-all hover:shadow-premium hover:scale-[1.03] animate-fade-in"
              style={{ animationDelay: '100ms' }}
            >
              <BarChart3 className="w-16 h-16 text-champagne mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif text-champagne mb-4">
                {t('home.services.patrimoine.title')}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('home.services.patrimoine.desc')}
              </p>
              <div className="flex items-center text-champagne group-hover:gap-2 transition-all">
                <span className="text-sm font-medium">{t('home.services.patrimoine.cta')}</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Documents */}
            <Link
              to="/documents"
              className="group bg-white backdrop-blur-sm border border-border/50 rounded-lg p-10 hover:border-champagne/50 transition-all hover:shadow-premium hover:scale-[1.03] animate-fade-in"
              style={{ animationDelay: '200ms' }}
            >
              <Users className="w-16 h-16 text-champagne mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif text-champagne mb-4">
                {t('documents.title')}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('documents.subtitle')}
              </p>
              <div className="flex items-center text-champagne group-hover:gap-2 transition-all">
                <span className="text-sm font-medium">{language === 'fr' ? 'Explorer' : 'Explore'}</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Conseil Croissance & Cession */}
            <Link
              to="/conseil"
              className="group bg-white backdrop-blur-sm border border-border/50 rounded-lg p-10 hover:border-champagne/50 transition-all hover:shadow-premium hover:scale-[1.03] animate-fade-in"
              style={{ animationDelay: '300ms' }}
            >
              <Building2 className="w-16 h-16 text-champagne mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif text-champagne mb-4">
                {t('home.services.conseil.title')}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('home.services.conseil.desc')}
              </p>
              <div className="flex items-center text-champagne group-hover:gap-2 transition-all">
                <span className="text-sm font-medium">{t('home.services.conseil.cta')}</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </main>
      
      {/* Richie Assistant Floating Avatar */}
      <RichieAssistant onOpenChat={() => setIsChatOpen(true)} />
      
      {/* Dynamic Notifications */}
      <DynamicNotifications />
      
      {isChatOpen && <CoachIAChat onClose={() => setIsChatOpen(false)} />}
    </div>
  );
};

export default Home;
