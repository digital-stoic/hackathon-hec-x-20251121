import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, FileText } from "lucide-react";

const steps = [
  { id: 1, name: "Assets & Structure", icon: Circle },
  { id: 2, name: "Risks & Governance", icon: Circle },
  { id: 3, name: "Projections", icon: Circle },
];

const Diagnostic = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Diagnostic Patrimonial</h1>
        <p className="text-muted-foreground">Analyse complète en 3 étapes</p>
      </div>

      <Card className="bg-gradient-card border-border p-6 shadow-card">
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, idx) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  currentStep >= step.id 
                    ? 'bg-gradient-primary text-white' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {currentStep > step.id ? <CheckCircle2 className="h-6 w-6" /> : step.id}
                </div>
                <p className="text-xs mt-2 text-center max-w-24">{step.name}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className={`flex-1 h-1 mx-4 ${
                  currentStep > step.id ? 'bg-primary' : 'bg-muted'
                }`} />
              )}
            </div>
          ))}
        </div>

        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Étape 1: Assets & Structure</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="personal-assets">Actifs Personnels (€)</Label>
                <Input id="personal-assets" type="number" placeholder="500000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business-value">Valeur Entreprise (€)</Label>
                <Input id="business-value" type="number" placeholder="3000000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shareholding">Participation (%)</Label>
                <Input id="shareholding" type="number" placeholder="75" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="real-estate">Immobilier (€)</Label>
                <Input id="real-estate" type="number" placeholder="1200000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="holding">Structure Holding</Label>
                <Input id="holding" placeholder="Oui / Non / En cours" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="liquid-assets">Actifs Liquides (€)</Label>
                <Input id="liquid-assets" type="number" placeholder="800000" />
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Étape 2: Risks & Governance</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="marital">Régime Matrimonial</Label>
                <Input id="marital" placeholder="Séparation de biens, Communauté..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dependence">Dépendance Entreprise (%)</Label>
                <Input id="dependence" type="number" placeholder="70" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="insurance">Assurance Décès</Label>
                <Input id="insurance" placeholder="Montant et type" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="succession">Plan de Succession</Label>
                <Input id="succession" placeholder="Oui / Non / En cours" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vulnerabilities">Vulnérabilités Cash-Flow</Label>
                <Input id="vulnerabilities" placeholder="Principales sources de risque" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="heirs">Nombre d'Héritiers</Label>
                <Input id="heirs" type="number" placeholder="2" />
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Étape 3: Projections</h2>
            
            <div className="space-y-4">
              <Card className="bg-secondary border-border p-4">
                <h3 className="text-sm font-semibold text-foreground mb-2">Simulation à 5 ans</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Patrimoine actuel</span>
                    <span className="text-sm font-semibold text-foreground">€8.5M</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Projection 2029</span>
                    <span className="text-sm font-semibold text-primary">€10.5M</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-secondary border-border p-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">Recommandations</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Créer une holding patrimoniale pour optimiser la fiscalité</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Diversifier 15% du patrimoine hors de l'entreprise</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Réviser le régime matrimonial pour protéger le conjoint</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Mettre en place une assurance homme-clé</span>
                  </li>
                </ul>
              </Card>

              <Button className="w-full bg-gradient-accent text-accent-foreground">
                <FileText className="mr-2 h-4 w-4" />
                Générer le rapport PDF complet
              </Button>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
          >
            Précédent
          </Button>
          <Button
            onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
            disabled={currentStep === 3}
            className="bg-gradient-primary"
          >
            Suivant
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Diagnostic;