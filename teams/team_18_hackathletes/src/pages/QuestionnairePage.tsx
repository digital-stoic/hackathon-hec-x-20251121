import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Mic, MicOff } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';
import { preliminaryQuestions } from '@/data/preliminaryQuestions';
import { ProgressBar } from '@/components/ProgressBar';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import Logo from '@/components/Logo';

const QuestionnairePage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentAnswer, setCurrentAnswer] = useState('');
  const navigate = useNavigate();
  const { setProfile } = useUser();
  const { isListening, transcript, startListening, stopListening, resetTranscript, isSupported } = useSpeechRecognition();

  const currentQuestion = preliminaryQuestions[currentQuestionIndex];
  const totalQuestions = preliminaryQuestions.length;

  useEffect(() => {
    if (transcript) {
      setCurrentAnswer(transcript);
    }
  }, [transcript]);

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      resetTranscript();
      startListening();
    }
  };

  const handleNext = () => {
    if (!currentAnswer.trim()) return;

    const newAnswers = {
      ...answers,
      [currentQuestion.id]: currentAnswer
    };
    setAnswers(newAnswers);

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswer('');
      resetTranscript();
    } else {
      setProfile({ 
        stage: 'entrepreneur', 
        answers: newAnswers
      });
      navigate('/profile-result');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <Logo />
      <div className="w-full max-w-2xl space-y-8">
        <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-2xl shadow-card p-8 space-y-6"
          >
            <h2 className="text-2xl font-semibold text-prussian">
              {currentQuestion.question}
            </h2>

            {currentQuestion.type === 'radio' && currentQuestion.options ? (
              <RadioGroup 
                value={currentAnswer} 
                onValueChange={setCurrentAnswer}
                className="space-y-3"
              >
                {currentQuestion.options.map((option) => (
                  <div key={option} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth">
                    <RadioGroupItem value={option} id={option} />
                    <Label 
                      htmlFor={option} 
                      className="flex-1 cursor-pointer text-base"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    type={currentQuestion.type === 'number' ? 'number' : 'text'}
                    value={currentAnswer}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    placeholder="Votre réponse..."
                    className="w-full h-12 px-4 pr-12 rounded-xl border-2 border-border focus:border-primary transition-smooth"
                  />
                  {isSupported && currentQuestion.type !== 'number' && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={toggleListening}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 ${isListening ? 'text-primary animate-pulse' : 'text-muted-foreground'}`}
                    >
                      {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                    </Button>
                  )}
                </div>
                {isListening && (
                  <p className="text-sm text-muted-foreground animate-pulse">
                    Écoute en cours... Parlez maintenant
                  </p>
                )}
              </div>
            )}

            <Button
              onClick={handleNext}
              disabled={!currentAnswer.trim()}
              className="w-full h-12 rounded-xl bg-primary hover:bg-secondary text-primary-foreground font-medium transition-smooth"
            >
              {currentQuestionIndex < totalQuestions - 1 ? 'Question suivante' : 'Terminer'}
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuestionnairePage;
