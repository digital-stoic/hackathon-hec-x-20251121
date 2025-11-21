import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import philanthropyImage from "@/assets/philanthropy.jpg";
import { Heart, Globe, GraduationCap, Leaf } from "lucide-react";

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
            Philanthropie
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in opacity-90">
            Ensemble pour un monde meilleur
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Notre engagement philanthropique
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Chez BNP, nous croyons fermement que la réussite financière s'accompagne d'une 
              responsabilité envers la société. Notre démarche philanthropique s'articule autour 
              de quatre piliers fondamentaux qui guident nos actions au quotidien.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Chaque année, nous investissons dans des projets qui font une réelle différence 
              dans la vie des communautés que nous servons, en France et à l'international.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Nos domaines d'action
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Solidarité sociale</h3>
              <p className="text-muted-foreground leading-relaxed">
                Soutien aux associations caritatives et aux initiatives de lutte contre la pauvreté 
                et l'exclusion sociale. Nous finançons des programmes d'aide alimentaire, de logement 
                et d'insertion professionnelle.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Éducation et culture</h3>
              <p className="text-muted-foreground leading-relaxed">
                Programmes de bourses d'études, soutien aux établissements d'enseignement et promotion 
                de l'accès à la culture pour tous. L'éducation est la clé de l'émancipation sociale.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Leaf className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Environnement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Financement de projets de reforestation, de préservation de la biodiversité et 
                de transition énergétique. Notre planète mérite notre engagement le plus total.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Globe className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Développement international</h3>
              <p className="text-muted-foreground leading-relaxed">
                Soutien aux projets de microfinance et d'entrepreneuriat dans les pays en développement. 
                Nous croyons au pouvoir transformateur de l'inclusion financière.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">
              Notre impact en chiffres
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6">
                <div className="text-5xl font-bold text-primary mb-2">50M€</div>
                <p className="text-muted-foreground">Investis en 2023</p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-primary mb-2">200+</div>
                <p className="text-muted-foreground">Projets soutenus</p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-primary mb-2">15 000</div>
                <p className="text-muted-foreground">Bénéficiaires directs</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Découvrir nos projets
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Philanthropie;
