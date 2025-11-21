import { Lock, CheckCircle, ArrowRight, Play } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface Mission {
  id: number
  title: string
  description: string
  xpReward: number
  category: 'knowledge' | 'investment' | 'other'
  status: 'locked' | 'in-progress' | 'completed'
  icon: string
  videoId?: number
}

interface MissionCardProps {
  mission: Mission
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'knowledge':
      return {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        button: 'bg-blue-600 hover:bg-blue-700',
      }
    case 'investment':
      return {
        bg: 'bg-bnp-green-50',
        border: 'border-bnp-green-200',
        text: 'text-bnp-green-700',
        button: 'bg-bnp-green-600 hover:bg-bnp-green-700',
      }
    default:
      return {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-700',
        button: 'bg-purple-600 hover:bg-purple-700',
      }
  }
}

export default function MissionCard({ mission }: MissionCardProps) {
  const navigate = useNavigate()
  const colors = getCategoryColor(mission.category)
  const isLocked = mission.status === 'locked'
  const isCompleted = mission.status === 'completed'

  const handleClick = () => {
    if (mission.category === 'knowledge' && mission.videoId) {
      navigate(`/learn#video-${mission.videoId}`)
    }
  }

  return (
    <div
      className={`card transition-all duration-300 ${
        isLocked ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-bnp-lg'
      } ${isCompleted ? 'bg-gray-50 border-gray-200' : ''}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4 flex-1">
          {/* Icon */}
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
              isCompleted ? 'bg-gray-200' : colors.bg
            } ${colors.border} border flex-shrink-0`}
          >
            {mission.icon}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <h3
                className={`font-semibold text-bnp-dark-900 ${
                  isCompleted ? 'line-through text-gray-500' : ''
                }`}
              >
                {mission.title}
              </h3>
              {isCompleted && <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 ml-2" />}
              {isLocked && <Lock className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2" />}
            </div>

            <p className={`text-sm mb-3 ${isCompleted ? 'text-gray-500' : 'text-gray-600'}`}>
              {mission.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className={`text-xs font-semibold px-2 py-1 rounded ${colors.bg} ${colors.text}`}>
                  +{mission.xpReward} XP
                </span>
              </div>

              {!isLocked && !isCompleted && (
                <button
                  onClick={handleClick}
                  className={`flex items-center space-x-2 px-4 py-2 ${colors.button} text-white rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md text-sm`}
                >
                  {mission.category === 'knowledge' ? (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Watch</span>
                    </>
                  ) : (
                    <>
                      <ArrowRight className="w-4 h-4" />
                      <span>Start</span>
                    </>
                  )}
                </button>
              )}

              {isCompleted && (
                <span className="text-sm font-medium text-green-600">Completed ✓</span>
              )}

              {isLocked && (
                <span className="text-sm font-medium text-gray-400">Locked</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
