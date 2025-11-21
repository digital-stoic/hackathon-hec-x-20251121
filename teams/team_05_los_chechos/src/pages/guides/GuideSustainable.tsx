import BNPHeader from "@/components/BNPHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import guideSustainable from "@/assets/guides/guide-sustainable.jpg";

const GuideSustainable = () => {
  return (
    <div className="min-h-screen bg-background">
      <BNPHeader />
      <main>
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src={guideSustainable} 
            alt="BNP Guide to sustainable investment"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a4d3a]/95" />
          <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              BNP Guide to Sustainable Investment
            </h1>
            <p className="text-xl text-white/90">
              Align your investments with environmental and social values
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Investing with Purpose</h2>
            
            <p className="text-lg mb-6">
              Sustainable investing isn't about sacrificing returns—it's about aligning your wealth with your values while building a better future. Here's everything you need to know.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">What is Sustainable Investing?</h3>
            <p className="mb-6">
              Sustainable investing (also called ESG investing) considers Environmental, Social, and Governance factors alongside financial returns.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">🌍 Environmental</h4>
                <ul className="text-sm space-y-1">
                  <li>Climate change</li>
                  <li>Carbon emissions</li>
                  <li>Resource depletion</li>
                  <li>Pollution & waste</li>
                  <li>Biodiversity</li>
                </ul>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">👥 Social</h4>
                <ul className="text-sm space-y-1">
                  <li>Labor standards</li>
                  <li>Human rights</li>
                  <li>Diversity & inclusion</li>
                  <li>Community impact</li>
                  <li>Product safety</li>
                </ul>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">⚖️ Governance</h4>
                <ul className="text-sm space-y-1">
                  <li>Board diversity</li>
                  <li>Executive pay</li>
                  <li>Ethics & transparency</li>
                  <li>Shareholder rights</li>
                  <li>Anti-corruption</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Four Approaches to Sustainable Investing</h3>
            
            <div className="space-y-4 mb-8">
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">1. 🚫 Exclusion Screening</h4>
                <p className="text-sm mb-2">Avoid companies involved in:</p>
                <ul className="text-sm list-disc pl-6">
                  <li>Tobacco, weapons, gambling</li>
                  <li>Fossil fuels</li>
                  <li>Controversial practices</li>
                </ul>
                <p className="text-sm mt-2 italic">Best for: Values-driven investors with clear "red lines"</p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">2. ✅ Positive Screening</h4>
                <p className="text-sm mb-2">Actively seek companies with:</p>
                <ul className="text-sm list-disc pl-6">
                  <li>Strong ESG ratings</li>
                  <li>Sustainability leadership</li>
                  <li>Positive impact products/services</li>
                </ul>
                <p className="text-sm mt-2 italic">Best for: Investors wanting to support sustainability leaders</p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">3. 📈 ESG Integration</h4>
                <p className="text-sm mb-2">Consider ESG factors as financial risks and opportunities:</p>
                <ul className="text-sm list-disc pl-6">
                  <li>Climate risk affects long-term value</li>
                  <li>Strong governance reduces scandals</li>
                  <li>Social license to operate matters</li>
                </ul>
                <p className="text-sm mt-2 italic">Best for: Pragmatic investors viewing ESG as risk management</p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">4. 🎯 Impact Investing</h4>
                <p className="text-sm mb-2">Directly measurable positive impact:</p>
                <ul className="text-sm list-disc pl-6">
                  <li>Renewable energy projects</li>
                  <li>Affordable housing funds</li>
                  <li>Microfinance institutions</li>
                  <li>Clean water infrastructure</li>
                </ul>
                <p className="text-sm mt-2 italic">Best for: Investors seeking measurable social/environmental outcomes</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Top Sustainable Investment Themes</h3>
            <div className="space-y-3 mb-6">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-1">🌤️ Climate Solutions</h4>
                <p className="text-sm">Solar, wind, batteries, carbon capture, green hydrogen, electric vehicles</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-1">💧 Water & Oceans</h4>
                <p className="text-sm">Water treatment, infrastructure, ocean cleanup, sustainable fisheries</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-1">🌾 Sustainable Agriculture</h4>
                <p className="text-sm">Regenerative farming, organic food, precision agriculture, plant-based proteins</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-1">♻️ Circular Economy</h4>
                <p className="text-sm">Recycling, waste reduction, product-as-service, sustainable packaging</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-1">🏥 Healthcare Access</h4>
                <p className="text-sm">Affordable medicines, diagnostics, telemedicine, global health equity</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-1">🎓 Education & Inclusion</h4>
                <p className="text-sm">EdTech, skills training, financial inclusion, diversity initiatives</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Do Sustainable Investments Perform?</h3>
            <div className="bg-primary/10 border-l-4 border-primary p-6 my-6">
              <p className="font-bold mb-3">The data is clear: Yes.</p>
              <ul className="text-sm space-y-2">
                <li>✓ 2015-2024: ESG funds matched or outperformed traditional funds</li>
                <li>✓ Companies with strong ESG show lower volatility</li>
                <li>✓ Better risk-adjusted returns over long periods</li>
                <li>✓ Growing regulatory and consumer preference creates tailwinds</li>
              </ul>
              <p className="text-sm mt-3 italic">
                * Past performance doesn't guarantee future results, but fundamentals are strong
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Beware of Greenwashing</h3>
            <div className="bg-destructive/10 border-l-4 border-destructive p-6 my-6">
              <p className="mb-3">Not all "sustainable" funds are created equal. Red flags:</p>
              <ul className="space-y-2 text-sm">
                <li>❌ Vague sustainability claims without specifics</li>
                <li>❌ High carbon footprint despite "green" label</li>
                <li>❌ Minimal screening or ESG integration</li>
                <li>❌ No impact reporting or transparency</li>
              </ul>
              <p className="mt-3 text-sm font-bold">
                Always review holdings, methodology, and impact reports.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Building Your Sustainable Portfolio</h3>
            <div className="bg-secondary p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold mb-3">Sample Allocation:</h4>
              <ul className="space-y-2">
                <li><strong>40% ESG Equity Funds:</strong> Diversified sustainable stocks</li>
                <li><strong>25% Green Bonds:</strong> Finance climate solutions</li>
                <li><strong>15% Thematic Funds:</strong> Clean energy, water, circular economy</li>
                <li><strong>10% Impact Investments:</strong> Direct measurable outcomes</li>
                <li><strong>10% Sustainable Real Estate:</strong> Green buildings, renewable projects</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">How to Get Started</h3>
            <ol className="list-decimal pl-6 space-y-3 mb-6">
              <li><strong>Define your values:</strong> What matters most to you?</li>
              <li><strong>Choose your approach:</strong> Exclusion, integration, impact?</li>
              <li><strong>Research options:</strong> ESG ratings, fund holdings, impact reports</li>
              <li><strong>Start with core allocations:</strong> Broad ESG equity and bond funds</li>
              <li><strong>Add thematic exposure:</strong> Focus on specific causes you care about</li>
              <li><strong>Monitor & engage:</strong> Review impact reports, vote proxies</li>
            </ol>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8">
              <h4 className="text-xl font-bold mb-2">BNP Paribas Sustainable Investment Solutions</h4>
              <p className="mb-3">
                As a signatory of the UN Principles for Responsible Investment, we integrate ESG across all our strategies.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Proprietary ESG research and ratings</li>
                <li>• Thematic funds across all sustainable themes</li>
                <li>• Impact measurement and reporting</li>
                <li>• Active engagement with companies</li>
                <li>• Customized values-based portfolios</li>
              </ul>
            </div>

            <div className="flex gap-4 mt-12">
              <Link to="/simulator">
                <Button size="lg">Design Your Sustainable Portfolio</Button>
              </Link>
              <Button size="lg" variant="outline">Speak to ESG Specialist</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuideSustainable;
