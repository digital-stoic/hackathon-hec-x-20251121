import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Clock, Calendar } from "lucide-react";
import podcast1 from "@/assets/podcast-1.jpg";
import podcast2 from "@/assets/podcast-2.jpg";
import podcast3 from "@/assets/podcast-3.jpg";

const podcasts = [
  {
    title: "Navigating Business Exit Strategies with Tax Expert Marie Dubois",
    description: "A deep dive into the legal and tax considerations when planning your business exit. Marie shares insights from 20 years of experience.",
    category: "Exit Planning",
    duration: "45 min",
    date: "March 18, 2024",
    image: podcast1
  },
  {
    title: "Estate Planning Essentials for Entrepreneurs",
    description: "Understanding how to protect and transfer your wealth to the next generation. Practical advice from leading estate planning attorney.",
    category: "Estate Planning",
    duration: "38 min",
    date: "March 12, 2024",
    image: podcast2
  },
  {
    title: "International Tax Optimization for Global Businesses",
    description: "Explore cross-border tax strategies and how to structure international operations for maximum efficiency.",
    category: "Tax Planning",
    duration: "52 min",
    date: "March 5, 2024",
    image: podcast3
  },
  {
    title: "Asset Protection Strategies in Modern Business",
    description: "Learn how to shield your personal and business assets from potential legal threats and creditors.",
    category: "Legal Protection",
    duration: "41 min",
    date: "February 28, 2024",
    image: podcast1
  },
  {
    title: "Building Wealth Through Strategic Investment",
    description: "Expert insights on diversifying your portfolio beyond your primary business for long-term wealth creation.",
    category: "Investment",
    duration: "47 min",
    date: "February 20, 2024",
    image: podcast2
  },
  {
    title: "Succession Planning: Ensuring Business Continuity",
    description: "Planning for the unexpected and ensuring your business thrives beyond your involvement.",
    category: "Succession",
    duration: "36 min",
    date: "February 15, 2024",
    image: podcast3
  }
];

export default function Podcasts() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Legal & Financial Podcasts</h1>
          <p className="text-lg text-muted-foreground">
            Listen to expert discussions on legal, tax, and wealth management topics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {podcasts.map((podcast, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={podcast.image} 
                  alt={podcast.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                  <Button size="lg" className="opacity-90 group-hover:opacity-100 transition-opacity">
                    <Play className="h-5 w-5 mr-2" />
                    Listen Now
                  </Button>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{podcast.category}</Badge>
                </div>
                <CardTitle className="text-xl">{podcast.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{podcast.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{podcast.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{podcast.duration}</span>
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
