import { Card } from "@/components/ui/card";
import { heroStatus } from "@/data/mockData";

export const HeroStatusCard = () => {
  return (
    <Card className="bg-white border-jade/20 p-8 mb-6">
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-serif text-jade mb-2">
            {heroStatus.title}
          </h1>
          <p className="text-foreground text-base leading-relaxed">
            {heroStatus.message}
          </p>
        </div>

        <div className="flex flex-wrap gap-6 pt-2">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Portfolio</p>
            <p className="text-base font-medium text-foreground">
              {heroStatus.metrics.portfolio}
            </p>
          </div>
          <div className="border-l border-border pl-6">
            <p className="text-sm text-muted-foreground mb-1">Liquidités</p>
            <p className="text-base font-medium text-foreground">
              {heroStatus.metrics.liquidites}
            </p>
          </div>
          <div className="border-l border-border pl-6">
            <p className="text-sm text-muted-foreground mb-1">Performance</p>
            <p className="text-base font-medium text-jade">
              {heroStatus.metrics.performance}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
