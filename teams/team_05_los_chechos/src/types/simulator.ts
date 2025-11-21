export interface SimulatorData {
  age: number;
  wealth: number;
  horizon: number;
  riskProfile: "Prudent" | "Balanced" | "Ambitious";
  impactPreference: "Low" | "Medium" | "High";
}