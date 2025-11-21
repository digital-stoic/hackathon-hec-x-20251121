import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2, Circle, Shield, FileText, UserCheck, Building2, Sparkles } from "lucide-react";

interface DocumentCategory {
  id: string;
  icon: React.ElementType;
  completed: boolean;
}

const ProfileCompletionCard = () => {
  const { t } = useLanguage();

  const categories: DocumentCategory[] = [
    { id: "identity", icon: UserCheck, completed: true },
    { id: "address", icon: Building2, completed: true },
    { id: "tax", icon: FileText, completed: false },
    { id: "financial", icon: Shield, completed: false },
  ];

  const completedCount = categories.filter(cat => cat.completed).length;
  const totalCount = categories.length;
  const completionPercentage = Math.round((completedCount / totalCount) * 100);

  const getProgressColor = () => {
    if (completionPercentage === 100) return "bg-green-500";
    if (completionPercentage >= 75) return "bg-blue-500";
    if (completionPercentage >= 50) return "bg-champagne";
    return "bg-orange-500";
  };

  const getMotivationMessage = () => {
    if (completionPercentage === 100) return t('profileCompletion.complete');
    if (completionPercentage >= 75) return t('profileCompletion.almostThere');
    if (completionPercentage >= 50) return t('profileCompletion.halfway');
    return t('profileCompletion.getStarted');
  };

  return (
    <Card className="overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-champagne/10 to-transparent rounded-full blur-2xl" />
      
      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-serif flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-champagne" />
            {t('profileCompletion.title')}
          </CardTitle>
          <Badge 
            variant="outline" 
            className={`${getProgressColor()} text-white border-0`}
          >
            {completionPercentage}%
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{t('profileCompletion.progress')}</span>
            <span className="font-medium text-foreground">
              {completedCount}/{totalCount} {t('profileCompletion.completed')}
            </span>
          </div>
          <Progress 
            value={completionPercentage} 
            className="h-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className={`p-3 rounded-lg border transition-all ${
                  category.completed
                    ? "border-green-500/20 bg-green-500/5"
                    : "border-border bg-muted/30"
                }`}
              >
                <div className="flex items-center gap-2">
                  {category.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Icon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground truncate">
                        {t(`profileCompletion.${category.id}`)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-2 border-t border-border">
          <p className="text-sm text-center text-muted-foreground italic">
            {getMotivationMessage()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCompletionCard;
