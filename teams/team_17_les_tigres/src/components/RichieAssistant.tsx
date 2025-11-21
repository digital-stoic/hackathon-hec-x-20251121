import { useState, useEffect } from "react";
import { X, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import richieAvatar from "@/assets/richie-avatar.png";
import { useLanguage } from "@/contexts/LanguageContext";

interface RichieAssistantProps {
  onOpenChat: () => void;
}

export const RichieAssistant = ({ onOpenChat }: RichieAssistantProps) => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const tips = [
    {
      fr: "👋 Besoin d'aide ? Je suis là pour toi !",
      en: "👋 Need help? I'm here for you!",
    },
    {
      fr: "💡 Tu veux optimiser ton patrimoine ?",
      en: "💡 Want to optimize your wealth?",
    },
    {
      fr: "📊 J'ai analysé ton portefeuille",
      en: "📊 I analyzed your portfolio",
    },
    {
      fr: "🎯 Des opportunités t'attendent",
      en: "🎯 Opportunities await you",
    },
  ];

  useEffect(() => {
    // Change tip every 8 seconds
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
      // Show expanded tip briefly
      setIsExpanded(true);
      setTimeout(() => setIsExpanded(false), 5000);
    }, 8000);

    return () => clearInterval(interval);
  }, [tips.length]);

  if (!isVisible) return null;

  const currentTipText = t('coach.name') === 'Richie' 
    ? tips[currentTip].fr 
    : tips[currentTip].en;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="relative">
        {/* Floating Avatar */}
        <div
          className={`transition-all duration-300 ${
            isExpanded ? "mb-4" : ""
          }`}
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative group"
          >
            {/* Avatar Container */}
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-champagne shadow-premium hover:scale-110 transition-transform duration-300 bg-white">
              <img
                src={richieAvatar}
                alt="Richie"
                className="w-full h-full object-cover"
              />
              {/* Pulse Animation */}
              <div className="absolute inset-0 rounded-full bg-champagne opacity-0 group-hover:opacity-20 animate-pulse"></div>
            </div>

            {/* Online Indicator */}
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-jade rounded-full border-3 border-white">
              <Sparkles className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-bordeaux text-white rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
              2
            </div>
          </button>

          {/* Expanded Card */}
          {isExpanded && (
            <Card className="absolute bottom-20 right-0 w-72 p-4 shadow-premium animate-scale-in">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-champagne flex-shrink-0">
                  <img
                    src={richieAvatar}
                    alt="Richie"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-serif text-champagne font-semibold">
                      {t('coach.name')}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsExpanded(false);
                      }}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-sm text-foreground mb-3">
                    {currentTipText}
                  </p>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenChat();
                    }}
                    size="sm"
                    className="w-full bg-champagne text-white hover:bg-champagne-muted"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t('coach.chat')}
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};