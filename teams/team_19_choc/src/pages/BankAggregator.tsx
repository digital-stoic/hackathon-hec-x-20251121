import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, ArrowDownUp, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import sgLogo from "@/assets/sg-logo.png";
import revolutLogo from "@/assets/revolut-logo.png";

const externalBanks = [
  {
    name: "Société Générale",
    logo: sgLogo,
    accounts: [
      { type: "Compte Courant", balance: 125000, currency: "EUR" },
      { type: "Livret A", balance: 22950, currency: "EUR" },
      { type: "PEA", balance: 85000, currency: "EUR" }
    ],
    lastSync: "Il y a 2 heures"
  },
  {
    name: "Revolut",
    logo: revolutLogo,
    accounts: [
      { type: "Business Account", balance: 45000, currency: "EUR" },
      { type: "Personal Account", balance: 12500, currency: "EUR" }
    ],
    lastSync: "Il y a 5 heures"
  }
];

const recommendations = [
  {
    title: "Optimisation Liquidités SG",
    description: "Votre Livret A (22 950€) pourrait être réinvesti dans des produits plus performants",
    impact: "+€1,150/an",
    priority: "high"
  },
  {
    title: "Consolidation Multi-Banques",
    description: "Réduisez vos frais bancaires en consolidant vos comptes professionnels",
    impact: "€840/an",
    priority: "medium"
  },
  {
    title: "Diversification PEA",
    description: "Votre PEA SG pourrait bénéficier d'une meilleure allocation sectorielle",
    impact: "+1.2% rendement",
    priority: "medium"
  }
];

const BankAggregator = () => {
  const totalExternal = externalBanks.reduce((sum, bank) => 
    sum + bank.accounts.reduce((acc, account) => acc + account.balance, 0), 0
  );

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Agrégateur Bancaire</h1>
        <p className="text-muted-foreground">Visualisez et gérez vos comptes externes</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-card border-border p-6 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Patrimoine Externe</h2>
          </div>
          <div className="mb-2">
            <span className="text-3xl font-bold text-foreground">
              {totalExternal.toLocaleString('fr-FR')} €
            </span>
          </div>
          <p className="text-sm text-muted-foreground">Actifs dans d'autres établissements</p>
        </Card>

        <Card className="bg-gradient-card border-border p-6 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-semibold text-foreground">Opportunités</h2>
          </div>
          <div className="mb-2">
            <span className="text-3xl font-bold text-accent">3</span>
          </div>
          <p className="text-sm text-muted-foreground">Recommandations d'optimisation</p>
        </Card>

        <Card className="bg-gradient-card border-border p-6 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <ArrowDownUp className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Dernière Synchro</h2>
          </div>
          <div className="mb-2">
            <span className="text-xl font-semibold text-foreground">Il y a 2h</span>
          </div>
          <Button variant="outline" size="sm" className="mt-2">
            Synchroniser maintenant
          </Button>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {externalBanks.map((bank, idx) => (
          <Card key={idx} className="bg-gradient-card border-border p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src={bank.logo} alt={bank.name} className="h-8 w-auto" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{bank.name}</h3>
                  <p className="text-xs text-muted-foreground">{bank.lastSync}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">Gérer</Button>
            </div>
            
            <div className="space-y-3">
              {bank.accounts.map((account, accIdx) => (
                <div key={accIdx} className="bg-secondary/50 border border-border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">{account.type}</span>
                    <span className="text-sm font-bold text-primary">
                      {account.balance.toLocaleString('fr-FR')} {account.currency}
                    </span>
                  </div>
                  <Progress value={65} className="h-1" />
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total</span>
                <span className="text-lg font-bold text-foreground">
                  {bank.accounts.reduce((sum, acc) => sum + acc.balance, 0).toLocaleString('fr-FR')} €
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-card border-border p-6 shadow-card">
        <div className="flex items-center gap-2 mb-6">
          <AlertCircle className="h-5 w-5 text-accent" />
          <h2 className="text-xl font-semibold text-foreground">Recommandations BIVWAK+</h2>
        </div>

        <div className="space-y-4">
          {recommendations.map((rec, idx) => (
            <Card key={idx} className="bg-secondary border-border p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-foreground">{rec.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${
                      rec.priority === 'high' 
                        ? 'bg-accent/20 text-accent' 
                        : 'bg-primary/20 text-primary'
                    }`}>
                      {rec.priority === 'high' ? 'Priorité haute' : 'Priorité moyenne'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{rec.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-primary">Impact: {rec.impact}</span>
                  </div>
                </div>
                <Button size="sm" className="ml-4">Appliquer</Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default BankAggregator;
