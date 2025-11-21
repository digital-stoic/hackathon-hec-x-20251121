import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { InvestorProfile } from "@/types/investorProfile";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  BookOpen, 
  Wallet, 
  Target, 
  Calendar, 
  Leaf,
  CheckCircle2,
  Download,
  Share2
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface InvestorProfileResultsProps {
  profile: InvestorProfile;
  onRestart: () => void;
}

export const InvestorProfileResults = ({ profile, onRestart }: InvestorProfileResultsProps) => {
  const navigate = useNavigate();

  const riskProfileDescriptions = {
    sécuritaire: {
      title: 'Profil Sécuritaire',
      description: 'Vous privilégiez avant tout la préservation de votre capital. Les placements garantis et à faible volatilité correspondent à votre profil.',
      color: 'text-jade',
      bgColor: 'bg-jade/10',
      recommendations: [
        'Fonds euros d\'assurance-vie',
        'Livrets réglementés',
        'Obligations d\'État',
        'Fonds monétaires'
      ]
    },
    défensif: {
      title: 'Profil Défensif',
      description: 'Vous recherchez la stabilité avec un rendement modeste. Vous acceptez une faible exposition au risque pour obtenir un meilleur rendement que les placements garantis.',
      color: 'text-jade-light',
      bgColor: 'bg-jade-light/10',
      recommendations: [
        'Assurance-vie avec 80% fonds euros, 20% unités de compte',
        'Obligations d\'entreprises de qualité',
        'Fonds obligataires diversifiés',
        'SCPI défensives'
      ]
    },
    équilibré: {
      title: 'Profil Équilibré',
      description: 'Vous cherchez un équilibre entre sécurité et croissance. Vous acceptez une volatilité modérée pour obtenir un rendement supérieur à long terme.',
      color: 'text-champagne',
      bgColor: 'bg-champagne/10',
      recommendations: [
        'Allocation 50% obligations, 50% actions',
        'Fonds diversifiés multi-actifs',
        'SCPI et OPCI',
        'ETF diversifiés monde'
      ]
    },
    dynamique: {
      title: 'Profil Dynamique',
      description: 'Vous visez une croissance significative de votre capital. Vous êtes prêt à accepter des fluctuations importantes sur le court terme pour maximiser le potentiel de gains à long terme.',
      color: 'text-champagne-muted',
      bgColor: 'bg-champagne-muted/10',
      recommendations: [
        'Allocation 70% actions, 30% obligations',
        'PEA avec actions européennes',
        'ETF actions marchés développés',
        'Fonds thématiques (technologie, santé)'
      ]
    },
    offensif: {
      title: 'Profil Offensif',
      description: 'Vous recherchez le rendement maximal et êtes prêt à prendre des risques importants. Vous avez une vision long terme et acceptez une forte volatilité.',
      color: 'text-bordeaux',
      bgColor: 'bg-destructive/10',
      recommendations: [
        'Allocation 80-100% actions',
        'Actions individuelles',
        'ETF sectoriels et émergents',
        'Private equity et investissements alternatifs'
      ]
    }
  };

  const knowledgeDescriptions = {
    novice: {
      title: 'Novice',
      description: 'Vous débutez dans l\'investissement. Il est recommandé de vous faire accompagner et de privilégier les placements simples et diversifiés.',
      icon: '🌱'
    },
    informé: {
      title: 'Informé',
      description: 'Vous avez acquis une bonne compréhension des marchés financiers. Vous pouvez gérer des placements diversifiés avec un accompagnement ponctuel.',
      icon: '📊'
    },
    expérimenté: {
      title: 'Expérimenté',
      description: 'Vous maîtrisez les mécanismes des marchés financiers. Vous pouvez gérer activement votre portefeuille et accéder à des produits sophistiqués.',
      icon: '🎓'
    }
  };

  const capacityDescriptions = {
    'très faible': {
      title: 'Capacité très faible',
      description: 'Votre situation financière nécessite une grande prudence. Privilégiez les placements liquides et sans risque.',
      color: 'text-bordeaux'
    },
    'faible': {
      title: 'Capacité faible',
      description: 'Vous devez rester prudent dans vos investissements. Limitez votre exposition aux actifs risqués.',
      color: 'text-destructive'
    },
    'moyenne': {
      title: 'Capacité moyenne',
      description: 'Vous pouvez diversifier vos investissements avec une exposition modérée aux actifs risqués.',
      color: 'text-champagne'
    },
    'élevée': {
      title: 'Capacité élevée',
      description: 'Votre situation financière vous permet d\'investir avec une certaine sérénité sur des actifs variés.',
      color: 'text-jade-light'
    },
    'très élevée': {
      title: 'Capacité très élevée',
      description: 'Vous disposez d\'une grande capacité d\'absorption des pertes. Vous pouvez diversifier largement et prendre plus de risques.',
      color: 'text-jade'
    }
  };

  const riskInfo = riskProfileDescriptions[profile.riskProfile];
  const knowledgeInfo = knowledgeDescriptions[profile.knowledgeLevel];
  const capacityInfo = capacityDescriptions[profile.lossCapacity];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-8 max-w-5xl">
        {/* En-tête des résultats */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-champagne/10 rounded-full mb-6">
            <CheckCircle2 className="w-10 h-10 text-champagne" />
          </div>
          <h1 className="text-4xl font-serif text-champagne mb-4">
            Votre profil investisseur
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous avons analysé vos réponses pour déterminer votre profil d'investisseur et vous proposer des recommandations personnalisées.
          </p>
        </div>

        {/* Profil de risque principal */}
        <div className={`${riskInfo.bgColor} border-2 border-champagne/20 rounded-lg p-8 mb-8`}>
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className={`w-8 h-8 ${riskInfo.color}`} />
                <h2 className={`text-3xl font-serif ${riskInfo.color}`}>
                  {riskInfo.title}
                </h2>
              </div>
              <p className="text-foreground mb-6 text-lg leading-relaxed">
                {riskInfo.description}
              </p>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Score de risque</span>
                  <span className="text-lg font-mono font-bold text-champagne">{profile.scores.risk}/100</span>
                </div>
                <Progress value={profile.scores.risk} className="h-3" />
              </div>
            </div>
          </div>

          {/* Recommandations */}
          <div className="mt-6 pt-6 border-t border-border/50">
            <h3 className="text-lg font-serif text-foreground mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-champagne" />
              Recommandations adaptées
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {riskInfo.recommendations.map((rec, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-background/50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-champagne flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{rec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grille des autres profils */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Niveau de connaissance */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-elevated">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-champagne" />
              <h3 className="text-xl font-serif text-foreground">
                Niveau de connaissance
              </h3>
            </div>
            <div className="mb-4">
              <span className="text-3xl">{knowledgeInfo.icon}</span>
              <p className="text-2xl font-semibold text-champagne mt-2">
                {knowledgeInfo.title}
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {knowledgeInfo.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Score</span>
              <span className="text-lg font-mono font-bold text-champagne">{profile.scores.knowledge}/100</span>
            </div>
            <Progress value={profile.scores.knowledge} className="h-2 mt-2" />
          </div>

          {/* Capacité à subir des pertes */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-elevated">
            <div className="flex items-center gap-3 mb-4">
              <Wallet className="w-6 h-6 text-champagne" />
              <h3 className="text-xl font-serif text-foreground">
                Capacité financière
              </h3>
            </div>
            <div className="mb-4">
              <p className={`text-2xl font-semibold ${capacityInfo.color}`}>
                {capacityInfo.title}
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {capacityInfo.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Score</span>
              <span className="text-lg font-mono font-bold text-champagne">{profile.scores.capacity}/100</span>
            </div>
            <Progress value={profile.scores.capacity} className="h-2 mt-2" />
          </div>
        </div>

        {/* Objectifs et horizon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Objectifs */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-elevated">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-champagne" />
              <h3 className="text-xl font-serif text-foreground">
                Vos objectifs
              </h3>
            </div>
            <div className="space-y-2">
              {profile.objectives.map((obj, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-jade flex-shrink-0 mt-1" />
                  <span className="text-sm text-foreground">{obj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Horizon d'investissement */}
          <div className="bg-card border border-border rounded-lg p-6 shadow-elevated">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-champagne" />
              <h3 className="text-xl font-serif text-foreground">
                Horizon d'investissement
              </h3>
            </div>
            <p className="text-2xl font-semibold text-champagne mb-3">
              {profile.investmentHorizon}
            </p>
            <p className="text-sm text-muted-foreground">
              Cette durée détermine les types de placements adaptés à votre situation.
            </p>
          </div>
        </div>

        {/* Préférences ESG */}
        {profile.esgPreferences.active && (
          <div className="bg-card border border-border rounded-lg p-6 shadow-elevated mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-6 h-6 text-jade" />
              <h3 className="text-xl font-serif text-foreground">
                Préférences ESG
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Vous souhaitez consacrer au moins <span className="font-bold text-jade">{profile.esgPreferences.minPercentage}%</span> de votre portefeuille à des investissements durables.
            </p>
            {profile.esgPreferences.themes.length > 0 && (
              <div>
                <p className="text-sm font-medium text-foreground mb-3">Thématiques prioritaires :</p>
                <div className="grid grid-cols-1 gap-2">
                  {profile.esgPreferences.themes.map((theme, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-jade/5 p-3 rounded-lg border border-jade/20">
                      <Leaf className="w-4 h-4 text-jade flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{theme}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Button
            onClick={() => navigate('/patrimoine')}
            className="bg-champagne text-white hover:bg-champagne-muted h-12 px-8"
          >
            Voir mon patrimoine
          </Button>
          <Button
            variant="outline"
            onClick={onRestart}
            className="border-champagne text-champagne hover:bg-champagne/10 h-12 px-8"
          >
            Refaire le test
          </Button>
        </div>

        {/* Note de bas de page */}
        <div className="mt-12 p-6 bg-muted/30 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            Ce profil est une évaluation indicative basée sur vos réponses. Il ne constitue pas un conseil en investissement personnalisé. 
            Nous vous recommandons de consulter un conseiller pour une analyse approfondie de votre situation.
          </p>
        </div>
      </main>
    </div>
  );
};
