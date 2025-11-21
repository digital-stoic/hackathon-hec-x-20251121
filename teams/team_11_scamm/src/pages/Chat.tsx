import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Send, TrendingUp, Newspaper, Lightbulb, GraduationCap, Sparkles } from 'lucide-react'

interface Message {
  id: number
  type: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function Chat() {
  const navigate = useNavigate()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'assistant',
      content: "Hello! I'm your AI financial assistant. I can help you with investment advice, market news, educational content, and personalized recommendations. How can I assist you today?",
      timestamp: new Date(),
    }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const quickPrompts = [
    { icon: <Newspaper className="w-5 h-5" />, text: 'Latest market news', color: 'blue' },
    { icon: <Lightbulb className="w-5 h-5" />, text: 'Investment tips for beginners', color: 'green' },
    { icon: <GraduationCap className="w-5 h-5" />, text: 'Mini course: Portfolio diversification', color: 'purple' },
    { icon: <Sparkles className="w-5 h-5" />, text: 'Analyze my portfolio performance', color: 'orange' },
  ]

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage])

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        type: 'assistant',
        content: generateAIResponse(inputMessage),
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)

    setInputMessage('')
  }

  const handleQuickPrompt = (promptText: string) => {
    setInputMessage(promptText)
  }

  const generateAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase()
    
    if (lowerQuestion.includes('news')) {
      return "Here are today's top market highlights:\n\n1. **Tech Stocks Rally**: Major technology stocks gained 2.5% today, driven by strong earnings reports.\n\n2. **Federal Reserve Update**: The Fed maintains interest rates, signaling a cautious approach to monetary policy.\n\n3. **Cryptocurrency Surge**: Bitcoin and Ethereum see significant gains amid institutional adoption news.\n\n4. **Green Energy Momentum**: Renewable energy stocks continue their upward trend with new government incentives.\n\nWould you like more details on any of these topics?"
    }
    
    if (lowerQuestion.includes('tip') || lowerQuestion.includes('beginner')) {
      return "Great question! Here are essential investment tips for beginners:\n\n💡 **Start with diversification**: Don't put all your eggs in one basket. Spread investments across different asset classes.\n\n💡 **Dollar-cost averaging**: Invest regularly rather than timing the market.\n\n💡 **Long-term perspective**: Focus on long-term growth rather than short-term fluctuations.\n\n💡 **Emergency fund first**: Always maintain 3-6 months of expenses before investing.\n\n💡 **Understand risk tolerance**: Choose investments that match your comfort level with risk.\n\nWould you like to explore any of these concepts in detail?"
    }
    
    if (lowerQuestion.includes('course') || lowerQuestion.includes('diversification')) {
      return "📚 **Mini Course: Portfolio Diversification**\n\n**Lesson 1: What is Diversification?**\nDiversification means spreading your investments across various assets to reduce risk. Think of it as not putting all your eggs in one basket.\n\n**Lesson 2: Asset Classes**\n- Stocks (equities)\n- Bonds (fixed income)\n- Real estate\n- Commodities\n- Cryptocurrency\n\n**Lesson 3: Why Diversify?**\n✓ Reduces overall portfolio risk\n✓ Smooths out returns over time\n✓ Protects against market volatility\n\n**Lesson 4: How Much to Diversify?**\nA balanced portfolio might include:\n- 60% stocks\n- 30% bonds\n- 10% alternative investments\n\nAdjust based on your age, goals, and risk tolerance!\n\nReady for the next lesson?"
    }
    
    if (lowerQuestion.includes('portfolio') || lowerQuestion.includes('performance')) {
      return "📊 **Portfolio Performance Analysis**\n\nBased on your current holdings:\n\n**Overall Performance**: +7.89% (1 Year)\n✓ Outperforming market average by 2.1%\n\n**Strengths**:\n- Well-diversified across asset classes\n- Strong technology sector exposure\n- Good balance of growth and stability\n\n**Opportunities**:\n- Consider adding more international exposure\n- Environmental/ESG investments could enhance impact\n- Increase bond allocation for more stability\n\n**Risk Assessment**: Moderate-High\nYour portfolio has higher volatility but good long-term growth potential.\n\nWould you like specific recommendations for rebalancing?"
    }
    
    return "Thank you for your question! I'm here to help with:\n\n• Market news and insights\n• Investment strategies and tips\n• Educational content on finance\n• Portfolio analysis and recommendations\n• Risk management advice\n\nCould you please provide more details about what you'd like to know?"
  }

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-700 hover:bg-blue-100',
      green: 'bg-green-50 text-green-700 hover:bg-green-100',
      purple: 'bg-purple-50 text-purple-700 hover:bg-purple-100',
      orange: 'bg-orange-50 text-orange-700 hover:bg-orange-100',
    }
    return colors[color as keyof typeof colors] || colors.green
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold text-bnp-dark-900">AI Assistant</h1>
                <p className="text-xs text-gray-500">Your personal financial advisor</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Chat Area */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col">
        {/* Quick Prompts */}
        {messages.length <= 1 && (
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">Quick actions:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickPrompt(prompt.text)}
                  className={`p-4 rounded-xl transition-all flex items-center space-x-3 ${getColorClasses(prompt.color)}`}
                >
                  {prompt.icon}
                  <span className="font-medium text-sm">{prompt.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 space-y-4 mb-6 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                  message.type === 'user'
                    ? 'bg-bnp-green-600 text-white'
                    : 'bg-white border border-gray-200 text-gray-800'
                }`}
              >
                {message.type === 'assistant' && (
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-gray-600">AI Assistant</span>
                  </div>
                )}
                <p className="whitespace-pre-line text-sm leading-relaxed">{message.content}</p>
                <p className={`text-xs mt-2 ${message.type === 'user' ? 'text-bnp-green-100' : 'text-gray-400'}`}>
                  {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="sticky bottom-0 bg-gray-50 pt-4 pb-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-2">
            <div className="flex items-end space-x-2">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
                placeholder="Ask me anything about investing, markets, or financial planning..."
                rows={1}
                className="flex-1 px-4 py-3 resize-none outline-none text-gray-800 placeholder-gray-400"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="p-3 bg-bnp-green-600 text-white rounded-xl hover:bg-bnp-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">
            AI responses are for informational purposes only. Not financial advice.
          </p>
        </div>
      </div>
    </div>
  )
}
