// Mock data for Persona 3: Post-exit entrepreneur with €5.2M patrimoine

export const userData = {
  name: "Karim Mansouri",
  patrimoine: 5234847,
  performance: 2.3,
  performanceAbsolute: 117452,
  profilInvestisseur: "équilibré" as const,
  lastUpdate: new Date().toISOString(),
};

export interface LignePatrimoine {
  id: string;
  nom: string;
  type: "action" | "immobilier" | "crypto" | "liquidite" | "equity";
  valeur: number;
  performance: number;
  performanceAbsolute: number;
  sparkline: number[];
  allocation: number; // percentage
  color: string;
}

export const portefeuilleLignes: LignePatrimoine[] = [
  {
    id: "1",
    nom: "Résidence Principale Paris 16e",
    type: "immobilier",
    valeur: 1850000,
    performance: 3.2,
    performanceAbsolute: 59200,
    allocation: 35.3,
    sparkline: [1.8, 2.1, 2.4, 2.8, 3.0, 3.2],
    color: "hsl(177, 34%, 28%)",
  },
  {
    id: "2",
    nom: "Actions Apple Inc.",
    type: "action",
    valeur: 680000,
    performance: 12.4,
    performanceAbsolute: 84320,
    allocation: 13.0,
    sparkline: [8.2, 9.5, 11.2, 10.8, 11.9, 12.4],
    color: "hsl(38, 44%, 65%)",
  },
  {
    id: "3",
    nom: "ETF Vanguard S&P 500",
    type: "action",
    valeur: 520000,
    performance: 8.7,
    performanceAbsolute: 45240,
    allocation: 9.9,
    sparkline: [7.1, 7.8, 8.2, 8.5, 8.6, 8.7],
    color: "hsl(38, 44%, 55%)",
  },
  {
    id: "4",
    nom: "Appart. Investissement Lyon",
    type: "immobilier",
    valeur: 485000,
    performance: 4.1,
    performanceAbsolute: 19885,
    allocation: 9.3,
    sparkline: [3.2, 3.5, 3.8, 4.0, 4.1, 4.1],
    color: "hsl(177, 30%, 38%)",
  },
  {
    id: "5",
    nom: "Bitcoin",
    type: "crypto",
    valeur: 380000,
    performance: -8.2,
    performanceAbsolute: -31960,
    allocation: 7.3,
    sparkline: [18.5, 12.3, 5.2, -2.1, -5.8, -8.2],
    color: "hsl(38, 35%, 50%)",
  },
  {
    id: "6",
    nom: "Compte Courant BNP",
    type: "liquidite",
    valeur: 420000,
    performance: 0.5,
    performanceAbsolute: 2100,
    allocation: 8.0,
    sparkline: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
    color: "hsl(222, 10%, 28%)",
  },
  {
    id: "7",
    nom: "Livret A + LDDS",
    type: "liquidite",
    valeur: 345847,
    performance: 3.0,
    performanceAbsolute: 10375,
    allocation: 6.6,
    sparkline: [3.0, 3.0, 3.0, 3.0, 3.0, 3.0],
    color: "hsl(222, 8%, 35%)",
  },
  {
    id: "8",
    nom: "Actions Microsoft",
    type: "action",
    valeur: 290000,
    performance: 15.8,
    performanceAbsolute: 45820,
    allocation: 5.5,
    sparkline: [10.2, 11.8, 13.5, 14.2, 15.1, 15.8],
    color: "hsl(38, 44%, 60%)",
  },
  {
    id: "9",
    nom: "Ethereum",
    type: "crypto",
    valeur: 180000,
    performance: -12.5,
    performanceAbsolute: -22500,
    allocation: 3.4,
    sparkline: [8.2, 2.1, -3.5, -8.2, -10.8, -12.5],
    color: "hsl(38, 30%, 45%)",
  },
  {
    id: "10",
    nom: "Assurance Vie Generali",
    type: "liquidite",
    valeur: 84000,
    performance: 2.8,
    performanceAbsolute: 2352,
    allocation: 1.6,
    sparkline: [2.5, 2.6, 2.7, 2.7, 2.8, 2.8],
    color: "hsl(222, 8%, 40%)",
  },
];

