import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { SimulatorData } from "@/types/simulator";
import { Loader2 } from "lucide-react";

interface SimulatorFormProps {
  onSubmit: (data: SimulatorData) => void;
  isLoading: boolean;
}

const SimulatorForm = ({ onSubmit, isLoading }: SimulatorFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<SimulatorData>({
    age: 35,
    wealth: 500000,
    horizon: 10,
    riskProfile: "Balanced",
    impactPreference: "Medium",
  });

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={`flex-1 h-2 mx-1 rounded-full transition-all ${
                s <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Step {step} of 5
        </p>
      </div>

      <Card className="animate-scale-in">
        <CardContent className="p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">What is your age?</h2>
                <p className="text-muted-foreground mb-6">
                  This helps us tailor the investment horizon
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-4">
                  {formData.age} years
                </div>
                <Slider
                  value={[formData.age]}
                  onValueChange={([value]) =>
                    setFormData({ ...formData, age: value })
                  }
                  min={18}
                  max={75}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Current wealth or inheritance
                </h2>
                <p className="text-muted-foreground mb-6">
                  Amount available for investment
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-4">
                  €{formData.wealth.toLocaleString()}
                </div>
                <Slider
                  value={[formData.wealth]}
                  onValueChange={([value]) =>
                    setFormData({ ...formData, wealth: value })
                  }
                  min={100000}
                  max={10000000}
                  step={50000}
                  className="w-full"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Investment horizon
                </h2>
                <p className="text-muted-foreground mb-6">
                  How long do you plan to invest?
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[5, 10, 15].map((years) => (
                  <Card
                    key={years}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      formData.horizon === years
                        ? "border-primary border-2 bg-primary/5"
                        : ""
                    }`}
                    onClick={() => setFormData({ ...formData, horizon: years })}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {years}
                      </div>
                      <div className="text-sm text-muted-foreground">years</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Risk profile</h2>
                <p className="text-muted-foreground mb-6">
                  Select your investment approach
                </p>
              </div>
              <div className="space-y-3">
                {[
                  {
                    value: "Prudent" as const,
                    title: "Prudent",
                    desc: "Capital preservation with steady growth",
                  },
                  {
                    value: "Balanced" as const,
                    title: "Balanced",
                    desc: "Mix of growth and stability",
                  },
                  {
                    value: "Ambitious" as const,
                    title: "Ambitious",
                    desc: "Maximum growth potential",
                  },
                ].map((option) => (
                  <Card
                    key={option.value}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      formData.riskProfile === option.value
                        ? "border-primary border-2 bg-primary/5"
                        : ""
                    }`}
                    onClick={() =>
                      setFormData({ ...formData, riskProfile: option.value })
                    }
                  >
                    <CardContent className="p-6">
                      <div className="font-bold text-lg mb-1">
                        {option.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {option.desc}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Impact preference
                </h2>
                <p className="text-muted-foreground mb-6">
                  How important is sustainable investing?
                </p>
              </div>
              <div className="space-y-3">
                {[
                  {
                    value: "Low" as const,
                    title: "Low",
                    desc: "Focus primarily on returns",
                  },
                  {
                    value: "Medium" as const,
                    title: "Medium",
                    desc: "Balance returns with ESG considerations",
                  },
                  {
                    value: "High" as const,
                    title: "High",
                    desc: "Prioritize measurable impact",
                  },
                ].map((option) => (
                  <Card
                    key={option.value}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      formData.impactPreference === option.value
                        ? "border-primary border-2 bg-primary/5"
                        : ""
                    }`}
                    onClick={() =>
                      setFormData({
                        ...formData,
                        impactPreference: option.value,
                      })
                    }
                  >
                    <CardContent className="p-6">
                      <div className="font-bold text-lg mb-1">
                        {option.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {option.desc}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 1 || isLoading}
            >
              Back
            </Button>
            {step < 5 ? (
              <Button onClick={handleNext}>Next</Button>
            ) : (
              <Button onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analysing...
                  </>
                ) : (
                  "Generate Projection"
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SimulatorForm;