import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, Lightbulb, CreditCard, Users, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export const OpportunitiesCard = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const opps = [
    {
      id: "1",
      titre: t('opp.credit.title'),
      description: t('opp.credit.desc'),
      type: "credit" as const,
    },
    {
      id: "2",
      titre: t('opp.expert.title'),
      description: t('opp.expert.desc'),
      type: "expert" as const,
    },
    {
      id: "3",
      titre: t('opp.scpi.title'),
      description: t('opp.scpi.desc'),
      type: "investissement" as const,
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "credit":
        return <CreditCard className="w-5 h-5 text-champagne" />;
      case "expert":
        return <Users className="w-5 h-5 text-champagne" />;
      case "investissement":
        return <TrendingUp className="w-5 h-5 text-champagne" />;
      default:
        return <Lightbulb className="w-5 h-5 text-champagne" />;
    }
  };

  return (
    <Card className="bg-white border-border p-6">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-serif text-foreground mb-1">
              {t('patrimoine.opportunities.title')}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t('patrimoine.opportunities.subtitle')}
            </p>
          </div>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="space-y-3">
          {opps.map((opp, index) => (
            <div
              key={opp.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-all hover:scale-[1.02] cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mt-0.5">{getIcon(opp.type)}</div>
              <div className="flex-1">
                <p className="font-medium text-foreground text-sm mb-0.5">
                  {opp.titre}
                </p>
                <p className="text-sm text-muted-foreground">
                  {opp.description}
                </p>
              </div>
            </div>
          ))}

          <Button
            variant="outline"
            className="w-full mt-4 border-champagne/50 text-champagne hover:bg-champagne/10"
            asChild
          >
            <Link to="/opportunities">
              {t('patrimoine.opportunities.explore')} →
            </Link>
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};
