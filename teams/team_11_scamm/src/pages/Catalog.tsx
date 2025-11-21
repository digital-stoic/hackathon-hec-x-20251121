import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Plus, TrendingUp, ArrowLeft } from 'lucide-react'
import BottomNav from '../components/BottomNav'

interface Product {
  id: number
  name: string
  category: string
  theme: string
  price: number
  change: number
  changePercent: number
}

const mockProducts: Product[] = [
  { id: 1, name: 'Apple Inc.', category: 'stocks', theme: 'technology', price: 182.52, change: 2.45, changePercent: 1.36 },
  { id: 2, name: 'Amazon.com', category: 'stocks', theme: 'technology', price: 155.20, change: -1.20, changePercent: -0.77 },
  { id: 3, name: 'Tesla Inc.', category: 'stocks', theme: 'automotive', price: 238.45, change: 8.30, changePercent: 3.61 },
  { id: 4, name: 'Bitcoin', category: 'crypto', theme: 'cryptocurrency', price: 43250, change: 1250, changePercent: 2.98 },
  { id: 5, name: 'Ethereum', category: 'crypto', theme: 'cryptocurrency', price: 2280, change: -45, changePercent: -1.94 },
  { id: 6, name: 'BNP Paribas Bond', category: 'bonds', theme: 'finance', price: 985, change: 5, changePercent: 0.51 },
  { id: 7, name: 'SCPI Corum Origin', category: 'real-estate', theme: 'real-estate', price: 1250, change: 15, changePercent: 1.22 },
  { id: 8, name: 'Microsoft Corp.', category: 'stocks', theme: 'technology', price: 378.91, change: 4.20, changePercent: 1.12 },
  { id: 9, name: 'NVIDIA Corp.', category: 'stocks', theme: 'ai', price: 495.20, change: 12.50, changePercent: 2.59 },
  { id: 10, name: 'Green Energy Fund', category: 'etf', theme: 'environment', price: 85.30, change: 0.80, changePercent: 0.95 },
]

export default function Catalog() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null)

  const categories = [
    { id: 'stocks', name: 'Stocks' },
    { id: 'crypto', name: 'Cryptocurrency' },
    { id: 'bonds', name: 'Bonds' },
    { id: 'real-estate', name: 'Real Estate' },
    { id: 'etf', name: 'ETFs' },
  ]

  const themes = [
    { id: 'technology', name: 'Technology' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'robotics', name: 'Robotics' },
    { id: 'environment', name: 'Environment' },
    { id: 'finance', name: 'Finance' },
    { id: 'automotive', name: 'Automotive' },
    { id: 'cryptocurrency', name: 'Cryptocurrency' },
    { id: 'real-estate', name: 'Real Estate' },
  ]

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || product.category === selectedCategory
    const matchesTheme = !selectedTheme || product.theme === selectedTheme
    return matchesSearch && matchesCategory && matchesTheme
  })

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
                <h1 className="text-xl font-display font-bold text-bnp-dark-900">Product Catalog</h1>
                <p className="text-xs text-gray-500">Browse and invest</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <div className="w-64 flex-shrink-0">
            <div className="card sticky top-24">
              <h3 className="font-semibold text-bnp-dark-900 mb-4">Filters</h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Asset Classes</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                        className="w-4 h-4 rounded border-gray-300 text-bnp-green-600 focus:ring-bnp-green-500"
                      />
                      <span className="text-sm text-gray-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Themes */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Themes</h4>
                <div className="space-y-2">
                  {themes.map((theme) => (
                    <label key={theme.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedTheme === theme.id}
                        onChange={() => setSelectedTheme(selectedTheme === theme.id ? null : theme.id)}
                        className="w-4 h-4 rounded border-gray-300 text-bnp-green-600 focus:ring-bnp-green-500"
                      />
                      <span className="text-sm text-gray-700">{theme.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedCategory(null)
                  setSelectedTheme(null)
                  setSearchQuery('')
                }}
                className="w-full mt-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-bnp-green-500 focus:ring-2 focus:ring-bnp-green-100 outline-none transition-all"
                />
              </div>
            </div>

            {/* Results Info */}
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="card hover:shadow-bnp-lg transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-bnp-dark-900 mb-1">{product.name}</h3>
                      <p className="text-xs text-gray-500 capitalize">{product.category.replace('-', ' ')}</p>
                    </div>
                    <button
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="p-2 rounded-lg bg-bnp-green-600 text-white hover:bg-bnp-green-700 transition-all opacity-0 group-hover:opacity-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mb-3">
                    <p className="text-2xl font-display font-bold text-bnp-dark-900">
                      ${product.price.toLocaleString('en-US')}
                    </p>
                  </div>

                  <div className={`flex items-center space-x-2 text-sm font-semibold ${
                    product.change >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <span>{product.change >= 0 ? '+' : ''}{product.change.toFixed(2)}</span>
                    <span>({product.changePercent >= 0 ? '+' : ''}{product.changePercent}%)</span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                      {product.theme}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No products found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
