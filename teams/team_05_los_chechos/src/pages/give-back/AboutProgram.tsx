import BNPHeader from "@/components/BNPHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Globe, TrendingUp } from "lucide-react";

const AboutProgram = () => {
  return (
    <div className="min-h-screen bg-background">
      <BNPHeader />
      <main>
        {/* Hero Section */}
        <div className="relative bg-primary text-primary-foreground py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6">
              Our Give Back Program
            </h1>
            <p className="text-xl max-w-3xl">
              At BNP Paribas Wealth Management, we believe wealth comes with responsibility. 
              Our Give Back Program empowers clients to create lasting positive impact.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Making Impact Part of Your Wealth Strategy</h2>
            
            <p className="text-lg mb-8">
              The Give Back Program is designed for clients who want to align their wealth with their values, 
              creating measurable social and environmental impact while maintaining strong financial returns.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Philanthropic Advisory</h3>
                    <p className="text-sm text-muted-foreground">
                      Expert guidance on strategic giving, foundation setup, and maximizing your charitable impact.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Community Investment</h3>
                    <p className="text-sm text-muted-foreground">
                      Direct your wealth toward initiatives that strengthen communities and create opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Environmental Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Invest in climate solutions, conservation, and sustainable development projects worldwide.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Impact Measurement</h3>
                    <p className="text-sm text-muted-foreground">
                      Track and report on the real-world outcomes of your giving and impact investments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-4">How It Works</h3>
            
            <div className="space-y-6 mb-8">
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">1. Define Your Impact Goals</h4>
                <p className="text-sm">
                  Work with our philanthropic advisors to identify causes and issues that matter most to you. 
                  Whether it's education, healthcare, climate action, or social justice, we help you articulate 
                  your vision for change.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">2. Design Your Strategy</h4>
                <p className="text-sm">
                  Choose from multiple giving vehicles: direct donations, donor-advised funds, private foundations, 
                  impact investments, or a combination. We structure your approach for maximum tax efficiency 
                  and impact effectiveness.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">3. Execute & Monitor</h4>
                <p className="text-sm">
                  We handle the administrative work, vet organizations, manage disbursements, and provide 
                  regular impact reports. You stay informed about the difference your wealth is making.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">4. Impact Matching (Optional)</h4>
                <p className="text-sm">
                  Through our unique Impact Matching program, BNP Paribas matches a portion of your giving 
                  to amplify your impact. Learn more about this exclusive benefit.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-4">Giving Vehicles We Support</h3>
            
            <div className="bg-secondary p-6 rounded-lg mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong>Donor-Advised Funds (DAFs):</strong> Flexible, tax-efficient giving with immediate tax deduction
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong>Private Foundations:</strong> Long-term family legacy and control over grantmaking
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong>Charitable Trusts:</strong> Income generation combined with philanthropic goals
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong>Impact Investments:</strong> Financial returns alongside measurable social/environmental outcomes
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong>Direct Giving:</strong> Immediate support to organizations you care about
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8">
              <h4 className="text-xl font-bold mb-2">Tax Benefits</h4>
              <p className="mb-3">
                Strategic philanthropy can provide substantial tax advantages:
              </p>
              <ul className="text-sm space-y-1">
                <li>• Income tax deductions for charitable contributions</li>
                <li>• Avoid capital gains tax on donated appreciated assets</li>
                <li>• Reduce estate taxes through charitable bequests</li>
                <li>• Optimize timing of deductions across tax years</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-4">Client Success Stories</h3>
            
            <div className="space-y-6 mb-8">
              <div className="bg-secondary p-6 rounded-lg">
                <p className="italic mb-3">
                  "The Give Back Program helped us establish a family foundation that supports education in 
                  underserved communities. We've funded 50 scholarships this year alone, and our children are 
                  actively involved in grantmaking decisions."
                </p>
                <p className="text-sm text-muted-foreground">— Family Office Client, Geneva</p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <p className="italic mb-3">
                  "Through impact matching, my €500,000 investment in renewable energy became €750,000. 
                  The projects are generating clean power while providing financial returns. It's the best 
                  of both worlds."
                </p>
                <p className="text-sm text-muted-foreground">— Entrepreneur, Luxembourg</p>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <Link to="/give-back/impact-matching">
                <Button size="lg">Discover Impact Matching</Button>
              </Link>
              <Button size="lg" variant="outline">Schedule Consultation</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutProgram;
