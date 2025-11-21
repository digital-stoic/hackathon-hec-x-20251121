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
      <section className="relative min-h-[650px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/75" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-primary-foreground py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight">
              Vous venez de recevoir une somme importante ?
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90 leading-relaxed">
              Exit entrepreneurial, vente d'entreprise, héritage ou gain exceptionnel : 
              nous vous aidons à sécuriser, structurer et faire fructifier votre nouveau patrimoine.
            </p>
            <div className="flex gap-4 animate-fade-in flex-wrap">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Parler à un banquier privé
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Télécharger notre guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Capital Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Comment gérer plusieurs millions d'euros ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Les bonnes décisions dès aujourd'hui protègent votre liberté de demain. Voici les premiers réflexes essentiels.
            </p>
          </div>

          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-lg bg-card border border-border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Sécuriser immédiatement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ne prenez aucune décision précipitée. Placez temporairement vos fonds sur un compte sécurisé 
                le temps d'élaborer votre stratégie patrimoniale avec des experts.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-card border border-border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Anticiper la fiscalité</h3>
              <p className="text-muted-foreground leading-relaxed">
                Exit, succession, plus-values : l'impact fiscal peut atteindre 30-45%. 
                Une optimisation légale vous permet de préserver des centaines de milliers d'euros.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-card border border-border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Structurer dès le départ</h3>
              <p className="text-muted-foreground leading-relaxed">
                Holding familiale, diversification, protection juridique : les décisions prises 
                maintenant évitent des erreurs coûteuses dans 5 ou 10 ans.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg aspect-[4/3] hover:shadow-2xl transition-shadow">
              <img 
                src={consultationImage} 
                alt="Exit entrepreneurial" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">EXIT</h3>
                <p className="text-primary-foreground/90 text-sm">
                  Réinvestissez intelligemment après la vente de votre entreprise
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg aspect-[4/3] hover:shadow-2xl transition-shadow">
              <img 
                src={heroImage} 
                alt="Héritage" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">HÉRITAGE</h3>
                <p className="text-primary-foreground/90 text-sm">
                  Structurez votre succession et optimisez la fiscalité
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg aspect-[4/3] hover:shadow-2xl transition-shadow">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">CASH-OUT</h3>
                <p className="text-primary-foreground/90 text-sm">
                  Transformez votre liquidité en patrimoine pérenne
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à sécuriser votre avenir patrimonial ?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Nos banquiers privés vous accompagnent pour élaborer votre stratégie sur mesure.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Parler à un banquier privé
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
