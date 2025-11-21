import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Plus, Minus, Eye, TrendingUp } from 'lucide-react'
import MiniPortfolioChart from '../components/MiniPortfolioChart'

export default function PortfolioDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [riskLevel, setRiskLevel] = useState(50)
  const [impactLevel, setImpactLevel] = useState(50)
  const [showDetails, setShowDetails] = useState(false)

  const portfolioData = {
    name: id === '1' ? 'Main Portfolio' : id === '2' ? 'Risky' : 'Impact',
    balance: id === '1' ? 245000 : id === '2' ? 98000 : 99650,
  }

  const assetCategories = [
    { id: 'stocks', name: 'Stocks', checked: true },
    { id: 'crypto', name: 'Cryptocurrency', checked: true },
    { id: 'bonds', name: 'Bonds', checked: false },
    { id: 'real-estate', name: 'Real Estate', checked: true },
    { id: 'etf', name: 'ETFs', checked: false },
  ]

  const [categories, setCategories] = useState(assetCategories)

  const themes = [
    { id: 'technology', name: 'Technology', checked: true },
    { id: 'ai', name: 'Artificial Intelligence', checked: true },
    { id: 'robotics', name: 'Robotics', checked: false },
    { id: 'environment', name: 'Environment', checked: true },
    { id: 'finance', name: 'Finance', checked: false },
    { id: 'automotive', name: 'Automotive', checked: false },
  ]

  const [selectedThemes, setSelectedThemes] = useState(themes)

  const assets = [
    { name: 'Apple Inc.', amount: 45000, category: 'Stocks' },
    { name: 'Bitcoin', amount: 52000, category: 'Crypto' },
    { name: 'Amazon.com', amount: 38000, category: 'Stocks' },
    { name: 'SCPI Corum', amount: 85000, category: 'Real Estate' },
    { name: 'Tesla Inc.', amount: 25000, category: 'Stocks' },
  ]

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
                <h1 className="text-xl font-display font-bold text-bnp-dark-900">{portfolioData.name}</h1>
                <p className="text-xs text-gray-500">Portfolio Management</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Portfolio Info Card */}
        <div className="card mb-8 bg-gradient-to-br from-bnp-green-600 to-bnp-green-700 text-white border-none">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-bnp-green-100 text-sm mb-2">Total Balance</p>
              <p className="text-4xl font-display font-bold">
                ${portfolioData.balance.toLocaleString('en-US')}
              </p>
            </div>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors flex items-center space-x-2"
            >
              <Eye className="w-5 h-5" />
              <span>View Details</span>
            </button>
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 bg-white text-bnp-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-bnp-green-50 transition-all flex items-center justify-center">
              <Plus className="w-5 h-5 mr-2" />
              Add Funds
            </button>
            <button className="flex-1 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30 flex items-center justify-center">
              <Minus className="w-5 h-5 mr-2" />
              Withdraw
            </button>
          </div>
        </div>

        {/* Asset Details */}
        {showDetails && (
          <div className="card mb-8">
            <h3 className="text-xl font-display font-bold text-bnp-dark-900 mb-4">Asset Details</h3>
            <div className="space-y-3">
              {assets.map((asset, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-semibold text-bnp-dark-900">{asset.name}</p>
                    <p className="text-sm text-gray-500">{asset.category}</p>
                  </div>
                  <p className="text-lg font-bold text-bnp-dark-900">
                    ${asset.amount.toLocaleString('en-US')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Portfolio Performance */}
        <div className="card mb-8">
          <h3 className="text-xl font-display font-bold text-bnp-dark-900 mb-4">Performance</h3>
          <MiniPortfolioChart portfolioId={Number(id)} />
        </div>

        {/* Settings Section */}
        <div className="card mb-8">
          <h2 className="text-2xl font-display font-bold text-bnp-dark-900 mb-6">Portfolio Settings</h2>
          
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

          <button className="w-full btn-primary">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
