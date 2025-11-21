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

      {/* Scenarios Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Trois situations, un accompagnement expert
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Héritage, vente d'entreprise ou gain exceptionnel : découvrez comment nous vous accompagnons.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg aspect-[4/3] hover:shadow-2xl transition-shadow">
              <img 
                src={consultationImage} 
                alt="Héritage - Conseiller avec client" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">HÉRITAGE</h3>
                <p className="text-primary-foreground/90 text-sm mb-4">
                  Concevez l'évolution de votre patrimoine en toute sérénité et structurez votre succession.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg aspect-[4/3] hover:shadow-2xl transition-shadow">
              <img 
                src={heroImage} 
                alt="Exit - Voile sur l'océan symbolisant la liberté" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">EXIT</h3>
                <p className="text-primary-foreground/90 text-sm mb-4">
                  Vos projets, maintenant possibles : investissez pour faire grandir votre nouveau capital durablement.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg aspect-[4/3] hover:shadow-2xl transition-shadow">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">COMMUNAUTÉ</h3>
                <p className="text-primary-foreground/90 text-sm mb-4">
                  Enrichissez votre entourage et vivez des expériences inoubliables en investissant avec sens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to do Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3 text-foreground">
            Que faire avec 5 millions ?
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Les bonnes décisions dès aujourd'hui structurent votre liberté de demain.
          </p>
        </div>
      </section>

      {/* Investment Section with Image */}
      <section className="bg-secondary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <span className="text-accent text-sm font-semibold mb-4 uppercase tracking-wider">Investissement</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Que faire dans les 30 jours qui suivent l'arrivée d'un gros capital ?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Les bonnes décisions dès aujourd'hui structurent votre liberté de demain.
              </p>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="font-semibold text-foreground mb-3">
                  Exit réussi ? Héritage ? Crypto cash-out ?
                </p>
                <p className="text-sm text-muted-foreground">
                  BNP Paribas Banque Privée vous accompagne pour protéger, organiser et faire fructifier ce nouveau capital — en toute confiance.
                </p>
              </div>
            </div>
            <div className="relative min-h-[500px]">
              <img 
                src={consultationImage} 
                alt="Conseiller BNP Paribas" 
                className="w-full h-full object-cover"
              />
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

      {/* FAQ Section - Dark Cards Style */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="p-8 rounded-lg bg-primary text-primary-foreground">
              <h3 className="text-xl font-bold mb-4">
                1. Que faire lorsque plusieurs millions arrivent soudainement sur mon compte ?
              </h3>
              <p className="leading-relaxed opacity-90">
                Recevoir un gros capital est une étape importante qui nécessite des décisions efficaces et réfléchies. 
                Nous vous recommandons dans un premier temps de contacter un conseiller pour vous aider à structurer 
                ce patrimoine selon vos objectifs et votre horizon de vie.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-primary text-primary-foreground">
              <h3 className="text-xl font-bold mb-4">
                5. Comment protéger mon argent des arnaques et des mauvais choix ?
              </h3>
              <p className="leading-relaxed opacity-90">
                Une stratégie solide de liquidités vous permet d'anticiper les sollicitations douteuses. 
                Être accompagné par un banquier privé vous permet de bénéficier d'un cadre légal et de solutions 
                éprouvées pour protéger votre capital.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-primary text-primary-foreground">
              <h3 className="text-xl font-bold mb-4">
                6. Comment investir mes revenus de manière fiscale si je perçois de l'argent ?
              </h3>
              <p className="leading-relaxed opacity-90">
                Un plan progressif et diversifié est souvent la meilleure approche. Nous vous aidons à définir vos objectifs, 
                votre horizon de placement et votre tolérance au risque, puis à sélectionner les actifs adaptés pour 
                optimiser la fiscalité dans la durée.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-primary text-primary-foreground">
              <h3 className="text-xl font-bold mb-4">
                7. Comment gérer la fiscalité d'un gros capital en France ?
              </h3>
              <p className="leading-relaxed opacity-90">
                Une somme importante implique souvent une fiscalité plus complexe : IFI, droits de succession, 
                prélèvements forfaitaires. Comprendre le cadre réglementaire sécurise vos décisions et vous permet 
                d'optimiser légalement votre situation fiscale.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-card border border-border">
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                2. À partir de quel montant puis-je accéder à la Banque Privée BNP Paribas ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                La Banque Privée s'adresse à ses clients disposant d'un patrimoine financier significatif. 
                Le montant peut varier selon les besoins et de déterminer le meilleur accompagnement pour vous, 
                quelle que soit votre situation patrimoniale actuelle.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-card border border-border">
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                8. Comment intégrer ma famille dans ces décisions ?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Impliquer vos proches dans votre stratégie patrimoniale est un enjeu essentiel. 
                BNP Paribas Banque Privée vous accompagne dans la gouvernance familiale et la préparation de la 
                transmission intergénérationnelle.
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
