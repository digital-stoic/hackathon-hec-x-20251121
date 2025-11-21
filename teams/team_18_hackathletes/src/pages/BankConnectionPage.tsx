import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useUser } from '@/contexts/UserContext';
import { Check } from 'lucide-react';
import Logo from '@/components/Logo';

const BankConnectionPage = () => {
  const [proConnected, setProConnected] = useState(false);
  const [persoConnected, setPersoConnected] = useState(false);
  const navigate = useNavigate();
  const { setAccounts } = useUser();

  const handleConnect = (type: 'pro' | 'perso') => {
    setTimeout(() => {
      if (type === 'pro') {
        setProConnected(true);
        setAccounts({ 
          pro: { comptePro: 45000, compteTitre: 28000, actions: 15000, total: 88000 }, 
          perso: persoConnected ? { compteTitre: 65000, pel: 25000, actions: 35000, total: 125000 } : { total: 0 }
        });
      } else {
        setPersoConnected(true);
        setAccounts({ 
          pro: proConnected ? { comptePro: 45000, compteTitre: 28000, actions: 15000, total: 88000 } : { total: 0 }, 
          perso: { compteTitre: 65000, pel: 25000, actions: 35000, total: 125000 }
        });
      }
    }, 500);
  };

  const canContinue = proConnected && persoConnected;

  return (
    <div className="min-h-screen bg-background p-4 py-12">
      <Logo />
      <div className="max-w-2xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-semibold text-prussian">Connexion Bancaire</h1>
          <p className="text-lg text-muted-foreground">Connectez toutes vos banques pour une vue holistique de votre patrimoine</p>
          <div className="bg-muted/30 rounded-xl p-4 max-w-xl mx-auto">
            <p className="text-sm text-foreground/80">
              🏦 Toutes les banques sont supportées • Vision complète de vos finances professionnelles et personnelles
            </p>
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl shadow-card p-8 space-y-4"
          >
            <h2 className="text-xl font-semibold text-prussian">Comptes Professionnels</h2>
            <p className="text-sm text-muted-foreground">Connectez une ou plusieurs banques professionnelles</p>
            {proConnected ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-3 text-primary"
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-lg font-medium">Connexion réussie</span>
              </motion.div>
            ) : (
              <Button
                onClick={() => handleConnect('pro')}
                className="w-full h-12 rounded-xl bg-primary hover:bg-secondary text-primary-foreground font-medium transition-smooth"
              >
                Ajouter un compte
              </Button>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-2xl shadow-card p-8 space-y-4"
          >
            <h2 className="text-xl font-semibold text-prussian">Comptes Personnels</h2>
            <p className="text-sm text-muted-foreground">Connectez une ou plusieurs banques personnelles</p>
            {persoConnected ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-3 text-primary"
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-lg font-medium">Connexion réussie</span>
              </motion.div>
            ) : (
              <Button
                onClick={() => handleConnect('perso')}
                className="w-full h-12 rounded-xl bg-primary hover:bg-secondary text-primary-foreground font-medium transition-smooth"
              >
                Ajouter un compte
              </Button>
            )}
          </motion.div>
        </div>

        {canContinue && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button
              onClick={() => navigate('/board-intro')}
              className="w-full h-14 rounded-xl bg-primary hover:bg-secondary text-primary-foreground font-medium text-lg transition-smooth"
            >
              Continuer vers mon Board
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BankConnectionPage;
