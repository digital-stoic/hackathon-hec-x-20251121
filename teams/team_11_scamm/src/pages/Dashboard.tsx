import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  TrendingUp, 
  User, 
  ShoppingBag,
  ChevronDown,
  Plus,
  MessageSquare,
  Headphones,
  ArrowUpRight,
  DollarSign
} from 'lucide-react'
import PortfolioChart from '../components/PortfolioChart'
import PortfolioCard from '../components/PortfolioCard'
import BottomNav from '../components/BottomNav'

interface Portfolio {
  id: number
  name: string
  value: number
  gain: number
  gainPercent: number
  risk: string
}

interface DashboardProps {
  onLogout: () => void
  portfolios: Portfolio[]
  onDeletePortfolio: (id: number) => void
}

export default function Dashboard({ onLogout, portfolios, onDeletePortfolio }: DashboardProps) {
  const navigate = useNavigate()
  const [selectedPeriod, setSelectedPeriod] = useState('3M')
  const [showAssetsDetail, setShowAssetsDetail] = useState(false)

  // Demo data
  const availableCash = 45000
  const totalWealth = portfolios.reduce((sum, p) => sum + p.value, 0)
  const invested = totalWealth - availableCash
  
  // Calculate period gain based on selected period
  const getPeriodGain = () => {
    const baseValue = totalWealth - availableCash
    switch(selectedPeriod) {
      case '1M': return baseValue * 0.005  // 0.5%
      case '3M': return baseValue * 0.015  // 1.5%
      case '6M': return baseValue * 0.032  // 3.2%
      case '1Y': return baseValue * 0.068  // 6.8%
      case '3Y': return baseValue * 0.225  // 22.5%
      case '5Y': return baseValue * 0.412  // 41.2%
      default: return baseValue * 0.015
    }
  }
  
  const periodGain = getPeriodGain()
  const periodGainPercent = totalWealth > 0 ? (periodGain / (totalWealth - periodGain)) * 100 : 0

  const assetsByClass = [
    { class: 'Stocks', assets: [
      { name: 'Amazon', amount: 45000 },
      { name: 'Apple', amount: 38000 },
      { name: 'Tesla', amount: 28000 },
    ]},
    { class: 'Crypto', assets: [
      { name: 'Bitcoin', amount: 52000 },
      { name: 'Ethereum', amount: 35000 },
    ]},
    { class: 'Real Estate', assets: [
      { name: 'SCPI Corum', amount: 85000 },
    ]},
    { class: 'Bonds', assets: [
      { name: 'BNP Bond', amount: 95000 },
      { name: 'Gov Bond', amount: 62650 },
    ]},
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-bnp-green-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-bnp-dark-900">BNP PARIBAS</h1>
                <p className="text-xs text-gray-500">Wealth Management</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                className="flex items-center space-x-2 px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg font-medium transition-colors shadow-md"
              >
                <Headphones className="w-4 h-4" />
                <span className="hidden md:inline">Contact Advisor</span>
              </button>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-green-500 hover:bg-green-600 transition-colors shadow-md"
                title="WhatsApp"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <button
                onClick={() => navigate('/chat')}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
                title="AI Assistant"
              >
                <MessageSquare className="w-5 h-5 text-gray-600" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-bnp-green-500 rounded-full"></div>
              </button>
              <button
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                title="Profile"
              >
                <User className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        {/* Available Cash Banner */}
        <div className="mb-6 bg-gradient-to-r from-bnp-gold-50 to-bnp-green-50 border-2 border-bnp-gold-400 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Available Cash</p>
              <p className="text-4xl font-display font-bold text-bnp-dark-900">
                ${availableCash.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}
              </p>
              <p className="text-sm text-gray-600 mt-1">Ready to invest</p>
            </div>
            <div className="w-16 h-16 bg-bnp-gold-400 rounded-full flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Big Objectives CTA */}
        <button
          onClick={() => navigate('/objectives')}
          className="w-full group relative overflow-hidden bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] mb-8"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <span className="text-5xl">🏆</span>
                </div>
                <div className="text-left">
                  <h2 className="text-3xl font-display font-bold mb-2">Track Your Objectives</h2>
                  <p className="text-lg text-white/90">Complete missions, earn XP, and level up your investor status!</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-2">
                  <span className="text-2xl font-bold">Level 2</span>
                </div>
                <span className="text-sm text-white/80">450 XP</span>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-4 right-20 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute bottom-4 right-40 w-12 h-12 bg-white rounded-full"></div>
            <div className="absolute top-1/2 right-60 w-8 h-8 bg-white rounded-full"></div>
          </div>
        </button>

        {/* CTA Buttons Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <button
            onClick={() => navigate('/catalog')}
            className="group relative overflow-hidden bg-gradient-to-br from-bnp-green-500 to-bnp-green-600 hover:from-bnp-green-600 hover:to-bnp-green-700 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Browse Catalog</h3>
              <p className="text-sm text-white/90">Discover stocks, ETFs, crypto & more investment opportunities</p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          </button>

          <button
            onClick={() => navigate('/learn')}
            className="group relative overflow-hidden bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Learn Finance</h3>
              <p className="text-sm text-white/90">Watch short educational videos to master investing</p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          </button>

          <button
            onClick={() => navigate('/portfolio/create')}
            className="group relative overflow-hidden bg-gradient-to-br from-bnp-gold-400 to-bnp-gold-500 hover:from-bnp-gold-500 hover:to-bnp-gold-600 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all">
                <Plus className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Create Portfolio</h3>
              <p className="text-sm text-white/90">Build a custom investment strategy tailored to your goals</p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          </button>
        </div>

        {/* Global Stats Section */}
        <div className="card mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-display font-bold text-bnp-dark-900">Global Portfolio</h2>
              <p className="text-gray-600">All portfolios combined</p>
            </div>
            <div className="flex space-x-2">
              {['1M', '3M', '6M', '1Y', '3Y', '5Y'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedPeriod === period
                      ? 'bg-bnp-green-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-bnp-green-50 rounded-xl p-6">
              <p className="text-sm text-gray-700 mb-2">Total Wealth</p>
              <p className="text-3xl font-display font-bold text-bnp-dark-900">
                ${totalWealth.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <p className="text-sm text-gray-700 mb-2">P&L Amount</p>
              <p className="text-3xl font-display font-bold text-green-600 flex items-center">
                <ArrowUpRight className="w-6 h-6 mr-1" />
                +${periodGain.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <p className="text-sm text-gray-700 mb-2">P&L Percentage</p>
              <p className="text-3xl font-display font-bold text-green-600">
                +{periodGainPercent.toFixed(3)}%
              </p>
            </div>
          </div>

          <div className="mb-6">
            <PortfolioChart />
          </div>

          <button
            onClick={() => setShowAssetsDetail(!showAssetsDetail)}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <span className="font-medium text-bnp-dark-900">View Asset Details</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${showAssetsDetail ? 'rotate-180' : ''}`} />
          </button>

          {showAssetsDetail && (
            <div className="mt-4 space-y-4">
              {assetsByClass.map((assetClass, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-bnp-dark-900 mb-3">{assetClass.class}</h4>
                  <div className="space-y-2">
                    {assetClass.assets.map((asset, assetIdx) => (
                      <div key={assetIdx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-700">{asset.name}</span>
                        <span className="font-semibold text-bnp-dark-900">
                          ${asset.amount.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Individual Portfolios */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-display font-bold text-bnp-dark-900">My Portfolios</h2>
          {portfolios.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} onDelete={onDeletePortfolio} />
          ))}
        </div>

        {/* Add Portfolio Button */}
        <button
          onClick={() => navigate('/portfolio/create')}
          className="w-full card hover:shadow-bnp-lg transition-all duration-300 border-2 border-dashed border-bnp-green-300 bg-bnp-green-50/30 hover:bg-bnp-green-50 flex items-center justify-center py-8"
        >
          <Plus className="w-8 h-8 text-bnp-green-600 mr-3" />
          <span className="text-xl font-semibold text-bnp-green-700">Create New Portfolio</span>
        </button>

        {/* Footer Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <button className="card hover:shadow-bnp transition-all flex items-center justify-center py-6 bg-gradient-to-r from-bnp-green-50 to-bnp-green-100 border-bnp-green-200">
            <Headphones className="w-6 h-6 text-bnp-green-700 mr-3" />
            <span className="text-lg font-semibold text-bnp-green-800">Contact an Advisor</span>
          </button>
          <button
            onClick={() => navigate('/chat')}
            className="card hover:shadow-bnp transition-all flex items-center justify-center py-6 bg-gradient-to-r from-blue-50 to-indigo-100 border-blue-200"
          >
            <MessageSquare className="w-6 h-6 text-blue-700 mr-3" />
            <span className="text-lg font-semibold text-blue-800">AI Chatbot Assistant</span>
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
