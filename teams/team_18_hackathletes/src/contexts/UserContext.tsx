import { createContext, useContext, useState, ReactNode } from 'react';

interface UserProfile {
  stage: string;
  answers: Record<string, string>;
  persona?: string;
  traits?: string[];
}

interface AccountDetails {
  comptePro?: number;
  compteTitre?: number;
  pel?: number;
  actions?: number;
  total: number;
}

interface UserData {
  email: string;
  profile: UserProfile | null;
  accounts: {
    pro: AccountDetails;
    perso: AccountDetails;
  };
  currentQuestion: string;
}

interface UserContextType {
  userData: UserData;
  setEmail: (email: string) => void;
  setProfile: (profile: UserProfile) => void;
  setAccounts: (accounts: { pro: AccountDetails; perso: AccountDetails }) => void;
  setCurrentQuestion: (question: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData>({
    email: '',
    profile: null,
    accounts: { 
      pro: { total: 0 }, 
      perso: { total: 0 } 
    },
    currentQuestion: ''
  });

  const setEmail = (email: string) => {
    setUserData(prev => ({ ...prev, email }));
  };

  const setProfile = (profile: UserProfile) => {
    setUserData(prev => ({ ...prev, profile }));
  };

  const setAccounts = (accounts: { pro: AccountDetails; perso: AccountDetails }) => {
    setUserData(prev => ({ ...prev, accounts }));
  };

  const setCurrentQuestion = (question: string) => {
    setUserData(prev => ({ ...prev, currentQuestion: question }));
  };

  return (
    <UserContext.Provider value={{ userData, setEmail, setProfile, setAccounts, setCurrentQuestion }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
