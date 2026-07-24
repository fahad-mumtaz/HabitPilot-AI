# 🚀 HabitPilot AI - Quick Start Guide

## Prerequisites
- Node.js 18+ installed
- MongoDB running locally (or use MongoDB Atlas)

## Step 1: Install Dependencies
```bash
# From root directory
npm run install:all
```

## Step 2: Set Up Backend
```bash
cd packages/backend
npm run db:generate
npm run db:push
```

## Step 3: Start Development Servers

### Option A: Start Both Web and Backend
```bash
# From root directory
npm run dev
```

### Option B: Start Individually
```bash
# Backend (Terminal 1)
cd packages/backend
npm run dev

# Web App (Terminal 2)  
cd packages/web
npm run dev

# Mobile App (Terminal 3)
cd packages/mobile
npm run dev
```

## Step 4: Access Your Apps

### 🌐 Web Application
- URL: http://localhost:3000
- Features: Login, Dashboard, Habits, Analytics, AI Coach, Settings

### 📱 Mobile Application
- Install Expo Go app on your phone
- Scan QR code from terminal or open http://localhost:8081
- Features: Full mobile experience with native UI

### 🔧 Backend API
- URL: http://localhost:3001
- Health Check: http://localhost:3001/health
- API Docs: http://localhost:3001/api (endpoints listed below)

## Test Accounts

### Register New User
1. Go to http://localhost:3000
2. Click "Register" tab
3. Enter email, name, and password
4. Click "Create Account"

### Sample Login
- Email: test@example.com
- Password: password123

## API Endpoints

### Authentication
- `POST /api/auth/register` - Create new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Habits
- `GET /api/habits` - Get all user habits
- `POST /api/habits` - Create new habit
- `PUT /api/habits/:id` - Update habit
- `DELETE /api/habits/:id` - Delete habit
- `POST /api/habits/:id/log` - Log habit completion

### Analytics
- `GET /api/analytics/dashboard` - Dashboard stats
- `GET /api/analytics/monthly` - Monthly progress

### AI Coach
- `POST /api/ai-coach/chat` - Chat with AI coach
- `GET /api/ai-coach/insights` - Get AI insights

## Features to Test

### 🎯 Dashboard
- View today's habit progress
- See completion percentage
- Check current streak
- View habit completion cards

### 📋 Habits Management
- Create new habits with categories
- Mark habits as complete
- View habit statistics
- Edit/delete habits

### 📊 Analytics
- View weekly progress charts
- Check habit completion rates
- See monthly breakdowns
- Track streaks and achievements

### 🤖 AI Coach
- Chat with AI for habit advice
- Get personalized recommendations
- Receive motivation tips
- Ask for weekly planning help

### ⚙️ Settings
- Toggle dark/light theme (web)
- Configure notifications
- Manage profile
- View app statistics

## Troubleshooting

### MongoDB Connection Issues
- Make sure MongoDB is running: `mongod`
- Or use MongoDB Atlas (update .env with connection string)

### Port Conflicts
- Backend uses port 3001
- Web uses port 3000  
- Mobile uses port 8081 (Expo)

### Dependencies Issues
- Delete node_modules and reinstall: `npm run install:all`
- Clear cache: `npm cache clean --force`

## Production Deployment

### Backend
```bash
cd packages/backend
npm run build
npm start
```

### Web
```bash
cd packages/web
npm run build
npm start
```

### Mobile
```bash
cd packages/mobile
expo build:android
expo build:ios
```

## Support

If you encounter any issues:
1. Check the console for error messages
2. Ensure all dependencies are installed
3. Verify MongoDB is running
4. Check environment variables are set correctly

Enjoy building better habits with HabitPilot AI! 🚀
