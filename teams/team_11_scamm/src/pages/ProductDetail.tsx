import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, TrendingUp, ExternalLink, AlertCircle, CheckCircle } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import BottomNav from '../components/BottomNav'

const mockProductData = {
  1: { name: 'Apple Inc.', category: 'Stock', description: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.', price: 182.52 },
  2: { name: 'Amazon.com', category: 'Stock', description: 'Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions through online and physical stores.', price: 155.20 },
  3: { name: 'Tesla Inc.', category: 'Stock', description: 'Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles and energy generation and storage systems.', price: 238.45 },
  4: { name: 'Bitcoin', category: 'Cryptocurrency', description: 'Bitcoin is a decentralized digital currency that can be transferred on the peer-to-peer bitcoin network.', price: 43250 },
  5: { name: 'Ethereum', category: 'Cryptocurrency', description: 'Ethereum is a decentralized platform that runs smart contracts and is the second-largest cryptocurrency by market cap.', price: 2280 },
}

const historicalData = [
  { date: 'Jan', value: 150 },
  { date: 'Feb', value: 165 },
  { date: 'Mar', value: 158 },
  { date: 'Apr', value: 172 },
  { date: 'May', value: 168 },
  { date: 'Jun', value: 180 },
  { date: 'Jul', value: 175 },
  { date: 'Aug', value: 182 },
]

const news = [
  { title: 'Q4 Earnings Beat Expectations', date: '2 days ago', link: '#' },
  { title: 'New Product Launch Announced', date: '5 days ago', link: '#' },
  { title: 'Strategic Partnership with Tech Giant', date: '1 week ago', link: '#' },
]

const pros = [
  'Strong market position and brand recognition',
  'Consistent revenue growth year-over-year',
  'Innovation-driven company culture',
  'Solid financial fundamentals',
]

const cons = [
  'High valuation compared to industry average',
  'Regulatory challenges in key markets',
  'Dependency on specific product lines',
  'Market volatility risk',
]

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedPortfolio, setSelectedPortfolio] = useState('1')
  const [amount, setAmount] = useState('')

  const product = mockProductData[Number(id) as keyof typeof mockProductData] || mockProductData[1]

  const portfolios = [
    { id: '1', name: 'Main Portfolio' },
    { id: '2', name: 'Risky' },
    { id: '3', name: 'Impact' },
  ]

  const handlePurchase = () => {
    if (amount && Number(amount) > 0) {
      alert(`Successfully purchased $${amount} of ${product.name} in ${portfolios.find(p => p.id === selectedPortfolio)?.name}`)
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/catalog')}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <h1 className="text-xl font-display font-bold text-bnp-dark-900">{product.name}</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        {/* Purchase Section */}
        <div className="card mb-8 bg-gradient-to-br from-bnp-green-600 to-bnp-green-700 text-white border-none">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm text-bnp-green-100 mb-2">Select Portfolio</label>
              <select
                value={selectedPortfolio}
                onChange={(e) => setSelectedPortfolio(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white text-bnp-dark-900 font-medium outline-none"
              >
                {portfolios.map((portfolio) => (
                  <option key={portfolio.id} value={portfolio.id}>
                    {portfolio.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-bnp-green-100 mb-2">Investment Amount ($)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full px-4 py-3 rounded-lg bg-white text-bnp-dark-900 font-medium outline-none"
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={handlePurchase}
                disabled={!amount || Number(amount) <= 0}
                className="w-full bg-white text-bnp-green-600 px-6 py-3 rounded-lg font-bold text-lg hover:bg-bnp-green-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                Validate Purchase
              </button>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/20">
            <p className="text-bnp-green-100 text-sm">
              Current Price: <span className="text-white font-bold text-xl">${product.price.toLocaleString('en-US')}</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="card">
              <h2 className="text-2xl font-display font-bold text-bnp-dark-900 mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="inline-block px-3 py-1 bg-bnp-green-100 text-bnp-green-700 rounded-lg text-sm font-medium">
                  {product.category}
                </div>
                <a
                  href={product.name === 'Bitcoin' ? '/learn#video-801' : '/learn/library'}
                  className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Watch Video Explanation</span>
                </a>
              </div>
            </div>

            {/* Historical Chart */}
            <div className="card">
              <h2 className="text-2xl font-display font-bold text-bnp-dark-900 mb-6">Historical Performance</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={historicalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" stroke="#9ca3af" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}
                    formatter={(value: number) => [`$${value}`, 'Price']}
                  />
                  <Line type="monotone" dataKey="value" stroke="#00965e" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-green-50">
                <h3 className="text-lg font-display font-bold text-bnp-dark-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Strengths
                </h3>
                <ul className="space-y-2">
                  {pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-green-600 mr-2">•</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card bg-red-50">
                <h3 className="text-lg font-display font-bold text-bnp-dark-900 mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                  Risks
                </h3>
                <ul className="space-y-2">
                  {cons.map((con, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-red-600 mr-2">•</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar - News */}
          <div>
            <div className="card sticky top-24">
              <h3 className="text-lg font-display font-bold text-bnp-dark-900 mb-4">Latest News</h3>
              <div className="space-y-4">
                {news.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="text-sm font-semibold text-bnp-dark-900 group-hover:text-bnp-green-600 transition-colors flex-1">
                        {item.title}
                      </h4>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-bnp-green-600 flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
