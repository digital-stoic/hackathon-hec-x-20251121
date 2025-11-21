import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "Wealth Growth Portfolio",
    description: "Personalised portfolios for long-term performance."
  },
  {
    title: "Discretionary Portfolio Management",
    description: "You define the profile; we manage the rest."
  },
  {
    title: "Private Markets & Alternatives",
    description: "Exclusive access to private equity and real assets."
  },
  {
    title: "Wealth Planning & Structuring",
    description: "Tax, succession, and cross-border optimisation."
  },
  {
    title: "ESG & Impact Investing",
    description: "Align your wealth with your values and measurable impact."
  },
  {
    title: "Real Estate & Financing Advisory",
    description: "Premium property advisory and tailored financing solutions."
  }
];

const Solutions = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">OUR SOLUTIONS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{solution.description}</p>
                <a href="#" className="inline-flex items-center text-primary hover:underline font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;