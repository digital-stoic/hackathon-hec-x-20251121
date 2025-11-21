import { Question, Answer, InvestorProfile } from "@/types/investorProfile";

export const investorQuestions: Question[] = [
  // PAGE 1 : Situation financière de base
  {
    id: 'q1',
    category: 'situation',
    question: 'Quelle est votre capacité d\'épargne mensuelle ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Moins de 200 €', value: 'ep1', points: { capacity: 8, risk: 5 } },
      { label: '200 € - 500 €', value: 'ep2', points: { capacity: 15, risk: 10 } },
      { label: '500 € - 1 000 €', value: 'ep3', points: { capacity: 22, risk: 15 } },
      { label: '1 000 € - 2 000 €', value: 'ep4', points: { capacity: 28, risk: 18 } },
      { label: 'Plus de 2 000 €', value: 'ep5', points: { capacity: 35, risk: 20 } },
    ]
  },

  // PAGE 2 : Patrimoine
  {
    id: 'q2',
    category: 'situation',
    question: 'Quel est votre patrimoine financier actuel (hors résidence principale) ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Moins de 20 000 €', value: 'pat1', points: { capacity: 8, risk: 5 } },
      { label: '20 000 € - 50 000 €', value: 'pat2', points: { capacity: 15, risk: 10 } },
      { label: '50 000 € - 150 000 €', value: 'pat3', points: { capacity: 22, risk: 15 } },
      { label: '150 000 € - 300 000 €', value: 'pat4', points: { capacity: 28, risk: 18 } },
      { label: 'Plus de 300 000 €', value: 'pat5', points: { capacity: 35, risk: 20 } },
    ]
  },

  // PAGE 3 : Connaissance
  {
    id: 'q3',
    category: 'knowledge',
    question: 'Comment évaluez-vous votre niveau de connaissance des marchés financiers ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Débutant - Je découvre l\'investissement', value: 'know1', points: { knowledge: 15 } },
      { label: 'Intermédiaire - Je comprends les concepts de base', value: 'know2', points: { knowledge: 35 } },
      { label: 'Avancé - Je suis les marchés régulièrement', value: 'know3', points: { knowledge: 60 } },
      { label: 'Expert - J\'ai une expérience approfondie', value: 'know4', points: { knowledge: 85 } },
    ]
  },

  // PAGE 4 : Produits détenus
  {
    id: 'q4',
    category: 'knowledge',
    question: 'Quels produits financiers détenez-vous actuellement ?',
    description: 'Sélectionnez tous les produits que vous détenez',
    type: 'multiple',
    required: true,
    options: [
      { label: 'Livrets réglementés uniquement', value: 'prod1', points: { knowledge: 3 } },
      { label: 'Assurance-vie en fonds euros', value: 'prod2', points: { knowledge: 5 } },
      { label: 'Assurance-vie en unités de compte', value: 'prod3', points: { knowledge: 8 } },
      { label: 'PEA ou compte-titres', value: 'prod4', points: { knowledge: 10 } },
      { label: 'Actions en direct', value: 'prod5', points: { knowledge: 12 } },
      { label: 'ETF / Trackers', value: 'prod7', points: { knowledge: 10 } },
      { label: 'Produits structurés ou complexes', value: 'prod8', points: { knowledge: 15 } },
      { label: 'Aucun placement', value: 'prod0', points: { knowledge: 0 } },
    ]
  },

  // PAGE 5 : Réaction aux pertes
  {
    id: 'q5',
    category: 'risk',
    question: 'Si votre portefeuille perdait 20% de sa valeur en un mois, que feriez-vous ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Je vendrais immédiatement tout', value: 'react1', points: { risk: 0 } },
      { label: 'Je réduirais significativement mon exposition', value: 'react2', points: { risk: 8 } },
      { label: 'Je conserverais mes positions', value: 'react3', points: { risk: 18 } },
      { label: 'Je profiterais de l\'occasion pour investir davantage', value: 'react4', points: { risk: 28 } },
    ]
  },

  // PAGE 6 : Préférence gain/risque
  {
    id: 'q6',
    category: 'risk',
    question: 'Préférez-vous :',
    type: 'single',
    required: true,
    options: [
      { label: 'Un gain certain de 1 000 €', value: 'pref1', points: { risk: 5 } },
      { label: '50% de chance de gagner 2 500 €, 50% de ne rien gagner', value: 'pref2', points: { risk: 15 } },
      { label: '25% de chance de gagner 5 000 €, 75% de ne rien gagner', value: 'pref3', points: { risk: 22 } },
      { label: '10% de chance de gagner 15 000 €, 90% de ne rien gagner', value: 'pref4', points: { risk: 28 } },
    ]
  },

  // PAGE 7 : Horizon d'investissement
  {
    id: 'q7',
    category: 'objectives',
    question: 'Quel est votre horizon d\'investissement principal ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Très court terme (moins de 1 an)', value: 'hor1', points: { risk: 5 } },
      { label: 'Court terme (1 à 3 ans)', value: 'hor2', points: { risk: 10 } },
      { label: 'Moyen terme (3 à 7 ans)', value: 'hor3', points: { risk: 18 } },
      { label: 'Long terme (7 à 15 ans)', value: 'hor4', points: { risk: 25 } },
      { label: 'Très long terme (plus de 15 ans)', value: 'hor5', points: { risk: 30 } },
    ]
  },

  // PAGE 8 : Objectifs
  {
    id: 'q8',
    category: 'objectives',
    question: 'Quels sont vos objectifs d\'investissement ?',
    description: 'Sélectionnez tous vos objectifs',
    type: 'multiple',
    required: true,
    options: [
      { label: 'Préserver mon capital', value: 'obj1', points: { risk: 3 } },
      { label: 'Générer des revenus réguliers', value: 'obj2', points: { risk: 8 } },
      { label: 'Faire croître mon capital', value: 'obj3', points: { risk: 15 } },
      { label: 'Préparer ma retraite', value: 'obj4', points: { risk: 12 } },
      { label: 'Financer un projet (immobilier, études)', value: 'obj5', points: { risk: 10 } },
      { label: 'Transmettre un patrimoine', value: 'obj6', points: { risk: 8 } },
    ]
  },

  // PAGE 9 : Capacité - Charges et personnes
  {
    id: 'q9',
    category: 'capacity',
    question: 'Combien de personnes sont à votre charge financièrement ?',
    type: 'single',
    required: true,
    options: [
      { label: 'Aucune', value: 'dep1', points: { capacity: 25 } },
      { label: '1 personne', value: 'dep2', points: { capacity: 18 } },
      { label: '2 personnes', value: 'dep3', points: { capacity: 12 } },
      { label: '3 personnes ou plus', value: 'dep4', points: { capacity: 6 } },
    ]
  },

  // PAGE 10 : ESG
  {
    id: 'q10',
    category: 'esg',
    question: 'Souhaitez-vous prendre en compte des critères de durabilité (ESG) dans vos investissements ?',
    description: 'Critères Environnementaux, Sociaux et de Gouvernance',
    type: 'single',
    required: true,
    options: [
      { label: 'Non, cela ne m\'intéresse pas', value: 'esg1', points: { esg: 0 } },
      { label: 'Peut-être, si cela ne réduit pas mes rendements', value: 'esg2', points: { esg: 5 } },
      { label: 'Oui, c\'est important pour moi', value: 'esg3', points: { esg: 15 } },
      { label: 'Oui, c\'est une priorité absolue', value: 'esg4', points: { esg: 25 } },
    ]
  },
];

