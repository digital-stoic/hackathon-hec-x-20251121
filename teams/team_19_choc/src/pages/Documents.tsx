import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, Search, Filter } from "lucide-react";

const documents = [
  { title: "Diagnostic Patrimonial 360° - 2024", date: "15 Mai 2024", category: "Diagnostic", size: "2.4 MB" },
  { title: "Simulation Structuration Holding", date: "10 Mai 2024", category: "Structuration", size: "1.8 MB" },
  { title: "Analyse Exit Strategy Tech", date: "3 Mai 2024", category: "Exit", size: "3.1 MB" },
  { title: "Rapport Protection Dirigeant", date: "28 Avr 2024", category: "Protection", size: "1.5 MB" },
  { title: "Stratégie Investissement 2024-2029", date: "22 Avr 2024", category: "Investissement", size: "2.9 MB" },
  { title: "Template Pacte Dutreil", date: "15 Avr 2024", category: "Transmission", size: "856 KB" },
  { title: "Guide Optimisation Fiscale CEO", date: "10 Avr 2024", category: "Structuration", size: "4.2 MB" },
  { title: "Simulation Cap Table Post-Série B", date: "5 Avr 2024", category: "Exit", size: "1.2 MB" },
];

const Documents = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Documents & Rapports</h1>
        <p className="text-muted-foreground">Accédez à tous vos documents personnalisés</p>
      </div>

      <Card className="bg-gradient-card border-border p-6 shadow-card">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Rechercher un document..." 
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtrer
          </Button>
        </div>

        <div className="space-y-3">
          {documents.map((doc, idx) => (
            <Card key={idx} className="bg-secondary border-border p-4 hover:shadow-premium transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{doc.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{doc.date}</span>
                      <span>•</span>
                      <span className="px-2 py-0.5 rounded bg-primary/20 text-primary">{doc.category}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" className="gap-2 bg-gradient-primary">
                  <Download className="h-4 w-4" />
                  Télécharger
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-card border-border p-6 shadow-card">
          <h3 className="text-sm font-semibold text-foreground mb-2">Total Documents</h3>
          <p className="text-3xl font-bold text-foreground">8</p>
        </Card>
        <Card className="bg-gradient-card border-border p-6 shadow-card">
          <h3 className="text-sm font-semibold text-foreground mb-2">Documents ce mois</h3>
          <p className="text-3xl font-bold text-primary">5</p>
        </Card>
        <Card className="bg-gradient-card border-border p-6 shadow-card">
          <h3 className="text-sm font-semibold text-foreground mb-2">Espace utilisé</h3>
          <p className="text-3xl font-bold text-foreground">19.9 MB</p>
        </Card>
      </div>
    </div>
  );
};

export default Documents;