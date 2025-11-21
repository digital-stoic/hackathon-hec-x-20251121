import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';
import Logo from '@/components/Logo';

const AskQuestionPage = () => {
  const [question, setQuestion] = useState('');
  const navigate = useNavigate();
  const { setCurrentQuestion } = useUser();

  const handleSubmit = () => {
    if (!question.trim()) return;
    setCurrentQuestion(question);
    navigate('/board-response');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="mb-4 hover:bg-muted"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour au Dashboard
        </Button>
      </div>
      <Logo />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl space-y-8"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-semibold text-prussian">Posez votre question</h1>
          <p className="text-lg text-muted-foreground">Le Board est à votre écoute</p>
        </div>

        <div className="bg-card rounded-2xl shadow-card p-8 space-y-6">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ex : Dois-je recruter un COO maintenant ?"
            className="w-full min-h-[200px] p-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-smooth resize-none bg-background text-lg"
          />

          <Button
            onClick={handleSubmit}
            disabled={!question.trim()}
            className="w-full h-14 rounded-xl bg-primary hover:bg-secondary text-primary-foreground font-medium text-lg transition-smooth"
          >
            Envoyer
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default AskQuestionPage;
