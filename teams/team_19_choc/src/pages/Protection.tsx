import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Briefcase, Users, AlertTriangle, CheckCircle2 } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const protectionCards = [
  { title: "Assurance décès", icon: Heart, status: "active", coverage: "€2.5M" },
  { title: "Assurance invalidité", icon: Shield, status: "partial", coverage: "€500K" },
  { title: "Assurance homme-clé", icon: Briefcase, status: "missing", coverage: "—" },
  { title: "Prévoyance dirigeant", icon: Users, status: "active", coverage: "€180K/an" },
  { title: "Protection conjoint", icon: Heart, status: "partial", coverage: "€800K" },
  { title: "Garantie prêts", icon: Shield, status: "active", coverage: "€1.2M" },
];

const stressTestData = [
  {
    scenario: "Actuel",
    patrimoine: 8500,
    revenusAnnuels: 250,
  },
  {
    scenario: "Décès",
    patrimoine: 6200,
    revenusAnnuels: 120,
  },
  {
    scenario: "Invalidité",
    patrimoine: 7800,
    revenusAnnuels: 80,
  },
  {
    scenario: "Avec assurances",
    patrimoine: 8200,
    revenusAnnuels: 220,
  },
];

const Protection = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Protection du Dirigeant</h1>
        <p className="text-muted-foreground">Sécurisez votre patrimoine et votre famille</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {protectionCards.map((card, idx) => (
          <Card key={idx} className="bg-gradient-card border-border p-6 shadow-card hover:shadow-premium transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <card.icon className="h-6 w-6 text-primary" />
              </div>
              {card.status === "active" && (
                <CheckCircle2 className="h-5 w-5 text-primary" />
              )}
              {card.status === "partial" && (
                <AlertTriangle className="h-5 w-5 text-accent" />
              )}
              {card.status === "missing" && (
                <AlertTriangle className="h-5 w-5 text-destructive" />
              )}
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-2">{card.title}</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-foreground">{card.coverage}</span>
              {card.status === "active" && (
                <span className="text-xs text-primary">Active</span>
              )}
              {card.status === "partial" && (
                <span className="text-xs text-accent">À améliorer</span>
              )}
              {card.status === "missing" && (
                <span className="text-xs text-destructive">Manquant</span>
              )}
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-card border-border p-6 shadow-card">
        <div className="flex items-center gap-2 mb-6">
          <AlertTriangle className="h-6 w-6 text-accent" />
          <h2 className="text-xl font-semibold text-foreground">Stress Test Patrimonial</h2>
        </div>
        
        <p className="text-sm text-muted-foreground mb-6">
          Simulation de l'évolution de votre patrimoine en cas d'événements critiques
        </p>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={stressTestData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 18%, 22%)" />
            <XAxis dataKey="scenario" stroke="hsl(210, 20%, 65%)" />
            <YAxis stroke="hsl(210, 20%, 65%)" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(220, 22%, 12%)', 
                border: '1px solid hsl(220, 18%, 22%)',
                borderRadius: '8px'
              }} 
            />
            <Legend />
            <Bar dataKey="patrimoine" fill="hsl(158, 64%, 42%)" name="Patrimoine (k€)" radius={[8, 8, 0, 0]} />
            <Bar dataKey="revenusAnnuels" fill="hsl(45, 80%, 65%)" name="Revenus annuels (k€)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Card className="bg-destructive/10 border-destructive/20 p-4">
            <h3 className="text-sm font-semibold text-foreground mb-2">Scénario Décès</h3>
            <p className="text-xs text-muted-foreground mb-2">Sans assurance complémentaire</p>
            <p className="text-2xl font-bold text-destructive">-27%</p>
            <p className="text-xs text-muted-foreground mt-1">Perte patrimoniale</p>
          </Card>

          <Card className="bg-accent/10 border-accent/20 p-4">
            <h3 className="text-sm font-semibold text-foreground mb-2">Scénario Invalidité</h3>
            <p className="text-xs text-muted-foreground mb-2">Protection actuelle</p>
            <p className="text-2xl font-bold text-accent">-68%</p>
            <p className="text-xs text-muted-foreground mt-1">Perte de revenus</p>
          </Card>

          <Card className="bg-primary/10 border-primary/20 p-4">
            <h3 className="text-sm font-semibold text-foreground mb-2">Avec Assurances</h3>
            <p className="text-xs text-muted-foreground mb-2">Protection complète recommandée</p>
            <p className="text-2xl font-bold text-primary">96%</p>
            <p className="text-xs text-muted-foreground mt-1">Patrimoine préservé</p>
          </Card>
        </div>
      </Card>

      <Card className="bg-gradient-accent border-border p-6 shadow-card">
        <h3 className="text-lg font-semibold text-accent-foreground mb-4">Recommandations Prioritaires</h3>
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-accent-foreground/20 flex items-center justify-center mt-0.5">
              <span className="text-xs font-bold text-accent-foreground">1</span>
            </div>
            <div>
              <p className="font-medium text-accent-foreground">Mettre en place une assurance homme-clé</p>
              <p className="text-sm text-accent-foreground/80">Capital recommandé: €3M pour couvrir 2 ans d'activité</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-accent-foreground/20 flex items-center justify-center mt-0.5">
              <span className="text-xs font-bold text-accent-foreground">2</span>
            </div>
            <div>
              <p className="font-medium text-accent-foreground">Renforcer l'assurance invalidité</p>
              <p className="text-sm text-accent-foreground/80">Passer de €500K à €1.2M pour maintenir le niveau de vie</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 rounded-full bg-accent-foreground/20 flex items-center justify-center mt-0.5">
              <span className="text-xs font-bold text-accent-foreground">3</span>
            </div>
            <div>
              <p className="font-medium text-accent-foreground">Améliorer la protection du conjoint</p>
              <p className="text-sm text-accent-foreground/80">Capital décès conjoint: passer à €1.5M</p>
            </div>
          </div>
        </div>
        <Button className="w-full bg-background/20 hover:bg-background/30 text-accent-foreground">
          Obtenir des devis personnalisés
        </Button>
      </Card>
    </div>
  );
};

export default Protection;