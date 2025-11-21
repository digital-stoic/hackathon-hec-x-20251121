import { useState } from 'react'
import { Lock, Mail, TrendingUp, Shield, Sparkles } from 'lucide-react'

interface LoginProps {
  onLogin: () => void
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Pour le hackathon, connexion simple
    if (email && password) {
      onLogin()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-bnp-green-50 via-white to-bnp-green-50 flex">
      {/* Panneau gauche - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-bnp-green-600 to-bnp-green-800 p-12 flex-col justify-between relative overflow-hidden">
        {/* Pattern de fond */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-bnp-green-600" />
            </div>
            <div>
              <h1 className="text-white text-2xl font-display font-bold">BNP PARIBAS</h1>
              <p className="text-bnp-green-100 text-sm">Banque Privée</p>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-white text-5xl font-display font-bold leading-tight mb-6">
              Your wealth,<br />
              simply managed
            </h2>
            <p className="text-bnp-green-100 text-xl leading-relaxed max-w-md">
              A modern platform to track and optimize your savings in real-time.
            </p>
          </div>
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex items-center space-x-3 text-white">
            <Shield className="w-6 h-6" />
            <span className="text-sm">Bank-level institutional security</span>
          </div>
          <div className="flex items-center space-x-3 text-white">
            <Sparkles className="w-6 h-6" />
            <span className="text-sm">Interface designed for the new generation</span>
          </div>
        </div>
      </div>

      {/* Panneau droit - Formulaire */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo mobile */}
          <div className="lg:hidden mb-8 text-center">
            <div className="inline-flex items-center space-x-2 mb-2">
              <div className="w-10 h-10 bg-bnp-green-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-display font-bold text-bnp-dark-900">BNP PARIBAS</h1>
            </div>
            <p className="text-gray-600 text-sm">Wealth Management</p>
          </div>

          <div className="bg-white rounded-2xl shadow-bnp-lg p-8 border border-gray-100">
            <div className="mb-8">
              <h2 className="text-3xl font-display font-bold text-bnp-dark-900 mb-2">
                Welcome
              </h2>
              <p className="text-gray-600">
                Sign in to your wealth management platform
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field pl-11"
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field pl-11"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-bnp-green-600 focus:ring-bnp-green-500" />
                  <span className="text-gray-700">Remember me</span>
                </label>
                <a href="#" className="text-bnp-green-600 hover:text-bnp-green-700 font-medium">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn-primary w-full text-lg">
                Sign In
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Don't have an account?{' '}
                <a href="#" className="text-bnp-green-600 hover:text-bnp-green-700 font-medium">
                  Become a client
                </a>
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 mt-8">
            © 2025 BNP Paribas Wealth Management. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
