import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Sparkles } from "lucide-react";
import { coachWelcomeMessage } from "@/data/mockData";

interface CoachPreviewSimpleProps {
  onOpenChat: () => void;
}

export const CoachPreviewSimple = ({ onOpenChat }: CoachPreviewSimpleProps) => {
  return (
    <Card className="bg-white border-border p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-champagne" />
        </div>
        <div>
          <h3 className="text-lg font-serif text-foreground">Votre coach</h3>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-foreground leading-relaxed">
          "{coachWelcomeMessage.content}"
        </p>
      </div>

      <Button
        onClick={onOpenChat}
        className="w-full bg-champagne text-white hover:bg-champagne-muted"
      >
        <MessageSquare className="w-4 h-4 mr-2" />
        Discuter →
      </Button>
    </Card>
  );
};
