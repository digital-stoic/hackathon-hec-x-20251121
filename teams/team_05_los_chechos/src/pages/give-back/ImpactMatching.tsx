import BNPHeader from "@/components/BNPHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Target, BarChart, CheckCircle } from "lucide-react";

const ImpactMatching = () => {
  return (
    <div className="min-h-screen bg-background">
      <BNPHeader />
      <main>
        {/* Hero Section */}
        <div className="relative bg-primary text-primary-foreground py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6">
              Impact Matching Program
            </h1>
            <p className="text-xl max-w-3xl">
              Amplify your philanthropic impact. For every euro you commit to qualified causes, 
              BNP Paribas contributes additional capital to multiply your positive change.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Your Impact, Multiplied</h2>
            
            <p className="text-lg mb-8">
              Impact Matching is an exclusive benefit for qualifying Give Back Program participants. 
              When you commit capital to approved social or environmental initiatives, BNP Paribas 
              matches your contribution up to specified limits, effectively increasing the scale of 
              your philanthropic or impact investment activities.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary p-8 my-8">
              <h3 className="text-2xl font-bold mb-4">How It Works</h3>
              <div className="space-y-4 text-base">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-bold mb-1">You Commit Capital</p>
                    <p className="text-sm">Make a qualifying donation or impact investment through our platform</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-bold mb-1">We Match It</p>
                    <p className="text-sm">BNP Paribas adds matching funds based on your tier and the project type</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-bold mb-1">Impact Amplified</p>
                    <p className="text-sm">Your total impact grows by 25-50% without additional cost to you</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-4">Matching Tiers</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-secondary p-6 rounded-lg border-2 border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                  <h4 className="text-xl font-bold">Silver Tier</h4>
                </div>
                <div className="mb-4">
                  <p className="text-3xl font-bold text-primary">25%</p>
                  <p className="text-sm text-muted-foreground">Matching Rate</p>
                </div>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Contributions: €25K-€250K/year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Annual match cap: €62.5K</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Access to core impact projects</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-6 rounded-lg border-2 border-primary">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                  <h4 className="text-xl font-bold">Gold Tier</h4>
                </div>
                <div className="mb-4">
                  <p className="text-3xl font-bold text-primary">35%</p>
                  <p className="text-sm text-muted-foreground">Matching Rate</p>
                </div>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Contributions: €250K-€1M/year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Annual match cap: €350K</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Priority access to new initiatives</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary p-6 rounded-lg border-2 border-border">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                  <h4 className="text-xl font-bold">Platinum Tier</h4>
                </div>
                <div className="mb-4">
                  <p className="text-3xl font-bold text-primary">50%</p>
                  <p className="text-sm text-muted-foreground">Matching Rate</p>
                </div>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Contributions: €1M+ per year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Annual match cap: Custom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Co-create custom impact projects</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-4">Qualifying Impact Areas</h3>
            
            <div className="bg-secondary p-6 rounded-lg mb-8">
              <p className="mb-4">Impact Matching is available for contributions in these focus areas:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">🌍</span>
                  <div>
                    <strong>Climate Action:</strong> Renewable energy, carbon reduction, conservation, sustainable agriculture
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">🎓</span>
                  <div>
                    <strong>Education Access:</strong> Scholarships, schools in underserved areas, vocational training, digital literacy
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">💊</span>
                  <div>
                    <strong>Healthcare:</strong> Medical infrastructure, disease prevention, mental health services, health equity
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">💼</span>
                  <div>
                    <strong>Economic Empowerment:</strong> Microfinance, small business support, skills training, financial inclusion
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">🏘️</span>
                  <div>
                    <strong>Community Development:</strong> Affordable housing, infrastructure, social enterprises, urban renewal
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-4">Real Examples</h3>
            
            <div className="space-y-6 mb-8">
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-3">Solar Energy Project (Gold Tier)</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm mb-2"><strong>Your Investment:</strong> €500,000</p>
                    <p className="text-sm mb-2"><strong>BNP Match (35%):</strong> €175,000</p>
                    <p className="text-sm mb-4"><strong>Total Project Capital:</strong> €675,000</p>
                  </div>
                  <div>
                    <p className="text-sm mb-2"><strong>Impact:</strong></p>
                    <ul className="text-xs space-y-1">
                      <li>• 200 homes powered by clean energy</li>
                      <li>• 500 tons CO₂ avoided annually</li>
                      <li>• 6% financial return to you</li>
                      <li>• 35% more impact at no extra cost</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-3">Education Fund (Silver Tier)</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm mb-2"><strong>Your Donation:</strong> €100,000</p>
                    <p className="text-sm mb-2"><strong>BNP Match (25%):</strong> €25,000</p>
                    <p className="text-sm mb-4"><strong>Total Fund:</strong> €125,000</p>
                  </div>
                  <div>
                    <p className="text-sm mb-2"><strong>Impact:</strong></p>
                    <ul className="text-xs space-y-1">
                      <li>• 50 full scholarships funded</li>
                      <li>• 12.5 additional students supported via match</li>
                      <li>• Tax deduction on your €100K</li>
                      <li>• Lasting education legacy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-4">Program Benefits</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-bold mb-2">✓ Amplified Impact</h4>
                <p className="text-sm">Your capital goes 25-50% further without additional investment from you</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-bold mb-2">✓ Transparent Reporting</h4>
                <p className="text-sm">Detailed impact metrics on both your contribution and matching funds</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-bold mb-2">✓ Vetted Opportunities</h4>
                <p className="text-sm">All projects undergo rigorous due diligence and impact assessment</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-bold mb-2">✓ No Fees</h4>
                <p className="text-sm">Impact Matching is a benefit to clients—no administrative or management fees</p>
              </div>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8">
              <h4 className="text-xl font-bold mb-2">Eligibility Requirements</h4>
              <ul className="text-sm space-y-2">
                <li>• Active Give Back Program participation</li>
                <li>• Minimum €25,000 annual giving/impact investment commitment</li>
                <li>• Contributions directed to pre-approved initiatives</li>
                <li>• Multi-year commitment preferred for Platinum tier matching</li>
              </ul>
            </div>

            <div className="flex gap-4 mt-12">
              <Button size="lg">Apply for Impact Matching</Button>
              <Link to="/give-back/about">
                <Button size="lg" variant="outline">Learn About Give Back Program</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ImpactMatching;
