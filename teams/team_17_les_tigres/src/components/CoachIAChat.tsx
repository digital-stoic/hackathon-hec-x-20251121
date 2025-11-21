import { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { coachMessages as initialMessages, CoachMessage } from "@/data/mockData";

interface CoachIAChatProps {
  onClose: () => void;
}

export const CoachIAChat = ({ onClose }: CoachIAChatProps) => {
  const [messages, setMessages] = useState<CoachMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: CoachMessage = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: CoachMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "Je prends en compte votre demande. En analysant votre profil et vos objectifs, je vous propose une stratégie personnalisée. Souhaitez-vous que je détaille les options disponibles ?",
        timestamp: new Date().toISOString(),
        actions: [
          { label: "Oui, détailler", type: "primary" },
          { label: "Autre question", type: "secondary" },
        ],
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[80vh] glass-card flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-champagne" />
            </div>
            <div>
              <h2 className="text-xl font-serif text-foreground">Coach IA</h2>
              <p className="text-xs text-muted-foreground">
                Assistant patrimonial intelligent
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-muted-foreground hover:text-champagne"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] ${
                  message.role === "user" ? "order-2" : "order-1"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-champagne" />
                    <span className="text-xs text-champagne">Coach IA</span>
                    <span className="text-xs text-muted-foreground">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                )}
                <div
                  className={`rounded-2xl p-4 ${
                    message.role === "user"
                      ? "bg-muted text-foreground"
                      : "bg-transparent border border-champagne/20 text-foreground"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
                {message.actions && message.actions.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {message.actions.map((action, index) => (
                      <Button
                        key={index}
                        variant={
                          action.type === "primary" ? "default" : "outline"
                        }
                        size="sm"
                        className={
                          action.type === "primary"
                            ? "bg-champagne text-white hover:bg-champagne-muted"
                            : "border-champagne/50 text-champagne hover:bg-champagne/10"
                        }
                      >
                        {action.label}
                      </Button>
                    ))}
                  </div>
                )}
                {message.role === "user" && (
                  <p className="text-xs text-muted-foreground mt-2 text-right">
                    {formatTime(message.timestamp)}
                  </p>
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[75%]">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-champagne" />
                  <span className="text-xs text-champagne">Coach IA</span>
                </div>
                <div className="rounded-2xl p-4 bg-transparent border border-champagne/20">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
                    <div
                      className="w-2 h-2 rounded-full bg-champagne animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full bg-champagne animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-6 border-t border-border/50">
          <div className="flex gap-3">
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Posez votre question au coach IA..."
              className="flex-1 bg-muted border border-border/30 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-champagne/50 resize-none min-h-[56px] max-h-[120px]"
              rows={1}
            />
            <Button
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              className="bg-champagne text-white hover:bg-champagne-muted disabled:opacity-50 h-[56px] px-6"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Appuyez sur Entrée pour envoyer, Shift+Entrée pour un retour à la
            ligne
          </p>
        </div>
      </div>
    </div>
  );
};
