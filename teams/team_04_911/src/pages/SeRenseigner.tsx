import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const SeRenseigner = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Se Renseigner
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in opacity-90">
            Toutes les informations dont vous avez besoin
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Ressources et documentation
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <FileText className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Brochures</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Téléchargez nos brochures détaillées sur nos services et produits financiers
              </p>
              <Button variant="outline" className="w-full">
                Télécharger
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <FileText className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Guides pratiques</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Consultez nos guides pour mieux comprendre vos options d'investissement
              </p>
              <Button variant="outline" className="w-full">
                Consulter
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <FileText className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">FAQ</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Trouvez rapidement des réponses aux questions les plus fréquentes
              </p>
              <Button variant="outline" className="w-full">
                Voir la FAQ
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Nous contacter
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Par téléphone</h3>
                  <p className="text-muted-foreground mb-2">+33 1 23 45 67 89</p>
                  <p className="text-sm text-muted-foreground">Lun - Ven : 9h - 18h</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Par email</h3>
                  <p className="text-muted-foreground mb-2">contact@bnp.fr</p>
                  <p className="text-sm text-muted-foreground">Réponse sous 24h</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Nos agences</h3>
                  <p className="text-muted-foreground mb-2">Paris, Lyon, Marseille</p>
                  <p className="text-sm text-muted-foreground">+150 agences en France</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Prendre rendez-vous</h3>
                  <p className="text-muted-foreground mb-4">Consultez un conseiller dédié</p>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Réserver un créneau
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Questions fréquentes
          </h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                Comment ouvrir un compte chez BNP ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                L'ouverture d'un compte est simple et rapide. Prenez rendez-vous avec l'un de nos 
                conseillers ou remplissez le formulaire en ligne. Vous aurez besoin d'une pièce 
                d'identité et d'un justificatif de domicile.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                Quels sont les frais de gestion ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nos frais varient selon le type de compte et les services souscrits. Consultez 
                notre grille tarifaire ou contactez un conseiller pour une estimation personnalisée.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                Comment prendre rendez-vous avec un conseiller ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Vous pouvez prendre rendez-vous directement en ligne, par téléphone au 01 23 45 67 89, 
                ou en vous rendant dans l'une de nos agences.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeRenseigner;
