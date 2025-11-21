import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Global Outlook 2025",
    description: "Our latest view on global markets."
  },
  {
    title: "Sustainable Investing in Practice",
    description: "How to combine performance with purpose."
  },
  {
    title: "Next-Gen Wealth Report",
    description: "Understanding the expectations of younger investors."
  }
];

const Insights = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-xl">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{article.description}</p>
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

export default Insights;