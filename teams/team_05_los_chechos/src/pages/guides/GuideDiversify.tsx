import BNPHeader from "@/components/BNPHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import guideDiversify from "@/assets/guides/guide-diversify.jpg";

const GuideDiversify = () => {
  return (
    <div className="min-h-screen bg-background">
      <BNPHeader />
      <main>
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src={guideDiversify} 
            alt="How do I diversify my portfolio"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a4d3a]/95" />
          <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              How do I diversify my portfolio?
            </h1>
            <p className="text-xl text-white/90">
              Essential techniques for spreading risk across different asset classes
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">The Art of Portfolio Diversification</h2>
            
            <p className="text-lg mb-6">
              "Don't put all your eggs in one basket" is the golden rule of investing. Diversification is your most powerful tool for managing risk while pursuing returns.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">1. Asset Class Diversification</h3>
            <p className="mb-4">
              Spread your investments across different types of assets:
            </p>
            <div className="bg-secondary p-6 rounded-lg mb-6">
              <ul className="space-y-3">
                <li><strong>Equities (Stocks):</strong> Growth potential but higher volatility</li>
                <li><strong>Fixed Income (Bonds):</strong> Stability and regular income</li>
                <li><strong>Real Estate:</strong> Tangible assets with inflation protection</li>
                <li><strong>Commodities:</strong> Gold, oil, agricultural products</li>
                <li><strong>Cash & Equivalents:</strong> Liquidity and safety</li>
                <li><strong>Alternative Investments:</strong> Private equity, hedge funds, infrastructure</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. Geographic Diversification</h3>
            <p className="mb-6">
              Don't limit yourself to your home country. Global diversification provides:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Exposure to different economic cycles</li>
              <li>Currency diversification</li>
              <li>Access to faster-growing emerging markets</li>
              <li>Reduced correlation between investments</li>
            </ul>
            <p className="mb-6">
              Consider allocating: 40% domestic, 40% developed markets, 20% emerging markets
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">3. Sector & Industry Diversification</h3>
            <p className="mb-4">
              Within equities, spread across different sectors:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Technology & Innovation</li>
              <li>Healthcare & Pharmaceuticals</li>
              <li>Financial Services</li>
              <li>Consumer Goods</li>
              <li>Energy & Utilities</li>
              <li>Industrial & Manufacturing</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">4. Time Diversification</h3>
            <p className="mb-6">
              Don't invest everything at once. Dollar-cost averaging (investing fixed amounts regularly) can reduce timing risk and smooth out market volatility.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">5. Investment Vehicle Diversification</h3>
            <p className="mb-4">
              Use a mix of investment vehicles:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Individual Securities:</strong> Direct stocks and bonds for control</li>
              <li><strong>Mutual Funds:</strong> Professional management and instant diversification</li>
              <li><strong>ETFs:</strong> Low-cost, liquid, and transparent</li>
              <li><strong>Structured Products:</strong> Customized risk-return profiles</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Common Diversification Mistakes</h3>
            <div className="bg-destructive/10 border-l-4 border-destructive p-6 my-6">
              <ul className="space-y-2">
                <li>❌ Over-diversification (owning too many similar investments)</li>
                <li>❌ False diversification (different stocks in same sector)</li>
                <li>❌ Ignoring correlation (thinking diversification = many holdings)</li>
                <li>❌ Neglecting rebalancing (letting winners dominate)</li>
              </ul>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8">
              <h4 className="text-xl font-bold mb-2">BNP Paribas Expertise</h4>
              <p>
                Our discretionary portfolio management service automatically maintains optimal diversification across all dimensions, rebalancing as market conditions change to keep your risk profile aligned with your goals.
              </p>
            </div>

            <div className="flex gap-4 mt-12">
              <Link to="/simulator">
                <Button size="lg">Analyze Your Portfolio</Button>
              </Link>
              <Button size="lg" variant="outline">Get Expert Advice</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuideDiversify;
