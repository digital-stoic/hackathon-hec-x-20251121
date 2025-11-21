import BNPHeader from "@/components/BNPHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import guide2025 from "@/assets/guides/guide-2025.jpg";

const Guide2025 = () => {
  return (
    <div className="min-h-screen bg-background">
      <BNPHeader />
      <main>
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src={guide2025} 
            alt="Where to invest 2025"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a4d3a]/95" />
          <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              Where to Invest in 2025?
            </h1>
            <p className="text-xl text-white/90">
              Market insights and opportunities for the year ahead
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">2025 Investment Outlook</h2>
            
            <p className="text-lg mb-6">
              As we navigate 2025, global markets face a unique mix of opportunities and challenges. Here's where smart money is flowing this year.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Key Themes Shaping 2025</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">🤖 AI Revolution Phase 2</h4>
                <p className="text-sm">Beyond chatbots - AI infrastructure, semiconductors, and enterprise adoption</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">🌍 Energy Transition</h4>
                <p className="text-sm">Renewable energy, battery tech, grid modernization, and sustainable infrastructure</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">💊 Healthcare Innovation</h4>
                <p className="text-sm">Biotech breakthroughs, personalized medicine, aging demographics</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">🏛️ Reshoring & Manufacturing</h4>
                <p className="text-sm">Supply chain resilience, industrial automation, regional production</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Top Investment Opportunities</h3>
            
            <div className="space-y-6 mb-8">
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">1. Technology & Innovation (30% allocation)</h4>
                <p className="mb-3">The AI boom continues, but with more focused opportunities:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>AI Infrastructure:</strong> Data centers, cloud computing, specialized chips</li>
                  <li><strong>Cybersecurity:</strong> Growing threats drive increased spending</li>
                  <li><strong>Quantum Computing:</strong> Early stage but high potential</li>
                  <li><strong>Software-as-a-Service (SaaS):</strong> Enterprise efficiency tools</li>
                </ul>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">2. Clean Energy & Sustainability (20% allocation)</h4>
                <p className="mb-3">ESG momentum accelerates with regulatory tailwinds:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>Solar & Wind:</strong> Cost-competitive with fossil fuels</li>
                  <li><strong>Energy Storage:</strong> Batteries and grid-scale solutions</li>
                  <li><strong>Electric Vehicles:</strong> Not just cars - trucks, buses, infrastructure</li>
                  <li><strong>Green Hydrogen:</strong> Emerging clean fuel alternative</li>
                </ul>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">3. Healthcare & Biotechnology (15% allocation)</h4>
                <p className="mb-3">Aging populations and innovation create strong tailwinds:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>Gene Therapy:</strong> Revolutionary treatments gaining approval</li>
                  <li><strong>Digital Health:</strong> Telemedicine, wearables, AI diagnostics</li>
                  <li><strong>Pharmaceutical Innovation:</strong> Obesity drugs, cancer treatments</li>
                  <li><strong>Medical Devices:</strong> Aging demographics drive demand</li>
                </ul>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">4. Emerging Markets (15% allocation)</h4>
                <p className="mb-3">Selective opportunities in high-growth regions:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>India:</strong> Demographics, digital adoption, manufacturing hub</li>
                  <li><strong>Southeast Asia:</strong> Vietnam, Indonesia - growing middle class</li>
                  <li><strong>Selected Latin America:</strong> Commodity producers benefit from green transition</li>
                  <li><strong>Avoid:</strong> China faces structural headwinds in 2025</li>
                </ul>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3">5. Fixed Income - Higher for Longer (20% allocation)</h4>
                <p className="mb-3">Interest rates stabilizing at attractive levels:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>Corporate Bonds:</strong> Quality companies offering 5-6% yields</li>
                  <li><strong>Government Bonds:</strong> Safe haven with real positive returns</li>
                  <li><strong>Floating Rate Notes:</strong> Protection if rates rise further</li>
                  <li><strong>Emerging Market Debt:</strong> Higher yields for risk-tolerant investors</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Sectors to Approach with Caution</h3>
            <div className="bg-destructive/10 border-l-4 border-destructive p-6 my-6">
              <ul className="space-y-2">
                <li>⚠️ <strong>Commercial Real Estate:</strong> Remote work impacts persist</li>
                <li>⚠️ <strong>Traditional Retail:</strong> E-commerce pressure continues</li>
                <li>⚠️ <strong>Fossil Fuel Majors:</strong> Long-term transition headwinds</li>
                <li>⚠️ <strong>Unprofitable Tech:</strong> Higher rates challenge growth-at-any-cost</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Regional Allocation Recommendations</h3>
            <div className="bg-secondary p-6 rounded-lg mb-6">
              <ul className="space-y-2">
                <li><strong>40% North America:</strong> Tech leadership, AI dominance</li>
                <li><strong>30% Europe:</strong> Value opportunities, energy transition leaders</li>
                <li><strong>20% Asia-Pacific:</strong> India, Japan, selective EM exposure</li>
                <li><strong>10% Alternatives:</strong> Private markets, infrastructure, commodities</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Risk Management in 2025</h3>
            <p className="mb-4">
              Key risks to monitor:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Geopolitical Tensions:</strong> Trade policies, regional conflicts</li>
              <li><strong>Interest Rate Volatility:</strong> Central bank policy shifts</li>
              <li><strong>AI Bubble Concerns:</strong> Valuations stretched in some areas</li>
              <li><strong>Climate Events:</strong> Physical risks to assets and supply chains</li>
            </ul>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8">
              <h4 className="text-xl font-bold mb-2">💡 BNP Paribas 2025 Strategy</h4>
              <p className="mb-3">
                Our recommendation: <strong>Balanced Growth</strong>
              </p>
              <p>
                Focus on quality companies with strong balance sheets, diversify across themes, maintain defensive positions, and stay flexible. The market will reward selectivity in 2025.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg mb-8">
              <h4 className="text-xl font-bold mb-3">Sample 2025 Portfolio</h4>
              <ul className="space-y-1 text-sm">
                <li>• 30% Tech & Innovation (AI, cybersecurity, cloud)</li>
                <li>• 20% Clean Energy & Sustainability</li>
                <li>• 20% Quality Bonds (corporate + government)</li>
                <li>• 15% Healthcare & Biotech</li>
                <li>• 10% Emerging Markets (focus India, SE Asia)</li>
                <li>• 5% Cash & Opportunistic</li>
              </ul>
            </div>

            <div className="flex gap-4 mt-12">
              <Link to="/simulator">
                <Button size="lg">Build Your 2025 Strategy</Button>
              </Link>
              <Button size="lg" variant="outline">Get Market Insights</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Guide2025;
