import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroStatusCard = () => {
  const { t } = useLanguage();
  
  return (
    <Card className="bg-white border-jade/20 p-8 mb-6">
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-serif text-jade mb-2">
            {t('hero.title').replace('{name}', 'Florian')}
          </h1>
          <p className="text-foreground text-base leading-relaxed">
            {t('hero.message')}
          </p>
        </div>

        <div className="flex flex-wrap gap-6 pt-2">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{t('hero.portfolio')}</p>
            <p className="text-base font-medium text-foreground">
              {t('hero.metrics.balanced')}
            </p>
          </div>
          <div className="border-l border-border pl-6">
            <p className="text-sm text-muted-foreground mb-1">{t('hero.liquidites')}</p>
            <p className="text-base font-medium text-foreground">
              850K€
            </p>
          </div>
          <div className="border-l border-border pl-6">
            <p className="text-sm text-muted-foreground mb-1">{t('hero.performance')}</p>
            <p className="text-base font-medium text-jade">
              {t('hero.metrics.above-goals')}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
