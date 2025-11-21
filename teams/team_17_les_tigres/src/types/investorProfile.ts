export type QuestionType = 'single' | 'multiple' | 'slider' | 'number';

export interface QuestionOption {
  label: string;
  value: string;
  points: {
    risk?: number;
    knowledge?: number;
    capacity?: number;
    esg?: number;
  };
}

export interface Question {
  id: string;
  category: 'situation' | 'knowledge' | 'risk' | 'objectives' | 'capacity' | 'esg';
  question: string;
  description?: string;
  type: QuestionType;
  options?: QuestionOption[];
  min?: number;
  max?: number;
  unit?: string;
  required: boolean;
}

export interface Answer {
  questionId: string;
  value: string | string[] | number;
}

export interface InvestorProfile {
  riskProfile: 'sécuritaire' | 'défensif' | 'équilibré' | 'dynamique' | 'offensif';
  knowledgeLevel: 'novice' | 'informé' | 'expérimenté';
  lossCapacity: 'très faible' | 'faible' | 'moyenne' | 'élevée' | 'très élevée';
  objectives: string[];
  investmentHorizon: string;
  esgPreferences: {
    active: boolean;
    themes: string[];
    minPercentage: number;
  };
  scores: {
    risk: number;
    knowledge: number;
    capacity: number;
  };
}