export interface CoachMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  actions?: Array<{
    label: string;
    type: "primary" | "secondary";
  }>;
}

export const coachMessages: CoachMessage[] = [
  {
    id: "1",
    role: "assistant",
    content: "Bonjour Karim, votre patrimoine s'élève à 5,23M€ avec une performance de +2,3% ce mois-ci. Je remarque une forte exposition au secteur tech (42% de votre portefeuille actions). Souhaitez-vous que j'analyse les risques de corrélation ?",
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    actions: [
      { label: "Analyser les corrélations", type: "primary" },
      { label: "Voir les alternatives", type: "secondary" },
    ],
  },
  {
    id: "2",
    role: "user",
    content: "Oui, analyse les corrélations et propose des optimisations",
    timestamp: new Date(Date.now() - 7000000).toISOString(),
  },
  {
    id: "3",
    role: "assistant",
    content: "Votre coefficient de corrélation actions tech est de 0,78 (élevé). Apple et Microsoft évoluent de concert dans 78% des cas. Je recommande de diversifier vers l'immobilier commercial ou les obligations d'État pour réduire la volatilité de -18% à -12% en cas de correction tech.\n\nScénario suggéré : Vendre 15% des actions tech (€145k) et réinvestir dans un SCPI rendement 5,2% ou obligations AAA rendement 3,8%.",
    timestamp: new Date(Date.now() - 6800000).toISOString(),
    actions: [
      { label: "Simuler le scénario", type: "primary" },
      { label: "Comparer d'autres options", type: "secondary" },
    ],
  },
];

export interface AlerteCoach {
  id: string;
  type: "info" | "warning" | "recommendation";
  titre: string;
  message: string;
  actions: Array<{
    label: string;
    type: "primary" | "secondary";
  }>;
  timestamp: string;
}

export const alertesCoach: AlerteCoach[] = [
  {
    id: "1",
    type: "warning",
    titre: "Concentration Tech Élevée",
    message: "Votre exposition aux valeurs technologiques atteint 42%. Risque de volatilité accru.",
    actions: [
      { label: "Diversifier maintenant", type: "primary" },
      { label: "En savoir plus", type: "secondary" },
    ],
    timestamp: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: "2",
    type: "recommendation",
    titre: "Opportunité Immobilier",
    message: "Un bien d'investissement à Lyon 6e (rendement 4,8%) correspond à votre profil équilibré.",
    actions: [
      { label: "Voir le bien", type: "primary" },
      { label: "Calculer l'impact", type: "secondary" },
    ],
    timestamp: new Date(Date.now() - 7200000).toISOString(),
  },
  {
    id: "3",
    type: "info",
    titre: "Taux de Crédit en Baisse",
    message: "Les taux immobiliers sont passés à 3,2%. Votre capacité d'endettement actuelle : €1,2M.",
    actions: [
      { label: "Simuler un crédit", type: "primary" },
    ],
    timestamp: new Date(Date.now() - 10800000).toISOString(),
  },
  {
    id: "4",
    type: "recommendation",
    titre: "Fiscalité Crypto",
    message: "Vos moins-values crypto (-€54k) peuvent être utilisées pour optimiser votre impôt 2024.",
    actions: [
      { label: "Consulter un fiscaliste", type: "primary" },
      { label: "Voir la stratégie", type: "secondary" },
    ],
    timestamp: new Date(Date.now() - 14400000).toISOString(),
  },
];

export interface Expert {
  id: string;
  nom: string;
  specialite: string;
  rating: number;
  photo: string;
  tags: string[];
  description: string;
  tarifHoraire?: number;
  recommendedByAI?: boolean;
}

