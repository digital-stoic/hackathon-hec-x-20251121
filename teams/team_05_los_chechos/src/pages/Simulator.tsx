import { useState } from "react";
import BNPHeader from "@/components/BNPHeader";
import SimulatorForm from "@/components/simulator/SimulatorForm";
import SimulatorResults from "@/components/simulator/SimulatorResults";
import { SimulatorData } from "@/types/simulator";

const Simulator = () => {
  const [results, setResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputData, setInputData] = useState<SimulatorData | null>(null);

  const handleSubmit = async (data: SimulatorData) => {
    setIsLoading(true);
    setInputData(data);
    
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/wealth-simulator`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to generate projection");
      }

      const resultData = await response.json();
      setResults(resultData);
    } catch (error) {
      console.error("Error:", error);
      alert(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResults(null);
    setInputData(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <BNPHeader />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">
              AI Wealth Simulator
            </h1>
            <p className="text-xl text-muted-foreground">
              Powered by BNP Paribas Wealth Management
            </p>
          </div>

          {!results ? (
            <SimulatorForm onSubmit={handleSubmit} isLoading={isLoading} />
          ) : (
            <SimulatorResults 
              results={results} 
              inputData={inputData!} 
              onReset={handleReset} 
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Simulator;