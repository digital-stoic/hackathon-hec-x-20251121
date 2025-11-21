import BNPHeader from "@/components/BNPHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import guideLargeCapital from "@/assets/guides/guide-large-capital.jpg";

const GuideLargeCapital = () => {
  return (
    <div className="min-h-screen bg-background">
      <BNPHeader />
      <main>
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src={guideLargeCapital} 
            alt="Large Capital Investment"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a4d3a]/95" />
          <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              Large Capital Investment: What to Do?
            </h1>
            <p className="text-xl text-white/90">
              Strategic approaches for deploying substantial capital effectively
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Managing Substantial Wealth</h2>
            
            <p className="text-lg mb-6">
              Whether from a business exit, inheritance, or accumulated savings, large capital deployment requires careful planning, sophisticated strategies, and professional guidance.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Phase 1: Assessment & Planning (Months 1-3)</h3>
            <p className="mb-4">
              Before deploying capital, take time to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Define your objectives:</strong> Growth, income, preservation, or legacy?</li>
              <li><strong>Assess your timeline:</strong> When do you need access to funds?</li>
              <li><strong>Establish risk tolerance:</strong> What drawdowns can you withstand?</li>
              <li><strong>Consider tax implications:</strong> Structure for optimal efficiency</li>
              <li><strong>Set aside liquidity:</strong> 6-12 months of expenses in cash</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Phase 2: Structuring Your Wealth (Months 2-4)</h3>
            <div className="bg-secondary p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold mb-4">Consider Legal & Tax Structures:</h4>
              <ul className="space-y-3">
                <li><strong>Family Holding Companies:</strong> Centralized wealth management and succession planning</li>
                <li><strong>Trusts & Foundations:</strong> Asset protection and multi-generational planning</li>
                <li><strong>Investment Companies:</strong> Tax-efficient vehicles for large portfolios</li>
                <li><strong>Philanthropic Structures:</strong> Charitable giving with tax benefits</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Phase 3: Strategic Deployment (Months 3-12)</h3>
            <p className="mb-4">
              Deploy capital gradually to reduce timing risk:
            </p>
            <div className="bg-secondary p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold mb-3">Sample Deployment Strategy (€5M example):</h4>
              <ul className="space-y-2">
                <li><strong>Month 1-2:</strong> €1M immediate allocation (core positions, bonds)</li>
                <li><strong>Month 3-6:</strong> €2M gradual equity deployment</li>
                <li><strong>Month 7-9:</strong> €1M alternative investments, private equity</li>
                <li><strong>Month 10-12:</strong> €1M opportunistic positioning, final adjustments</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Exclusive Investment Opportunities</h3>
            <p className="mb-4">
              Large capital unlocks premium opportunities:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Private Equity & Venture Capital:</strong> Higher returns, 7-10 year horizons</li>
              <li><strong>Private Real Estate Deals:</strong> Direct property investments, development projects</li>
              <li><strong>Hedge Funds:</strong> Sophisticated strategies for all market conditions</li>
              <li><strong>Infrastructure Investments:</strong> Stable, long-term income streams</li>
              <li><strong>Art & Collectibles:</strong> Alternative assets for diversification</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Risk Management for Large Capital</h3>
            <div className="bg-destructive/10 border-l-4 border-destructive p-6 my-6">
              <h4 className="text-xl font-bold mb-3">Key Risks to Manage:</h4>
              <ul className="space-y-2">
                <li><strong>Market Risk:</strong> Diversify across assets and geographies</li>
                <li><strong>Liquidity Risk:</strong> Don't lock up all capital long-term</li>
                <li><strong>Concentration Risk:</strong> Avoid over-exposure to single sectors</li>
                <li><strong>Currency Risk:</strong> Hedge or diversify currency exposure</li>
                <li><strong>Counterparty Risk:</strong> Work with established institutions</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Governance & Oversight</h3>
            <p className="mb-6">
              Establish proper governance:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Quarterly portfolio reviews with your advisory team</li>
              <li>Annual strategic reviews and rebalancing</li>
              <li>Clear investment policy statement (IPS)</li>
              <li>Defined decision-making processes</li>
              <li>Performance benchmarking</li>
            </ul>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8">
              <h4 className="text-xl font-bold mb-2">BNP Paribas Ultra-High Net Worth Services</h4>
              <p>
                For clients with substantial capital, we provide dedicated relationship managers, access to exclusive investment opportunities, comprehensive wealth structuring, and coordination with your tax and legal advisors.
              </p>
            </div>

            <div className="flex gap-4 mt-12">
              <Link to="/simulator">
                <Button size="lg">Model Your Strategy</Button>
              </Link>
              <Button size="lg" variant="outline">Schedule Private Consultation</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuideLargeCapital;
