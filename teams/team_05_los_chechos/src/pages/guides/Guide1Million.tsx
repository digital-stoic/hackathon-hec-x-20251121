import BNPHeader from "@/components/BNPHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import guide1m from "@/assets/guides/guide-1m-investment.jpg";

const Guide1Million = () => {
  return (
    <div className="min-h-screen bg-background">
      <BNPHeader />
      <main>
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src={guide1m} 
            alt="How to invest my 1 million euros"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a4d3a]/95" />
          <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              How to invest my 1 million euros?
            </h1>
            <p className="text-xl text-white/90">
              Expert strategies for managing significant wealth and maximizing returns
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Strategic Wealth Management for €1M</h2>
            
            <p className="text-lg mb-6">
              Receiving or accumulating one million euros is a significant financial milestone. The key to making this wealth work for you lies in strategic diversification, professional guidance, and a long-term perspective.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">1. Define Your Financial Goals</h3>
            <p className="mb-4">
              Before making any investment decisions, clarify your objectives:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>What is your investment timeline? (5, 10, 20+ years)</li>
              <li>What returns do you expect annually?</li>
              <li>How much risk can you tolerate?</li>
              <li>Do you need regular income or prefer capital growth?</li>
              <li>Are there specific values you want to align with (ESG, impact investing)?</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. Strategic Asset Allocation</h3>
            <p className="mb-4">
              A well-diversified portfolio for €1 million might look like:
            </p>
            <div className="bg-secondary p-6 rounded-lg mb-6">
              <ul className="space-y-2">
                <li><strong>40% Equities:</strong> Global stocks, emerging markets, sector-specific investments</li>
                <li><strong>25% Fixed Income:</strong> Government bonds, corporate bonds, inflation-linked securities</li>
                <li><strong>15% Real Estate:</strong> Direct property, REITs, property funds</li>
                <li><strong>10% Private Equity/Alternatives:</strong> Private markets, hedge funds, commodities</li>
                <li><strong>5% Cash & Liquidity:</strong> Emergency fund and opportunities</li>
                <li><strong>5% Impact/ESG:</strong> Sustainable investments aligned with your values</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">3. Tax Optimization</h3>
            <p className="mb-6">
              Structure your investments to minimize tax liability while remaining compliant. Consider holding structures, tax-advantaged accounts, and cross-border planning if applicable.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">4. Professional Management</h3>
            <p className="mb-6">
              At this wealth level, discretionary portfolio management services can provide:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Expert market analysis and rebalancing</li>
              <li>Access to exclusive investment opportunities</li>
              <li>Risk management and downside protection</li>
              <li>Comprehensive wealth planning</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">5. Regular Review & Rebalancing</h3>
            <p className="mb-6">
              Markets evolve, and so should your portfolio. Schedule quarterly reviews to ensure your investments remain aligned with your goals and risk tolerance.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8">
              <h4 className="text-xl font-bold mb-2">BNP Paribas Wealth Management Advantage</h4>
              <p>
                Our private bankers have extensive experience managing portfolios of this size. We provide personalized strategies, exclusive access to private markets, and comprehensive wealth structuring services.
              </p>
            </div>

            <div className="flex gap-4 mt-12">
              <Link to="/simulator">
                <Button size="lg">Try Our AI Wealth Simulator</Button>
              </Link>
              <Button size="lg" variant="outline">Speak to an Advisor</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Guide1Million;
