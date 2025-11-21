import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import XPLevelHeader from '../components/objectives/XPLevelHeader'
import WeeklyQuestCard from '../components/objectives/WeeklyQuestCard'
import MissionCard from '../components/objectives/MissionCard'
import BottomNav from '../components/BottomNav'

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

export default function Objectives() {
  const navigate = useNavigate()
  
  // User XP state
  const [userXP] = useState(450)
  const [userLevel] = useState(2)
  
  // Weekly quest
  const weeklyQuest = {
    id: 0,
    title: 'Diversify Your Portfolio',
    description: 'Invest in at least 2 different asset classes this week to reduce risk and maximize potential returns',
    xpReward: 100,
    progress: 1,
    total: 2,
    status: 'in-progress' as const,
  }
  
  // Mission data
  const missions: Mission[] = [
    // Knowledge missions
    {
      id: 1,
      title: 'Understanding ETFs',
      description: 'Watch the complete video guide on Exchange-Traded Funds',
      xpReward: 30,
      category: 'knowledge',
      status: 'completed',
      icon: '📚',
      videoId: 1,
    },
    {
      id: 2,
      title: 'Master Market Volatility',
      description: 'Learn how to manage risk in volatile markets',
      xpReward: 30,
      category: 'knowledge',
      status: 'in-progress',
      icon: '📊',
      videoId: 7,
    },
    {
      id: 3,
      title: 'Cryptocurrency Basics',
      description: 'Complete the Bitcoin 101 learning module',
      xpReward: 30,
      category: 'knowledge',
      status: 'in-progress',
      icon: '🪙',
      videoId: 801,
    },
    {
      id: 4,
      title: 'Tax Optimization',
      description: 'Learn about tax-efficient investment strategies',
      xpReward: 30,
      category: 'knowledge',
      status: 'locked',
      icon: '💼',
      videoId: 3,
    },
    
    // Investment missions
    {
      id: 5,
      title: 'First Investment',
      description: 'Add your first asset to any portfolio',
      xpReward: 10,
      category: 'investment',
      status: 'completed',
      icon: '🎯',
    },
    {
      id: 6,
      title: 'Add Funds',
      description: 'Transfer additional capital to your account',
      xpReward: 10,
      category: 'investment',
      status: 'in-progress',
      icon: '💰',
    },
    {
      id: 7,
      title: 'Rebalance Portfolio',
      description: 'Adjust your asset allocation to match your goals',
      xpReward: 30,
      category: 'investment',
      status: 'locked',
      icon: '⚖️',
    },
    {
      id: 8,
      title: 'Impact Investment',
      description: 'Invest in a sustainable or ESG-focused asset',
      xpReward: 30,
      category: 'investment',
      status: 'locked',
      icon: '🌱',
    },
    {
      id: 9,
      title: 'Reach $500K Portfolio',
      description: 'Grow your total portfolio value to half a million',
      xpReward: 100,
      category: 'investment',
      status: 'locked',
      icon: '🏆',
    },
    
    // Other missions
    {
      id: 10,
      title: 'Complete Your Profile',
      description: 'Fill in all profile details and preferences',
      xpReward: 10,
      category: 'other',
      status: 'in-progress',
      icon: '👤',
    },
    {
      id: 11,
      title: 'Enable Notifications',
      description: 'Stay informed with market updates and alerts',
      xpReward: 10,
      category: 'other',
      status: 'locked',
      icon: '🔔',
    },
    {
      id: 12,
      title: 'Set Financial Goal',
      description: 'Define your investment target and timeline',
      xpReward: 30,
      category: 'other',
      status: 'locked',
      icon: '🎯',
    },
  ]
  
  const knowledgeMissions = missions.filter(m => m.category === 'knowledge')
  const investmentMissions = missions.filter(m => m.category === 'investment')
  const otherMissions = missions.filter(m => m.category === 'other')

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
              <div>
                <h1 className="text-xl font-display font-bold text-bnp-dark-900">Objectives</h1>
                <p className="text-xs text-gray-500">Track your progress</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        {/* XP Level Header */}
        <XPLevelHeader currentXP={userXP} level={userLevel} />

        {/* Weekly Quest */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-display font-bold text-bnp-dark-900">Weekly Quest</h2>
            <span className="text-sm text-gray-500">Resets in 3 days</span>
          </div>
          <WeeklyQuestCard quest={weeklyQuest} />
        </div>

        {/* Knowledge Missions */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-display font-bold text-bnp-dark-900">Knowledge</h2>
            <span className="text-sm text-gray-500">
              {knowledgeMissions.filter(m => m.status === 'completed').length}/{knowledgeMissions.length}
            </span>
          </div>
          <div className="space-y-4">
            {knowledgeMissions.map(mission => (
              <MissionCard key={mission.id} mission={mission} />
            ))}
          </div>
        </div>

        {/* Investment Missions */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-display font-bold text-bnp-dark-900">Investment Actions</h2>
            <span className="text-sm text-gray-500">
              {investmentMissions.filter(m => m.status === 'completed').length}/{investmentMissions.length}
            </span>
          </div>
          <div className="space-y-4">
            {investmentMissions.map(mission => (
              <MissionCard key={mission.id} mission={mission} />
            ))}
          </div>
        </div>

        {/* Other Missions */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-display font-bold text-bnp-dark-900">Account & Settings</h2>
            <span className="text-sm text-gray-500">
              {otherMissions.filter(m => m.status === 'completed').length}/{otherMissions.length}
            </span>
          </div>
          <div className="space-y-4">
            {otherMissions.map(mission => (
              <MissionCard key={mission.id} mission={mission} />
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
