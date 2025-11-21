import { Line, LineChart, ResponsiveContainer } from "recharts";
import { LignePatrimoine } from "@/data/mockData";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface LignePatrimoineItemProps {
  ligne: LignePatrimoine;
}

export const LignePatrimoineItem = ({ ligne }: LignePatrimoineItemProps) => {
  const { t, language } = useLanguage();
  
  const formatCurrency = (value: number) => {
    const locale = language === 'fr' ? 'fr-FR' : 'en-US';
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const translateType = (type: string) => {
    const typeMap: Record<string, string> = {
      immobilier: t('patrimoine.type.immobilier'),
      action: t('patrimoine.type.action'),
      crypto: t('patrimoine.type.crypto'),
      liquidite: t('patrimoine.type.liquidite'),
      equity: t('patrimoine.type.equity'),
    };
    return typeMap[type] || type;
  };

  const chartData = ligne.sparkline.map((value, index) => ({
    index,
    value,
  }));

  const isPositive = ligne.performance >= 0;

  return (
    <div className="glass-card p-4 hover-lift cursor-pointer group transition-all hover:shadow-premium">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="text-sm font-medium text-foreground mb-1 group-hover:text-champagne transition-colors">
            {ligne.nom}
          </h4>
          <p className="text-xs text-muted-foreground capitalize">
            {translateType(ligne.type)}
          </p>
        </div>
        <div className="w-20 h-10">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke={isPositive ? "hsl(var(--jade-green))" : "hsl(var(--bordeaux-red))"}
                strokeWidth={1.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="text-lg font-mono text-champagne">
            {formatCurrency(ligne.valeur)}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {ligne.allocation.toFixed(1)}% {t('patrimoine.item.of-total')}
          </p>
        </div>
        <div className="text-right">
          <div
            className={`flex items-center gap-1 text-sm font-mono ${
              isPositive ? "text-jade" : "text-bordeaux"
            }`}
          >
            {isPositive ? (
              <TrendingUp className="w-3.5 h-3.5" />
            ) : (
              <TrendingDown className="w-3.5 h-3.5" />
            )}
            {isPositive ? "+" : ""}
            {ligne.performance.toFixed(1)}%
          </div>
          <p
            className={`text-xs mt-0.5 ${
              isPositive ? "text-jade-light" : "text-bordeaux"
            }`}
          >
            {isPositive ? "+" : ""}
            {formatCurrency(ligne.performanceAbsolute)}
          </p>
        </div>
      </div>
    </div>
  );
};
