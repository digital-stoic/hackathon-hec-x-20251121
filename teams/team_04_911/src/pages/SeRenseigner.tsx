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
      
      {/* Hero Section */}
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
            Retour
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
              Vos questions sur la gestion d'un nouveau patrimoine
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Réponses détaillées aux questions que se posent les nouveaux clients fortunés
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
                  Besoin d'un accompagnement personnalisé ?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Nos experts vous répondent et élaborent avec vous une stratégie sur mesure.
                </p>
                <Button size="sm" className="w-full bg-accent hover:bg-accent/90">
                  Être accompagné
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </aside>

            {/* Right Content Area - FAQ */}
            <main className="space-y-8">
              
              {/* Question 1 */}
              <div className="p-8 rounded-lg bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Que faire avec 1, 3 ou 10 millions d'euros ?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Première règle :</strong> ne rien faire de précipité. Que vous ayez reçu 
                  1M€, 3M€ ou 10M€, le principe reste le même : sécuriser d'abord, structurer ensuite, investir enfin.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Phase 1 (J1 à J30) :</strong> Placez la somme sur un compte rémunéré 
                  sécurisé. Ne cédez à aucune pression extérieure. Contactez immédiatement un banquier privé, un fiscaliste 
                  et un notaire. Ces trois experts coordonnés vous éviteront des erreurs irréversibles.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Phase 2 (M2 à M3) :</strong> Audit patrimonial complet. Définition de 
                  vos objectifs de vie (résidence principale, projets entrepreneuriaux, transmission). Élaboration de votre 
                  stratégie fiscale et juridique (holding, assurance-vie, donations).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Phase 3 (M4+) :</strong> Diversification progressive de vos investissements. 
                  Allocation typique : 30-40% immobilier, 40-50% marchés financiers diversifiés, 10-20% private equity / fonds 
                  alternatifs. Avec 10M€+, ajoutez family office et structuration philanthropique.
                </p>
              </div>

              {/* Question 2 */}
              <div className="p-8 rounded-lg bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Comment éviter les erreurs après un exit entrepreneurial ?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Les exits entrepreneuriaux représentent 40% de nos nouveaux clients fortunés. Les erreurs classiques 
                  que nous observons :
                </p>
                <ul className="space-y-3 text-muted-foreground mb-4">
                  <li className="flex items-start">
                    <span className="text-destructive font-bold mr-3 mt-1">❌</span>
                    <span>
                      <strong className="text-foreground">Tout réinvestir dans une nouvelle entreprise immédiatement :</strong> 
                      80% des entrepreneurs qui réinvestissent tout dans les 6 mois perdent une partie significative de leur capital. 
                      Prenez le temps de diversifier d'abord.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive font-bold mr-3 mt-1">❌</span>
                    <span>
                      <strong className="text-foreground">Négliger l'optimisation fiscale :</strong> sans structuration 
                      (apport-cession, holding, réinvestissement qualifié), vous pouvez perdre 30-40% en fiscalité. 
                      Consultez un fiscaliste AVANT la signature de la vente.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive font-bold mr-3 mt-1">❌</span>
                    <span>
                      <strong className="text-foreground">Céder aux sollicitations :</strong> family, friends, faux conseillers... 
                      Après un exit, vous devenez une cible. Filtrez toutes les sollicitations via votre banquier privé.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive font-bold mr-3 mt-1">❌</span>
                    <span>
                      <strong className="text-foreground">Augmenter trop vite son train de vie :</strong> résidence de luxe, 
                      voitures, voyages... L'effet cliquet joue contre vous. Fixez-vous un budget annuel et tenez-vous-y 
                      pendant 2 ans minimum.
                    </span>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Notre approche :</strong> nous accompagnons chaque année plus de 150 entrepreneurs 
                  post-exit. Méthodologie éprouvée sur 20 ans : sécurisation immédiate, stratégie fiscale pré-exit quand possible, 
                  diversification progressive, réinvestissement encadré après 18-24 mois.
                </p>
              </div>

              {/* Question 3 */}
              <div className="p-8 rounded-lg bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Quelle banque privée pour entrepreneurs européens ?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le choix de votre banque privée après un exit est déterminant. Voici les critères essentiels :
                </p>
                <div className="space-y-4 mb-4">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">1. Présence européenne multi-juridictions</h3>
                    <p className="text-sm text-muted-foreground">
                      Entrepreneurs = mobilité. Vous aurez besoin d'expertise en France, Suisse, Luxembourg, peut-être UK ou Belgique. 
                      BNP Paribas Banque Privée : présence dans 12 pays européens avec équipes locales spécialisées exit.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">2. Expertise fiscalité internationale</h3>
                    <p className="text-sm text-muted-foreground">
                      Exit = enjeux fiscaux complexes (apport-cession, CIR, réinvestissement, plus-values mobilières). 
                      Exigez un fiscaliste dédié qui connaît les schémas d'optimisation légaux trans-européens.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">3. Accès au deal-flow private equity et VC</h3>
                    <p className="text-sm text-muted-foreground">
                      Entrepreneurs = réinvestissement futur. Vous voulez accéder aux meilleurs deals de co-investissement, 
                      fonds de fonds, secondary. Les grandes banques privées ont les meilleurs accès.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">4. Solidité financière AAA</h3>
                    <p className="text-sm text-muted-foreground">
                      Votre capital = votre liberté. Ne le confiez qu'à une institution AAA ou équivalent. 
                      Vérifiez les ratios de solvabilité (CET1 supérieur à 12%, Tier 1 supérieur à 15%).
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Pourquoi BNP Paribas Banque Privée ?</strong> Leader européen, 
                  solidité AAA, 150 ans d'expertise, accompagnement de 200 000+ clients fortunés, présence Paris-Genève-Luxembourg-Milan, 
                  équipe dédiée entrepreneurs avec track record prouvé sur 500+ exits.
                </p>
              </div>

              {/* Question 4 */}
              <div className="p-8 rounded-lg bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Comment gérer la fiscalité après un héritage important ?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un héritage de plusieurs millions déclenche une cascade d'obligations fiscales. Voici le panorama complet :
                </p>
                <div className="space-y-4 mb-4">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Droits de succession (immédiat)</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Barème progressif jusqu'à 45% en ligne directe après abattements. Exemple concret :
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                      <li>• Héritage 3M€ en ligne directe : après abattement 100k€, base taxable 2,9M€ → droits environ 1,1M€</li>
                      <li>• Héritage 3M€ entre frères/sœurs : après abattement 15,9k€, droits jusqu'à 55% → droits environ 1,6M€</li>
                      <li>• <strong>Solution :</strong> donations anticipées tous les 15 ans pour renouveler les abattements</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">IFI - Impôt sur la Fortune Immobilière (annuel)</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Si patrimoine immobilier net supérieur à 1,3M€, IFI de 0,5% à 1,5%. Exemple :
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                      <li>• Patrimoine immobilier 5M€ → IFI annuel environ 35 000€</li>
                      <li>• <strong>Optimisation :</strong> démembrement, SCI, holding, diversification vers actifs financiers non IFI</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Fiscalité des revenus du patrimoine (annuel)</h3>
                    <p className="text-sm text-muted-foreground">
                      Loyers, dividendes, intérêts, plus-values : flat tax 30% ou barème IR + prélèvements sociaux. 
                      Avec 3M€ générant 4% annuel = 120k€ revenus donc 36k€ fiscalité annuelle minimum.
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Notre accompagnement :</strong> audit fiscal complet dans les 30 jours, 
                  stratégie d'optimisation légale (assurance-vie, PEA, démembrement, holding), simulation sur 20 ans, 
                  coordination fiscaliste-notaire-banquier. Économie fiscale moyenne constatée : 25-35% sur 10 ans.
                </p>
              </div>

              {/* Question 5 */}
              <div className="p-8 rounded-lg bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Comment protéger ma famille et mon avenir ?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Protéger = anticiper les risques et sécuriser la transmission. Notre approche en 5 piliers :
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">1. Diversification patrimoniale</h3>
                    <p className="text-sm text-muted-foreground">
                      Ne mettez jamais tous vos œufs dans le même panier. Allocation cible : 30-40% immobilier (dont résidence principale), 
                      40-50% actifs financiers diversifiés (actions, obligations, fonds), 10-20% actifs alternatifs (private equity, or, art). 
                      Diversification géographique : 60% France, 30% Europe, 10% international.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">2. Protection juridique</h3>
                    <p className="text-sm text-muted-foreground">
                      Régime matrimonial adapté (séparation de biens si entrepreneuriat), pactes successoraux, mandats de protection future, 
                      clause bénéficiaire assurance-vie optimisée. Structuration holding familiale pour isoler le patrimoine professionnel 
                      du patrimoine privé.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">3. Transmission anticipée</h3>
                    <p className="text-sm text-muted-foreground">
                      Donations tous les 15 ans pour profiter du renouvellement des abattements (100k€ par parent par enfant). 
                      Démembrement de propriété : nue-propriété aux enfants (exonération partielle de droits), usufruit aux parents 
                      (conservation des revenus). Exemple : à 60 ans, transmettre 2M€ en nue-propriété coûte 60% de moins qu'une donation en pleine propriété.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">4. Assurance et garanties</h3>
                    <p className="text-sm text-muted-foreground">
                      Assurance-vie (hors succession jusqu'à 152 500€ par bénéficiaire), garantie décès pour couvrir l'IFI et les droits 
                      de succession, assurance homme-clé si activité professionnelle maintenue. Budget assurance recommandé : 0,3-0,5% du patrimoine.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">5. Gouvernance familiale</h3>
                    <p className="text-sm text-muted-foreground">
                      Conseil de famille structuré, charte familiale définissant les règles de gestion et de transmission, 
                      éducation financière des enfants dès 16-18 ans, implication progressive dans les décisions patrimoniales. 
                      Notre programme Next-Gen prépare vos héritiers à gérer leur future responsabilité.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Questions */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-muted/30 border border-border">
                  <h3 className="text-lg font-bold mb-3 text-foreground">
                    À partir de quel montant accéder à la Banque Privée BNP Paribas ?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Seuil standard : 500 000€ d'actifs financiers. Pour entrepreneurs à fort potentiel ou situation complexe : 
                    à partir de 250 000€. L'essentiel est d'avoir un besoin réel d'expertise patrimoniale et d'accompagnement personnalisé.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-muted/30 border border-border">
                  <h3 className="text-lg font-bold mb-3 text-foreground">
                    Quels sont les frais de gestion patrimoine ?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Transparence totale : frais de gestion 0,5% à 1,5% selon services, frais de transaction 0,1% à 0,5%, 
                    pas de frais cachés. Audit patrimonial initial offert. Simulation personnalisée lors du premier RDV.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-muted/30 border border-border">
                  <h3 className="text-lg font-bold mb-3 text-foreground">
                    Comment préparer mes enfants à gérer un héritage ?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Programme Next-Gen : éducation financière progressive, ateliers thématiques, implication dans les décisions familiales, 
                    mentorat par nos experts. Démarrage recommandé à 18-20 ans pour transmission future fluide.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-muted/30 border border-border">
                  <h3 className="text-lg font-bold mb-3 text-foreground">
                    Peut-on investir de manière responsable et rentable ?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Absolument. Nos fonds ESG et Impact offrent des performances comparables aux fonds traditionnels 
                    (7-9% annuels historiques) tout en générant un impact positif mesurable. 10-30% de votre patrimoine 
                    peut être alloué à l'investissement responsable.
                  </p>
                </div>
              </div>

              {/* CTA Box */}
              <div className="p-8 rounded-lg bg-primary text-primary-foreground text-center">
                <h3 className="text-2xl font-bold mb-4">D'autres questions ?</h3>
                <p className="mb-6 opacity-90">
                  Nos experts vous répondent et élaborent avec vous une stratégie patrimoniale sur mesure.
                </p>
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Être accompagné par un expert
                  <ArrowRight className="ml-2" size={20} />
                </Button>
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
