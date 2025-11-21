import { Calendar, Star, ArrowRight } from 'lucide-react'

interface WeeklyQuest {
  id: number
  title: string
  description: string
  xpReward: number
  progress: number
  total: number
  status: 'locked' | 'in-progress' | 'completed'
}

interface WeeklyQuestCardProps {
  quest: WeeklyQuest
}

export default function WeeklyQuestCard({ quest }: WeeklyQuestCardProps) {
  const progressPercent = (quest.progress / quest.total) * 100

  return (
    <div className="card bg-gradient-to-br from-bnp-gold-50 to-orange-50 border-2 border-bnp-gold-200 hover:shadow-bnp-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-bnp-gold-400 to-bnp-gold-600 flex items-center justify-center shadow-md">
            <Star className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <Calendar className="w-4 h-4 text-bnp-gold-600" />
              <span className="text-xs font-semibold text-bnp-gold-700 uppercase tracking-wide">
                Weekly Challenge
              </span>
            </div>
            <h3 className="text-xl font-display font-bold text-bnp-dark-900">
              {quest.title}
            </h3>
          </div>
        </div>
        <div className="text-right">
          <div className="inline-flex items-center space-x-1 px-3 py-1.5 bg-bnp-gold-600 text-white rounded-full font-semibold text-sm shadow-md">
            <Star className="w-4 h-4" />
            <span>+{quest.xpReward} XP</span>
          </div>
        </div>
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed">
        {quest.description}
      </p>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">Progress</span>
          <span className="text-sm font-bold text-bnp-dark-900">
            {quest.progress}/{quest.total}
          </span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-bnp-gold-400 to-bnp-gold-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <button className="w-full btn-primary flex items-center justify-center space-x-2 bg-gradient-to-r from-bnp-gold-500 to-bnp-gold-600 hover:from-bnp-gold-600 hover:to-bnp-gold-700">
        <span>Continue Quest</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  )
}
