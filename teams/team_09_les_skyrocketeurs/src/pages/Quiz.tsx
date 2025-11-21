import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, CheckCircle, XCircle, Zap, Award, TrendingUp, Sparkles, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";
import zone2Img from "@/assets/zone2-desert.png";
import quizReturn from "@/assets/quiz-return.png";
import quizInflation from "@/assets/quiz-inflation.png";
import quizRisk from "@/assets/quiz-risk.png";
import quizAsset from "@/assets/quiz-asset.png";
import quizDiversification from "@/assets/quiz-diversification.png";
import quizVideo from "@/assets/quiz-video-day2.mp4";

const quizQuestions = [
  {
    question: "Le rendement d'un investissement représente le gain ou la perte financière générée",
    correctAnswer: true,
    explanation: "Le rendement représente le gain ou la perte générée par un investissement, généralement exprimé en pourcentage du capital initial.",
    image: quizReturn
  },
  {
    question: "L'inflation est l'augmentation générale des prix au fil du temps",
    correctAnswer: true,
    explanation: "L'inflation est l'augmentation générale et durable des prix des biens et services, ce qui réduit le pouvoir d'achat de la monnaie.",
    image: quizInflation
  },
  {
    question: "Plus le risque d'un investissement est élevé, plus le rendement potentiel est élevé",
    correctAnswer: true,
    explanation: "En général, plus un investissement est risqué, plus le rendement potentiel est élevé pour compenser ce risque pris par l'investisseur.",
    image: quizRisk
  },
  {
    question: "Un actif est une dette à rembourser",
    correctAnswer: false,
    explanation: "Un actif est un bien ou un placement qui possède une valeur économique et qui peut générer des revenus ou prendre de la valeur. Une dette est un passif, pas un actif.",
    image: quizAsset
  },
  {
    question: "Diversifier ses investissements permet de réduire le risque global",
    correctAnswer: true,
    explanation: "La diversification permet de répartir les risques en investissant dans différents types d'actifs, réduisant ainsi l'impact d'une mauvaise performance d'un seul investissement.",
    image: quizDiversification
  }
];

