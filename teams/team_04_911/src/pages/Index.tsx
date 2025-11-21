import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-banking.jpg";
import consultationImage from "@/assets/consultation.jpg";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Vous venez de recevoir une somme importante ?
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in opacity-90">
            Nous vous aidons à sécuriser, structurer et faire fructifier votre nouveau patrimoine — en toute confiance.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in">
            <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Parler à un banquier privé
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Télécharger notre guide
            </Button>
          </div>
        </div>
      </section>

      {/* First Steps Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Les 5 premiers réflexes quand vous recevez une somme importante
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg">
            Héritage, vente d'entreprise, exit entrepreneurial ou gain exceptionnel : ces moments nécessitent un accompagnement expert.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">1. Sécuriser immédiatement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Placement temporaire sécurisé le temps d'élaborer votre stratégie patrimoniale. Évitez les décisions précipitées.
              </p>
            </div>
            
            <div className="p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">2. Consulter des experts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Un banquier privé, un fiscaliste et un notaire : l'équipe indispensable pour structurer votre patrimoine dès le départ.
              </p>
            </div>
            
            <div className="p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">3. Optimiser la fiscalité</h3>
              <p className="text-muted-foreground leading-relaxed">
                Anticipez l'impact fiscal de votre nouvelle situation : succession, donation, plus-values... Chaque euro compte.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">4. Définir vos objectifs de vie</h3>
              <p className="text-muted-foreground leading-relaxed">
                Achat immobilier, transmission familiale, projets entrepreneuriaux, philanthropie : clarifiez vos priorités avant d'investir.
              </p>
            </div>
            
            <div className="p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">5. Construire une stratégie long terme</h3>
              <p className="text-muted-foreground leading-relaxed">
                Diversification, gestion du risque, préservation du capital : bâtissez un patrimoine pérenne sur plusieurs générations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            L'accompagnement BNP Paribas Banque Privée
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="p-8 rounded-lg bg-card border border-border">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Un interlocuteur unique dédié</h3>
              <p className="text-muted-foreground leading-relaxed">
                Votre banquier privé coordonne l'ensemble des expertises nécessaires : fiscalité, juridique, investissement, transmission. 
                Une relation de confiance construite dans la durée.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-card border border-border">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Gouvernance patrimoniale sur mesure</h3>
              <p className="text-muted-foreground leading-relaxed">
                Structuration adaptée à votre situation : holding familiale, fondation, trusts... Nous protégeons et organisons 
                votre patrimoine selon vos objectifs de vie et de transmission.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-card border border-border">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Présence européenne et locale</h3>
              <p className="text-muted-foreground leading-relaxed">
                Paris, Genève, Luxembourg, Milan, Bruxelles : nos équipes vous accompagnent là où vous en avez besoin. 
                Une expertise internationale avec une proximité locale.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Parler à un banquier privé
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Questions fréquentes
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Les réponses aux questions que se posent les nouveaux clients fortunés
          </p>
          
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                Que faire quand plusieurs millions arrivent sur mon compte ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Première étape : ne rien faire de précipité. Placez la somme sur un compte rémunéré sécurisé le temps de consulter 
                un banquier privé. Celui-ci vous aidera à établir une stratégie patrimoniale adaptée à votre situation fiscale et vos objectifs de vie.
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                Comment éviter les erreurs quand on débute dans la gestion de patrimoine ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Les erreurs classiques : surinvestir dans un seul actif, négliger la fiscalité, se fier à des conseils non professionnels. 
                Un accompagnement expert dès le départ vous évite des décisions coûteuses et irréversibles.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                Quelle fiscalité après un héritage important ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Droits de succession, IFI, fiscalité des revenus du patrimoine : l'impact fiscal peut être considérable. 
                Une optimisation légale et anticipée permet de préserver votre capital sur le long terme.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                Comment investir après un exit entrepreneurial ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Après la vente de votre entreprise, diversification et préservation du capital sont essentielles. 
                Nous vous aidons à réinvestir intelligemment : immobilier, private equity, marchés financiers, 
                tout en optimisant votre fiscalité et en préparant votre transmission.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                Pourquoi choisir BNP Paribas Banque Privée ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Leader européen avec 150 ans d'expertise, nous combinons solidité financière, présence internationale et 
                accompagnement personnalisé. Vos intérêts patrimoniaux sont notre priorité absolue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à sécuriser votre avenir patrimonial ?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Échangez avec l'un de nos banquiers privés pour élaborer votre stratégie sur mesure.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Prendre rendez-vous
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Télécharger notre brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
