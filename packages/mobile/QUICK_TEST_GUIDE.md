# 📱 Quick Test Guide - HabitPilot AI

## 🚀 Easy Steps to Test on Your Mobile

### **Step 1: Install Dependencies**
Open terminal/command prompt in the mobile folder:
```bash
cd "e:\Coding\Wind Serf\HabitPilot-AI\packages\mobile"
npm install
```

### **Step 2: Start Expo Development Server**
```bash
npm start
```

### **Step 3: Scan QR Code with Expo Go**
1. Install **Expo Go** app from Play Store
2. Open Expo Go on your phone
3. Scan the QR code that appears in terminal
4. The app will load on your phone!

### **Step 4: Test the App Features**

#### **🆓 Free Version Features:**
- Create up to 5 habits
- View basic dashboard
- Use limited AI coach
- Check simple analytics

#### **💎 Premium Features (Test Mode):**
- Go to Settings → "Go Premium"
- Test subscription flow
- Preview premium features
- Experience full UI

## 📋 What to Test:

### **Core Functionality:**
- [ ] App loads without crashes
- [ ] Navigation between screens works
- [ ] Create/edit/delete habits
- [ ] Mark habits as complete
- [ ] View analytics dashboard
- [ ] AI coach responds to queries

### **Premium Features:**
- [ ] Premium screen displays correctly
- [ ] Subscription flow works
- [ ] Premium badges show on locked features
- [ ] Settings shows premium status

### **UI/UX:**
- [ ] All buttons and taps work
- [ ] Text is readable on mobile
- [ ] Colors and themes look good
- [ ] No layout issues on your screen size

## 🔧 If You Encounter Issues:

### **Common Problems & Solutions:**

1. **"Metro bundler not running"**
   - Make sure `npm start` is running
   - Wait for QR code to appear

2. **"Network request failed"**
   - Check your phone and computer are on same WiFi
   - Try restarting the development server

3. **"Module not found" errors**
   - Run `npm install` again
   - Clear Expo Go cache: Shake phone → Dev Menu → Reload

4. **App crashes on launch**
   - Check terminal for error messages
   - Try restarting Expo Go app

## 📸 **How to Get QR Code:**

### **Option 1: Terminal QR Code (Recommended)**
```bash
cd "e:\Coding\Wind Serf\HabitPilot-AI\packages\mobile"
npm start
```
- QR code will appear directly in terminal
- Scan with Expo Go app

### **Option 2: Web Interface**
- After running `npm start`, open your browser
- Go to `http://localhost:19002`
- QR code will be displayed on the web page

### **Option 3: Expo Dev Tools**
- Run `npm start`
- Open the Expo Dev Tools URL that appears
- QR code will be prominently displayed

## 🎯 **Testing Checklist:**

### **First Time User Experience:**
- [ ] Welcome screen looks good
- [ ] Onboarding flow is clear
- [ ] Creating first habit is intuitive

### **Daily Usage:**
- [ ] Quick habit check-in works
- [ ] Progress tracking is motivating
- [ ] Notifications (if enabled)

### **Premium Upgrade:**
- [ ] Premium value proposition is clear
- [ ] Upgrade process is smooth
- [ ] Premium features work as expected

## 📱 **Device Compatibility:**

### **Tested On:**
- ✅ Android 10+ (recommended)
- ✅ iOS 13+ (if you have iPhone)
- ✅ Various screen sizes

### **Minimum Requirements:**
- Android 5.0+ or iOS 10.0+
- 50MB free space
- Internet connection for initial load

## 🚀 **Ready for Production:**

Once you've tested and everything works:

1. **Fix any bugs** you discover
2. **Take screenshots** for Play Store
3. **Submit to Play Store** following the guide
4. **Launch your profitable app!** 🎉

---

**Need help?** If you run into any issues, just let me know what error messages you see!
