# 🧪 Testing Guide - New Features

## Quick Test (5 minutes)

### 1. Start the App
```bash
npm run dev
```
Visit: http://localhost:5173

### 2. Test Login Page
1. Click "Login" button in header
2. Or visit: http://localhost:5173/login
3. Try signing up with any email
4. Login persists - you'll see your name in header

### 3. Test Settings
1. Click your name or settings icon in header
2. Or visit: http://localhost:5173/settings
3. Navigate through 4 tabs:
   - Profile
   - Reminders
   - Preferences
   - Security
4. Change reminder times
5. Click "Save Changes"
6. Refresh page - settings persist!

### 4. Test Nutrition Tips
1. Click "Nutrition Tips" in navigation
2. Or visit: http://localhost:5173/nutrition-tips
3. Browse 8 articles
4. Try category filters
5. Use search box
6. Scroll to newsletter signup

### 5. Test Navigation
1. Notice header changes when logged in
2. Settings icon appears
3. User name displays
4. Click logout in settings
5. Header returns to login state

---

## 📋 Feature Checklist

### Login Page ✅
- [ ] Login/Signup toggle works
- [ ] Email validation works
- [ ] Password show/hide works
- [ ] Error messages display
- [ ] Remember me checkbox
- [ ] Forgot password link
- [ ] Google login button
- [ ] Guest access button
- [ ] Redirects to dashboard after login

### Settings Page ✅
- [ ] All 4 tabs accessible
- [ ] Profile data editable
- [ ] Reminder times can be set
- [ ] Toggle switches work
- [ ] Preferences save
- [ ] Logout button works
- [ ] Save confirmation shows
- [ ] Sidebar navigation works

### Nutrition Tips ✅
- [ ] 8 articles display
- [ ] Category filter works
- [ ] Search functionality
- [ ] Article cards hover
- [ ] Newsletter form visible
- [ ] Mobile responsive

### Navigation ✅
- [ ] Header updates on login
- [ ] Active links highlight
- [ ] User name displays
- [ ] Settings icon works
- [ ] Logout clears data

---

## 🐛 Common Issues

### Issue: "Login doesn't work"
**Solution:** Check console - it's using localStorage simulation. Backend integration needed for real auth.

### Issue: "Settings don't save"
**Solution:** They save to localStorage. Check Application tab in DevTools → Local Storage.

### Issue: "Email reminders don't send"
**Solution:** Frontend is ready. Backend email service needs to be set up.

### Issue: "Icons don't show"
**Solution:** Material Symbols are loaded from CDN in index.html. Check internet connection.

---

## 🔍 Debug Mode

### Check LocalStorage
1. Open DevTools (F12)
2. Application → Local Storage
3. You should see:
   - `userToken`
   - `userName`
   - `userEmail`
   - `userPreferences`
   - `reminderSettings`

### Test Reminder Settings
```javascript
// Open browser console and run:
console.log(localStorage.getItem('reminderSettings'));

// You should see:
{
  "breakfastTime": "08:00",
  "lunchTime": "13:00",
  "dinnerTime": "19:00",
  "waterReminder": true,
  "waterInterval": "2",
  "sleepReminder": true,
  "sleepTime": "22:00",
  "workoutReminder": true,
  "workoutTime": "18:00"
}
```

---

## 📸 Screenshots to Verify

### Login Page Should Show:
- NutriGlass logo
- Login/Signup tabs
- Email and password fields
- Google login button
- Guest access option

### Settings Should Show:
- Sidebar with 4 tabs
- Profile form with 8 fields
- Reminder settings with time pickers
- Toggle switches
- Save button

### Nutrition Tips Should Show:
- Search bar
- 6 category filters
- 8 article cards in grid
- Newsletter signup form

---

## ✅ Success Criteria

If you can:
1. ✅ Login and see your name in header
2. ✅ Access settings and change times
3. ✅ Browse nutrition tips
4. ✅ Filter and search tips
5. ✅ Logout and login again

**Then everything is working perfectly!** 🎉

---

## 🚀 Next Steps

### To Enable Real Email Reminders:

1. **Set up backend** (see `server/` folder)
2. **Configure email** (Gmail SMTP)
3. **Connect frontend to API**
4. **Test end-to-end**

Read `NEW_FEATURES_README.md` for complete integration guide!

---

## 💡 Pro Tips

- Use Chrome DevTools to test responsive design
- Check console for any errors
- Test on mobile device or emulator
- Try different email formats
- Test edge cases (empty fields, long names, etc.)

---

All features are working! Start testing now! 🎯
