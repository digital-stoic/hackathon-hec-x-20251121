import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Play, Clock, CheckCircle2, Lock } from 'lucide-react'

interface Video {
  id: number
  title: string
  duration: string
  thumbnail: string
  completed?: boolean
  locked?: boolean
}

interface Chapter {
  title: string
  description: string
  videos: Video[]
}

interface ThemeData {
  id: string
  name: string
  icon: string
  description: string
  color: string
  chapters: Chapter[]
}

const themesData: { [key: string]: ThemeData } = {
  etf: {
    id: "etf",
    name: "ETFs & Index Funds",
    icon: "📊",
    description: "Master the fundamentals of passive investing through ETFs and index funds",
    color: "bg-blue-500",
    chapters: [
      {
        title: "Introduction to ETFs",
        description: "Understand what ETFs are and why they're popular",
        videos: [
          { id: 1, title: "What is an ETF?", duration: "2:30", thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400", completed: true },
          { id: 2, title: "ETF vs Mutual Funds", duration: "3:15", thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400", completed: true },
          { id: 3, title: "How ETFs Work", duration: "3:45", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400" }
        ]
      },
      {
        title: "Key ETF Products",
        description: "Explore the most popular ETFs in the market",
        videos: [
          { id: 4, title: "MSCI World Deep Dive", duration: "4:00", thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400" },
          { id: 5, title: "S&P 500 ETF Guide", duration: "3:30", thumbnail: "https://images.unsplash.com/photo-1554224311-beee460201b4?w=400" },
          { id: 6, title: "Emerging Markets ETFs", duration: "3:45", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" }
        ]
      },
      {
        title: "Advanced Strategies",
        description: "Take your ETF investing to the next level",
        videos: [
          { id: 7, title: "Sector ETFs Explained", duration: "3:20", thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400", locked: true },
          { id: 8, title: "Smart Beta ETFs", duration: "4:15", thumbnail: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400", locked: true },
          { id: 9, title: "ETF Portfolio Construction", duration: "5:00", thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400", locked: true }
        ]
      }
    ]
  },
  investment: {
    id: "investment",
    name: "Investment Strategies",
    icon: "🎯",
    description: "Learn proven investment strategies for long-term wealth building",
    color: "bg-green-500",
    chapters: [
      {
        title: "Dollar Cost Averaging (DCA)",
        description: "The systematic approach to investing",
        videos: [
          { id: 10, title: "What is DCA?", duration: "2:45", thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400", completed: true },
          { id: 11, title: "DCA vs Lump Sum", duration: "3:30", thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
          { id: 12, title: "Setting Up Auto-Invest", duration: "2:15", thumbnail: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=400" }
        ]
      },
      {
        title: "Portfolio Diversification",
        description: "Spread your risk effectively",
        videos: [
          { id: 13, title: "Why Diversify?", duration: "3:00", thumbnail: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=400" },
          { id: 14, title: "Asset Class Allocation", duration: "3:45", thumbnail: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=400" },
          { id: 15, title: "Geographic Diversification", duration: "3:20", thumbnail: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400" }
        ]
      },
      {
        title: "Rebalancing & Maintenance",
        description: "Keep your portfolio on track",
        videos: [
          { id: 16, title: "When to Rebalance", duration: "3:15", thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400", locked: true },
          { id: 17, title: "Rebalancing Methods", duration: "3:40", thumbnail: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400", locked: true }
        ]
      }
    ]
  },
  tax: {
    id: "tax",
    name: "Tax Optimization",
    icon: "💰",
    description: "Maximize returns through smart tax planning",
    color: "bg-purple-500",
    chapters: [
      {
        title: "Tax-Advantaged Accounts",
        description: "Understanding PEA and other wrappers",
        videos: [
          { id: 18, title: "PEA Complete Guide", duration: "4:00", thumbnail: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=400", completed: true },
          { id: 19, title: "PEA-PME Explained", duration: "3:30", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" },
          { id: 20, title: "Assurance Vie Benefits", duration: "4:15", thumbnail: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400" }
        ]
      },
      {
        title: "Tax-Loss Harvesting",
        description: "Turn losses into tax savings",
        videos: [
          { id: 21, title: "What is Tax-Loss Harvesting?", duration: "3:00", thumbnail: "https://images.unsplash.com/photo-1554224311-beee460201b4?w=400" },
          { id: 22, title: "When to Harvest Losses", duration: "3:20", thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400", locked: true }
        ]
      }
    ]
  },
  psychology: {
    id: "psychology",
    name: "Financial Psychology",
    icon: "🧠",
    description: "Master your emotions and biases in investing",
    color: "bg-orange-500",
    chapters: [
      {
        title: "Common Biases",
        description: "Recognize and overcome psychological traps",
        videos: [
          { id: 23, title: "FOMO in Investing", duration: "2:50", thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400", completed: true },
          { id: 24, title: "Loss Aversion", duration: "3:15", thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
          { id: 25, title: "Confirmation Bias", duration: "3:00", thumbnail: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=400" }
        ]
      },
      {
        title: "Building Discipline",
        description: "Develop the mindset of successful investors",
        videos: [
          { id: 26, title: "Creating Investment Habits", duration: "3:30", thumbnail: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=400" },
          { id: 27, title: "Staying Calm in Volatility", duration: "3:45", thumbnail: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=400", locked: true }
        ]
      }
    ]
  },
  savings: {
    id: "savings",
    name: "Savings & Emergency Fund",
    icon: "🏦",
    description: "Build a solid financial foundation",
    color: "bg-teal-500",
    chapters: [
      {
        title: "Budgeting Basics",
        description: "Master the art of managing money",
        videos: [
          { id: 28, title: "The 50/30/20 Rule", duration: "2:45", thumbnail: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400", completed: true },
          { id: 29, title: "Tracking Your Expenses", duration: "3:00", thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400" }
        ]
      },
      {
        title: "Emergency Fund",
        description: "Prepare for the unexpected",
        videos: [
          { id: 30, title: "Why You Need an Emergency Fund", duration: "2:30", thumbnail: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400" },
          { id: 31, title: "How Much to Save", duration: "3:15", thumbnail: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=400" }
        ]
      }
    ]
  },
  "real-estate": {
    id: "real-estate",
    name: "Real Estate Investing",
    icon: "🏠",
    description: "Invest in property without the hassle",
    color: "bg-red-500",
    chapters: [
      {
        title: "SCPI Fundamentals",
        description: "Paper real estate investing",
        videos: [
          { id: 32, title: "What is SCPI?", duration: "3:30", thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400", completed: true },
          { id: 33, title: "SCPI vs Physical Property", duration: "4:00", thumbnail: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400" }
        ]
      },
      {
        title: "REITs & International",
        description: "Global real estate exposure",
        videos: [
          { id: 34, title: "Introduction to REITs", duration: "3:45", thumbnail: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=400" },
          { id: 35, title: "International Real Estate", duration: "4:15", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400", locked: true }
        ]
      }
    ]
  },
  risk: {
    id: "risk",
    name: "Risk Management",
    icon: "⚖️",
    description: "Understand and manage investment risks",
    color: "bg-yellow-600",
    chapters: [
      {
        title: "Understanding Risk",
        description: "What is risk and how to measure it",
        videos: [
          { id: 36, title: "Risk vs Return", duration: "3:00", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400", completed: true },
          { id: 37, title: "Volatility Explained", duration: "3:20", thumbnail: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400" }
        ]
      },
      {
        title: "Risk Assessment",
        description: "Know your risk tolerance",
        videos: [
          { id: 38, title: "Risk Tolerance Quiz", duration: "2:45", thumbnail: "https://images.unsplash.com/photo-1554224311-beee460201b4?w=400" },
          { id: 39, title: "Age-Based Risk Strategy", duration: "3:30", thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400", locked: true }
        ]
      }
    ]
  }
}

export default function LearnTheme() {
  const { themeId } = useParams<{ themeId: string }>()
  const navigate = useNavigate()

  const theme = themeId ? themesData[themeId] : null

  if (!theme) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❓</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Theme Not Found</h2>
          <button
            onClick={() => navigate('/learn/library')}
            className="text-bnp-green-600 hover:text-bnp-green-700 font-semibold"
          >
            Back to Library
          </button>
        </div>
      </div>
    )
  }

  const totalVideos = theme.chapters.reduce((sum, chapter) => sum + chapter.videos.length, 0)
  const completedVideos = theme.chapters.reduce(
    (sum, chapter) => sum + chapter.videos.filter(v => v.completed).length,
    0
  )
  const progress = (completedVideos / totalVideos) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`${theme.color} text-white`}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={() => navigate('/learn/library')}
            className="mb-6 p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <div className="flex items-start space-x-4 mb-6">
            <span className="text-6xl">{theme.icon}</span>
            <div className="flex-1">
              <h1 className="text-3xl font-display font-bold mb-2">{theme.name}</h1>
              <p className="text-white/90 text-lg mb-4">{theme.description}</p>
              <div className="flex items-center space-x-4 text-sm">
                <span>{totalVideos} videos</span>
                <span>•</span>
                <span>{completedVideos} completed</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div
              className="bg-white h-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {theme.chapters.map((chapter, chapterIndex) => (
          <div key={chapterIndex} className="mb-12">
            {/* Chapter Header */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className={`w-8 h-8 ${theme.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  {chapterIndex + 1}
                </div>
                <h2 className="text-2xl font-display font-bold text-gray-900">{chapter.title}</h2>
              </div>
              <p className="text-gray-600 ml-11">{chapter.description}</p>
            </div>

            {/* Videos */}
            <div className="space-y-3 ml-11">
              {chapter.videos.map((video, videoIndex) => (
                <button
                  key={video.id}
                  onClick={() => !video.locked && navigate('/learn')}
                  disabled={video.locked}
                  className={`w-full flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 transition-all ${
                    video.locked
                      ? 'opacity-60 cursor-not-allowed'
                      : 'hover:shadow-md hover:border-bnp-green-300'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-32 h-20 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      {video.locked ? (
                        <Lock className="w-6 h-6 text-white" />
                      ) : (
                        <Play className="w-6 h-6 text-white" fill="currentColor" />
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-left">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">
                          Video {chapterIndex + 1}.{videoIndex + 1}
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{video.title}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{video.duration}</span>
                        </div>
                      </div>
                      {video.completed && (
                        <CheckCircle2 className="w-6 h-6 text-bnp-green-600 flex-shrink-0" />
                      )}
                      {video.locked && (
                        <Lock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Completion Message */}
        {progress === 100 && (
          <div className="bg-bnp-green-50 border border-bnp-green-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Congratulations!</h3>
            <p className="text-gray-600">You've completed all videos in this theme</p>
          </div>
        )}
      </div>
    </div>
  )
}
