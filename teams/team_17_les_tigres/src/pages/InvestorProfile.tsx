import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { investorQuestions, calculateProfile } from "@/data/investorQuestions";
import { Answer } from "@/types/investorProfile";
import { InvestorProfileResults } from "@/components/InvestorProfileResults";
import { useLanguage } from "@/contexts/LanguageContext";

const InvestorProfile = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string | string[] | number>([]);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = investorQuestions[currentStep];
  const progress = ((currentStep + 1) / investorQuestions.length) * 100;

  // Charger la réponse existante si disponible
  useEffect(() => {
    const existing = answers.find(a => a.questionId === currentQuestion.id);
    if (existing) {
      setCurrentAnswer(existing.value);
    } else {
      setCurrentAnswer(currentQuestion.type === 'multiple' ? [] : '');
    }
  }, [currentStep, currentQuestion, answers]);

  const handleSingleChoice = (value: string) => {
    setCurrentAnswer(value);
  };

  const handleMultipleChoice = (value: string, checked: boolean) => {
    const current = Array.isArray(currentAnswer) ? currentAnswer : [];
    if (checked) {
      setCurrentAnswer([...current, value]);
    } else {
      setCurrentAnswer(current.filter(v => v !== value));
    }
  };

  const isAnswerValid = () => {
    if (!currentQuestion.required) return true;
    if (Array.isArray(currentAnswer)) {
      return currentAnswer.length > 0;
    }
    return currentAnswer !== '';
  };

  const handleNext = () => {
    // Sauvegarder la réponse
    const newAnswers = answers.filter(a => a.questionId !== currentQuestion.id);
    newAnswers.push({
      questionId: currentQuestion.id,
      value: currentAnswer
    });
    setAnswers(newAnswers);

    if (currentStep < investorQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Dernière question - afficher les résultats
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (showResults) {
    const profile = calculateProfile(answers);
    return <InvestorProfileResults profile={profile} onRestart={() => {
      setCurrentStep(0);
      setAnswers([]);
      setShowResults(false);
    }} />;
  }

  const categoryLabels: Record<string, string> = {
    situation: t('profile.category.situation'),
    knowledge: t('profile.category.knowledge'),
    risk: t('profile.category.risk'),
    objectives: t('profile.category.objectives'),
    capacity: t('profile.category.capacity'),
    esg: t('profile.category.esg')
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-8 max-w-4xl">
        {/* En-tête avec progression */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-sm text-muted-foreground">
                {t('profile.step')} {currentStep + 1} {t('profile.of')} {investorQuestions.length}
              </span>
              <p className="text-sm font-medium text-champagne">
                {categoryLabels[currentQuestion.category]}
              </p>
            </div>
            <Button
              variant="ghost"
              onClick={() => navigate('/patrimoine')}
              className="text-muted-foreground hover:text-foreground"
            >
              {t('profile.quit')}
            </Button>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <div className="bg-card border border-border rounded-lg p-8 mb-6 shadow-premium">
          <h2 className="text-2xl font-serif text-foreground mb-3">
            {currentQuestion.question}
          </h2>
          {currentQuestion.description && (
            <p className="text-muted-foreground mb-6">
              {currentQuestion.description}
            </p>
          )}

          {/* Réponses */}
          <div className="space-y-4">
            {currentQuestion.type === 'single' && currentQuestion.options && (
              <RadioGroup
                value={currentAnswer as string}
                onValueChange={handleSingleChoice}
              >
                {currentQuestion.options.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-champagne/50 transition-colors cursor-pointer"
                    onClick={() => handleSingleChoice(option.value)}
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label
                      htmlFor={option.value}
                      className="flex-1 cursor-pointer text-base"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {currentQuestion.type === 'multiple' && currentQuestion.options && (
              <div className="space-y-3">
                {currentQuestion.options.map((option) => {
                  const isChecked = Array.isArray(currentAnswer) && currentAnswer.includes(option.value);
                  return (
                    <div
                      key={option.value}
                      className={`flex items-center space-x-3 p-4 border rounded-lg transition-colors cursor-pointer ${
                        isChecked ? 'border-champagne bg-champagne/5' : 'border-border hover:border-champagne/50'
                      }`}
                      onClick={() => handleMultipleChoice(option.value, !isChecked)}
                    >
                      <Checkbox
                        id={option.value}
                        checked={isChecked}
                        onCheckedChange={(checked) => handleMultipleChoice(option.value, checked as boolean)}
                      />
                      <Label
                        htmlFor={option.value}
                        className="flex-1 cursor-pointer text-base"
                      >
                        {option.label}
                      </Label>
                      {isChecked && (
                        <CheckCircle2 className="w-5 h-5 text-champagne" />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="border-border hover:bg-accent"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            {t('profile.back')}
          </Button>

          <Button
            onClick={handleNext}
            disabled={!isAnswerValid()}
            className="bg-champagne text-white hover:bg-champagne-muted"
          >
            {currentStep === investorQuestions.length - 1 ? t('profile.results') : t('profile.next')}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Indicateur de questions */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          {currentQuestion.required ? (
            <span>{t('profile.required')}</span>
          ) : (
            <span>{t('profile.optional')}</span>
          )}
        </div>
      </main>
    </div>
  );
};

export default InvestorProfile;
