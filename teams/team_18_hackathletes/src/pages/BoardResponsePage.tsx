import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Loader2, ArrowLeft } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import jadeCfo from '@/assets/jade-cfo.png';
import pierreCoo from '@/assets/sam-coo.png';
import onyxImpact from '@/assets/maya-impact.png';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Logo from '@/components/Logo';

interface BoardMember {
  name: string;
  role: string;
  response: string;
}

const BoardResponsePage = () => {
  const navigate = useNavigate();
  const { userData } = useUser();
  const { toast } = useToast();
  const [boardResponses, setBoardResponses] = useState<BoardMember[]>([]);
  const [synthesis, setSynthesis] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);
  const [showContactDialog, setShowContactDialog] = useState(false);

  const memberImages: Record<string, string> = {
    'Jade': jadeCfo,
    'Pierre': pierreCoo,
    'Onyx': onyxImpact
  };

  useEffect(() => {
    const generateResponses = async () => {
      if (!userData.currentQuestion) {
        navigate('/ask-question');
        return;
      }

      setIsLoading(true);
      try {
        const { data, error } = await supabase.functions.invoke('generate-board-response', {
          body: {
            question: userData.currentQuestion,
            profile: userData.profile
          }
        });

        if (error) {
          console.error('Error generating responses:', error);
          toast({
            title: "Erreur",
            description: "Impossible de générer les réponses. Veuillez réessayer.",
            variant: "destructive"
          });
          return;
        }

        if (data?.responses) {
          setBoardResponses(data.responses);
        }
        if (data?.synthesis) {
          setSynthesis(data.synthesis);
        }
      } catch (error) {
        console.error('Error:', error);
        toast({
          title: "Erreur",
          description: "Une erreur s'est produite lors de la génération des réponses.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    generateResponses();
  }, [userData.currentQuestion, userData.profile, navigate, toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <Logo />
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-lg text-muted-foreground">Le Board analyse votre question...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 py-12">
      <div className="max-w-6xl mx-auto">
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
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <h1 className="text-3xl font-semibold text-prussian">Réponses du Board</h1>
          <p className="text-lg text-muted-foreground italic">"{userData.currentQuestion}"</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {boardResponses.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
            >
              <Card 
                className="rounded-2xl shadow-card hover:shadow-card-hover transition-smooth overflow-hidden cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="w-full aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={memberImages[member.name]}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center space-y-2">
                  <h3 className="text-xl font-semibold text-prussian">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="text-xs text-muted-foreground">Cliquez pour voir la réponse</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold text-prussian flex items-center gap-3">
                {selectedMember && (
                  <>
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={memberImages[selectedMember.name]}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div>{selectedMember.name}</div>
                      <div className="text-sm font-medium text-primary">{selectedMember.role}</div>
                    </div>
                  </>
                )}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <p className="text-foreground leading-relaxed whitespace-pre-line">
                {selectedMember?.response}
              </p>
            </div>
          </DialogContent>
        </Dialog>

        {synthesis.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="bg-card rounded-2xl shadow-card p-8 space-y-6"
          >
            <h2 className="text-2xl font-semibold text-prussian">Synthèse Exécutive</h2>
            <ul className="space-y-3">
              {synthesis.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-foreground pt-0.5">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="flex gap-4"
        >
          <Button
            onClick={() => setShowContactDialog(true)}
            variant="outline"
            className="flex-1 h-14 rounded-xl font-medium text-lg transition-smooth"
          >
            Contacter son conseiller BNP
          </Button>
          <Button
            onClick={() => navigate('/export-pdf')}
            className="flex-1 h-14 rounded-xl bg-primary hover:bg-secondary text-primary-foreground font-medium text-lg transition-smooth"
          >
            Exporter en PDF
          </Button>
        </motion.div>

        <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={jadeCfo} alt="Jade - Conseillère BNP" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-xl font-semibold">Jade Durand</div>
                  <div className="text-sm text-muted-foreground">Conseillère BNP Paribas</div>
                </div>
              </DialogTitle>
              <DialogDescription className="sr-only">
                Coordonnées de votre conseiller BNP
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-medium text-sm text-muted-foreground mb-1">Email</h4>
                <p className="text-foreground">jade.durand@bnpparibas.com</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground mb-1">Téléphone</h4>
                <p className="text-foreground">01 42 98 76 54</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-muted-foreground mb-1">Disponibilité</h4>
                <p className="text-foreground">Lundi - Vendredi : 9h00 - 18h00</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 border border-border">
                <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center text-primary text-xs">📎</span>
                  Pièce jointe
                </h4>
                <p className="text-sm text-muted-foreground">
                  Le PDF des réponses du Board sera automatiquement joint à votre email
                </p>
              </div>
              <div className="pt-2">
                <Button 
                  onClick={() => window.location.href = 'mailto:jade.durand@bnpparibas.com'}
                  className="w-full"
                >
                  Envoyer un email avec le PDF
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BoardResponsePage;
