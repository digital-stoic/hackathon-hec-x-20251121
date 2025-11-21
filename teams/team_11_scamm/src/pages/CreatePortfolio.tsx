import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, TrendingUp, Play, Check } from 'lucide-react'
import BottomNav from '../components/BottomNav'

interface CreatePortfolioProps {
  onCreatePortfolio: (name: string, amount: number, risk: string) => void
}

export default function CreatePortfolio({ onCreatePortfolio }: CreatePortfolioProps) {
  const navigate = useNavigate()
  const [portfolioName, setPortfolioName] = useState('')
  const [initialAmount, setInitialAmount] = useState('')
  const [riskLevel, setRiskLevel] = useState(50)
  const [impactLevel, setImpactLevel] = useState(50)
  const [showSimulation, setShowSimulation] = useState(false)

  const assetCategories = [
    { id: 'stocks', name: 'Stocks', checked: true },
    { id: 'crypto', name: 'Cryptocurrency', checked: false },
    { id: 'bonds', name: 'Bonds', checked: true },
    { id: 'real-estate', name: 'Real Estate', checked: false },
    { id: 'etf', name: 'ETFs', checked: true },
  ]

  const [categories, setCategories] = useState(assetCategories)

  const themes = [
    { id: 'technology', name: 'Technology', checked: true },
    { id: 'ai', name: 'Artificial Intelligence', checked: false },
    { id: 'robotics', name: 'Robotics', checked: false },
    { id: 'environment', name: 'Environment', checked: true },
    { id: 'finance', name: 'Finance', checked: false },
    { id: 'automotive', name: 'Automotive', checked: false },
  ]

  const [selectedThemes, setSelectedThemes] = useState(themes)

  const toggleCategory = (id: string) => {
    setCategories(categories.map(cat => 
      cat.id === id ? { ...cat, checked: !cat.checked } : cat
    ))
  }

  const toggleTheme = (id: string) => {
    setSelectedThemes(selectedThemes.map(theme => 
      theme.id === id ? { ...theme, checked: !theme.checked } : theme
    ))
  }

  const handleSimulate = () => {
    if (portfolioName && initialAmount && Number(initialAmount) > 0) {
      setShowSimulation(true)
    }
  }

  const handleValidate = () => {
    const riskCategory = riskLevel < 33 ? 'low' : riskLevel < 66 ? 'moderate' : 'high'
    onCreatePortfolio(portfolioName, Number(initialAmount), riskCategory)
    alert(`Portfolio "${portfolioName}" created successfully with $${Number(initialAmount).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })} initial investment!`)
    navigate('/dashboard')
  }

  // Simulation data based on settings
  const baseAmount = Number(initialAmount) || 100000
  const simulatedAllocation = [
    { asset: 'Technology Stocks', percentage: 35, amount: Math.round(baseAmount * 0.35) },
    { asset: 'Green Bonds', percentage: 25, amount: Math.round(baseAmount * 0.25) },
    { asset: 'ETFs (Diversified)', percentage: 20, amount: Math.round(baseAmount * 0.20) },
    { asset: 'Environmental Funds', percentage: 20, amount: Math.round(baseAmount * 0.20) },
  ]

  const expectedReturn = riskLevel * 0.15 // Higher risk = higher expected return
  const volatility = riskLevel * 0.3

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="w-10 h-10 bg-bnp-green-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-bnp-dark-900">Create New Portfolio</h1>
                <p className="text-xs text-gray-500">Customize your investment strategy</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Portfolio Name & Initial Amount */}
        <div className="card mb-8">
          <h2 className="text-2xl font-display font-bold text-bnp-dark-900 mb-6">Portfolio Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio Name</label>
              <input
                type="text"
                value={portfolioName}
                onChange={(e) => setPortfolioName(e.target.value)}
                placeholder="e.g., Growth Portfolio, Retirement Fund..."
                className="input-field text-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Initial Investment Amount ($)</label>
              <input
                type="number"
                value={initialAmount}
                onChange={(e) => setInitialAmount(e.target.value)}
                placeholder="Enter amount to invest..."
                min="0"
                step="100"
                className="input-field text-lg"
              />
              {initialAmount && Number(initialAmount) > 0 && (
                <p className="text-sm text-bnp-green-600 mt-2 font-medium">
                  ${Number(initialAmount).toLocaleString('en-US')} will be invested
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="card mb-8">
          <h2 className="text-2xl font-display font-bold text-bnp-dark-900 mb-6">Investment Preferences</h2>
          
          {/* Risk Level Slider */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Risk Level</label>
              <span className="text-sm font-semibold text-bnp-green-600">{riskLevel}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={riskLevel}
              onChange={(e) => setRiskLevel(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-bnp-green-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Conservative</span>
              <span>Moderate</span>
              <span>Aggressive</span>
            </div>
          </div>

          {/* Impact Level Slider */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Impact Priority</label>
              <span className="text-sm font-semibold text-bnp-green-600">{impactLevel}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={impactLevel}
              onChange={(e) => setImpactLevel(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-bnp-green-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Return Focused</span>
              <span>Balanced</span>
              <span>Impact Focused</span>
            </div>
          </div>

          {/* Asset Categories */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Asset Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {categories.map((category) => (
                <label key={category.id} className="flex items-center space-x-2 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={category.checked}
                    onChange={() => toggleCategory(category.id)}
                    className="w-4 h-4 rounded border-gray-300 text-bnp-green-600 focus:ring-bnp-green-500"
                  />
                  <span className="text-sm text-gray-700">{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Themes */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Investment Themes</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {selectedThemes.map((theme) => (
                <label key={theme.id} className="flex items-center space-x-2 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={theme.checked}
                    onChange={() => toggleTheme(theme.id)}
                    className="w-4 h-4 rounded border-gray-300 text-bnp-green-600 focus:ring-bnp-green-500"
                  />
                  <span className="text-sm text-gray-700">{theme.name}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={handleSimulate}
            disabled={!portfolioName || !initialAmount || Number(initialAmount) <= 0}
            className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Play className="w-5 h-5 mr-2" />
            Simulate Portfolio
          </button>
          {(!portfolioName || !initialAmount || Number(initialAmount) <= 0) && (
            <p className="text-sm text-gray-500 text-center mt-2">
              Please enter portfolio name and initial investment amount to simulate
            </p>
          )}
        </div>

        {/* Simulation Results */}
        {showSimulation && (
          <div className="card mb-8 bg-gradient-to-br from-bnp-green-50 to-blue-50 border-2 border-bnp-green-200">
            <h2 className="text-2xl font-display font-bold text-bnp-dark-900 mb-6">
              Simulation Results
            </h2>

            {/* Expected Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Expected Return</p>
                <p className="text-2xl font-bold text-green-600">+{expectedReturn.toFixed(3)}%</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Volatility</p>
                <p className="text-2xl font-bold text-orange-600">{volatility.toFixed(3)}%</p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="text-sm text-gray-600 mb-1">1-Year Projection</p>
                <p className="text-lg font-bold text-gray-900">
                  ${(Number(initialAmount) * (1 + expectedReturn / 100)).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })}
                </p>
                <p className="text-xs text-gray-500">on ${Number(initialAmount).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 })} investment</p>
              </div>
            </div>

            {/* Asset Allocation */}
            <div className="bg-white rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-bnp-dark-900 mb-4">Suggested Asset Allocation</h3>
              <div className="space-y-3">
                {simulatedAllocation.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{item.asset}</span>
                        <span className="text-sm font-bold text-bnp-dark-900">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-bnp-green-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="ml-4 text-sm text-gray-600">
                      ${item.amount.toLocaleString('en-US')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleValidate}
              className="w-full bg-bnp-green-600 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-bnp-green-700 transition-all shadow-lg flex items-center justify-center"
            >
              <Check className="w-6 h-6 mr-2" />
              Validate & Create Portfolio
            </button>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  )
}
