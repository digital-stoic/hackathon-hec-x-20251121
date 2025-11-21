import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import philanthropyImage from "@/assets/philanthropy.jpg";
import { Heart, Globe, GraduationCap, Leaf, ArrowRight } from "lucide-react";

const Philanthropie = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${philanthropyImage})` }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Investir avec sens. Transmettre avec impact.
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in opacity-90">
            Un accompagnement dédié pour aligner patrimoine et valeurs
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              ESG vs Impact : comprendre la différence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              L'investissement ESG (Environnement, Social, Gouvernance) exclut les secteurs controversés et sélectionne 
              les entreprises les mieux notées. L'investissement à impact va plus loin : il vise un bénéfice mesurable 
              et intentionnel sur la société ou l'environnement, tout en générant un rendement financier.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Chez BNP Paribas Banque Privée, nous vous aidons à construire un portefeuille qui reflète vos valeurs, 
              tout en préservant la performance. Finance responsable, économie sociale, énergies renouvelables, 
              éducation : vos investissements peuvent transformer le monde.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La philanthropie structurée (fondation, fonds de dotation, donations) complète cette démarche en vous 
              permettant d'agir directement sur les causes qui vous tiennent à cœur, avec un accompagnement expert 
              en gouvernance et fiscalité.
            </p>
          </div>
        </div>
      </section>

      {/* Structuration Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Structuration philanthropique et gouvernance familiale
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Fondation familiale</h3>
              <p className="text-muted-foreground leading-relaxed">
                Créez une structure pérenne pour porter vos valeurs sur plusieurs générations. Nous vous accompagnons 
                dans la création, la gouvernance et l'animation de votre fondation, en France ou à l'étranger.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Donations et legs stratégiques</h3>
              <p className="text-muted-foreground leading-relaxed">
                Optimisez l'impact de vos dons avec un accompagnement fiscal et juridique. Réduction d'impôts, 
                structuration de legs, mécénat d'entreprise : chaque euro donné peut être maximisé.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Leaf className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Next-Gen Wealth</h3>
              <p className="text-muted-foreground leading-relaxed">
                Impliquez vos enfants dans la gestion de votre patrimoine et de vos engagements philanthropiques. 
                Éducation financière, gouvernance familiale, transmission de valeurs : préparez la relève.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Globe className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Impact investing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Investissez dans des fonds à impact mesurable : microfinance, énergies renouvelables, accès à l'éducation, 
                santé. Conciliez rendement financier et transformation sociale ou environnementale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Témoignages et cas d'usage
          </h2>
          
          <div className="space-y-8">
            <div className="p-8 rounded-lg bg-card border border-border">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Cas n°1 : Entrepreneur tech, 42 ans</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Après la vente de sa startup, ce dirigeant souhaitait investir 20% de son patrimoine dans des projets à impact. 
                Nous l'avons accompagné dans la création d'un fonds familial dédié à l'éducation des jeunes en zones rurales, 
                tout en optimisant sa fiscalité et en impliquant ses enfants dans la gouvernance.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Résultat : 5 écoles financées, 1 200 élèves accompagnés, réduction d'IFI de 75%.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-card border border-border">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Cas n°2 : Famille fortunée, transmission multi-générationnelle</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cette famille souhaitait structurer son engagement philanthropique sur trois générations. Nous avons créé 
                une fondation familiale dédiée à la préservation des océans, avec une gouvernance partagée entre parents, 
                enfants et petits-enfants.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Résultat : 12 projets de recherche marine financés, implication de la 3ème génération dans les décisions stratégiques.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-card border border-border">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Cas n°3 : Héritier, 35 ans</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Après un héritage conséquent, ce client souhaitait donner du sens à son patrimoine. Nous avons construit 
                un portefeuille 100% impact (énergies renouvelables, santé, éducation) tout en maintenant une performance 
                financière compétitive.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Résultat : Rendement annuel de 6,2%, impact mesurable sur 8 ODD des Nations Unies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Construisons ensemble votre stratégie d'impact
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Échangez avec nos experts en investissement responsable et philanthropie structurée.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Je veux donner du sens à mon patrimoine
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Philanthropie;
