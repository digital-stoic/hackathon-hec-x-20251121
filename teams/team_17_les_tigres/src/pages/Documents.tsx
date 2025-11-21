import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import ProfileCompletionCard from "@/components/ProfileCompletionCard";
import {
  Search,
  FolderOpen,
  FileText,
  Upload,
  Download,
  Eye,
  Calendar,
  User,
} from "lucide-react";

interface Document {
  id: string;
  nom: string;
  type: string;
  taille: string;
  date: string;
  partage_avec: string;
  statut: "nouveau" | "lu" | "archive";
}

interface Dossier {
  id: string;
  nom: string;
  categorie: string;
  couleur: string;
  nbDocuments: number;
  documents: Document[];
}

const mockDossiers: Dossier[] = [
  {
    id: "1",
    nom: "Cabinet Lefèvre & Associés",
    categorie: "Avocat Fiscaliste",
    couleur: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    nbDocuments: 8,
    documents: [
      {
        id: "d1",
        nom: "Optimisation fiscale 2024.pdf",
        type: "PDF",
        taille: "2.4 MB",
        date: "15 déc. 2024",
        partage_avec: "Me. Lefèvre",
        statut: "nouveau",
      },
      {
        id: "d2",
        nom: "Bilan restructuration.pdf",
        type: "PDF",
        taille: "1.8 MB",
        date: "10 déc. 2024",
        partage_avec: "Me. Lefèvre",
        statut: "lu",
      },
    ],
  },
  {
    id: "2",
    nom: "Étude Notariale Dupont",
    categorie: "Notaire",
    couleur: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
    nbDocuments: 5,
    documents: [
      {
        id: "d3",
        nom: "Acte de donation.pdf",
        type: "PDF",
        taille: "3.2 MB",
        date: "18 déc. 2024",
        partage_avec: "Me. Dupont",
        statut: "nouveau",
      },
      {
        id: "d4",
        nom: "Testament olographe.pdf",
        type: "PDF",
        taille: "890 KB",
        date: "05 déc. 2024",
        partage_avec: "Me. Dupont",
        statut: "lu",
      },
    ],
  },
  {
    id: "3",
    nom: "Cabinet Expertise Conseil",
    categorie: "Expert-Comptable",
    couleur: "bg-green-500/10 text-green-700 dark:text-green-400",
    nbDocuments: 12,
    documents: [
      {
        id: "d5",
        nom: "Liasse fiscale 2024.pdf",
        type: "PDF",
        taille: "4.1 MB",
        date: "20 déc. 2024",
        partage_avec: "M. Bernard",
        statut: "nouveau",
      },
      {
        id: "d6",
        nom: "Déclaration TVA T4.xlsx",
        type: "Excel",
        taille: "245 KB",
        date: "12 déc. 2024",
        partage_avec: "M. Bernard",
        statut: "lu",
      },
    ],
  },
  {
    id: "4",
    nom: "Banque Patrimoine & Stratégie",
    categorie: "Ingénieur Patrimonial",
    couleur: "bg-champagne/20 text-champagne-dark dark:text-champagne",
    nbDocuments: 6,
    documents: [
      {
        id: "d7",
        nom: "Stratégie allocation 2025.pdf",
        type: "PDF",
        taille: "1.5 MB",
        date: "22 déc. 2024",
        partage_avec: "Mme. Laurent",
        statut: "nouveau",
      },
      {
        id: "d8",
        nom: "Rapport performance Q4.pdf",
        type: "PDF",
        taille: "2.7 MB",
        date: "18 déc. 2024",
        partage_avec: "Mme. Laurent",
        statut: "lu",
      },
    ],
  },
];

const Documents = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDossier, setSelectedDossier] = useState<Dossier | null>(null);

  const filteredDossiers = mockDossiers.filter(
    (dossier) =>
      dossier.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dossier.categorie.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatutBadge = (statut: Document["statut"]) => {
    switch (statut) {
      case "nouveau":
        return <Badge className="bg-red-500/10 text-red-700 dark:text-red-400">{t('documents.new')}</Badge>;
      case "lu":
        return <Badge variant="secondary">{t('documents.read')}</Badge>;
      case "archive":
        return <Badge variant="outline">{t('documents.archived')}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-foreground mb-2">
            {t('documents.title')}
          </h1>
          <p className="text-muted-foreground">
            {t('documents.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <ProfileCompletionCard />
            
            <Card className="p-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder={t('documents.search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>

              <Button className="w-full mb-4" variant="default">
                <Upload className="w-4 h-4 mr-2" />
                {t('documents.upload')}
              </Button>

              <div className="space-y-2">
                {filteredDossiers.map((dossier) => (
                  <button
                    key={dossier.id}
                    onClick={() => setSelectedDossier(dossier)}
                    className={`w-full text-left p-4 rounded-lg border transition-all hover:border-champagne ${
                      selectedDossier?.id === dossier.id
                        ? "border-champagne bg-champagne/5"
                        : "border-border"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${dossier.couleur}`}>
                        <FolderOpen className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-foreground mb-1 truncate">
                          {dossier.nom}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {dossier.categorie}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <FileText className="w-3 h-3" />
                          <span>{dossier.nbDocuments} {t('documents.documents')}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {selectedDossier ? (
              <Card className="p-6">
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-serif text-foreground mb-2">
                        {selectedDossier.nom}
                      </h2>
                      <p className="text-muted-foreground">
                        {selectedDossier.categorie}
                      </p>
                    </div>
                    <Badge variant="secondary">
                      {selectedDossier.nbDocuments} {t('documents.documents')}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  {selectedDossier.documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="p-4 rounded-lg border border-border hover:border-champagne transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="p-2 rounded-lg bg-muted">
                            <FileText className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-foreground mb-1 truncate">
                              {doc.nom}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                {doc.partage_avec}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {doc.date}
                              </span>
                              <span>{doc.taille}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatutBadge(doc.statut)}
                          <Button
                            variant="ghost"
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ) : (
              <Card className="p-12 text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <FolderOpen className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-serif text-foreground mb-2">
                    {t('documents.select')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('documents.select.desc')}
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Documents;
