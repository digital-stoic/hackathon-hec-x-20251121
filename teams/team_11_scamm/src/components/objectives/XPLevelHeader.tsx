import { Trophy, TrendingUp } from 'lucide-react'

interface XPLevelHeaderProps {
  currentXP: number
  level: number
}

const levelThresholds = [
  { level: 1, name: 'Rookie Investor', minXP: 0, maxXP: 250, color: 'from-gray-400 to-gray-500' },
  { level: 2, name: 'Growing Investor', minXP: 250, maxXP: 600, color: 'from-blue-400 to-blue-600' },
  { level: 3, name: 'Seasoned Investor', minXP: 600, maxXP: 1200, color: 'from-purple-400 to-purple-600' },
  { level: 4, name: 'Expert Investor', minXP: 1200, maxXP: 2500, color: 'from-orange-400 to-orange-600' },
  { level: 5, name: 'Master Investor', minXP: 2500, maxXP: 5000, color: 'from-bnp-green-400 to-bnp-green-600' },
  { level: 6, name: 'Top Investor', minXP: 5000, maxXP: 999999, color: 'from-bnp-gold-400 to-bnp-gold-600' },
]

export default function XPLevelHeader({ currentXP, level }: XPLevelHeaderProps) {
  const currentLevelData = levelThresholds[level - 1]
  const nextLevelData = level < levelThresholds.length ? levelThresholds[level] : null
  
  const xpInCurrentLevel = currentXP - currentLevelData.minXP
  const xpNeededForNext = nextLevelData ? nextLevelData.minXP - currentLevelData.minXP : 0
  const progressPercent = nextLevelData ? (xpInCurrentLevel / xpNeededForNext) * 100 : 100

  return (
    <div className="card mb-8 bg-gradient-to-br from-bnp-green-600 to-bnp-green-700 text-white border-none">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentLevelData.color} flex items-center justify-center shadow-lg`}>
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-sm text-white/80 font-medium">Level {level}</p>
              <h2 className="text-2xl font-display font-bold">{currentLevelData.name}</h2>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-white/80">Total XP</p>
          <p className="text-3xl font-display font-bold">{currentXP.toLocaleString()}</p>
        </div>
      </div>

      {nextLevelData && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white/90 font-medium">
              Progress to {nextLevelData.name}
            </span>
            <span className="text-sm text-white/90 font-medium">
              {xpInCurrentLevel}/{xpNeededForNext} XP
            </span>
          </div>
          <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-white to-white/90 rounded-full transition-all duration-500 ease-out shadow-lg"
              style={{ width: `${Math.min(progressPercent, 100)}%` }}
            />
          </div>
          <div className="mt-3 flex items-center space-x-2 text-sm text-white/80">
            <TrendingUp className="w-4 h-4" />
            <span>{Math.max(0, nextLevelData.minXP - currentXP)} XP until next level</span>
          </div>
        </div>
      )}

      {!nextLevelData && (
        <div className="text-center py-4">
          <p className="text-lg font-semibold">🎉 Maximum Level Reached!</p>
          <p className="text-sm text-white/80 mt-1">You are a Top Investor</p>
        </div>
      )}
    </div>
  )
}
