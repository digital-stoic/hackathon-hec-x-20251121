import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Building2,
  Handshake,
  FileCheck,
  Calendar,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Conseil = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-serif text-champagne mb-3">
            Conseil en Croissance Externe & Cession
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Accompagnement stratégique pour vos projets d'acquisition, de cession ou de
            transmission d'entreprise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Croissance Externe */}
          <div className="bg-white border border-border rounded-lg p-8 hover:shadow-premium transition-all">
            <TrendingUp className="w-12 h-12 text-champagne mb-6" />
            <h2 className="text-2xl font-serif text-champagne mb-4">
              Croissance Externe
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Accompagnement dans vos projets d'acquisition pour accélérer la croissance
              de votre entreprise
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-jade flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Identification et sélection de cibles stratégiques
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-jade flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Évaluation financière et due diligence
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-jade flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Négociation et structuration de l'opération
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-jade flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Accompagnement post-acquisition et intégration
                </span>
              </li>
            </ul>
            <Button className="w-full bg-champagne text-white hover:bg-champagne-muted">
              <Calendar className="w-4 h-4 mr-2" />
              Prendre rendez-vous
            </Button>
          </div>

          {/* Cession & Transmission */}
          <div className="bg-white border border-border rounded-lg p-8 hover:shadow-premium transition-all">
            <Building2 className="w-12 h-12 text-champagne mb-6" />
            <h2 className="text-2xl font-serif text-champagne mb-4">
              Cession & Transmission
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Optimisation de la valeur de votre entreprise et recherche d'acquéreurs
              qualifiés
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-jade flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Valorisation de votre entreprise et audit préalable
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-jade flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Recherche confidentielle d'acquéreurs stratégiques
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-jade flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Négociation et optimisation des conditions de cession
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-jade flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">
                  Accompagnement fiscal et juridique de la transaction
                </span>
              </li>
            </ul>
            <Button className="w-full bg-champagne text-white hover:bg-champagne-muted">
              <Calendar className="w-4 h-4 mr-2" />
              Prendre rendez-vous
            </Button>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif text-champagne text-center mb-12">
            Notre Processus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Diagnostic",
                description: "Analyse de votre situation et définition des objectifs",
                icon: FileCheck,
              },
              {
                step: "2",
                title: "Stratégie",
                description: "Élaboration d'une stratégie sur mesure",
                icon: TrendingUp,
              },
              {
                step: "3",
                title: "Exécution",
                description: "Mise en œuvre et négociations",
                icon: Handshake,
              },
              {
                step: "4",
                title: "Finalisation",
                description: "Closing et accompagnement post-transaction",
                icon: CheckCircle2,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white border border-border rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-champagne/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-champagne" />
                </div>
                <div className="text-sm font-mono text-champagne mb-2">
                  Étape {item.step}
                </div>
                <h3 className="text-lg font-serif text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-champagne/10 border border-champagne/30 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-serif text-champagne mb-4">
            Prêt à discuter de votre projet ?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Nos conseillers experts vous accompagnent dans toutes les phases de votre
            projet de croissance externe ou de cession
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button className="bg-champagne text-white hover:bg-champagne-muted h-12 px-8">
              <Calendar className="w-5 h-5 mr-2" />
              Prendre rendez-vous
            </Button>
            <Button
              variant="outline"
              className="border-champagne text-champagne hover:bg-champagne/10 h-12 px-8"
            >
              Télécharger la brochure
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Conseil;
