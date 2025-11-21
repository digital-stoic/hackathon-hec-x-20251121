import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface Action {
  title: string;
  description: string;
}

interface ActionPlanProps {
  actions: Action[];
}

const ActionPlan = ({ actions }: ActionPlanProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Personalized 5-Step Action Plan</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {actions.map((action, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 bg-secondary rounded-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-1">{action.title}</h4>
                <p className="text-muted-foreground">{action.description}</p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full border-2 border-muted flex items-center justify-center">
                  <Check className="w-4 h-4 text-muted" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActionPlan;