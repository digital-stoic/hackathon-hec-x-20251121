import { Badge } from "@/components/ui/badge";

const badges = [
  "160+ years of excellence",
  "€500bn+ in assets managed",
  "Presence in 30+ countries",
  "Award-winning digital private banking",
  "European leader in sustainable investing"
];

const WhyBNP = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why BNP Paribas Wealth Management?
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((badge, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-base px-6 py-3 bg-background hover:bg-background"
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBNP;