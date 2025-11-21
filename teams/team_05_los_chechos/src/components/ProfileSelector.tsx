import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Crown, 
  Hourglass, 
  Lightbulb, 
  Sparkles, 
  Heart, 
  Users 
} from "lucide-react";

const profiles = [
  {
    id: "beginner",
    title: "Beginner Investor",
    icon: Sparkles,
    description: "Just starting your investment journey"
  },
  {
    id: "hnw",
    title: "HNW Investor",
    icon: Crown,
    description: "High net worth wealth management"
  },
  {
    id: "retiree",
    title: "Retiree",
    icon: Hourglass,
    description: "Planning for or enjoying retirement"
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur",
    icon: Lightbulb,
    description: "Business owner seeking growth"
  },
  {
    id: "first-time",
    title: "First Time Investor",
    icon: TrendingUp,
    description: "Making your first investment"
  },
  {
    id: "impact",
    title: "Impact Investor",
    icon: Heart,
    description: "Investing with purpose and values"
  },
  {
    id: "other",
    title: "Other",
    icon: Users,
    description: "Unique investment needs"
  }
];

const ProfileSelector = () => {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Who are you?</h2>
          <p className="text-xl text-muted-foreground">
            Select your profile to get personalized wealth management solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            const isSelected = selectedProfile === profile.id;
            
            return (
              <Card
                key={profile.id}
                className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 ${
                  isSelected
                    ? "border-primary border-2 bg-primary/5 shadow-lg"
                    : "hover:border-primary/50"
                }`}
                onClick={() => setSelectedProfile(profile.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      isSelected ? "bg-primary" : "bg-muted"
                    }`}>
                      <Icon className={`h-8 w-8 ${
                        isSelected ? "text-primary-foreground" : "text-muted-foreground"
                      }`} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{profile.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {profile.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {selectedProfile && (
          <div className="text-center animate-fade-in">
            <Link to="/simulator">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Your Personalized Plan
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfileSelector;