import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const personas = [
  {
    title: "Entrepreneurs & New Wealth",
    text: "Transform your first success into long-term wealth.",
    cta: "Explore"
  },
  {
    title: "Family & Established Wealth",
    text: "Grow, preserve and transmit your legacy.",
    cta: "Explore"
  },
  {
    title: "Values-Driven Investors",
    text: "Invest with purpose and measurable impact.",
    cta: "Learn More"
  },
  {
    title: "Global Citizens & Expats",
    text: "Cross-border expertise for global, mobile lifestyles.",
    cta: "Learn More"
  }
];

const PersonaCards = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-xl">{persona.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{persona.text}</p>
                <a href="#" className="inline-flex items-center text-primary hover:underline font-medium">
                  {persona.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonaCards;