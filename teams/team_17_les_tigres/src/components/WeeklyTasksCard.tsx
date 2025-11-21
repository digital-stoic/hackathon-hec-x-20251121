import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { weeklyTasks } from "@/data/mockData";

export const WeeklyTasksCard = () => {
  return (
    <Card className="bg-white border-border p-6">
      <div className="mb-5">
        <h2 className="text-xl font-serif text-foreground mb-1">
          Cette semaine
        </h2>
        <p className="text-sm text-muted-foreground">
          2 trucs à checker quand tu veux
        </p>
      </div>

      <div className="space-y-4">
        {weeklyTasks.map((task) => (
          <div
            key={task.id}
            className="p-4 rounded-lg border border-border/50 bg-muted/30 hover:border-champagne/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1">
                <h3 className="font-medium text-foreground mb-1">
                  {task.titre}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {task.description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {task.timeEstimate}
                </span>
                <span className="text-jade font-medium">{task.impact}</span>
              </div>

              <div className="flex gap-2">
                {task.actions.map((action, index) => (
                  <Button
                    key={index}
                    variant={action.type === "primary" ? "default" : "outline"}
                    size="sm"
                    className={
                      action.type === "primary"
                        ? "bg-champagne text-white hover:bg-champagne-muted"
                        : "border-border/50 text-foreground hover:bg-muted"
                    }
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
