import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Home, Shield, Plane, TrendingUp, FileText, Calculator } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AIAssistant } from "@/components/AIAssistant";

const structurationCards = [
  {
    title: "Optimisation rémunération / dividendes",
    description: "Analyser le mix optimal entre salaire et dividendes",
    icon: TrendingUp,
  },
  {
    title: "Holding patrimoniale / animatrice",
    description: "Structure de détention et d'optimisation fiscale",
    icon: Building2,
  },
  {
    title: "Régime matrimonial",
    description: "Protection du conjoint et optimisation successorale",
    icon: Users,
  },
  {
    title: "Protection du conjoint",
    description: "Assurances et dispositifs de protection",
    icon: Shield,
  },
  {
    title: "Structure pré-exit",
    description: "Préparation optimale avant cession",
    icon: FileText,
  },
  {
    title: "Fiscalité titres (IR/IFI/PFU)",
    description: "Optimisation de la fiscalité des investissements",
    icon: Calculator,
  },
  {
    title: "Mobilité internationale",
    description: "Stratégies d'expatriation et impatriation",
    icon: Plane,
  },
];

const Structuration = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Structuration Juridique & Fiscale</h1>
          <p className="text-muted-foreground">Optimisez votre architecture patrimoniale</p>
        </div>
        <AIAssistant mode="legal" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {structurationCards.map((card, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card className="bg-gradient-card border-border p-6 shadow-card hover:shadow-premium transition-all duration-300 cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <card.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-foreground mb-2">{card.title}</h3>
                    <p className="text-xs text-muted-foreground">{card.description}</p>
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="bg-popover border-border max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-foreground">{card.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {card.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="current-situation">Situation actuelle</Label>
                  <Input id="current-situation" placeholder="Décrivez votre situation..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="objectives">Objectifs</Label>
                  <Input id="objectives" placeholder="Vos objectifs..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Horizon temporel</Label>
                  <Input id="timeline" placeholder="Court, moyen ou long terme" />
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 bg-gradient-primary">
                  Lancer une simulation
                </Button>
                <Button variant="outline" className="flex-1">
                  Parler à un conseiller
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      <Card className="bg-gradient-card border-border p-6 shadow-card">
        <h2 className="text-xl font-semibold text-foreground mb-4">Simulateur de Structure</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Analysez l'impact d'un changement de structure (holding, régime matrimonial, fiscalité)
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="space-y-2">
            <Label>Revenu annuel (€)</Label>
            <Input type="number" placeholder="250000" />
          </div>
          <div className="space-y-2">
            <Label>Type de structure</Label>
            <Input placeholder="SARL, SAS, Holding..." />
          </div>
          <div className="space-y-2">
            <Label>Régime fiscal</Label>
            <Input placeholder="IR, IS..." />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="bg-secondary border-border p-4">
            <h3 className="text-sm font-semibold text-foreground mb-3">Structure Actuelle</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Revenu net</span>
                <span className="font-semibold text-foreground">€145,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Charges fiscales</span>
                <span className="font-semibold text-destructive">€105,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Taux effectif</span>
                <span className="font-semibold text-foreground">42%</span>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-primary border-border p-4">
            <h3 className="text-sm font-semibold text-white mb-3">Structure Optimisée (Holding)</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/80">Revenu net</span>
                <span className="font-semibold text-white">€172,500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/80">Charges fiscales</span>
                <span className="font-semibold text-white">€77,500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/80">Taux effectif</span>
                <span className="font-semibold text-white">31%</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex justify-between text-sm">
                  <span className="text-white/80">Gain annuel</span>
                  <span className="font-bold text-accent">+€27,500</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Button className="w-full bg-gradient-accent text-accent-foreground">
          Obtenir une analyse détaillée
        </Button>
      </Card>
    </div>
  );
};

export default Structuration;