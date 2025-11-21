export interface PreliminaryQuestion {
  id: string;
  question: string;
  type: 'radio' | 'text' | 'number' | 'select';
  options?: string[];
  followUp?: {
    condition: string;
    questions: Array<{
      id: string;
      question: string;
      type: 'text' | 'number';
    }>;
  };
}

export const preliminaryQuestions: PreliminaryQuestion[] = [
  {
    id: 'age',
    question: 'Quel âge avez-vous ?',
    type: 'number'
  },
  {
    id: 'marital',
    question: 'Quelle est votre situation familiale actuelle ?',
    type: 'radio',
    options: ['Célibataire', 'En couple', 'Marié(e)', 'Pacsé(e)', 'Divorcé(e)', 'Veuf(ve)']
  },
  {
    id: 'housing',
    question: 'Quelle est votre situation de logement ?',
    type: 'radio',
    options: ['Propriétaire', 'Locataire', 'Hébergé', 'En colocation']
  },
  {
    id: 'hasChildren',
    question: 'Avez-vous des enfants ou des personnes à charge ?',
    type: 'radio',
    options: ['Oui', 'Non']
  },
  {
    id: 'revenue',
    question: 'Quel est le CA de votre entreprise ? (en euros)',
    type: 'number'
  },
  {
    id: 'employees',
    question: 'Combien d\'employés avez-vous ?',
    type: 'number'
  }
];
