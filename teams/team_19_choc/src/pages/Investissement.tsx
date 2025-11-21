import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Home, Briefcase, AlertTriangle } from "lucide-react";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";
import { AIAssistant } from "@/components/AIAssistant";

const dependencyData = [
  { category: 'Entreprise', value: 68 },
  { category: 'Immobilier', value: 45 },
  { category: 'Liquidités', value: 85 },
  { category: 'Alternatifs', value: 30 },
  { category: 'Diversification', value: 40 },
];

const liquidInvestments = [
  { name: "ETF World", return: "7-9%", risk: "Modéré", liquidity: "Immédiate", allocation: "15%" },
  { name: "Obligations d'État", return: "3-4%", risk: "Faible", liquidity: "Immédiate", allocation: "10%" },
  { name: "Assurance-vie", return: "4-5%", risk: "Faible", liquidity: "7 jours", allocation: "20%" },
];

const alternativeInvestments = [
  { name: "SCPI Bureaux", return: "5-6%", risk: "Modéré", liquidity: "30 jours", allocation: "12%" },
  { name: "Dette Privée", return: "8-10%", risk: "Élevé", liquidity: "90 jours", allocation: "8%" },
  { name: "Immobilier Direct", return: "4-5%", risk: "Modéré", liquidity: "6-12 mois", allocation: "15%" },
];

const privateMarkets = [
  { name: "Venture Capital", return: "15-25%", risk: "Très élevé", liquidity: "5-10 ans", allocation: "5%" },
  { name: "Private Equity", return: "12-18%", risk: "Élevé", liquidity: "5-7 ans", allocation: "8%" },
  { name: "Co-investissement", return: "10-20%", risk: "Élevé", liquidity: "3-5 ans", allocation: "7%" },
];

const Investissement = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Investissement & Diversification</h1>
          <p className="text-muted-foreground">Réduisez votre dépendance et optimisez vos rendements</p>
        </div>
        <AIAssistant mode="patrimony" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card border-border p-6 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-semibold text-foreground">Dépendance à l'Entreprise</h2>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-muted-foreground">Patrimoine lié à l'activité</span>
              <span className="text-2xl font-bold text-accent">68%</span>
            </div>
            <Progress value={68} className="h-3" />
            <p className="text-xs text-muted-foreground mt-2">Recommandé: &lt; 50%</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart data={dependencyData}>
              <PolarGrid stroke="hsl(220, 18%, 22%)" />
              <PolarAngleAxis dataKey="category" stroke="hsl(210, 20%, 65%)" />
              <PolarRadiusAxis stroke="hsl(210, 20%, 65%)" />
              <Radar name="Exposition" dataKey="value" stroke="hsl(158, 64%, 42%)" fill="hsl(158, 64%, 42%)" fillOpacity={0.3} />
            </RadarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="bg-gradient-card border-border p-6 shadow-card">
          <h2 className="text-lg font-semibold text-foreground mb-4">Allocation Recommandée</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-foreground">Liquidités (35%)</span>
                <span className="text-sm text-primary">+15%</span>
              </div>
              <Progress value={35} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-foreground">Alternatifs (25%)</span>
                <span className="text-sm text-primary">+10%</span>
              </div>
              <Progress value={25} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-foreground">Private Markets (15%)</span>
                <span className="text-sm text-primary">+8%</span>
              </div>
              <Progress value={15} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-foreground">Entreprise (25%)</span>
                <span className="text-sm text-destructive">-33%</span>
              </div>
              <Progress value={25} className="h-2" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Cette allocation permettrait de réduire votre dépendance de 68% à 25% tout en maintenant un rendement attendu de 7.5%/an.
          </p>
        </Card>
      </div>

      <Card className="bg-gradient-card border-border p-6 shadow-card">
        <Tabs defaultValue="liquid" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="liquid">Liquidités</TabsTrigger>
            <TabsTrigger value="alternative">Alternatifs</TabsTrigger>
            <TabsTrigger value="private">Private Markets</TabsTrigger>
          </TabsList>

          <TabsContent value="liquid" className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Investissements Liquides</h3>
            </div>
            {liquidInvestments.map((inv, idx) => (
              <Card key={idx} className="bg-secondary border-border p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{inv.name}</h4>
                    <p className="text-sm text-muted-foreground">Allocation recommandée: {inv.allocation}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground text-xs">Rendement</p>
                    <p className="font-semibold text-primary">{inv.return}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Risque</p>
                    <p className="font-semibold text-foreground">{inv.risk}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Liquidité</p>
                    <p className="font-semibold text-foreground">{inv.liquidity}</p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="alternative" className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Investissements Alternatifs</h3>
            </div>
            {alternativeInvestments.map((inv, idx) => (
              <Card key={idx} className="bg-secondary border-border p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{inv.name}</h4>
                    <p className="text-sm text-muted-foreground">Allocation recommandée: {inv.allocation}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground text-xs">Rendement</p>
                    <p className="font-semibold text-primary">{inv.return}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Risque</p>
                    <p className="font-semibold text-foreground">{inv.risk}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Liquidité</p>
                    <p className="font-semibold text-foreground">{inv.liquidity}</p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="private" className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Private Markets</h3>
            </div>
            {privateMarkets.map((inv, idx) => (
              <Card key={idx} className="bg-secondary border-border p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{inv.name}</h4>
                    <p className="text-sm text-muted-foreground">Allocation recommandée: {inv.allocation}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground text-xs">Rendement</p>
                    <p className="font-semibold text-primary">{inv.return}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Risque</p>
                    <p className="font-semibold text-foreground">{inv.risk}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Liquidité</p>
                    <p className="font-semibold text-foreground">{inv.liquidity}</p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Investissement;