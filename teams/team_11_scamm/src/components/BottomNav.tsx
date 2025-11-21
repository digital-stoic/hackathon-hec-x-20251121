import { useNavigate, useLocation } from 'react-router-dom'
import { Home, BookOpen, Target, Store } from 'lucide-react'

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/dashboard') return location.pathname === '/dashboard'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 safe-area-bottom shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-1">
          <button
            onClick={() => navigate('/dashboard')}
            className={`flex flex-col items-center py-3 px-2 transition-colors ${
              isActive('/dashboard')
                ? 'text-bnp-green-600 bg-bnp-green-50'
                : 'text-gray-600 hover:text-bnp-green-600 hover:bg-gray-50'
            }`}
          >
            <Home className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button
            onClick={() => navigate('/learn')}
            className={`flex flex-col items-center py-3 px-2 transition-colors ${
              isActive('/learn')
                ? 'text-bnp-green-600 bg-bnp-green-50'
                : 'text-gray-600 hover:text-bnp-green-600 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Knowledge</span>
          </button>
          <button
            onClick={() => navigate('/objectives')}
            className={`flex flex-col items-center py-3 px-2 transition-colors ${
              location.pathname === '/objectives'
                ? 'text-bnp-green-600 bg-bnp-green-50'
                : 'text-gray-600 hover:text-bnp-green-600 hover:bg-gray-50'
            }`}
          >
            <Target className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Objectives</span>
          </button>
          <button
            onClick={() => navigate('/catalog')}
            className={`flex flex-col items-center py-3 px-2 transition-colors ${
              isActive('/catalog') || isActive('/product')
                ? 'text-bnp-green-600 bg-bnp-green-50'
                : 'text-gray-600 hover:text-bnp-green-600 hover:bg-gray-50'
            }`}
          >
            <Store className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Catalog</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
