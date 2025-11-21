import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Bookmark, Share2, ChevronRight, Library } from 'lucide-react'

interface Video {
  id: number
  title: string
  theme: string
  themeId: string
  duration: string
  thumbnail: string
  description: string
}

const videos: Video[] = [
  {
    id: 1,
    title: "Understanding ETF MSCI World in 30 seconds",
    theme: "ETFs",
    themeId: "etf",
    duration: "0:30",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
    description: "Learn the basics of the world's most popular ETF"
  },
  {
    id: 2,
    title: "Dollar Cost Averaging: Your Best Friend",
    theme: "Investment Strategy",
    themeId: "investment",
    duration: "0:45",
    thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800",
    description: "How to invest regularly without timing the market"
  },
  {
    id: 3,
    title: "PEA vs Regular Account: Which One?",
    theme: "Tax Optimization",
    themeId: "tax",
    duration: "0:35",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    description: "Understanding tax-advantaged investing accounts"
  },
  {
    id: 4,
    title: "The Psychology of FOMO in Investing",
    theme: "Financial Psychology",
    themeId: "psychology",
    duration: "0:50",
    thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    description: "Why emotions are your worst enemy in finance"
  },
  {
    id: 5,
    title: "Compound Interest: The 8th Wonder",
    theme: "Savings",
    themeId: "savings",
    duration: "0:40",
    thumbnail: "https://images.unsplash.com/photo-1554224311-beee460201b4?w=800",
    description: "How time multiplies your money exponentially"
  },
  {
    id: 6,
    title: "Real Estate Investment: SCPI Explained",
    theme: "Real Estate",
    themeId: "real-estate",
    duration: "0:55",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    description: "Invest in real estate without buying property"
  },
  {
    id: 7,
    title: "Risk vs Return: Finding Your Balance",
    theme: "Risk Management",
    themeId: "risk",
    duration: "0:38",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    description: "How much risk should you take?"
  },
  {
    id: 8,
    title: "Diversification: Don't Put Eggs in One Basket",
    theme: "Investment Strategy",
    themeId: "investment",
    duration: "0:42",
    thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800",
    description: "The golden rule of portfolio management"
  },
  {
    id: 801,
    title: "Bitcoin 101",
    theme: "Cryptocurrency",
    themeId: "crypto",
    duration: "4:00",
    thumbnail: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800",
    description: "Everything you need to know about Bitcoin basics"
  }
]

const themeColors: { [key: string]: string } = {
  "ETFs": "bg-blue-500",
  "Investment Strategy": "bg-green-500",
  "Tax Optimization": "bg-purple-500",
  "Financial Psychology": "bg-orange-500",
  "Savings": "bg-teal-500",
  "Real Estate": "bg-red-500",
  "Risk Management": "bg-yellow-600",
  "Cryptocurrency": "bg-indigo-500"
}

