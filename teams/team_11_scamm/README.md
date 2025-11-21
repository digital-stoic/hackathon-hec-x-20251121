# BNP Paribas Wealth Management Platform

Modern wealth management platform for GenZ, developed for the BNP Paribas hackathon.

## 🚀 Technologies

- **React 18** - UI Framework
- **TypeScript** - Static typing
- **Vite** - Ultra-fast build tool
- **Tailwind CSS** - Styling with BNP Paribas brand
- **Recharts** - Data visualizations
- **React Router** - Navigation
- **Lucide Icons** - Modern icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎨 BNP Paribas Brand

The platform uses the official BNP Paribas Banque Privée brand:
- Primary green: `#00965e`
- Complementary green palette
- Typography: Inter (body) and Montserrat (headings)
- Modern and clean design

## 📁 Project Structure

```
src/
├── App.tsx                      # Main app with routing
├── main.tsx                     # Entry point
├── index.css                    # Global Tailwind styles
├── pages/
│   ├── Login.tsx               # Login page
│   ├── Dashboard.tsx           # Main dashboard
│   ├── Catalog.tsx             # Product catalog
│   ├── ProductDetail.tsx       # Product detail & purchase
│   ├── PortfolioDetail.tsx     # Portfolio management (Slider 1)
│   ├── CreatePortfolio.tsx     # Create portfolio (Slider 2)
│   └── Chat.tsx                # AI chatbot assistant
└── components/
    ├── PortfolioCard.tsx       # Portfolio card display
    ├── MiniPortfolioChart.tsx  # Mini chart for portfolios
    ├── PortfolioChart.tsx      # Main portfolio evolution chart
    ├── AllocationChart.tsx     # Asset allocation chart
    ├── StatsCard.tsx           # Statistics cards
    └── TransactionsList.tsx    # Transaction list
```

## ✨ Features

### 🏠 Dashboard
- ✅ Available cash prominently displayed
- ✅ Global portfolio statistics with period selector (1M, 3M, 6M, 1Y, 3Y, 5Y)
- ✅ P&L display (amount & percentage)
- ✅ Portfolio evolution chart
- ✅ Detailed asset breakdown by class
- ✅ Individual portfolio cards with mini charts
- ✅ Quick access to Catalog and Profile
- ✅ AI Chatbot button
- ✅ Contact advisor button
- ✅ Create new portfolio button

### 📚 Catalog
- ✅ Left sidebar with filters (asset classes, themes)
- ✅ Search bar
- ✅ Product grid with prices and performance
- ✅ Quick add button on each product

### 🔍 Product Detail
- ✅ Product name and description
- ✅ Latest news with links
- ✅ Strengths and risks analysis
- ✅ Historical performance chart
- ✅ Portfolio selector
- ✅ Investment amount input
- ✅ Validate purchase button

### 💼 Portfolio Detail (Slider 1)
- ✅ Portfolio name and balance
- ✅ Add funds / Withdraw buttons
- ✅ View asset details button
- ✅ Risk level slider
- ✅ Impact level slider
- ✅ Asset categories checkboxes
- ✅ Investment themes checkboxes
- ✅ Performance chart

### ➕ Create Portfolio (Slider 2)
- ✅ Portfolio name input
- ✅ Risk level slider
- ✅ Impact level slider
- ✅ Asset categories selection
- ✅ Investment themes selection
- ✅ Simulate button
- ✅ Simulation results (expected return, volatility, allocation)
- ✅ Validate & create button

### 💬 AI Chat Assistant
- ✅ Pre-made prompts (news, tips, mini courses, portfolio analysis)
- ✅ Interactive chat interface
- ✅ Contextual AI responses
- ✅ Market news updates
- ✅ Investment tips
- ✅ Educational mini courses
- ✅ Portfolio performance analysis

## 🔐 Demo Login

To test the platform:
- Email: any valid email address
- Password: any password

## 📱 Compatibility

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Responsive (mobile, tablet, desktop)
- ✅ PWA-ready

## 🔄 Migration to Lovable

This project is structured to be easily transferable to Lovable:

1. **Copy all files**: Standard and compatible architecture
2. **package.json**: All dependencies listed
3. **React Components**: Modular and reusable code
4. **Tailwind CSS**: Custom configuration included
5. **TypeScript**: Type-safe for better DX

### Migration steps:

1. Create a new Lovable project
2. Copy each file's content into Lovable
3. Install dependencies if necessary
4. Run `npm install` then `npm run dev`

## 🎯 Future Features (to implement)

- [ ] Real authentication with backend
- [ ] More charts and visualizations
- [ ] Real-time notifications
- [ ] Dark mode
- [ ] PDF report export
- [ ] Mobile app version
- [ ] Multi-language support

## 📐 Design System

### Colors
```css
Primary Green: #00965e
Gold Accent: #edb13f
Dark: #1a1a1a
```

### Typography
- **Display**: Montserrat (600-800)
- **Body**: Inter (300-700)

### Components
All components follow BNP Paribas brand guidelines with modern GenZ-friendly touches.

## 📄 License

BNP Paribas Hackathon Project 2025

---

Built with ❤️ for GenZ
