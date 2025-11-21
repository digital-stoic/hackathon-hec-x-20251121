import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Catalog from './pages/Catalog'
import ProductDetail from './pages/ProductDetail'
import PortfolioDetail from './pages/PortfolioDetail'
import CreatePortfolio from './pages/CreatePortfolio'
import Chat from './pages/Chat'
import Learn from './pages/Learn'
import LearnTheme from './pages/LearnTheme'
import LearnLibrary from './pages/LearnLibrary'
import Objectives from './pages/Objectives'
import { useState, useEffect } from 'react'

interface Portfolio {
  id: number
  name: string
  value: number
  gain: number
  gainPercent: number
  risk: string
  duration: number
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [portfolios, setPortfolios] = useState<Portfolio[]>([
    { id: 1, name: 'Main Portfolio', value: 245000, gain: 3625, gainPercent: 1.50, risk: 'moderate', duration: 3 },
    { id: 2, name: 'Risky Crypto', value: 68000, gain: 884, gainPercent: 1.32, risk: 'high', duration: 3 },
    { id: 3, name: 'Impact Bonds', value: 75000, gain: 975, gainPercent: 1.32, risk: 'low', duration: 3 },
  ])

  useEffect(() => {
    // Check if user is already logged in
    const auth = localStorage.getItem('bnp_auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
    
    // Force reset portfolios with new names
    localStorage.removeItem('bnp_portfolios')
  }, [])

  const addPortfolio = (name: string, amount: number, risk: string) => {
    const newPortfolio: Portfolio = {
      id: Date.now(),
      name,
      value: amount,
      gain: 0,
      gainPercent: 0,
      risk,
      duration: 0,
    }
    const updatedPortfolios = [...portfolios, newPortfolio]
    setPortfolios(updatedPortfolios)
    localStorage.setItem('bnp_portfolios', JSON.stringify(updatedPortfolios))
  }

  const deletePortfolio = (id: number) => {
    const updatedPortfolios = portfolios.filter(p => p.id !== id)
    setPortfolios(updatedPortfolios)
    localStorage.setItem('bnp_portfolios', JSON.stringify(updatedPortfolios))
  }

  const handleLogin = () => {
    setIsAuthenticated(true)
    localStorage.setItem('bnp_auth', 'true')
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('bnp_auth')
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? <Dashboard onLogout={handleLogout} portfolios={portfolios} onDeletePortfolio={deletePortfolio} /> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/catalog" 
          element={
            isAuthenticated ? <Catalog /> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/product/:id" 
          element={
            isAuthenticated ? <ProductDetail /> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/portfolio/:id" 
          element={
            isAuthenticated ? <PortfolioDetail /> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/portfolio/create" 
          element={
            isAuthenticated ? <CreatePortfolio onCreatePortfolio={addPortfolio} /> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/chat" 
          element={
            isAuthenticated ? <Chat /> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/learn" 
          element={
            isAuthenticated ? <Learn /> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/learn/theme/:themeId" 
          element={
            isAuthenticated ? <LearnTheme /> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/learn/library" 
          element={
            isAuthenticated ? <LearnLibrary /> : <Navigate to="/login" />
          } 
        />
        <Route 
          path="/objectives" 
          element={
            isAuthenticated ? <Objectives /> : <Navigate to="/login" />
          } 
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App
