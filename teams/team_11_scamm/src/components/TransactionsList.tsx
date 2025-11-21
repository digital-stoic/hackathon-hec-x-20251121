import { ArrowUpRight, ArrowDownRight, TrendingUp, Home, Wallet } from 'lucide-react'

interface Transaction {
  id: number
  type: 'buy' | 'sell' | 'deposit' | 'withdrawal'
  title: string
  date: string
  amount: number
  category: string
}

const transactions: Transaction[] = [
  {
    id: 1,
    type: 'buy',
    title: 'Achat Actions Total Energies',
    date: '18 Nov 2025',
    amount: -5420,
    category: 'Actions'
  },
  {
    id: 2,
    type: 'deposit',
    title: 'Versement mensuel',
    date: '15 Nov 2025',
    amount: 3000,
    category: 'Épargne'
  },
  {
    id: 3,
    type: 'buy',
    title: 'Obligation BNP Paribas',
    date: '12 Nov 2025',
    amount: -8000,
    category: 'Obligations'
  },
  {
    id: 4,
    type: 'buy',
    title: 'SCPI Corum Origin',
    date: '08 Nov 2025',
    amount: -12000,
    category: 'Immobilier'
  },
  {
    id: 5,
    type: 'deposit',
    title: 'Dividendes reçus',
    date: '05 Nov 2025',
    amount: 850,
    category: 'Revenus'
  },
]

const getIcon = (type: string) => {
  switch (type) {
    case 'buy':
      return <TrendingUp className="w-5 h-5" />
    case 'sell':
      return <ArrowDownRight className="w-5 h-5" />
    case 'deposit':
      return <Wallet className="w-5 h-5" />
    default:
      return <Home className="w-5 h-5" />
  }
}

const getIconBg = (type: string) => {
  switch (type) {
    case 'buy':
      return 'bg-blue-50 text-blue-600'
    case 'sell':
      return 'bg-red-50 text-red-600'
    case 'deposit':
      return 'bg-green-50 text-green-600'
    default:
      return 'bg-purple-50 text-purple-600'
  }
}

export default function TransactionsList() {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div 
          key={transaction.id}
          className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center space-x-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getIconBg(transaction.type)}`}>
              {getIcon(transaction.type)}
            </div>
            <div>
              <p className="font-semibold text-bnp-dark-900">{transaction.title}</p>
              <p className="text-sm text-gray-500">{transaction.date} • {transaction.category}</p>
            </div>
          </div>
          <div className="text-right">
            <p className={`text-lg font-bold ${
              transaction.amount >= 0 ? 'text-green-600' : 'text-bnp-dark-900'
            }`}>
              {transaction.amount >= 0 ? '+' : ''}{transaction.amount.toLocaleString('fr-FR')} €
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
