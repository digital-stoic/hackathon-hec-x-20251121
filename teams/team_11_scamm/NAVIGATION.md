# Navigation Flow

## Page Routes

```
/login              → Login page (public)
/dashboard          → Main dashboard (authenticated)
/catalog            → Product catalog (authenticated)
/product/:id        → Product detail page (authenticated)
/portfolio/:id      → Portfolio detail/management (authenticated)
/portfolio/create   → Create new portfolio (authenticated)
/chat               → AI assistant chat (authenticated)
```

## User Journey

### 1. Login → Dashboard
- User logs in with any email/password
- Redirected to dashboard with welcome message

### 2. Dashboard Actions
- **View Available Cash**: Prominently displayed at top
- **Change Period**: Select 1M, 3M, 6M, 1Y, 3Y, 5Y to view different timeframes
- **View Asset Details**: Click dropdown to see all assets by class
- **Click Portfolio Card**: Opens portfolio detail page
- **Click Catalog Button**: Navigate to product catalog
- **Click Chat Icon**: Open AI assistant
- **Click Contact Advisor**: Contact form/action
- **Click + Create Portfolio**: Start portfolio creation flow

### 3. Catalog → Product Detail
- Browse products with filters
- Search by name
- Click + button on product → Product detail page
- On product detail:
  - Select portfolio
  - Enter amount
  - Click Validate → Purchase confirmed

### 4. Portfolio Management
- **From Dashboard**: Click settings icon on portfolio card
- **Portfolio Detail Page**:
  - View/modify risk level
  - View/modify impact level
  - Select asset categories
  - Select themes
  - Add/withdraw funds
  - View detailed assets

### 5. Create Portfolio Flow
- Click + on dashboard
- Enter portfolio name
- Set risk level (slider)
- Set impact level (slider)
- Select asset categories
- Select themes
- Click Simulate → See projected allocation and returns
- Click Validate → Portfolio created

### 6. AI Chat
- Click chat icon from dashboard
- Select quick prompt or type question
- AI responds with:
  - Market news
  - Investment tips
  - Educational content
  - Portfolio analysis

## Component Hierarchy

```
App (Router)
├── Login
│   └── Login Form
└── Authenticated Routes
    ├── Dashboard
    │   ├── Header (Catalog, Profile, Chat buttons)
    │   ├── Available Cash Banner
    │   ├── Global Stats Section
    │   │   ├── Period Selector
    │   │   ├── Portfolio Chart
    │   │   └── Asset Details Dropdown
    │   ├── Portfolio Cards List
    │   │   └── PortfolioCard
    │   │       └── MiniPortfolioChart
    │   ├── Create Portfolio Button
    │   └── Footer (Contact Advisor, AI Chat)
    ├── Catalog
    │   ├── Sidebar Filters
    │   ├── Search Bar
    │   └── Product Grid
    ├── ProductDetail
    │   ├── Purchase Section
    │   ├── Description
    │   ├── Historical Chart
    │   ├── Pros & Cons
    │   └── News Sidebar
    ├── PortfolioDetail
    │   ├── Balance & Actions
    │   ├── Asset Details
    │   ├── Performance Chart
    │   └── Settings (Sliders, Categories, Themes)
    ├── CreatePortfolio
    │   ├── Name Input
    │   ├── Settings (Sliders, Categories, Themes)
    │   ├── Simulate Button
    │   └── Simulation Results
    └── Chat
        ├── Quick Prompts
        ├── Message History
        └── Input Area
```

## Key Features per Page

### Dashboard
- Available cash display
- Period selector (1M-5Y)
- Global P&L (amount + %)
- Portfolio evolution chart
- Asset details dropdown
- Multiple portfolio cards
- Navigation to all pages

### Catalog
- Filter by asset class
- Filter by theme
- Search functionality
- Product grid with pricing
- Quick add functionality

### Product Detail
- Full product information
- News feed
- Risk analysis
- Historical chart
- Portfolio selector
- Amount input
- One-click purchase

### Portfolio Detail (Slider 1)
- Current balance
- Add/withdraw funds
- View asset breakdown
- Adjust risk (0-100%)
- Adjust impact (0-100%)
- Select categories
- Select themes
- Save changes

### Create Portfolio (Slider 2)
- Name your portfolio
- Set risk level
- Set impact level
- Choose categories
- Choose themes
- Simulate allocation
- View projections
- Validate creation

### AI Chat
- Pre-made prompts
- Interactive chat
- Real-time responses
- Educational content
- Portfolio analysis
