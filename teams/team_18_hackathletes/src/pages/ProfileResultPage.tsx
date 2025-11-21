import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useUser } from '@/contexts/UserContext';
import { preliminaryQuestions } from '@/data/preliminaryQuestions';
import Logo from '@/components/Logo';

const ProfileResultPage = () => {
  const navigate = useNavigate();
  const { userData } = useUser();
  const profile = userData.profile;

  if (!profile) {
    navigate('/questionnaire');
    return null;
  }

  const getQuestionLabel = (id: string) => {
    const question = preliminaryQuestions.find(q => q.id === id);
    return question?.question || id;
  };

  return (
    <div className="min-h-screen bg-background p-4 py-12">
      <Logo />
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-semibold text-prussian">Votre Profil</h1>
          <p className="text-lg text-muted-foreground">Récapitulatif de vos informations</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl shadow-card p-8 space-y-6"
        >
          <h2 className="text-2xl font-semibold text-prussian">Vos réponses</h2>
          
          <div className="space-y-4">
            {Object.entries(profile.answers).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-4 bg-muted rounded-xl"
              >
                <p className="text-sm text-muted-foreground mb-2">
                  {getQuestionLabel(key)}
                </p>
                <p className="text-lg font-medium text-foreground">
                  {value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            onClick={() => navigate('/bank-connection')}
            className="w-full h-14 rounded-xl bg-primary hover:bg-secondary text-primary-foreground font-medium text-lg transition-smooth"
          >
            Continuer
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileResultPage;
