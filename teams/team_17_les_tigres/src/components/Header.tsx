import { NavLink, Link } from "react-router-dom";
import { userData } from "@/data/mockData";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const { language, t } = useLanguage();
  
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
    <header className="border-b border-border/50 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-16">
            <NavLink to="/" className="block">
              <h1 className="text-2xl font-serif text-champagne">
                {t('header.title')}
              </h1>
              <p className="text-sm text-muted-foreground mt-0.5">
                {t('header.subtitle')}
              </p>
            </NavLink>

            <nav className="hidden md:flex items-center gap-10">
              <NavLink
                to="/patrimoine"
                className={({ isActive }) =>
                  `text-base font-medium transition-colors hover:text-champagne whitespace-nowrap ${
                    isActive ? "text-champagne" : "text-muted-foreground"
                  }`
                }
              >
                {t('header.nav.patrimoine')}
              </NavLink>
              <NavLink
                to="/documents"
                className={({ isActive }) =>
                  `text-base font-medium transition-colors hover:text-champagne whitespace-nowrap ${
                    isActive ? "text-champagne" : "text-muted-foreground"
                  }`
                }
              >
                {t('header.nav.documents')}
              </NavLink>
              <NavLink
                to="/conseil"
                className={({ isActive }) =>
                  `text-base font-medium transition-colors hover:text-champagne whitespace-nowrap ${
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
              <p className="text-3xl font-mono text-champagne font-bold">
                {formatCurrency(userData.patrimoine)}
              </p>
            </div>

            <Link to="/profil-investisseur" className="hidden md:block">
              <Button className="bg-champagne text-white hover:bg-champagne-muted h-11 px-6 gap-2">
                <Sparkles className="w-4 h-4" />
                {t('home.hero.btn.profile')}
              </Button>
            </Link>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 pl-4 border-l border-border/50">
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