export const expertsDisponibles: Expert[] = [
  {
    id: "1",
    nom: "Marie Dubois",
    specialite: "Fiscaliste Crypto & Tech",
    rating: 4.9,
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    tags: ["Crypto", "Plus-values", "Optimisation fiscale"],
    description: "15 ans d'expérience en fiscalité des actifs numériques et tech.",
    tarifHoraire: 350,
    recommendedByAI: true,
  },
  {
    id: "2",
    nom: "Thomas Laurent",
    specialite: "Avocat Transmission Patrimoine",
    rating: 4.8,
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    tags: ["Succession", "Donation", "SCI"],
    description: "Expert en structuration patrimoniale pour entrepreneurs.",
    tarifHoraire: 420,
  },
  {
    id: "3",
    nom: "Sophie Martin",
    specialite: "Expert-Comptable Tech",
    rating: 4.7,
    photo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400",
    tags: ["Holding", "IS vs IR", "Optimisation charges"],
    description: "Accompagnement des startups et scale-ups en croissance.",
    tarifHoraire: 280,
  },
  {
    id: "4",
    nom: "Alexandre Petit",
    specialite: "Notaire Immobilier d'Exception",
    rating: 4.9,
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    tags: ["Immobilier", "VEFA", "Démembrement"],
    description: "Spécialiste des transactions premium Paris & Île-de-France.",
    tarifHoraire: 0, // Rémunéré à l'acte
    recommendedByAI: true,
  },
];

export const correlationMatrix = {
  overall: 0.42,
  techCorrelation: 0.78,
  immobilierCorrelation: 0.12,
  cryptoCorrelation: 0.65,
};

// Hero Status - Message rassurant
export interface HeroStatus {
  status: "success" | "warning" | "info";
  title: string;
  message: string;
  metrics: {
    portfolio: string;
    liquidites: string;
    performance: string;
  };
}

export const heroStatus: HeroStatus = {
  status: "success",
  title: "Tout est en ordre, Karim",
  message: "Votre patrimoine est parfaitement géré. Quelques points à valider lorsque vous aurez 20 minutes cette semaine.",
  metrics: {
    portfolio: "Équilibré",
    liquidites: "850K€",
    performance: "Au-dessus des objectifs",
  },
};

// Tâches de la semaine (2-3 max)
export interface WeeklyTask {
  id: string;
  titre: string;
  description: string;
  timeEstimate: string;
  impact: string;
  priority: "high" | "medium";
  actions: Array<{
    label: string;
    type: "primary" | "secondary";
  }>;
}

export const weeklyTasks: WeeklyTask[] = [
  {
    id: "1",
    titre: "Versement PER avant fin d'année",
    description: "Vous pouvez encore placer 8K€ sur votre PER pour optimiser votre fiscalité 2024.",
    timeEstimate: "20 min",
    impact: "Économie de 8K€ d'impôts",
    priority: "high",
    actions: [
      { label: "Effectuer maintenant", type: "primary" },
      { label: "Reporter", type: "secondary" },
    ],
  },
  {
    id: "2",
    titre: "Position Tesla en baisse",
    description: "Vos actions Tesla ont baissé de 12%. Cette correction est normale dans le contexte actuel. Vous pouvez conserver (vision long terme) ou arbitrer pour sécuriser.",
    timeEstimate: "10 min",
    impact: "Décision d'arbitrage",
    priority: "medium",
    actions: [
      { label: "Consulter l'analyse", type: "primary" },
      { label: "Reporter la décision", type: "secondary" },
    ],
  },
];

// Opportunités (collapsible)
export interface Opportunity {
  id: string;
  titre: string;
  description: string;
  type: "credit" | "expert" | "investissement";
}

export const opportunities: Opportunity[] = [
  {
    id: "1",
    titre: "Capacité de crédit disponible",
    description: "650K€ mobilisables pour votre prochain investissement immobilier",
    type: "credit",
  },
  {
    id: "2",
    titre: "Fiscaliste crypto disponible",
    description: "Marie Dubois peut vous accompagner dans l'optimisation de vos moins-values crypto",
    type: "expert",
  },
  {
    id: "3",
    titre: "SCPI rendement 5,2%",
    description: "Opportunité en immobilier commercial avec rendement attractif",
    type: "investissement",
  },
];

// Message coach bienveillant
export const coachWelcomeMessage = {
  role: "assistant" as const,
  content: "Cette semaine, deux points à valider. Pour le reste, tout est parfaitement sous contrôle.",
  tone: "bienveillant",
};
