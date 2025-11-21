import BNPHeader from "@/components/BNPHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import guideStartInvesting from "@/assets/guides/guide-start-investing.jpg";

const GuideStartInvesting = () => {
  return (
    <div className="min-h-screen bg-background">
      <BNPHeader />
      <main>
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <img 
            src={guideStartInvesting} 
            alt="How to start investing"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a4d3a]/95" />
          <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              How to Start Investing?
            </h1>
            <p className="text-xl text-white/90">
              A beginner's guide to taking your first steps in wealth building
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Your Journey to Financial Growth Begins Here</h2>
            
            <p className="text-lg mb-6">
              Starting to invest can feel overwhelming, but it doesn't have to be. This guide will walk you through the essential steps to begin building wealth confidently.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Step 1: Build Your Financial Foundation</h3>
            <p className="mb-4">
              Before investing, ensure you have:
            </p>
            <div className="bg-secondary p-6 rounded-lg mb-6">
              <ul className="space-y-3">
                <li><strong>Emergency Fund:</strong> 3-6 months of living expenses in savings</li>
                <li><strong>High-Interest Debt Paid Off:</strong> Clear credit cards and personal loans first</li>
                <li><strong>Budget in Place:</strong> Know your income, expenses, and what you can invest</li>
                <li><strong>Clear Financial Goals:</strong> Why are you investing? Retirement? Home? Freedom?</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Step 2: Understand Investment Basics</h3>
            <p className="mb-4">
              Key concepts every beginner should know:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-2">💰 Stocks (Equities)</h4>
                <p className="text-sm">Ownership in companies. Higher risk, higher potential returns. Good for long-term growth.</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-2">📊 Bonds (Fixed Income)</h4>
                <p className="text-sm">Loans to governments or companies. Lower risk, stable income. Good for preservation.</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-2">🏢 ETFs</h4>
                <p className="text-sm">Baskets of stocks or bonds. Low cost, instant diversification. Perfect for beginners.</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-2">🏡 Real Estate</h4>
                <p className="text-sm">Property investments or REITs. Tangible assets with income potential.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Step 3: Determine Your Risk Profile</h3>
            <p className="mb-4">
              Your investment mix depends on:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Age:</strong> Younger investors can take more risk (time to recover)</li>
              <li><strong>Timeline:</strong> Short-term goals need safer investments</li>
              <li><strong>Comfort Level:</strong> Can you sleep at night during market drops?</li>
              <li><strong>Financial Situation:</strong> Do you depend on this money?</li>
            </ul>

            <div className="bg-secondary p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold mb-3">Sample Beginner Portfolios:</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-bold">Conservative (Age 50+, 5-year timeline):</p>
                  <p className="text-sm">60% Bonds, 30% Stocks, 10% Cash</p>
                </div>
                <div>
                  <p className="font-bold">Moderate (Age 35-50, 10-year timeline):</p>
                  <p className="text-sm">60% Stocks, 30% Bonds, 10% Alternatives</p>
                </div>
                <div>
                  <p className="font-bold">Aggressive (Age 20-35, 20+ year timeline):</p>
                  <p className="text-sm">80% Stocks, 15% Alternatives, 5% Bonds</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Step 4: Choose How to Invest</h3>
            <p className="mb-4">
              Three main approaches:
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-2">🤖 Robo-Advisors (Best for hands-off beginners)</h4>
                <p className="text-sm">Automated portfolio management based on your goals. Low cost, easy to use.</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-2">🎓 Self-Directed (For those who want control)</h4>
                <p className="text-sm">Choose your own investments through online brokers. Requires research and discipline.</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg">
                <h4 className="font-bold mb-2">👨‍💼 Professional Management (For personalized guidance)</h4>
                <p className="text-sm">Work with wealth managers who tailor strategies to your needs.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Step 5: Start Small and Stay Consistent</h3>
            <p className="mb-6">
              You don't need thousands to start. Key principles:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Start with what you have:</strong> Even €100/month adds up over time</li>
              <li><strong>Automate investments:</strong> Set up automatic monthly contributions</li>
              <li><strong>Dollar-cost averaging:</strong> Regular investing smooths out market volatility</li>
              <li><strong>Reinvest dividends:</strong> Let compound interest work its magic</li>
              <li><strong>Stay invested:</strong> Time in the market beats timing the market</li>
            </ul>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-6">
              <h4 className="text-xl font-bold mb-2">💡 The Power of Starting Early</h4>
              <p className="mb-2">
                Investing €300/month at 7% annual return:
              </p>
              <ul className="text-sm space-y-1">
                <li>• After 10 years: €52,000 invested → €70,000</li>
                <li>• After 20 years: €104,000 invested → €156,000</li>
                <li>• After 30 years: €156,000 invested → €340,000</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Common Beginner Mistakes to Avoid</h3>
            <div className="bg-destructive/10 border-l-4 border-destructive p-6 my-6">
              <ul className="space-y-2">
                <li>❌ Waiting for the "perfect time" to invest</li>
                <li>❌ Trying to get rich quick with risky bets</li>
                <li>❌ Panic selling during market drops</li>
                <li>❌ Not diversifying (putting all money in one stock)</li>
                <li>❌ Ignoring fees and taxes</li>
                <li>❌ Investing money you'll need soon</li>
              </ul>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-6 my-8">
              <h4 className="text-xl font-bold mb-2">Start Your Investment Journey with BNP Paribas</h4>
              <p>
                Our wealth advisors help beginners create personalized investment plans aligned with your goals, timeline, and comfort level. We make investing simple and accessible.
              </p>
            </div>

            <div className="flex gap-4 mt-12">
              <Link to="/simulator">
                <Button size="lg">Create Your Investment Plan</Button>
              </Link>
              <Button size="lg" variant="outline">Book Consultation</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuideStartInvesting;