export default function Learn() {
  const navigate = useNavigate()
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [likes, setLikes] = useState<{ [key: number]: boolean }>({})
  const [saved, setSaved] = useState<{ [key: number]: boolean }>({})
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLDivElement | null)[]>([])

  // Check for video ID in hash
  useEffect(() => {
    const hash = window.location.hash
    if (hash.startsWith('#video-')) {
      const videoId = parseInt(hash.replace('#video-', ''))
      const index = videos.findIndex(v => v.id === videoId)
      if (index !== -1) {
        setTimeout(() => {
          videoRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          setCurrentVideoIndex(index)
        }, 100)
      }
    }
  }, [])

  // Detect which video is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = videoRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setCurrentVideoIndex(index)
            }
          }
        })
      },
      { threshold: 0.75 }
    )

    videoRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      videoRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentVideoIndex < videos.length - 1) {
        scrollToVideo(currentVideoIndex + 1)
      } else if (e.key === 'ArrowUp' && currentVideoIndex > 0) {
        scrollToVideo(currentVideoIndex - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentVideoIndex])

  const scrollToVideo = (index: number) => {
    videoRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  const toggleLike = (videoId: number) => {
    setLikes({ ...likes, [videoId]: !likes[videoId] })
  }

  const toggleSave = (videoId: number) => {
    setSaved({ ...saved, [videoId]: !saved[videoId] })
  }

  const handleShare = (video: Video) => {
    if (navigator.share) {
      navigator.share({
        title: video.title,
        text: video.description,
        url: window.location.href
      })
    }
  }

  return (
    <div className="h-screen bg-black overflow-y-scroll snap-y snap-mandatory"
         ref={containerRef}
         style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50 p-4 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center justify-between text-white">
          <button
            onClick={() => navigate('/dashboard')}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/learn/library')}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-bnp-green-600 hover:bg-bnp-green-700 transition-colors font-medium"
            >
              <Library className="w-5 h-5" />
              <span>Library</span>
            </button>
          </div>
        </div>
      </div>

      {/* Video Containers */}
      {videos.map((video, index) => (
        <div
          key={video.id}
          ref={(el) => (videoRefs.current[index] = el)}
          className="relative h-screen w-full snap-start snap-always flex-shrink-0"
        >
          {/* Video Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${video.thumbnail})`,
              filter: 'brightness(0.7)'
            }}
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center shadow-2xl">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
            </div>
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="p-6 pb-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              {/* Theme Tag */}
              <div className="mb-3">
                <span className={`inline-block px-4 py-1.5 rounded-full text-white text-sm font-semibold ${themeColors[video.theme] || 'bg-gray-500'}`}>
                  {video.theme}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-white text-2xl font-display font-bold mb-2 leading-tight">
                {video.title}
              </h2>

              {/* Description */}
              <p className="text-gray-200 text-sm mb-4 max-w-lg">
                {video.description}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => navigate(`/learn/theme/${video.themeId}`)}
                  className="flex items-center space-x-2 px-6 py-3 bg-bnp-green-600 hover:bg-bnp-green-700 rounded-full text-white font-semibold transition-all shadow-lg"
                >
                  <span>Deep Dive</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="text-white text-sm opacity-70">
                  {video.duration}
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center space-x-1 mt-4">
                {videos.map((_, vidIndex) => (
                  <div
                    key={vidIndex}
                    className={`h-0.5 flex-1 rounded-full transition-all ${
                      vidIndex === index ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Action Bar (TikTok style) */}
          <div className="absolute right-4 bottom-32 flex flex-col space-y-6">
            <button
              onClick={() => toggleLike(video.id)}
              className="flex flex-col items-center group"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                likes[video.id] 
                  ? 'bg-red-500' 
                  : 'bg-white/20 backdrop-blur-sm group-hover:bg-white/30'
              }`}>
                <Heart className={`w-7 h-7 ${likes[video.id] ? 'fill-white text-white' : 'text-white'}`} />
              </div>
              <span className="text-white text-xs mt-1 font-medium">
                {likes[video.id] ? '24.3k' : '24.2k'}
              </span>
            </button>

            <button
              onClick={() => toggleSave(video.id)}
              className="flex flex-col items-center group"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                saved[video.id] 
                  ? 'bg-bnp-green-600' 
                  : 'bg-white/20 backdrop-blur-sm group-hover:bg-white/30'
              }`}>
                <Bookmark className={`w-6 h-6 ${saved[video.id] ? 'fill-white text-white' : 'text-white'}`} />
              </div>
              <span className="text-white text-xs mt-1 font-medium">Save</span>
            </button>

            <button
              onClick={() => handleShare(video)}
              className="flex flex-col items-center group"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 flex items-center justify-center transition-all">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-white text-xs mt-1 font-medium">Share</span>
            </button>
          </div>

          {/* Navigation Hints */}
          {index < videos.length - 1 && currentVideoIndex === index && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm animate-bounce">
              Scroll for next video
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
