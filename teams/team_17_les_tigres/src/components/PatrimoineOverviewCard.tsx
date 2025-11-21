import { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";
import { portefeuilleLignes } from "@/data/mockData";
import { CorrelationAnalysisDialog } from "./CorrelationAnalysisDialog";

export const PatrimoineOverviewCard = () => {
  const [showCorrelationDialog, setShowCorrelationDialog] = useState(false);
  const chartData = portefeuilleLignes.map((ligne) => ({
    name: ligne.nom,
    value: ligne.allocation,
    color: ligne.color,
  }));

  const totalValue = portefeuilleLignes.reduce((sum, l) => sum + l.valeur, 0);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const typeGroups = portefeuilleLignes.reduce((acc, ligne) => {
    const existing = acc.find((g) => g.type === ligne.type);
    if (existing) {
      existing.valeur += ligne.valeur;
      existing.allocation += ligne.allocation;
    } else {
      acc.push({
        type: ligne.type,
        valeur: ligne.valeur,
        allocation: ligne.allocation,
      });
    }
    return acc;
  }, [] as Array<{ type: string; valeur: number; allocation: number }>);

  const typeLabels: Record<string, string> = {
    immobilier: "Immobilier",
    action: "Actions",
    crypto: "Crypto",
    liquidite: "Liquidités",
    equity: "Equity",
  };

  return (
    <Card className="glass-card hover-lift p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-serif text-foreground mb-1">
          Répartition du Patrimoine
        </h2>
        <p className="text-sm text-muted-foreground">
          Diversification par classe d'actifs
        </p>
      </div>

      <div className="relative h-[280px] mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={110}
              paddingAngle={2}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-xs text-muted-foreground mb-1">Total</p>
          <p className="text-2xl font-mono font-bold text-champagne">
            {formatCurrency(totalValue)}
          </p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {typeGroups
          .sort((a, b) => b.allocation - a.allocation)
          .map((group) => (
            <div
              key={group.type}
              className="flex items-center justify-between py-2 border-b border-border/30"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor:
                      portefeuilleLignes.find((l) => l.type === group.type)
                        ?.color || "currentColor",
                  }}
                />
                <span className="text-sm text-foreground">
                  {typeLabels[group.type]}
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm font-mono text-champagne">
                  {group.allocation.toFixed(1)}%
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatCurrency(group.valeur)}
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="pt-4 border-t border-border/50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">
            Corrélation portefeuille
          </span>
          <span className="text-sm font-mono text-foreground">0.42</span>
        </div>
        <button 
          onClick={() => setShowCorrelationDialog(true)}
          className="w-full mt-3 text-sm text-champagne hover:text-champagne-muted transition-colors flex items-center justify-center gap-2 group"
        >
          Analyser les corrélations
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </div>

      <CorrelationAnalysisDialog 
        open={showCorrelationDialog}
        onOpenChange={setShowCorrelationDialog}
      />
    </Card>
  );
};
