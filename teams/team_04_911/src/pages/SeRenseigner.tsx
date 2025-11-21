import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const SeRenseigner = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Vos questions sur la gestion d'un nouveau patrimoine
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in opacity-90">
            Réponses claires aux interrogations des nouveaux clients fortunés
          </p>
        </div>
      </section>

      {/* Main FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Que faire quand plusieurs millions arrivent sur mon compte ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Première étape : ne prenez aucune décision d'investissement précipitée. Placez temporairement les fonds sur un compte 
                rémunéré sécurisé (livret bancaire ou compte à terme court). Ensuite, consultez rapidement trois professionnels : 
                un banquier privé, un fiscaliste et un notaire. Ils vous aideront à élaborer une stratégie patrimoniale complète 
                en fonction de votre situation familiale, fiscale et de vos objectifs de vie.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Comment éviter les erreurs quand on débute dans la gestion de patrimoine ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Les erreurs les plus coûteuses : surinvestir dans un seul actif (immobilier ou actions), négliger l'optimisation fiscale, 
                suivre des conseils non professionnels, et prendre des décisions sous pression émotionnelle. Un accompagnement expert 
                dès le départ vous évite ces pièges. Diversification, horizon de placement, gestion du risque : tout se construit 
                méthodiquement avec un professionnel de confiance.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Quelle fiscalité après un héritage important ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Un héritage peut déclencher plusieurs obligations fiscales : droits de succession (variant selon le lien de parenté), 
                Impôt sur la Fortune Immobilière (IFI) si le patrimoine dépasse 1,3M€, et fiscalité sur les revenus générés par le patrimoine 
                (loyers, dividendes, intérêts). Une optimisation légale et anticipée (donations, démembrement, assurance-vie) peut réduire 
                considérablement la charge fiscale globale. Un audit patrimonial personnalisé est indispensable.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Comment investir après un exit entrepreneurial ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Après la vente de votre entreprise, trois priorités : diversifier immédiatement (ne pas tout réinvestir dans une seule classe d'actifs), 
                optimiser la fiscalité de la plus-value (apport-cession, holding, réinvestissement), et définir votre stratégie long terme. 
                Les entrepreneurs réinvestissent souvent dans l'immobilier, le private equity, ou des fonds diversifiés. Un banquier privé 
                spécialisé dans les exits vous accompagne dans chaque étape.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Quelle banque privée pour exit entrepreneurs en Europe ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Choisissez une banque privée avec une présence européenne solide (Paris, Genève, Luxembourg, Bruxelles), une expertise 
                reconnue dans l'accompagnement des entrepreneurs (structuration holding, optimisation fiscale internationale), et une gamme 
                complète de services (gestion de patrimoine, family office, philanthropie). BNP Paribas Banque Privée, leader européen, 
                accompagne chaque année des centaines d'entrepreneurs dans leur transition post-exit.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Comment protéger son argent après un gain exceptionnel ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Protection signifie diversification, sécurisation juridique et optimisation fiscale. Diversifiez entre classes d'actifs 
                (immobilier, actions, obligations, private equity), juridictions (France, Luxembourg, Suisse selon votre situation), 
                et structures (compte personnel, holding, assurance-vie, fondation). Un banquier privé élabore avec vous une architecture 
                patrimoniale sur mesure qui protège votre capital des aléas économiques, juridiques et fiscaux.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Quel montant minimum pour accéder à la banque privée ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Chez BNP Paribas Banque Privée, le seuil d'entrée se situe généralement autour de 500 000€ d'actifs financiers. 
                Cependant, pour les entrepreneurs en phase de croissance ou les jeunes dirigeants à fort potentiel, des solutions 
                d'accompagnement peuvent être proposées dès 250 000€. L'essentiel est d'avoir un besoin réel d'expertise patrimoniale 
                et de conseil personnalisé.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Comment transmettre son patrimoine sans perdre d'argent ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                La transmission anticipée est la clé. Donations régulières (avec abattements renouvelables tous les 15 ans), démembrement 
                de propriété (nue-propriété aux enfants, usufruit aux parents), assurance-vie (hors succession jusqu'à 152 500€ par bénéficiaire), 
                et pacte Dutreil pour les entreprises familiales : les outils sont nombreux. Un notaire et un banquier privé coordonnent 
                cette stratégie pour minimiser les droits de succession tout en préservant votre niveau de vie.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Quels sont les risques d'une gestion de patrimoine non professionnelle ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Les risques principaux : surinvestissement dans un actif illiquide, sous-diversification, erreurs fiscales coûteuses, 
                mauvais timing de marché, et conflits familiaux lors de la transmission. Une gestion professionnelle apporte méthodologie, 
                accès aux meilleures opportunités d'investissement, optimisation fiscale continue, et coordination entre tous les experts 
                (notaire, fiscaliste, avocat). Le coût d'une erreur dépasse largement les frais de conseil.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Comment préparer la prochaine génération à gérer le patrimoine familial ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Éducation financière progressive, implication dans les décisions familiales, gouvernance structurée (conseil de famille, 
                charte familiale), et accompagnement par des professionnels. Chez BNP Paribas Banque Privée, nos programmes Next-Gen 
                permettent aux jeunes héritiers de comprendre les enjeux patrimoniaux, d'acquérir les compétences nécessaires, et de 
                s'impliquer graduellement dans la gestion et la gouvernance du patrimoine familial.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Faut-il investir dans l'immobilier après un gros héritage ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                L'immobilier peut être une composante d'un patrimoine diversifié, mais ne doit jamais représenter plus de 30-40% des actifs 
                totaux. Avantages : tangibilité, transmission, revenus locatifs. Inconvénients : illiquidité, frais élevés, fiscalité lourde. 
                Après un héritage, privilégiez d'abord la diversification : une partie en immobilier (résidence principale + investissement locatif), 
                une partie en marchés financiers, une partie en private equity ou fonds alternatifs. Votre banquier privé vous aide à trouver 
                le bon équilibre.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Pourquoi choisir BNP Paribas Banque Privée ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Leader européen avec 150 ans d'expertise, solidité financière AAA, présence dans 12 pays européens, et accompagnement 
                de plus de 200 000 clients fortunés. Nous combinons l'expertise d'une grande banque internationale (accès aux meilleures 
                opportunités d'investissement, recherche de pointe) avec un service personnalisé digne d'une boutique (interlocuteur unique, 
                sur-mesure, confidentialité absolue). Vos intérêts patrimoniaux sont notre unique priorité.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Vous avez d'autres questions ?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Nos experts vous répondent et vous accompagnent dans toutes vos démarches patrimoniales.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Être accompagné par un expert
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Télécharger notre guide
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Nous contacter
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Par téléphone</h3>
              <p className="text-muted-foreground mb-2">+33 1 23 45 67 89</p>
              <p className="text-sm text-muted-foreground">Lun - Ven : 9h - 18h</p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Par email</h3>
              <p className="text-muted-foreground mb-2">contact@bnppb.fr</p>
              <p className="text-sm text-muted-foreground">Réponse sous 24h</p>
            </Card>
            
            <Card className="p-8 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Nos agences</h3>
              <p className="text-muted-foreground mb-2">Paris, Genève, Luxembourg</p>
              <p className="text-sm text-muted-foreground">Présence européenne</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeRenseigner;
