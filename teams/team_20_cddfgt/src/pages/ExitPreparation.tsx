import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Target,
  ArrowLeft,
  CheckCircle2,
  Circle,
  FileText,
  TrendingUp,
  Users,
  Shield,
  Calendar
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import bnpLogo from "@/assets/bnp-logo.jpg";

const ExitPreparation = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Financial Audit & Valuation",
      duration: "2-4 weeks",
      description: "Get a clear picture of your company's value and financial health",
      icon: TrendingUp,
      tasks: [
        { id: 1, label: "Clean up financial statements (3-year history)", completed: false },
        { id: 2, label: "Organize all contracts and legal documents", completed: false },
        { id: 3, label: "Professional company valuation", completed: false },
        { id: 4, label: "Identify and fix red flags", completed: false },
      ],
    },
    {
      title: "Legal Structure Optimization",
      duration: "3-6 weeks",
      description: "Ensure your company structure maximizes value and minimizes tax",
      icon: Shield,
      tasks: [
        { id: 1, label: "Review shareholder agreements", completed: false },
        { id: 2, label: "Optimize capital structure", completed: false },
        { id: 3, label: "Clean cap table", completed: false },
        { id: 4, label: "Setup holding structure if needed", completed: false },
      ],
    },
    {
      title: "Operational Excellence",
      duration: "2-3 months",
      description: "Make your business more attractive to buyers",
      icon: Target,
      tasks: [
        { id: 1, label: "Document all key processes", completed: false },
        { id: 2, label: "Strengthen management team", completed: false },
        { id: 3, label: "Diversify customer base (reduce concentration)", completed: false },
        { id: 4, label: "Improve recurring revenue streams", completed: false },
      ],
    },
    {
      title: "Tax Strategy & Wealth Planning",
      duration: "4-6 weeks",
      description: "Minimize tax impact and plan your personal wealth strategy",
      icon: FileText,
      tasks: [
        { id: 1, label: "Calculate expected tax on exit", completed: false },
        { id: 2, label: "Explore tax optimization strategies", completed: false },
        { id: 3, label: "Plan wealth diversification post-exit", completed: false },
        { id: 4, label: "Setup succession plan if relevant", completed: false },
      ],
    },
    {
      title: "Market Preparation & Deal Strategy",
      duration: "3-4 months",
      description: "Prepare marketing materials and identify potential buyers",
      icon: Users,
      tasks: [
        { id: 1, label: "Create compelling pitch deck & CIM", completed: false },
        { id: 2, label: "Identify strategic and financial buyers", completed: false },
        { id: 3, label: "Engage M&A advisor or investment bank", completed: false },
        { id: 4, label: "Prepare data room and due diligence materials", completed: false },
      ],
    },
  ];

  const [stepTasks, setStepTasks] = useState(steps);

  const toggleTask = (stepIndex: number, taskId: number) => {
    const newSteps = [...stepTasks];
    const task = newSteps[stepIndex].tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      setStepTasks(newSteps);
    }
  };

  const getStepProgress = (stepIndex: number) => {
    const step = stepTasks[stepIndex];
    const completed = step.tasks.filter(t => t.completed).length;
    return (completed / step.tasks.length) * 100;
  };

  const totalProgress = () => {
    const totalTasks = stepTasks.reduce((sum, step) => sum + step.tasks.length, 0);
    const completedTasks = stepTasks.reduce(
      (sum, step) => sum + step.tasks.filter(t => t.completed).length,
      0
    );
    return (completedTasks / totalTasks) * 100;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img src={bnpLogo} alt="BNP Paribas" className="h-10 w-auto" />
          </div>
          <Button variant="ghost" onClick={() => navigate("/strategies")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Strategies
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Target className="w-3 h-3 mr-1" />
              Strategic Path
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Exit Preparation Journey
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Maximize your company's value before sale with our structured 5-step approach
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{totalProgress().toFixed(0)}%</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">2-6</div>
                <div className="text-sm text-muted-foreground">Months</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success">5</div>
                <div className="text-sm text-muted-foreground">Steps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Overall Progress */}
        <Card className="mb-8 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Your Exit Preparation Progress</CardTitle>
            <CardDescription>Track your journey towards a successful exit</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={totalProgress()} className="h-3" />
          </CardContent>
        </Card>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-6">
          {stepTasks.map((step, stepIndex) => {
            const progress = getStepProgress(stepIndex);
            const isCompleted = progress === 100;
            const isCurrent = stepIndex === currentStep;

            return (
              <Card
                key={stepIndex}
                className={`border-2 transition-all ${
                  isCurrent ? "border-primary shadow-lg" : "border-border"
                } ${isCompleted ? "bg-success/5" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          isCompleted
                            ? "bg-success/20"
                            : isCurrent
                            ? "bg-primary/20"
                            : "bg-muted"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-6 h-6 text-success" />
                        ) : (
                          <step.icon
                            className={`w-6 h-6 ${
                              isCurrent ? "text-primary" : "text-muted-foreground"
                            }`}
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">
                            Step {stepIndex + 1}: {step.title}
                          </CardTitle>
                          <Badge variant="outline" className="text-xs">
                            <Calendar className="w-3 h-3 mr-1" />
                            {step.duration}
                          </Badge>
                        </div>
                        <CardDescription className="text-base mb-4">
                          {step.description}
                        </CardDescription>
                        <Progress value={progress} className="mb-4" />
                        <p className="text-sm text-muted-foreground">
                          {step.tasks.filter((t) => t.completed).length} of {step.tasks.length}{" "}
                          tasks completed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {step.tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                      >
                        <Checkbox
                          id={`task-${stepIndex}-${task.id}`}
                          checked={task.completed}
                          onCheckedChange={() => toggleTask(stepIndex, task.id)}
                        />
                        <label
                          htmlFor={`task-${stepIndex}-${task.id}`}
                          className={`flex-1 cursor-pointer ${
                            task.completed
                              ? "line-through text-muted-foreground"
                              : "text-foreground"
                          }`}
                        >
                          {task.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  {!isCompleted && (
                    <Button
                      variant="outline"
                      className="w-full mt-4"
                      onClick={() => setCurrentStep(stepIndex)}
                    >
                      {isCurrent ? "Current Step" : "Start This Step"}
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Expert Help CTA */}
        <Card className="mt-12 max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-white text-2xl">
              Need expert guidance on your exit?
            </CardTitle>
            <CardDescription className="text-primary-foreground/80 text-base">
              Our Private Banking advisors specialize in exit preparation and can provide
              personalized support throughout your journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                className="flex-1"
                onClick={() => navigate("/private-banking")}
              >
                Schedule a consultation
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent text-white border-white hover:bg-white/10">
                Download exit checklist
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExitPreparation;
