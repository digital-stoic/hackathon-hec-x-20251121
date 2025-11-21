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
            Votre partenaire financier de confiance
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in opacity-90">
            Ensemble, construisons l'avenir de vos projets avec expertise et innovation
          </p>
          <div className="flex gap-4 justify-center animate-fade-in">
            <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Découvrir nos services
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Pourquoi choisir BNP ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Excellence financière</h3>
              <p className="text-muted-foreground leading-relaxed">
                Des solutions innovantes pour maximiser votre patrimoine et sécuriser votre avenir financier
              </p>
            </div>
            
            <div className="p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Sécurité garantie</h3>
              <p className="text-muted-foreground leading-relaxed">
                Protection maximale de vos actifs grâce à nos systèmes de sécurité de pointe et notre expertise
              </p>
            </div>
            
            <div className="p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Accompagnement personnalisé</h3>
              <p className="text-muted-foreground leading-relaxed">
                Des conseillers dédiés pour vous accompagner à chaque étape de votre parcours financier
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={consultationImage} 
                alt="Consultation professionnelle" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Qui êtes-vous les 30 prochaines années ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Investir aujourd'hui pour bâtir le monde de demain. Découvrez comment 
                nos solutions peuvent transformer votre vision en réalité et faire grandir 
                votre capital durablement.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Prendre rendez-vous
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
