# BNP PARIBAS Wealth Management - Learn Feature

## Overview
TikTok-inspired educational platform for financial literacy, integrated into the BNP Paribas Wealth Management app.

## Features

### 1. Learn Feed (`/learn`)
- **TikTok-style vertical scroll** - Swipe up/down or use arrow keys to navigate
- **Full-screen video cards** with overlay UI
- **Side action bar** (like/save/share buttons)
- **Theme tags** with color-coded badges
- **Quick actions**:
  - "Deep Dive" button → Navigate to theme page
  - "Library" button → Full video catalog
- **Progress indicator** at bottom showing current video position

### 2. Theme Deep-Dive (`/learn/theme/:themeId`)
- **MOOC-style structure** organized by chapters
- **Progress tracking** - shows completed videos and overall progress
- **Chapter-based organization**:
  - Introduction
  - Key Concepts
  - Advanced Topics (locked until basics completed)
- **Video cards** with thumbnails and metadata
- **Completion badges** for finished videos
- **Lock icons** for premium/advanced content

### 3. Library Browser (`/learn/library`)
- **8 main themes**:
  - 📊 ETFs & Index Funds (12 videos)
  - 🎯 Investment Strategies (15 videos)
  - 💰 Tax Optimization (10 videos)
  - 🧠 Financial Psychology (8 videos)
  - 🏦 Savings & Emergency Fund (7 videos)
  - 🏠 Real Estate Investing (11 videos)
  - ⚖️ Risk Management (9 videos)
  - ₿ Cryptocurrency Basics (6 videos)
- **Smart search** by financial concepts (DCA, ETF, PEA, SCPI, etc.)
- **Categorized layout** with color-coded themes
- **Quick navigation** to themed collections

## Navigation Flow
```
Dashboard → Learn (TikTok feed)
Learn → Library (all themes)
Learn → Theme Detail (deep dive)
Library → Theme Detail
Theme Detail → Learn (watch video)
```

## Technical Implementation

### Files Created
- `src/pages/Learn.tsx` - Main TikTok-style feed
- `src/pages/LearnLibrary.tsx` - Full video catalog
- `src/pages/LearnTheme.tsx` - MOOC-style theme pages

### Key Features
- **Keyboard navigation** (Arrow Up/Down)
- **Touch gestures** for mobile (swipe)
- **Responsive design** for all screen sizes
- **BNP Paribas branding** maintained throughout
- **Mock video data** (replace with real content/API)

### Routes Added
- `/learn` - Main feed
- `/learn/library` - Full catalog
- `/learn/theme/:themeId` - Theme detail

## Content Structure

### Video Metadata
Each video includes:
- Title
- Theme/Category
- Duration
- Thumbnail image
- Description
- Completion status
- Lock status (for premium content)

### Themes Supported
- `etf` - ETFs & Index Funds
- `investment` - Investment Strategies
- `tax` - Tax Optimization
- `psychology` - Financial Psychology
- `savings` - Savings & Emergency Fund
- `real-estate` - Real Estate Investing
- `risk` - Risk Management
- `crypto` - Cryptocurrency Basics (in library only)

## Design Highlights

### Learn Feed
- Black background for video focus
- White overlay text with gradient fade
- Floating action buttons (TikTok style)
- BNP green accent for primary actions
- Smooth transitions between videos

### Library
- Clean, modern card layout
- Color-coded theme headers
- Search with keyword suggestions
- Grid layout for video thumbnails
- Play button overlay on hover

### Theme Detail
- Progress visualization
- Chapter-based organization
- Sequential unlocking system
- Completion tracking
- Congratulations message on 100%

## Next Steps (Optional Enhancements)
1. **Video integration** - Replace images with actual video players
2. **API connection** - Fetch real educational content
3. **Quiz system** - Add interactive quizzes after videos
4. **Certificates** - Award completion certificates
5. **Social features** - Share progress, compete with friends
6. **Bookmarks sync** - Persist saved videos
7. **Watch history** - Track viewing progress
8. **Recommendations** - AI-powered video suggestions

## Usage from Dashboard
Click the **"Learn"** button (purple with headphones icon) in the top navigation bar.

---

**Created for**: BNP Paribas Hackathon  
**Target Audience**: GenZ (young heirs)  
**Platform**: Web (PWA-ready)  
**Technology**: React + TypeScript + Tailwind CSS
