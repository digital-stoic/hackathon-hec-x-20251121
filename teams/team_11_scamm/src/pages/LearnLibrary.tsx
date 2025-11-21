import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Search, Play, Clock } from 'lucide-react'

interface VideoItem {
  id: number
  title: string
  duration: string
  thumbnail: string
  chapter?: string
}

interface Theme {
  id: string
  name: string
  icon: string
  videoCount: number
  color: string
  videos: VideoItem[]
}

const themes: Theme[] = [
  {
    id: "etf",
    name: "ETFs & Index Funds",
    icon: "📊",
    videoCount: 12,
    color: "bg-blue-500",
    videos: [
      { id: 101, title: "What is an ETF?", duration: "2:30", thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400", chapter: "Introduction" },
      { id: 102, title: "MSCI World Explained", duration: "3:15", thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400", chapter: "Key Products" },
      { id: 103, title: "S&P 500 vs MSCI World", duration: "4:00", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400", chapter: "Comparisons" }
    ]
  },
  {
    id: "investment",
    name: "Investment Strategies",
    icon: "🎯",
    videoCount: 15,
    color: "bg-green-500",
    videos: [
      { id: 201, title: "Dollar Cost Averaging 101", duration: "3:00", thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400", chapter: "DCA Method" },
      { id: 202, title: "Portfolio Diversification", duration: "3:45", thumbnail: "https://images.unsplash.com/photo-1554224311-beee460201b4?w=400", chapter: "Risk Management" },
      { id: 203, title: "Rebalancing Your Portfolio", duration: "2:50", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400", chapter: "Maintenance" }
    ]
  },
  {
    id: "tax",
    name: "Tax Optimization",
    icon: "💰",
    videoCount: 10,
    color: "bg-purple-500",
    videos: [
      { id: 301, title: "PEA Account Benefits", duration: "3:30", thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400", chapter: "Tax Wrappers" },
      { id: 302, title: "Assurance Vie Explained", duration: "4:15", thumbnail: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400", chapter: "Life Insurance" },
      { id: 303, title: "Tax-Loss Harvesting", duration: "3:00", thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400", chapter: "Advanced" }
    ]
  },
  {
    id: "psychology",
    name: "Financial Psychology",
    icon: "🧠",
    videoCount: 8,
    color: "bg-orange-500",
    videos: [
      { id: 401, title: "Overcoming FOMO", duration: "2:45", thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400", chapter: "Emotions" },
      { id: 402, title: "Loss Aversion Bias", duration: "3:20", thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400", chapter: "Cognitive Biases" },
      { id: 403, title: "Building Discipline", duration: "3:00", thumbnail: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=400", chapter: "Habits" }
    ]
  },
  {
    id: "savings",
    name: "Savings & Emergency Fund",
    icon: "🏦",
    videoCount: 7,
    color: "bg-teal-500",
    videos: [
      { id: 501, title: "The 50/30/20 Rule", duration: "2:30", thumbnail: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=400", chapter: "Budgeting" },
      { id: 502, title: "Building an Emergency Fund", duration: "3:15", thumbnail: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=400", chapter: "Safety Net" },
      { id: 503, title: "High-Yield Savings Accounts", duration: "2:45", thumbnail: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400", chapter: "Products" }
    ]
  },
  {
    id: "real-estate",
    name: "Real Estate Investing",
    icon: "🏠",
    videoCount: 11,
    color: "bg-red-500",
    videos: [
      { id: 601, title: "SCPI: Real Estate Made Easy", duration: "3:45", thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400", chapter: "Introduction" },
      { id: 602, title: "Physical vs Paper Real Estate", duration: "4:00", thumbnail: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400", chapter: "Comparison" },
      { id: 603, title: "REITs Explained", duration: "3:30", thumbnail: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=400", chapter: "Global Options" }
    ]
  },
  {
    id: "risk",
    name: "Risk Management",
    icon: "⚖️",
    videoCount: 9,
    color: "bg-yellow-600",
    videos: [
      { id: 701, title: "Understanding Volatility", duration: "3:00", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400", chapter: "Basics" },
      { id: 702, title: "Risk Tolerance Assessment", duration: "2:50", thumbnail: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400", chapter: "Self-Knowledge" },
      { id: 703, title: "Stop-Loss Strategies", duration: "3:30", thumbnail: "https://images.unsplash.com/photo-1554224311-beee460201b4?w=400", chapter: "Protection" }
    ]
  },
  {
    id: "crypto",
    name: "Cryptocurrency Basics",
    icon: "₿",
    videoCount: 6,
    color: "bg-indigo-500",
    videos: [
      { id: 801, title: "Bitcoin 101", duration: "4:00", thumbnail: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=400", chapter: "Introduction" },
      { id: 802, title: "Blockchain Technology", duration: "3:45", thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400", chapter: "Technology" },
      { id: 803, title: "Crypto in Your Portfolio", duration: "3:15", thumbnail: "https://images.unsplash.com/photo-1640826514546-7d2c655f8c3e?w=400", chapter: "Integration" }
    ]
  }
]

const searchableKeywords = [
  "DCA", "ETF", "PEA", "Assurance Vie", "SCPI", "MSCI World", "S&P 500",
  "FOMO", "Loss Aversion", "Diversification", "Rebalancing", "Emergency Fund",
  "50/30/20", "Tax Optimization", "Bitcoin", "Blockchain", "REIT"
]

export default function LearnLibrary() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredThemes = themes.filter(theme => {
    if (!searchTerm) return true
    const search = searchTerm.toLowerCase()
    return (
      theme.name.toLowerCase().includes(search) ||
      theme.videos.some(v => v.title.toLowerCase().includes(search))
    )
  })

  const matchingKeywords = searchableKeywords.filter(keyword =>
    keyword.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleVideoClick = (themeId: string) => {
    navigate(`/learn/theme/${themeId}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate('/learn')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-display font-bold text-gray-900">Learning Library</h1>
            <div className="w-10" /> {/* Spacer */}
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by concept (ETF, DCA, PEA...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bnp-green-500 focus:border-transparent"
            />
          </div>

          {/* Search Suggestions */}
          {searchTerm && matchingKeywords.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {matchingKeywords.slice(0, 5).map(keyword => (
                <button
                  key={keyword}
                  onClick={() => setSearchTerm(keyword)}
                  className="px-3 py-1 bg-bnp-green-100 text-bnp-green-700 rounded-full text-sm font-medium hover:bg-bnp-green-200 transition-colors"
                >
                  {keyword}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Theme Categories */}
        <div className="space-y-8">
          {filteredThemes.map(theme => (
            <div key={theme.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Theme Header */}
              <div className={`${theme.color} p-6`}>
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{theme.icon}</span>
                    <div>
                      <h2 className="text-xl font-display font-bold">{theme.name}</h2>
                      <p className="text-white/90 text-sm">{theme.videoCount} videos</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleVideoClick(theme.id)}
                    className="px-6 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full text-white font-semibold transition-colors flex items-center space-x-2"
                  >
                    <span>View All</span>
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Videos Grid */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {theme.videos.map(video => (
                    <button
                      key={video.id}
                      onClick={() => handleVideoClick(theme.id)}
                      className="group relative overflow-hidden rounded-lg bg-gray-100 hover:shadow-md transition-all"
                    >
                      {/* Thumbnail */}
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 text-gray-900 ml-0.5" fill="currentColor" />
                          </div>
                        </div>
                        {/* Duration Badge */}
                        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-white text-xs font-medium flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{video.duration}</span>
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="p-3 text-left">
                        {video.chapter && (
                          <div className="text-xs text-bnp-green-600 font-semibold mb-1">
                            {video.chapter}
                          </div>
                        )}
                        <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-bnp-green-600 transition-colors">
                          {video.title}
                        </h3>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredThemes.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">Try searching for ETF, DCA, PEA, or other financial concepts</p>
          </div>
        )}
      </div>
    </div>
  )
}
