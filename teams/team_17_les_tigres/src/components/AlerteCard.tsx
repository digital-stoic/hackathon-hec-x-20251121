import { AlerteCoach } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info, AlertTriangle, Lightbulb } from "lucide-react";

interface AlerteCardProps {
  alerte: AlerteCoach;
}

export const AlerteCard = ({ alerte }: AlerteCardProps) => {
  const getIcon = () => {
    switch (alerte.type) {
      case "warning":
        return <AlertTriangle className="w-5 h-5" />;
      case "recommendation":
        return <Lightbulb className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  const getColorClasses = () => {
    switch (alerte.type) {
      case "warning":
        return {
          icon: "text-bordeaux",
          border: "border-l-bordeaux",
          title: "text-bordeaux",
        };
      case "recommendation":
        return {
          icon: "text-champagne",
          border: "border-l-champagne",
          title: "text-champagne",
        };
      default:
        return {
          icon: "text-jade",
          border: "border-l-jade",
          title: "text-jade",
        };
    }
  };

  const colors = getColorClasses();

  const timeAgo = (timestamp: string) => {
    const diff = Date.now() - new Date(timestamp).getTime();
    const hours = Math.floor(diff / 3600000);
    if (hours < 1) return "Il y a quelques instants";
    if (hours === 1) return "Il y a 1 heure";
    return `Il y a ${hours} heures`;
  };

  return (
    <Card className={`glass-card p-4 border-l-4 ${colors.border}`}>
      <div className="flex gap-3 mb-3">
        <div className={colors.icon}>{getIcon()}</div>
        <div className="flex-1">
          <h4 className={`text-sm font-semibold ${colors.title} mb-1`}>
            {alerte.titre}
          </h4>
          <p className="text-xs text-muted-foreground mb-2">
            {timeAgo(alerte.timestamp)}
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            {alerte.message}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {alerte.actions.map((action, index) => (
          <Button
            key={index}
            variant={action.type === "primary" ? "default" : "outline"}
            size="sm"
            className={
              action.type === "primary"
                ? "bg-champagne text-white hover:bg-champagne-muted"
                : "border-champagne text-champagne hover:bg-champagne/10"
            }
          >
            {action.label}
          </Button>
        ))}
      </div>
    </Card>
  );
};
