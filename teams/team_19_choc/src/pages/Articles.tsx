import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";

const articles = [
  {
    title: "Optimizing Your Tax Strategy for 2024",
    excerpt: "Discover the latest tax optimization strategies for entrepreneurs and business leaders. Learn how to maximize deductions while staying compliant.",
    category: "Tax Planning",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: article1
  },
  {
    title: "Building Generational Wealth: A Comprehensive Guide",
    excerpt: "Explore proven strategies for creating and preserving wealth across generations. From estate planning to investment diversification.",
    category: "Wealth Management",
    date: "March 10, 2024",
    readTime: "12 min read",
    image: article2
  },
  {
    title: "Exit Strategies: Maximizing Value in Business Sales",
    excerpt: "Planning to sell your business? Learn how to structure the sale for optimal tax efficiency and maximum returns.",
    category: "Exit Planning",
    date: "March 5, 2024",
    readTime: "10 min read",
    image: article3
  },
  {
    title: "The Role of Holding Companies in Wealth Protection",
    excerpt: "Understanding how holding company structures can provide asset protection and tax advantages for entrepreneurs.",
    category: "Legal Structure",
    date: "February 28, 2024",
    readTime: "7 min read",
    image: article1
  },
  {
    title: "Investment Diversification Beyond Your Business",
    excerpt: "Why entrepreneurs should diversify their wealth and practical strategies for building a resilient investment portfolio.",
    category: "Investment",
    date: "February 20, 2024",
    readTime: "9 min read",
    image: article2
  },
  {
    title: "Understanding Key Person Insurance for Startups",
    excerpt: "Protect your business from unexpected loss with key person insurance. A guide for growing companies.",
    category: "Protection",
    date: "February 15, 2024",
    readTime: "6 min read",
    image: article3
  }
];

export default function Articles() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Financial Insights & Articles</h1>
          <p className="text-lg text-muted-foreground">
            Stay informed with the latest insights on wealth management, taxation, and investment strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                </div>
                <CardTitle className="text-xl">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
