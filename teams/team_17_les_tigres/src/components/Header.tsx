import { NavLink } from "react-router-dom";
import { userData } from "@/data/mockData";
import { Bell, Settings, TrendingUp, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  
  const formatCurrency = (value: number) => {
    const locale = language === 'fr' ? 'fr-FR' : 'en-US';
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <header className="border-b border-border/50 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <NavLink to="/" className="block">
              <h1 className="text-xl font-serif text-champagne">
                {t('header.title')}
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                {t('header.subtitle')}
              </p>
            </NavLink>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink
                to="/patrimoine"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-champagne ${
                    isActive ? "text-champagne" : "text-muted-foreground"
                  }`
                }
              >
                {t('header.nav.patrimoine')}
              </NavLink>
              <NavLink
                to="/documents"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-champagne ${
                    isActive ? "text-champagne" : "text-muted-foreground"
                  }`
                }
              >
                {t('header.nav.documents')}
              </NavLink>
              <NavLink
                to="/conseil"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-champagne ${
                    isActive ? "text-champagne" : "text-muted-foreground"
                  }`
                }
              >
                {t('header.nav.conseil')}
              </NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden lg:block text-right">
              <p className="text-xs text-muted-foreground mb-1">
                {t('header.patrimoine.total')}
              </p>
              <p className="text-2xl font-mono text-champagne font-bold">
                {formatCurrency(userData.patrimoine)}
              </p>
              <div className="flex items-center justify-end gap-1 text-jade text-sm mt-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span className="font-mono">+{userData.performance}%</span>
                <span className="text-xs text-muted-foreground ml-1">
                  {t('header.performance.month')}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 ml-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                className="text-muted-foreground hover:text-champagne"
                title={language === 'fr' ? 'Switch to English' : 'Passer en français'}
              >
                <Languages className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-champagne"
              >
                <Bell className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-champagne"
              >
                <Settings className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-3 ml-2 pl-4 border-l border-border/50">
                <div className="hidden sm:block text-right">
                  <p className="text-sm font-medium text-foreground">
                    {userData.name}
                  </p>
                  <p className="text-xs text-muted-foreground capitalize">
                    {t('header.profile.type')} {userData.profilInvestisseur}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-champagne/20 flex items-center justify-center">
                  <span className="text-champagne font-semibold text-sm">
                    {userData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
