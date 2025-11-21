import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Send, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AIAssistantProps {
  mode: "patrimony" | "legal" | "exit";
}

const modeConfig = {
  patrimony: {
    title: "BIVWAK+ Analyse Patrimoniale",
    systemPrompt: "Analysez le patrimoine et proposez des optimisations",
    placeholder: "Posez votre question sur l'analyse patrimoniale..."
  },
  legal: {
    title: "BIVWAK+ Conseil Juridique & Fiscal",
    systemPrompt: "Conseillez sur les structures juridiques et fiscales",
    placeholder: "Posez votre question sur la structuration juridique et fiscale..."
  },
  exit: {
    title: "BIVWAK+ Simulation Exit",
    systemPrompt: "Simulez et optimisez les scénarios de sortie",
    placeholder: "Posez votre question sur les stratégies de sortie..."
  }
};

export const AIAssistant = ({ mode }: AIAssistantProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const config = modeConfig[mode];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = {
        patrimony: "Après analyse de votre situation patrimoniale, je recommande une diversification accrue. Votre exposition à l'entreprise (68%) est supérieure au seuil recommandé de 50%. Je suggère de réallouer 15% vers des actifs liquides (ETF World, obligations) et 10% vers des alternatifs (SCPI, dette privée) pour optimiser le ratio risque/rendement.",
        legal: "Pour votre situation, la création d'une holding patrimoniale permettrait d'optimiser votre fiscalité. Avec un taux IS à 25%, vous pourriez réinvestir les dividendes de manière plus efficace. Je recommande également de revoir votre régime matrimonial pour protéger votre conjoint tout en optimisant la transmission.",
        exit: "Pour votre scénario de sortie, avec une valorisation actuelle estimée à 15M€ et 65% de détention, votre gain brut serait de 9.75M€. Après PFU (30%), le gain net s'élèverait à 6.825M€. Je recommande d'étaler la sortie sur 2 exercices fiscaux et d'utiliser un mécanisme d'earn-out pour optimiser la fiscalité."
      };

      const assistantMessage: Message = { 
        role: "assistant", 
        content: responses[mode]
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-primary shadow-premium hover:opacity-90">
          <Sparkles className="h-4 w-4 mr-2" />
          {config.title}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-accent" />
            {config.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col h-[500px]">
          <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-secondary/20 rounded-lg mb-4">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground py-12">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-accent" />
                <p className="text-lg font-semibold mb-2">BIVWAK+ à votre service</p>
                <p className="text-sm">{config.systemPrompt}</p>
              </div>
            )}
            
            {messages.map((message, idx) => (
              <div key={idx} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <Card className={`max-w-[80%] p-4 ${
                  message.role === "user" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-gradient-card border-border"
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </Card>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <Card className="bg-gradient-card border-border p-4">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </Card>
              </div>
            )}
          </div>
          
          <div className="flex gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={config.placeholder}
              className="flex-1 resize-none bg-secondary border-border"
              rows={2}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <Button 
              onClick={handleSend} 
              disabled={!input.trim() || isLoading}
              size="icon"
              className="h-auto bg-gradient-primary shadow-premium"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
