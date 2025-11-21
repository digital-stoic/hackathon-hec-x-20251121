import { useNavigate } from 'react-router-dom'
import { TrendingUp, Settings, Trash2 } from 'lucide-react'
import MiniPortfolioChart from './MiniPortfolioChart'

interface Portfolio {
  id: number
  name: string
  value: number
  gain: number
  gainPercent: number
  risk: string
  duration: number
}

interface PortfolioCardProps {
  portfolio: Portfolio
  onDelete: (id: number) => void
}

const getRiskColor = (risk: string) => {
  switch (risk) {
    case 'low':
      return 'bg-green-100 text-green-700'
    case 'high':
      return 'bg-red-100 text-red-700'
    default:
      return 'bg-orange-100 text-orange-700'
  }
}

export default function PortfolioCard({ portfolio, onDelete }: PortfolioCardProps) {
  const navigate = useNavigate()

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${portfolio.name}"? This action cannot be undone.`)) {
      onDelete(portfolio.id)
    }
  }

  return (
    <div className="card hover:shadow-bnp-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-xl font-display font-bold text-bnp-dark-900">
              {portfolio.name}
            </h3>
            <span className={`text-xs px-3 py-1 rounded-full font-medium ${getRiskColor(portfolio.risk)}`}>
              {portfolio.risk.charAt(0).toUpperCase() + portfolio.risk.slice(1)} Risk
            </span>
          </div>
          <p className="text-3xl font-display font-bold text-bnp-dark-900">
            ${portfolio.value.toLocaleString('en-US')}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => navigate(`/portfolio/${portfolio.id}`)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            title="Portfolio Settings"
          >
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={handleDelete}
            className="p-2 rounded-lg hover:bg-red-50 transition-colors"
            title="Delete Portfolio"
          >
            <Trash2 className="w-5 h-5 text-red-600" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-6 mb-4">
        <div>
          <p className="text-sm text-gray-600">P&L Amount</p>
          <p className={`text-lg font-bold ${portfolio.gain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {portfolio.gain >= 0 ? '+' : ''}${portfolio.gain.toLocaleString('en-US')}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-600">P&L %</p>
          <p className={`text-lg font-bold ${portfolio.gainPercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {portfolio.gainPercent >= 0 ? '+' : ''}{portfolio.gainPercent}%
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Duration</p>
          <p className="text-lg font-bold text-bnp-dark-900">
            {portfolio.duration} mo{portfolio.duration > 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <MiniPortfolioChart portfolioId={portfolio.id} />
      </div>
    </div>
  )
}
