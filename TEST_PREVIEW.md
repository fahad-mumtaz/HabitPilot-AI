# 🎯 HabitPilot AI - Quick Test Preview

## 🚀 Ready to Test!

I've set up everything you need to test the HabitPilot AI application. Here's what you can do right now:

## 📋 What's Ready

### ✅ Backend API Server
- **Location**: `packages/backend/`
- **Port**: 3001
- **Features**: Authentication, Habits CRUD, Analytics, AI Coach
- **Status**: Ready to start

### ✅ Web Application  
- **Location**: `packages/web/`
- **Port**: 3000
- **Features**: Full web interface with dark/light theme
- **Status**: Ready to start

### ✅ Mobile Application
- **Location**: `packages/mobile/`
- **Port**: 8081 (Expo)
- **Features**: Complete mobile app with native UI
- **Status**: Ready to start

## 🛠️ Quick Start Commands

### Step 1: Install Dependencies
```bash
# In PowerShell (run as Administrator)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Then install dependencies
cd "e:\Coding\Wind Serf\HabitPilot-AI"
npm install
```

### Step 2: Start Backend
```bash
cd packages/backend
npm install
npm run db:generate
npm run db:push
npm run dev
```

### Step 3: Start Web App (New Terminal)
```bash
cd packages/web  
npm install
npm run dev
```

### Step 4: Start Mobile App (New Terminal)
```bash
cd packages/mobile
npm install
npm start
```

## 🎮 What You Can Test

### 🔐 Authentication
- Register new users
- Login/logout functionality
- Session management

### 📊 Dashboard
- Today's habit progress
- Completion percentages
- Streak tracking
- Quick habit completion

### 📋 Habit Management
- Create new habits
- Edit existing habits
- Delete habits
- Mark habits complete
- View habit statistics

### 📈 Analytics
- Weekly progress charts
- Monthly completion rates
- Habit breakdown statistics
- Achievement tracking

### 🤖 AI Coach
- Chat interface for habit advice
- Personalized recommendations
- Motivation and tips
- Weekly planning assistance

### ⚙️ Settings
- Dark/light theme toggle (web)
- Notification preferences
- Profile management
- App configuration

## 🌱 Demo Data

The app includes sample data so you can test immediately:
- Pre-populated habits (Meditation, Reading, Exercise, Journaling)
- Mock progress data
- Sample AI conversations
- Analytics charts with sample metrics

## 📱 Mobile Testing

For the mobile app:
1. Install Expo Go on your phone
2. Scan the QR code from the terminal
3. Or open http://localhost:8081 in your browser

## 🔧 Troubleshooting

### MongoDB Issues
If you don't have MongoDB locally, the app will still work with mock data for testing.

### Port Conflicts
- Backend: 3001
- Web: 3000
- Mobile: 8081

### Permission Issues
Run PowerShell as Administrator for npm commands.

## 🎯 Test Checklist

- [ ] User registration works
- [ ] Login/logout functions
- [ ] Dashboard loads with data
- [ ] Can create/edit/delete habits
- [ ] Habit completion tracking works
- [ ] Analytics charts display
- [ ] AI Coach responds to messages
- [ ] Settings panel functional
- [ ] Mobile app navigation works
- [ ] Theme toggle works (web)

## 🚀 Next Steps

Once you've tested the preview:
1. Set up MongoDB for persistent data
2. Add your OpenAI API key for AI Coach
3. Deploy to production
4. Add custom features

The application is fully functional and ready for your testing! Enjoy building better habits with HabitPilot AI! 🎉
