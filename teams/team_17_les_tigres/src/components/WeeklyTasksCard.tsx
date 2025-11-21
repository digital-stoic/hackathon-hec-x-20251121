import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const WeeklyTasksCard = () => {
  const { t } = useLanguage();
  
  const tasks = [
    {
      id: "1",
      titre: t('task.per.title'),
      description: t('task.per.desc'),
      timeEstimate: t('task.per.time'),
      impact: t('task.per.impact'),
      priority: "high" as const,
      actions: [
        { label: t('task.per.action1'), type: "primary" as const },
        { label: t('task.per.action2'), type: "secondary" as const },
      ],
    },
    {
      id: "2",
      titre: t('task.tesla.title'),
      description: t('task.tesla.desc'),
      timeEstimate: t('task.tesla.time'),
      impact: t('task.tesla.impact'),
      priority: "medium" as const,
      actions: [
        { label: t('task.tesla.action1'), type: "primary" as const },
        { label: t('task.tesla.action2'), type: "secondary" as const },
      ],
    },
  ];
  
  return (
    <Card className="bg-white border-border p-6">
      <div className="mb-5">
        <h2 className="text-xl font-serif text-foreground mb-1">
          {t('patrimoine.weekly.title')}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t('patrimoine.weekly.subtitle')}
        </p>
      </div>

      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className="p-4 rounded-lg border border-border/50 bg-muted/30 hover:border-champagne/30 transition-all hover:shadow-lg hover:scale-[1.02] animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
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
