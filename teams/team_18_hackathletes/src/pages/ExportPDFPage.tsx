import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, FileDown } from 'lucide-react';
import Logo from '@/components/Logo';

const ExportPDFPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <Logo />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="bg-card rounded-2xl shadow-card p-8 space-y-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto"
          >
            <Check className="w-10 h-10 text-primary-foreground" />
          </motion.div>

          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold text-prussian">Export réussi !</h1>
            <p className="text-muted-foreground">Votre document a été généré avec succès</p>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => window.alert('Simulation : Le PDF serait téléchargé ici')}
              className="w-full h-12 rounded-xl bg-primary hover:bg-secondary text-primary-foreground font-medium transition-smooth flex items-center justify-center gap-2"
            >
              <FileDown className="w-5 h-5" />
              Télécharger le PDF
            </Button>

            <Button
              onClick={() => navigate('/dashboard')}
              variant="outline"
              className="w-full h-12 rounded-xl border-2 border-border hover:bg-muted font-medium transition-smooth"
            >
              Retour au Dashboard
            </Button>

            <Button
              onClick={() => navigate('/ask-question')}
              variant="outline"
              className="w-full h-12 rounded-xl border-2 border-border hover:bg-muted font-medium transition-smooth"
            >
              Poser une nouvelle question
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExportPDFPage;
