import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Award } from "lucide-react";

const team = [
  {
    name: "Marie Laurent",
    role: "Senior Wealth Advisor",
    specialty: "Tax Optimization & Estate Planning",
    experience: "15+ years",
    certifications: ["CFP", "CFA"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    name: "Thomas Bernard",
    role: "Legal & Tax Consultant",
    specialty: "Corporate Law & International Tax",
    experience: "12+ years",
    certifications: ["CPA", "J.D."],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Sophie Martin",
    role: "Investment Strategist",
    specialty: "Portfolio Management & Asset Allocation",
    experience: "10+ years",
    certifications: ["CFA", "CAIA"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    name: "Pierre Dubois",
    role: "Business Succession Advisor",
    specialty: "Family Business & Succession Planning",
    experience: "18+ years",
    certifications: ["CFP", "TEP"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
  {
    name: "Claire Rousseau",
    role: "Real Estate Investment Advisor",
    specialty: "Commercial & Residential Real Estate",
    experience: "14+ years",
    certifications: ["CCIM", "CPM"],
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
  },
  {
    name: "Antoine Moreau",
    role: "Risk Management Specialist",
    specialty: "Insurance & Executive Protection",
    experience: "11+ years",
    certifications: ["CPCU", "ARM"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Expert Advisors</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet our team of dedicated wealth management professionals, each bringing decades of experience 
            and specialized expertise to serve your financial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-white/90">{member.role}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <p className="text-sm font-medium text-primary mb-2">{member.specialty}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Award className="h-4 w-4" />
                    <span>{member.experience} experience</span>
                  </div>
                  <div className="flex gap-2 mb-4">
                    {member.certifications.map((cert, i) => (
                      <span 
                        key={i}
                        className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Linkedin className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary text-white p-8">
            <h2 className="text-2xl font-bold mb-4">Schedule a Consultation</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Ready to take control of your wealth? Book a personalized consultation with one of our expert advisors.
            </p>
            <Button size="lg" variant="secondary">
              Book Appointment
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
