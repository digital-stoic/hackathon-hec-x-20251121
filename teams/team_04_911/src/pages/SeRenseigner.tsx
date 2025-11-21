import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-banking.jpg";

const SeRenseigner = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Background */}
      <section className="relative py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Investissement
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
              SE RENSEIGNER
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Comment gérer une somme importante ?
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[300px,1fr] gap-12 max-w-7xl mx-auto">
            
            {/* Left Sidebar - CTA Box */}
            <aside className="lg:sticky lg:top-6 h-fit">
              <div className="p-6 bg-accent/10 border-l-4 border-accent">
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  Pourquoi être accompagné par BNP Paribas Banque Privée des Antilles ?
                </h3>
                <Button size="sm" className="mt-4 w-full bg-accent hover:bg-accent/90">
                  Prendre RDV
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </aside>

            {/* Right Content Area */}
            <main className="bg-card p-8 md:p-12 rounded-lg shadow-sm">
              
              {/* Intro Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Questions que l'on se pose lorsque l'on reçoit beaucoup d'argent
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Recevoir plusieurs centaines de milliers (ou plusieurs millions) de cash qui arrivent sur un compte unique 
                  peut être un événement rare à haut niveau émotionnel (en bien). Que vous vendiez une entreprise, que vous 
                  héritiez d'un patrimoine conséquent ou gagniez à la loterie, avoir accès soudainement à beaucoup d'argent 
                  peut occasionner...
                </p>
              </div>

              {/* Questions fréquentes */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-8 text-foreground">Questions fréquentes</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-foreground">
                      Que faire en premier lorsqu'une grosse somme arrive sur mon compte ?
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      D'une manière générale, ne vous lancez pas trop vite dans les décisions financières. Nous conseillons aux 
                      clients à partir de montants dans ce cadre stratégié, le temps de consulter et un objectif à plus long terme.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-3 text-foreground">
                      Comment organiser ma patrimoine si j'ai reçu près d'un million d'argent ?
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Nous rappelons avec vous un diagnostic patrimonial (qui : situation, formation, projections, revenus de retraite, 
                      revenus des risques). Et nous le traduisons en stratégie patrimoniale avec des bonds (flux).
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-3 text-foreground">
                      Comment structurer mon capital si j'ai plusieurs projets (immobilier, donation, placements...) ?
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Concernant notamment manger le niveau de changements fiscaux significatifs. Des supports vous accompagnent pour 
                      équilibrer les enjeux (liquidation et épargnation dans le cadre du temps réglementé).
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-3 text-foreground">
                      Comment savoir si j'ai fait les bons choix ?
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Nous établissons avec le bout. Nous les rapprochons aux périodiques, vous avez de chiffrer confort et 
                      moit en engagent les situations spéciales.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-3 text-foreground">
                      Puis-je financer des projets personnels ou investibles ?
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Tout à fait. D'habiller des chefs ménages, beaucoup font du condo privé, financier, locatif, projets 
                      philanthropiques... Nous vous guidons à arbitrer entre opportunités et sécurité.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-3 text-foreground">
                      Comment investir intelligemment quand j'ai les liquidités liés ?
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      L'investissement en un progressif : diversification, horizons de risque, liquidités. Nous construisons avec vous une stratégie 
                      d'investissement adaptée à votre profil et vos objectifs.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-3 text-foreground">
                      Que se passe-t-il si je n'ai pas les solutions d'investissement adaptées en fonction de mes objectifs patrimoniaux ?
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      BNP Paribas Banque Privée vous accompagne pour identifier et sélectionner les placements alignés avec votre 
                      stratégie patrimoniale.
                    </p>
                  </div>
                </div>
              </div>

              {/* Votre offre BNP Paribas */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Votre offre BNP Paribas Banque Privée
                </h3>
                
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-4 text-foreground">
                    Pourquoi être accompagné par BNP Paribas Banque Privée dès maintenant ?
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Que vous avez besoin d'accompagnement agile ou sol, ou que vous devez éviter de gagner/perdre en liquidez. 
                    Nous nous engageons à vous proposer en moyenne patrimoniale. Nous sommes à votre disposition des experts en 
                    placements financiers et solutions d'optimisation patrimoniale :
                  </p>
                  
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1 flex-shrink-0">•</span>
                      <span>
                        <strong className="text-foreground">Le groupe large de clientèle au droit inédite Asset Management</strong> (Theam Asset, 
                        Expertain AM...) qui valorise les trajectoires d'actifs de performance différente plans de performance des investissements.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1 flex-shrink-0">•</span>
                      <span>
                        <strong className="text-foreground">L'expertise de BNP services invest Management</strong> pour son expérience de SICAV et 
                        BNP Paribas Asset Management. Pilote des placements sur OPCVM plus les informations et en orientations de l'offre 
                        de la Banque Privée.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1 flex-shrink-0">•</span>
                      <span>
                        <strong className="text-foreground">Une gamme de fonds adaptés</strong> pour tous types investisseurs, nous vous 
                        facilitons vos offres d'accès au service de gestion et services financiers et contrats de gestion de grande d'actifs 
                        patrimoniaux via BNP Paribas Wealth Management.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Enfin et à travers époque, avec l'offre de gestion de patrimoine BNP, découvrez des voix de laquelle innovation aussi 
                    à disposé part de portefeuille lui conseil.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                    Avec le temps appelé notre contact, nous prenons inconscients et les tendances.
                  </p>
                </div>
              </div>

              {/* Tarifs et conditions */}
              <div className="pt-8 border-t border-border">
                <h3 className="text-xl font-bold mb-4 text-foreground">Tarifs et conditions</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Consultez les Conditions et Tarifs des services du BNP Paribas Banque Privée réglementation à la tarifs des 
                  services financières de la banques, applicable à traiter.
                </p>
                <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80">
                  Consulter les tarifs et conditions
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>

              {/* Legal Notice */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Avertissement :</strong> cette page web ne doit pas être considérable comme une sollicitation, un conseil en investissement, une 
                  recommandation en offre de la sécurisation ou de valides que quelques instruments financiers et caractéristiques de 
                  positionnement. Les investissements comportent toujours une part de risque (perte en capital, variation de la valeur). 
                  L'investissement nécessite une analyse approfondie de votre situation personnelle et fiscale. Nous vous recommandons de 
                  consulter un professionnel du conseil patrimonial avant toute décision d'investissement. BNP Paribas Banque Privée est une marque 
                  de BNP Paribas SA — Banque — S.A. au capital de 2 468 663 292 euros. Les modifications concernent uniquement les fonds et services 
                  réglementés et ne constituent en aucun cas une sollicitation à l'épargne.
                </p>
              </div>

            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeRenseigner;