// Logique de scoring
export const calculateProfile = (answers: Answer[]): InvestorProfile => {
  let riskScore = 0;
  let knowledgeScore = 0;
  let capacityScore = 0;
  let esgScore = 0;

  // Parcourir toutes les réponses
  answers.forEach(answer => {
    const question = investorQuestions.find(q => q.id === answer.questionId);
    if (!question || !question.options) return;

    if (Array.isArray(answer.value)) {
      // Pour les questions à choix multiples
      answer.value.forEach(val => {
        const option = question.options?.find(opt => opt.value === val);
        if (option?.points) {
          riskScore += option.points.risk || 0;
          knowledgeScore += option.points.knowledge || 0;
          capacityScore += option.points.capacity || 0;
          esgScore += option.points.esg || 0;
        }
      });
    } else {
      // Pour les questions à choix unique
      const option = question.options.find(opt => opt.value === answer.value);
      if (option?.points) {
        riskScore += option.points.risk || 0;
        knowledgeScore += option.points.knowledge || 0;
        capacityScore += option.points.capacity || 0;
        esgScore += option.points.esg || 0;
      }
    }
  });

  // Normaliser les scores sur 100
  const normalizedRisk = Math.min(100, (riskScore / 130) * 100); // Max théorique: ~130 points
  const normalizedKnowledge = Math.min(100, (knowledgeScore / 100) * 100); // Max théorique: ~100 points
  const normalizedCapacity = Math.min(100, (capacityScore / 85) * 100); // Max théorique: ~85 points

  // Déterminer le profil de risque
  let riskProfile: InvestorProfile['riskProfile'];
  if (normalizedRisk < 20) riskProfile = 'sécuritaire';
  else if (normalizedRisk < 40) riskProfile = 'défensif';
  else if (normalizedRisk < 60) riskProfile = 'équilibré';
  else if (normalizedRisk < 80) riskProfile = 'dynamique';
  else riskProfile = 'offensif';

  // Règle de cohérence : ajuster si capacité très faible
  if (normalizedCapacity < 30 && (riskProfile === 'offensif' || riskProfile === 'dynamique')) {
    riskProfile = 'équilibré';
  }

  // Déterminer le niveau de connaissance
  let knowledgeLevel: InvestorProfile['knowledgeLevel'];
  if (normalizedKnowledge < 35) knowledgeLevel = 'novice';
  else if (normalizedKnowledge < 70) knowledgeLevel = 'informé';
  else knowledgeLevel = 'expérimenté';

  // Déterminer la capacité à subir des pertes
  let lossCapacity: InvestorProfile['lossCapacity'];
  if (normalizedCapacity < 20) lossCapacity = 'très faible';
  else if (normalizedCapacity < 40) lossCapacity = 'faible';
  else if (normalizedCapacity < 60) lossCapacity = 'moyenne';
  else if (normalizedCapacity < 80) lossCapacity = 'élevée';
  else lossCapacity = 'très élevée';

  // Extraire les objectifs
  const objectivesAnswer = answers.find(a => a.questionId === 'q8');
  const objectives = Array.isArray(objectivesAnswer?.value) 
    ? objectivesAnswer.value.map(val => {
        const opt = investorQuestions.find(q => q.id === 'q8')?.options?.find(o => o.value === val);
        return opt?.label || '';
      }).filter(Boolean)
    : [];

  // Extraire l'horizon d'investissement
  const horizonAnswer = answers.find(a => a.questionId === 'q7');
  const horizonValue = horizonAnswer?.value as string;
  const horizonOption = investorQuestions.find(q => q.id === 'q7')?.options?.find(o => o.value === horizonValue);
  const investmentHorizon = horizonOption?.label || '';

  // Extraire les préférences ESG
  const esgActiveAnswer = answers.find(a => a.questionId === 'q10');
  const esgActive = esgActiveAnswer?.value !== 'esg1';
  
  const esgThemes: string[] = []; // Simplifié car une seule question ESG

  const minPercentage = esgActive ? 
    (esgActiveAnswer?.value === 'esg4' ? 50 : 
     esgActiveAnswer?.value === 'esg3' ? 25 : 10) : 0;

  return {
    riskProfile,
    knowledgeLevel,
    lossCapacity,
    objectives,
    investmentHorizon,
    esgPreferences: {
      active: esgActive,
      themes: esgThemes,
      minPercentage
    },
    scores: {
      risk: Math.round(normalizedRisk),
      knowledge: Math.round(normalizedKnowledge),
      capacity: Math.round(normalizedCapacity)
    }
  };
};
