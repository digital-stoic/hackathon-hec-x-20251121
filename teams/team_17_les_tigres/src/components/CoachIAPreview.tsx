import { MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { coachMessages } from "@/data/mockData";

interface CoachIAPreviewProps {
  onOpenChat: () => void;
}

export const CoachIAPreview = ({ onOpenChat }: CoachIAPreviewProps) => {
  const lastMessage = coachMessages[coachMessages.length - 1];

  return (
    <Card className="glass-card p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-champagne" />
        </div>
        <div>
          <h3 className="text-lg font-serif text-foreground">Coach IA</h3>
          <p className="text-xs text-muted-foreground">
            Assistant patrimonial intelligent
          </p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-foreground leading-relaxed mb-3">
          {lastMessage.content.substring(0, 150)}...
        </p>
        {lastMessage.actions && lastMessage.actions.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {lastMessage.actions.map((action, index) => (
              <Button
                key={index}
                variant={action.type === "primary" ? "default" : "outline"}
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
      </div>

      <Button
        onClick={onOpenChat}
        className="w-full bg-champagne text-white hover:bg-champagne-muted font-medium"
      >
        <MessageSquare className="w-4 h-4 mr-2" />
        Ouvrir la conversation
      </Button>
    </Card>
  );
};
