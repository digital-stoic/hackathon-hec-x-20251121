import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectionChart from "./ProjectionChart";
import PortfolioChart from "./PortfolioChart";
import ActionPlan from "./ActionPlan";
import { SimulatorData } from "@/types/simulator";
import { ArrowLeft } from "lucide-react";

interface SimulatorResultsProps {
  results: any;
  inputData: SimulatorData;
  onReset: () => void;
}

const SimulatorResults = ({ results, inputData, onReset }: SimulatorResultsProps) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={onReset}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          New Simulation
        </Button>
      </div>

      {/* Summary Card */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold mb-4">Your Wealth Projection</h2>
          <p className="text-lg opacity-90">
            Based on your {inputData.riskProfile.toLowerCase()} investment approach and €
            {inputData.wealth.toLocaleString()} starting capital
          </p>
        </CardContent>
      </Card>

      {/* Projection Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Wealth Growth Scenarios</CardTitle>
        </CardHeader>
        <CardContent>
          <ProjectionChart 
            projections={results.projections} 
            horizon={inputData.horizon}
            initialWealth={inputData.wealth}
          />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Portfolio Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended Portfolio Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <PortfolioChart portfolio={results.portfolio} />
          </CardContent>
        </Card>

        {/* Risk Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Risk Considerations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {results.riskSummary}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Action Plan */}
      <ActionPlan actions={results.actionPlan} />

      {/* Impact Recommendation */}
      <Card className="bg-secondary">
        <CardHeader>
          <CardTitle>Sustainable Impact Strategy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {results.impactRecommendation}
          </p>
          <Button size="lg">Learn More About Impact Investing</Button>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to discuss your wealth strategy?
          </h3>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Book a Private Banker
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SimulatorResults;