const Quiz = () => {
  const { zoneId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showVideoDialog, setShowVideoDialog] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(boolean | null)[]>(new Array(quizQuestions.length).fill(null));
  const [completed, setCompleted] = useState(false);
  const [showCorrection, setShowCorrection] = useState(false);
  const [swipeStartX, setSwipeStartX] = useState<number>(0);
  const [swipeOffset, setSwipeOffset] = useState<number>(0);
  const [isAnswering, setIsAnswering] = useState(false);

  const question = quizQuestions[currentQuestion];

  const handleSwipeStart = (clientX: number) => {
    if (showExplanation || isAnswering) return;
    setSwipeStartX(clientX);
  };

  const handleSwipeMove = (clientX: number) => {
    if (showExplanation || isAnswering || swipeStartX === 0) return;
    const offset = clientX - swipeStartX;
    setSwipeOffset(offset);
  };

  const handleSwipeEnd = () => {
    if (showExplanation || isAnswering) {
      setSwipeOffset(0);
      return;
    }

    const threshold = 100; // pixels nécessaires pour valider le swipe
    
    if (Math.abs(swipeOffset) > threshold) {
      setIsAnswering(true);
      const answer = swipeOffset > 0; // true si swipe à droite (oui), false si à gauche (non)
      handleAnswer(answer);
    }
    
    setSwipeOffset(0);
    setSwipeStartX(0);
  };

  const handleAnswer = (answer: boolean) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answer);
    setShowExplanation(true);

    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = answer;
    setUserAnswers(newUserAnswers);

    if (answer === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setIsAnswering(false);
    } else {
      setCompleted(true);
    }
  };

  // Page de correction
  if (showCorrection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Correction du Quiz
            </h1>
            <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-bold">Score: {score}/{quizQuestions.length}</span>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-6">
            {quizQuestions.map((q, index) => {
              const userAnswer = userAnswers[index];
              const isCorrect = userAnswer === q.correctAnswer;
              
              return (
                <Card key={index} className={`p-6 border-2 ${isCorrect ? 'border-secondary/50' : 'border-destructive/50'}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isCorrect ? 'bg-secondary' : 'bg-destructive'
                    }`}>
                      {isCorrect ? <CheckCircle className="w-6 h-6 text-white" /> : <XCircle className="w-6 h-6 text-white" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Question {index + 1}</h3>
                      <p className="text-lg mb-4">{q.question}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div
                          className={`p-3 rounded-lg border-2 ${
                            q.correctAnswer
                              ? 'bg-secondary/20 border-secondary'
                              : 'bg-muted border-border'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xl">✓</span>
                            <span className={q.correctAnswer ? 'font-bold' : ''}>
                              Vrai
                            </span>
                            {q.correctAnswer && (
                              <span className="ml-auto text-secondary font-bold">Bonne réponse</span>
                            )}
                            {userAnswer === true && !q.correctAnswer && (
                              <span className="ml-auto text-destructive font-bold">Votre réponse</span>
                            )}
                          </div>
                        </div>

                        <div
                          className={`p-3 rounded-lg border-2 ${
                            !q.correctAnswer
                              ? 'bg-secondary/20 border-secondary'
                              : 'bg-muted border-border'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xl">✗</span>
                            <span className={!q.correctAnswer ? 'font-bold' : ''}>
                              Faux
                            </span>
                            {!q.correctAnswer && (
                              <span className="ml-auto text-secondary font-bold">Bonne réponse</span>
                            )}
                            {userAnswer === false && q.correctAnswer && (
                              <span className="ml-auto text-destructive font-bold">Votre réponse</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                        <div className="flex items-start gap-2">
                          <span className="text-2xl">💡</span>
                          <div>
                            <h4 className="font-bold mb-1">Explication</h4>
                            <p className="text-muted-foreground">{q.explanation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link to="/quiz/2" className="flex-1">
                <Button size="lg" variant="outline" className="w-full">
                  Refaire le quiz
                </Button>
              </Link>
              <Link to="/map" className="flex-1">
                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary">
                  Continuer l'aventure
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (completed) {
    const earnedCoins = score * 30;
    const earnedXP = score * 20;
    const isNewStreak = true;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
        <Card className="max-w-3xl w-full overflow-hidden">
          {/* Header with image */}
          <div className="relative h-64">
            <img 
              src={zone2Img}
              alt="Quiz complété"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-green-600 flex items-center justify-center text-6xl shadow-2xl animate-scale-in">
                  {score === quizQuestions.length ? "🏆" : score >= 3 ? "🎉" : "💪"}
                </div>
                <h2 className="text-5xl font-bold text-white drop-shadow-lg animate-fade-in">
                  {score === quizQuestions.length ? "Parfait !" : score >= 3 ? "Bien joué !" : "Continue !"}
                </h2>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="text-center mb-8">
              <p className="text-2xl mb-2">
                Tu as obtenu <span className="text-primary font-bold text-3xl">{score}/{quizQuestions.length}</span> bonnes réponses
              </p>
              <p className="text-muted-foreground">
                {score === quizQuestions.length 
                  ? "Incroyable ! Tu maîtrises parfaitement ce sujet !" 
                  : score >= 3 
                  ? "Excellent travail ! Continue comme ça !" 
                  : "Ne t'inquiète pas, chaque essai te fait progresser !"}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-6 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border-2 border-accent/30 text-center">
                <div className="text-4xl mb-3">🪙</div>
                <div className="text-3xl font-bold text-accent mb-1">+{earnedCoins}</div>
                <div className="text-sm text-muted-foreground">InvestCoins</div>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 text-center">
                <div className="text-4xl mb-3">⭐</div>
                <div className="text-3xl font-bold text-primary mb-1">+{earnedXP}</div>
                <div className="text-sm text-muted-foreground">XP</div>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 border-2 border-secondary/30 text-center">
                <div className="text-4xl mb-3">🔥</div>
                <div className="text-3xl font-bold text-secondary mb-1">+1</div>
                <div className="text-sm text-muted-foreground">Jour de Streak</div>
                {isNewStreak && (
                  <div className="text-xs text-secondary font-medium mt-1">Nouveau record !</div>
                )}
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 border-2 border-purple-500/30 text-center">
                <div className="text-4xl mb-3">🏅</div>
                <div className="text-2xl font-bold mb-1">Badge</div>
                <div className="text-sm text-muted-foreground">Débloqué</div>
              </div>
            </div>

            {/* Progress info */}
            <div className="p-6 rounded-xl bg-muted/50 border border-border mb-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="font-bold">Ta progression</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground mb-1">Niveau Zone 2</div>
                  <div className="font-bold">3/5 complétés</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Prochaine zone</div>
                  <div className="font-bold text-secondary">La Forêt (bientôt)</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Classement</div>
                  <div className="font-bold text-accent">#42 → #38 📈</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => setShowCorrection(true)}
                className="flex-1 bg-gradient-to-r from-primary to-secondary"
              >
                Voir la correction
              </Button>
              <Link to="/map" className="flex-1">
                <Button size="lg" variant="outline" className="w-full">
                  Continuer l'aventure
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Dialog vidéo de cours */}
      <Dialog open={showVideoDialog} onOpenChange={setShowVideoDialog}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              🎓 Cours du jour 2
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="w-full rounded-lg overflow-hidden bg-black" style={{ aspectRatio: '9/16' }}>
              <video 
                controls 
                className="w-full h-full object-contain"
                src={quizVideo}
              >
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Regarde cette vidéo pour mieux comprendre les concepts
            </p>
            <Button 
              onClick={() => setShowVideoDialog(false)} 
              className="w-full bg-gradient-to-r from-primary to-secondary"
              size="lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Commencer le quiz
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/map">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quitter le quiz
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Flow
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Zap className="w-4 h-4 text-accent" />
              <span className="font-bold">{score * 30}</span>
              <span className="text-muted-foreground text-xs">coins gagnés</span>
            </div>
            <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-bold">{currentQuestion + 1}/{quizQuestions.length}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-muted">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
        />
      </div>

      {/* Quiz Content */}
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl animate-scale-in">
            {/* Question Image Header */}
            <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
              <img 
                src={question.image}
                alt="Question illustration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent"></div>
              
              {/* Floating Question Number */}
              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl">
                <span className="text-xl sm:text-3xl font-bold text-white">{currentQuestion + 1}</span>
              </div>

              {/* Score indicator */}
              <div className="absolute top-3 right-3 sm:top-6 sm:right-6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-card/90 backdrop-blur-sm border-2 border-accent/30 shadow-lg">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                  <span className="font-bold text-accent text-sm sm:text-base">{score * 30} coins</span>
                </div>
              </div>

              {/* Question text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-tight">
                  {question.question}
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              {/* Instructions de swipe */}
              {!showExplanation && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                  <p className="text-center text-xs sm:text-sm text-muted-foreground">
                    👈 Swipe à gauche pour <span className="font-bold text-destructive">Faux</span> • 
                    Swipe à droite pour <span className="font-bold text-secondary">Vrai</span> 👉
                  </p>
                </div>
              )}

              {/* Card swipeable */}
              <div
                className="relative touch-none select-none"
                onMouseDown={(e) => handleSwipeStart(e.clientX)}
                onMouseMove={(e) => handleSwipeMove(e.clientX)}
                onMouseUp={handleSwipeEnd}
                onMouseLeave={handleSwipeEnd}
                onTouchStart={(e) => handleSwipeStart(e.touches[0].clientX)}
                onTouchMove={(e) => handleSwipeMove(e.touches[0].clientX)}
                onTouchEnd={handleSwipeEnd}
              >
                <div
                  className="transition-transform duration-200"
                  style={{
                    transform: `translateX(${swipeOffset}px) rotate(${swipeOffset * 0.05}deg)`,
                  }}
                >
                  <Card className={`p-6 sm:p-8 text-center border-2 ${
                    selectedAnswer === true && showExplanation
                      ? question.correctAnswer ? 'border-secondary bg-secondary/10' : 'border-destructive bg-destructive/10'
                      : selectedAnswer === false && showExplanation
                      ? !question.correctAnswer ? 'border-secondary bg-secondary/10' : 'border-destructive bg-destructive/10'
                      : 'border-primary/50'
                  }`}>
                    <div className={`text-4xl sm:text-6xl mb-4 sm:mb-6 font-bold ${
                      showExplanation
                        ? (selectedAnswer === question.correctAnswer ? 'text-secondary' : 'text-destructive')
                        : 'text-foreground'
                    }`}>
                      {selectedAnswer === true && showExplanation ? (
                        question.correctAnswer ? '✓' : '✗'
                      ) : selectedAnswer === false && showExplanation ? (
                        !question.correctAnswer ? '✓' : '✗'
                      ) : '❓'}
                    </div>
                    <p className={`text-lg sm:text-xl font-medium ${
                      showExplanation
                        ? (selectedAnswer === question.correctAnswer ? 'text-secondary' : 'text-destructive')
                        : 'text-foreground'
                    }`}>
                      {showExplanation 
                        ? (selectedAnswer === question.correctAnswer ? 'Bonne réponse !' : 'Mauvaise réponse')
                        : 'Vrai ou Faux ?'
                      }
                    </p>
                  </Card>
                </div>

                {/* Indicateurs de direction pendant le swipe */}
                {swipeOffset < -50 && !showExplanation && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full px-2 sm:px-4">
                    <div className="bg-destructive text-white px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-bold animate-pulse text-sm sm:text-base">
                      FAUX
                    </div>
                  </div>
                )}
                {swipeOffset > 50 && !showExplanation && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full px-2 sm:px-4">
                    <div className="bg-secondary text-white px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-bold animate-pulse text-sm sm:text-base">
                      VRAI
                    </div>
                  </div>
                )}
              </div>

              {/* Boutons alternatifs */}
              {!showExplanation && (
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => handleAnswer(false)}
                    className="border-2 border-destructive/50 hover:bg-destructive/10 hover:border-destructive text-base sm:text-lg py-4 sm:py-6"
                  >
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Faux
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => handleAnswer(true)}
                    className="border-2 border-secondary/50 hover:bg-secondary/10 hover:border-secondary text-base sm:text-lg py-4 sm:py-6"
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Vrai
                  </Button>
                </div>
              )}

              {/* Explication */}
              {showExplanation && (
                <div className="mt-4 sm:mt-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border-2 border-primary/20 animate-fade-in">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-2xl sm:text-3xl">💡</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">Explication</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg">{question.explanation}</p>
                    </div>
                  </div>
                </div>
              )}


              {showExplanation && (
                <Button 
                  onClick={handleNext}
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-lg py-6 animate-fade-in shadow-lg"
                >
                  <span className="mr-2">
                    {currentQuestion < quizQuestions.length - 1 ? "Question suivante" : "Voir les résultats"}
                  </span>
                  <Sparkles className="w-5 h-5" />
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
