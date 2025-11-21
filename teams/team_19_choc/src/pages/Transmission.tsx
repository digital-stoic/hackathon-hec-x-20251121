import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Rocket, Building } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { AIAssistant } from "@/components/AIAssistant";

const COLORS = ['hsl(158, 64%, 42%)', 'hsl(45, 80%, 65%)', 'hsl(220, 18%, 40%)', 'hsl(200, 70%, 50%)', 'hsl(280, 60%, 60%)'];

const capTableData = [
  { name: 'Fondateur', value: 65 },
  { name: 'Co-fondateurs', value: 15 },
  { name: 'Investisseurs Série A', value: 12 },
  { name: 'BSPCE équipe', value: 8 },
];

const Transmission = () => {
  const [mode, setMode] = useState<"startup" | "familial">("startup");

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Transmission & Exit</h1>
          <p className="text-muted-foreground">Préparez votre stratégie de sortie ou transmission</p>
        </div>
        <AIAssistant mode="exit" />
      </div>

      <div className="flex gap-4 mb-6">
        <Button
          variant={mode === "startup" ? "default" : "outline"}
          className={mode === "startup" ? "bg-gradient-primary" : ""}
          onClick={() => setMode("startup")}
        >
          <Rocket className="mr-2 h-4 w-4" />
          Startup / Scale-up
        </Button>
        <Button
          variant={mode === "familial" ? "default" : "outline"}
          className={mode === "familial" ? "bg-gradient-primary" : ""}
          onClick={() => setMode("familial")}
        >
          <Building className="mr-2 h-4 w-4" />
          Entreprise Familiale
        </Button>
      </div>

      {mode === "startup" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-border p-6 shadow-card">
              <h2 className="text-lg font-semibold text-foreground mb-4">Cap Table Actuelle</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={capTableData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {capTableData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            <Card className="bg-gradient-card border-border p-6 shadow-card">
              <h2 className="text-lg font-semibold text-foreground mb-4">Simulateur de Dilution</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Levée de fonds prévue (€M)</Label>
                  <Input type="number" placeholder="10" />
                </div>
                <div className="space-y-2">
                  <Label>Valorisation pré-money (€M)</Label>
                  <Input type="number" placeholder="40" />
                </div>
                <div className="space-y-2">
                  <Label>Pool BSPCE (% post-dilution)</Label>
                  <Input type="number" placeholder="10" />
                </div>
                <Card className="bg-secondary border-border p-4 mt-4">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Après Série B</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Votre participation</span>
                      <span className="font-semibold text-foreground">52%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Dilution</span>
                      <span className="font-semibold text-destructive">-13%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Valeur de vos titres</span>
                      <span className="font-semibold text-primary">€26M</span>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          </div>

          <Card className="bg-gradient-card border-border p-6 shadow-card">
            <h2 className="text-lg font-semibold text-foreground mb-4">Optimisation BSPCE</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Card className="bg-secondary border-border p-4">
                <p className="text-xs text-muted-foreground mb-1">BSPCE distribués</p>
                <p className="text-2xl font-bold text-foreground">8%</p>
              </Card>
              <Card className="bg-secondary border-border p-4">
                <p className="text-xs text-muted-foreground mb-1">Valorisation actuelle</p>
                <p className="text-2xl font-bold text-foreground">€3.2M</p>
              </Card>
              <Card className="bg-secondary border-border p-4">
                <p className="text-xs text-muted-foreground mb-1">Potentiel exit</p>
                <p className="text-2xl font-bold text-primary">€8M</p>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground">
              Les BSPCE sont exonérés d'impôt sur le revenu lors de la cession si les conditions sont respectées. Taxation uniquement à la flat tax de 30% sur la plus-value.
            </p>
          </Card>

          <Card className="bg-gradient-card border-border p-6 shadow-card">
            <h2 className="text-lg font-semibold text-foreground mb-4">Projection Exit</h2>
            <Tabs defaultValue="trade" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="trade">Trade Sale</TabsTrigger>
                <TabsTrigger value="ipo">IPO</TabsTrigger>
                <TabsTrigger value="secondary">Secondary</TabsTrigger>
              </TabsList>
              <TabsContent value="trade" className="space-y-4 mt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Prix de vente (€M)</Label>
                    <Input type="number" placeholder="120" />
                  </div>
                  <div className="space-y-2">
                    <Label>Earn-out (%)</Label>
                    <Input type="number" placeholder="20" />
                  </div>
                </div>
                <Card className="bg-gradient-primary p-6">
                  <h3 className="text-white font-semibold mb-4">Simulation Net Après Fiscalité</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white/80">Prix total (votre part 52%)</span>
                      <span className="font-bold text-white">€62.4M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Immédiat (80%)</span>
                      <span className="font-bold text-white">€49.9M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Earn-out (20%)</span>
                      <span className="font-bold text-white">€12.5M</span>
                    </div>
                    <div className="border-t border-white/20 pt-3 mt-3">
                      <div className="flex justify-between">
                        <span className="text-white/80">Flat tax 30%</span>
                        <span className="font-bold text-white">-€18.7M</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span className="text-white font-semibold">Net après impôts</span>
                      <span className="font-bold text-accent">€43.7M</span>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="ipo" className="text-center py-8 text-muted-foreground">
                Simulation IPO disponible prochainement
              </TabsContent>
              <TabsContent value="secondary" className="text-center py-8 text-muted-foreground">
                Simulation vente secondaire disponible prochainement
              </TabsContent>
            </Tabs>
          </Card>

          <Card className="bg-gradient-accent border-border p-6 shadow-card">
            <h2 className="text-lg font-semibold text-accent-foreground mb-4">Stratégie Post-Exit</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-accent-foreground/20 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-accent-foreground">1</span>
                </div>
                <p className="text-sm text-accent-foreground">Créer une holding de réinvestissement pour différer l'impôt</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-accent-foreground/20 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-accent-foreground">2</span>
                </div>
                <p className="text-sm text-accent-foreground">Diversifier 60% du produit hors tech (immobilier, obligations, SCPI)</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-accent-foreground/20 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-accent-foreground">3</span>
                </div>
                <p className="text-sm text-accent-foreground">Réinvestir 20% dans des startups early-stage via fonds ou co-invest</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {mode === "familial" && (
        <div className="space-y-6">
          <Card className="bg-gradient-card border-border p-6 shadow-card">
            <h2 className="text-lg font-semibold text-foreground mb-4">Transmission Intergénérationnelle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Valeur de l'entreprise (€)</Label>
                <Input type="number" placeholder="5000000" />
              </div>
              <div className="space-y-2">
                <Label>Nombre d'héritiers</Label>
                <Input type="number" placeholder="2" />
              </div>
              <div className="space-y-2">
                <Label>Âge du dirigeant</Label>
                <Input type="number" placeholder="58" />
              </div>
              <div className="space-y-2">
                <Label>Horizon transmission</Label>
                <Input placeholder="5-10 ans" />
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-card border-border p-6 shadow-card">
            <h2 className="text-lg font-semibold text-foreground mb-4">Simulateur Pacte Dutreil</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Le Pacte Dutreil permet une exonération de 75% des droits de donation/succession sur la transmission d'entreprise
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-secondary border-border p-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">Sans Pacte Dutreil</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Valeur transmise</span>
                    <span className="font-semibold text-foreground">€5M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Droits (45%)</span>
                    <span className="font-semibold text-destructive">€2.25M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Net reçu</span>
                    <span className="font-semibold text-foreground">€2.75M</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-primary p-4">
                <h3 className="text-sm font-semibold text-white mb-3">Avec Pacte Dutreil</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">Valeur transmise</span>
                    <span className="font-semibold text-white">€5M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">Exonération 75%</span>
                    <span className="font-semibold text-accent">-€3.75M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">Droits (45% sur €1.25M)</span>
                    <span className="font-semibold text-white">€562K</span>
                  </div>
                  <div className="border-t border-white/20 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="text-white/80">Net reçu</span>
                      <span className="font-bold text-accent">€4.44M</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm pt-2">
                    <span className="text-white/80">Économie</span>
                    <span className="font-bold text-accent">+€1.69M</span>
                  </div>
                </div>
              </Card>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-border p-6 shadow-card">
              <h2 className="text-lg font-semibold text-foreground mb-4">Gouvernance Familiale</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Pacte d'actionnaires</span>
                  <span className="text-sm font-semibold text-primary">À mettre en place</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Conseil de famille</span>
                  <span className="text-sm font-semibold text-muted-foreground">Non défini</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Protocole de cession</span>
                  <span className="text-sm font-semibold text-muted-foreground">Non défini</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-muted-foreground">Formation héritiers</span>
                  <span className="text-sm font-semibold text-muted-foreground">Non commencée</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-card border-border p-6 shadow-card">
              <h2 className="text-lg font-semibold text-foreground mb-4">Holding de Reprise</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Créer une holding pour racheter progressivement les parts et optimiser la fiscalité
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Effet de levier</span>
                  <span className="font-semibold text-primary">Oui</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Optimisation IS</span>
                  <span className="font-semibold text-primary">Possible</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Intégration fiscale</span>
                  <span className="font-semibold text-primary">Recommandée</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transmission;