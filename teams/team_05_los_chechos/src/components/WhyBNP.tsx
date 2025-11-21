import { Button } from "@/components/ui/button";
import whyBnp1 from "@/assets/why-bnp-1.jpg";
import whyBnp2 from "@/assets/why-bnp-2.jpg";
import whyBnp3 from "@/assets/why-bnp-3.jpg";

const reasons = [
  {
    title: "A trusted European financial leader",
    description: "Grow your wealth, finance your project & prepare for the future by trusting a leading financial institution rated A+ / A-1 by Standard & Poors.",
    image: whyBnp1,
  },
  {
    title: "A unique 'One Bank' model",
    description: "Benefit from comprehensive expertise in Insurance, Real Estate, Asset Management and Corporate & Institutional Banking, particularly valued by Entrepreneurs and Families.",
    image: whyBnp2,
  },
  {
    title: "A solution-driven approach",
    description: "Draw on our international network of experts to meet your financial goals. We have a task force to build tailor-made solutions for sophisticated standards needs.",
    image: whyBnp3,
  },
];

const WhyBNP = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-16">
          Why partner with BNP Paribas Wealth Management?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Image */}
              <div className="mb-6 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Decorative Line */}
              <div className="w-full h-1 bg-primary mb-6" />

              {/* Title */}
              <h3 className="text-xl font-bold text-primary mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 flex-grow">
                {item.description}
              </p>

              {/* Button */}
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
              >
                FIND OUT MORE
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBNP;