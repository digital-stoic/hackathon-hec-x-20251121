import { Button } from "@/components/ui/button";
import stocksVsEtfs from "@/assets/recommendations/stocks-vs-etfs.jpg";
import portfolioAllocation from "@/assets/recommendations/portfolio-allocation.jpg";
import inflationRecession from "@/assets/recommendations/inflation-recession.jpg";
import wealthManagement from "@/assets/recommendations/wealth-management.jpg";

const recommendations = [
  {
    title: "Stocks vs. ETFs vs. Real Estate: Comparison",
    description: "Understand the key differences between major asset classes and how to choose the right mix for your portfolio.",
    image: stocksVsEtfs,
  },
  {
    title: "What is Portfolio Allocation?",
    description: "Learn the fundamentals of asset allocation and how to build a diversified investment strategy aligned with your goals.",
    image: portfolioAllocation,
  },
  {
    title: "Invest During Inflation/Recession",
    description: "Navigate challenging economic conditions with proven strategies to protect and grow your wealth during market volatility.",
    image: inflationRecession,
  },
  {
    title: "Wealth Management vs. Investing",
    description: "Discover the comprehensive difference between holistic wealth management and traditional investment approaches.",
    image: wealthManagement,
  },
];

const TopRecommendations = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-12">
          Top Recommendations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendations.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Image */}
              <div className="mb-6 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Decorative Line */}
              <div className="w-full h-1 bg-primary mb-6" />

              {/* Title */}
              <h3 className="text-xl font-bold text-primary mb-4 min-h-[56px]">
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

export default TopRecommendations;
