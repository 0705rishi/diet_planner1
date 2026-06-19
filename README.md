# NutriGlass - AI-Powered Diet Planner & Health Management Platform

A modern, full-featured web application for personalized diet planning, health tracking, and nutrition education powered by AI. Built with React 19, Vite 8, Tailwind CSS, and Groq AI.

[![React](https://img.shields.io/badge/React-19.2.6-61dafb?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0.12-646cff?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)
[![Deployment](https://img.shields.io/badge/Deployed-Vercel-000000?logo=vercel)](https://diet-planner1-tau.vercel.app/)

## 🌐 Live Demo

**🚀 Try the live application:** [https://diet-planner1-tau.vercel.app](https://diet-planner1-tau.vercel.app)

![NutriGlass Screenshot](https://diet-planner1-tau.vercel.app/preview.png)

---

## ✨ Features

### 🔐 Authentication System
- **Email/Password Registration & Login** with form validation
- **Google OAuth Integration** (UI ready, backend pending)
- **Session Management** with localStorage
- **Remember Me** functionality
- **Guest Access** option
- **Password Visibility** toggle

### 🏠 Landing Page
- **Hero Section** with glassmorphic design and gradient backgrounds
- **Real-time BMI Calculator** with visual scale indicator
- **Feature Showcase** with animated cards
- **Nutrition Tips** preview section
- **Newsletter Subscription** form
- **Smooth Animations** and hover effects

### 📋 AI-Powered Diet Planner
- **Multi-Step Form** (3 steps with progress tracking)
  - Step 1: Personal Profile (age, gender, height, weight, target weight)
  - Step 2: Activity & Goals (activity level, health goals)
  - Step 3: Food Philosophy (diet preferences, restrictions)
- **Real-time Macro Calculations** using Mifflin-St Jeor Equation
- **Dynamic Calorie Targets** based on goals and activity
- **AI-Generated Diet Plans** using Groq's Llama 3.3 70B model
- **Personalized Meal Suggestions** with macronutrient breakdown
- **Visual Progress Indicators** and live stat updates

### 📊 User Dashboard
- **Health Metrics Overview** with progress rings
- **Hydration Tracker** with visual indicators
- **Daily Goal Completion** statistics
- **Calorie & Macro Tracking** with breakdown charts
- **Activity Feed** showing recent actions
- **Saved Diet Plans** display and management
- **Quick Actions** for common tasks
- **Sidebar Navigation** (desktop) / Bottom Nav (mobile)

### ⚙️ Comprehensive Settings
- **Profile Settings Tab**
  - Edit personal information
  - Update health metrics
  - Modify fitness goals
  
- **Reminder Settings Tab**
  - Meal reminders (breakfast, lunch, dinner)
  - Water intake reminders with custom intervals
  - Sleep reminders with bedtime scheduling
  - Workout reminders
  - Toggle controls for all reminders

- **Preferences Tab**
  - Email notifications toggle
  - Push notifications toggle
  - Dark mode (UI ready)
  - Language selection (English, Spanish, French, German)
  - Measurement units (Metric/Imperial)

- **Security Tab**
  - Change password (UI ready)
  - Two-factor authentication (future)
  - Account deletion (future)

### 📚 Nutrition Tips Library
- **8+ Educational Articles** on health and nutrition
- **Category Filtering** (Weight Loss, Muscle Gain, Hydration, etc.)
- **Search Functionality** for finding specific topics
- **Read Time Estimates** for each article
- **Key Takeaways** sections
- **Full Article Content** with rich formatting
- **Newsletter Subscription** CTA

## 🎨 Design System

- **Design Philosophy**: Material Design 3 + Glassmorphism
- **Color Palette**: 
  - Primary: Green (#006e2f)
  - Background: Light cream (#f8f7f4)
  - Surface: White with transparency
  - Accent: Secondary container colors
- **Typography**: 
  - Headings: Montserrat (700, 600, 500)
  - Body: Inter (400, 500, 600)
- **Components**: Glassmorphic cards with backdrop blur
- **Icons**: Material Symbols Outlined (filled/outlined variants)
- **Effects**: Smooth transitions, gradient overlays, shadow elevation

## 🚀 Tech Stack

### Frontend
- **Framework**: React 19.2.6 with Hooks
- **Build Tool**: Vite 8.0.12 (Lightning-fast HMR)
- **Routing**: React Router DOM 7.18.0
- **Styling**: Tailwind CSS 3.x (CDN)
- **AI Integration**: Groq SDK 1.2.1 (Llama 3.3 70B)
- **Fonts**: Google Fonts API
- **Icons**: Material Symbols

### Development Tools
- **Linter**: ESLint 10.3.0
- **React Linting**: eslint-plugin-react-hooks, eslint-plugin-react-refresh
- **Type Checking**: @types/react, @types/react-dom

### Backend (Future - Not Implemented Yet)
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- Nodemailer (Email reminders)
- Node-cron (Scheduled tasks)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn
- Groq API Key ([Get one free](https://console.groq.com))

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd dietplanner

# Install dependencies
npm install

# Create environment file
# Copy .env.example to .env or create new .env file
echo "VITE_GROQ_API_KEY=your_groq_api_key_here" > .env

# Start development server
npm run dev

# Open browser at http://localhost:5173
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview

# Deploy dist/ folder to hosting service
```

## 🗂️ Project Structure

```
dietplanner/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navigation header with auth state
│   │   ├── Footer.jsx           # Site footer with links
│   │   ├── Home.jsx             # Landing page with BMI calculator
│   │   ├── Login.jsx            # Authentication page
│   │   ├── DietPlannerForm.jsx  # Multi-step AI diet planner
│   │   ├── Dashboard.jsx        # User dashboard with metrics
│   │   ├── Settings.jsx         # User settings (4 tabs)
│   │   └── NutritionTips.jsx    # Educational content library
│   ├── assets/
│   │   ├── hero.png             # Hero section image
│   │   └── *.svg                # Icon assets
│   ├── App.jsx                  # Main app with routing
│   ├── App.css                  # Glassmorphic styles
│   ├── index.css                # Global styles & design tokens
│   └── main.jsx                 # App entry point
├── server/                      # Backend (starter kit only)
│   ├── config/
│   │   └── database.js          # MongoDB configuration
│   ├── models/
│   │   └── User.js              # User schema
│   ├── services/
│   │   └── cronService.js       # Reminder scheduling
│   ├── middleware/
│   │   └── error.js             # Error handling
│   └── server.js                # Express server setup
├── public/                      # Static assets
├── dist/                        # Production build output
├── .env                         # Environment variables
├── .env.example                 # Environment template
├── index.html                   # HTML template
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── package.json                 # Dependencies
├── vercel.json                  # Vercel deployment config
├── README.md                    # This file
├── SRS.md                       # Software Requirements Specification
├── DEPLOYMENT_CHECKLIST.md      # Deployment guide
└── QUICK_START_GUIDE.md         # Quick reference guide
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Groq AI API Key (Required for diet plan generation)
VITE_GROQ_API_KEY=gsk_your_api_key_here

# Backend API URL (Future - when backend is implemented)
# VITE_API_URL=http://localhost:5000
```

### Vite Configuration

The app uses Vite for fast development and optimized builds. Configuration in `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
```

## 🎯 Key Features Implementation

### BMI Calculator
- **Formula**: BMI = weight(kg) / (height(m))²
- **Real-time Calculations** as user types
- **Visual Scale Indicator** with color zones
- **Status Classification**: Underweight (<18.5), Healthy (18.5-25), Overweight (>25)
- **Responsive Design** adapts to mobile/desktop

### Macro Calculator (Mifflin-St Jeor Equation)

**Basal Metabolic Rate (BMR):**
- Men: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) + 5
- Women: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) - 161

**Total Daily Energy Expenditure (TDEE):**
- Sedentary: BMR × 1.2
- Light: BMR × 1.375
- Moderate: BMR × 1.55
- Active: BMR × 1.725
- Very Active: BMR × 1.9

**Goal Adjustments:**
- Weight Loss: TDEE - 500 cal
- Weight Gain: TDEE + 500 cal
- Muscle Building: TDEE + 300 cal
- Maintenance: TDEE

**Macro Split:**
- Protein: 25% of calories (4 cal/g)
- Carbs: 50% of calories (4 cal/g)
- Fats: 25% of calories (9 cal/g)

### AI Diet Plan Generation

**Process:**
1. User completes 3-step form
2. System calculates personalized macros
3. Groq AI generates custom diet plan
4. Plan stored in localStorage
5. User can view/edit in dashboard

**AI Model**: Groq Llama 3.3 70B Versatile
- **Speed**: 2-5 seconds generation time
- **Quality**: Detailed meal suggestions with macros
- **Personalization**: Based on goals, preferences, restrictions

## 🔄 Application Routes

| Route | Component | Description | Auth Required |
|-------|-----------|-------------|---------------|
| `/` | Home | Landing page with BMI calculator | No |
| `/login` | Login | Authentication page | No |
| `/planner` | DietPlannerForm | AI diet plan generator | No* |
| `/dashboard` | Dashboard | User dashboard | Yes |
| `/settings` | Settings | User settings | Yes |
| `/nutrition-tips` | NutritionTips | Educational content | No |

*Can be used without login, but diet plans only persist with account

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px (single column, bottom nav)
- **Tablet**: 768px - 1024px (flexible grid)
- **Desktop**: 1024px - 1920px (sidebar nav, multi-column)
- **Large Desktop**: 1920px+ (max-width containers)

### Responsive Features
- Hamburger menu on mobile
- Collapsible sidebar on tablet
- Fluid typography scaling
- Touch-optimized controls
- Progressive image loading

## 🚀 Deployment

### Current Status: ✅ Frontend Ready for Deployment

The application is **95% ready** to deploy as a frontend-only MVP:

✅ **Working Features:**
- All pages and navigation
- BMI calculator
- AI diet plan generation (Groq)
- Authentication UI (localStorage)
- Settings and preferences
- Nutrition tips library

⏳ **Pending (Optional for MVP):**
- Backend API implementation
- Real user database
- Email reminder service
- Google OAuth backend

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Add environment variable in Vercel dashboard
# VITE_GROQ_API_KEY = your_groq_api_key
```

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
# Drag dist/ folder to Netlify
```

**GitHub Pages:**
```bash
npm install gh-pages --save-dev
# Add to package.json: "homepage": "https://username.github.io/repo"
npm run build
npx gh-pages -d dist
```

See [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) for detailed instructions.

## 🧪 Testing

```bash
# Run linter
npm run lint

# Check for errors
npm run build
```

## 📚 Documentation

- **[Live Demo](https://diet-planner1-tau.vercel.app)** - Try the application
- **[SRS.md](SRS.md)** - Complete Software Requirements Specification
- **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - Deployment guide and checklist
- **[DEPLOY_NOW.md](DEPLOY_NOW.md)** - Quick deployment guide
- **[GITHUB_DEPLOYMENT_GUIDE.md](GITHUB_DEPLOYMENT_GUIDE.md)** - GitHub deployment instructions
- **[QUICK_GITHUB_COMMANDS.md](QUICK_GITHUB_COMMANDS.md)** - Quick git commands
- **[QUICK_START_GUIDE.md](QUICK_START_GUIDE.md)** - Quick reference for developers
- **[DATABASE_SCHEMA.md](DATABASE_SCHEMA.md)** - Database schema documentation
- **[GOOGLE_LOGIN_SETUP.md](GOOGLE_LOGIN_SETUP.md)** - Google OAuth implementation guide

---

## 🚀 Quick Deploy Commands

```bash
# Deploy to Vercel (updated)
vercel --prod

# Deploy to other platforms
npm run build
```

---

## 🔐 Authentication System

### Email/Password Login ✅
- **Registration**: Create account with name, email, password
- **Login**: Access account with email and password
- **Session Management**: User data stored in `localStorage`
- **Guest Access**: One-click guest login for quick testing

### Google OAuth ⏳
- **Status**: UI ready, backend pending
- **Will implement**: Full Google Sign-In integration
- **Backend requirements**: Firebase or Auth0 setup

### How It Works (Current)
1. User fills form and submits
2. Data stored in `localStorage`:
   - `userToken`: Authentication token
   - `userName`: User's display name
   - `userEmail`: User's email
3. User redirected to dashboard
4. Session persists across page refreshes

### For Production
To implement real authentication:
1. Set up backend API
2. Add JWT tokens
3. Implement password hashing
4. Add database user storage

---

## 📊 What's Working

✅ All pages and navigation  
✅ BMI calculator  
✅ AI diet plan generation (Groq)  
✅ User authentication (localStorage)  
✅ Settings and preferences  
✅ Nutrition tips library  
✅ Mobile responsive  
✅ Live at [diet-planner1-tau.vercel.app](https://diet-planner1-tau.vercel.app)

---

## 🎯 Deployment Status

**Live URL:** https://diet-planner1-tau.vercel.app  
**Status:** ✅ Production  
**Last Deployed:** June 19, 2026  
**Platform:** Vercel

---

## 🐛 Known Issues & Limitations

### Current Limitations
1. **No Backend**: App uses localStorage for data persistence
2. **No Real Authentication**: Email/password login is UI-only
3. **No Email Reminders**: Reminder settings save locally but don't send emails
4. **No Data Sync**: Data doesn't sync across devices
5. **Google OAuth**: Button present but not functional (needs backend)

### Solutions
- All limitations can be resolved by implementing the backend (see `server/` folder for starter kit)
- Backend implementation estimated at 40-60 hours

## 🗺️ Roadmap

### Phase 1: MVP (Current) ✅
- [x] Frontend UI/UX complete
- [x] AI diet plan generation
- [x] BMI calculator
- [x] Settings and preferences
- [x] Nutrition tips library
- [x] Live demo deployed to Vercel
- [x] README updated with live URL

**Deployed:** https://diet-planner1-tau.vercel.app

### Phase 2: Backend Integration 🚧
- [ ] Implement Express.js REST API
- [ ] Set up MongoDB database
- [ ] JWT authentication
- [ ] User registration/login endpoints
- [ ] Diet plan CRUD operations

### Phase 3: Email & Notifications 📧
- [ ] Nodemailer integration
- [ ] Cron job scheduler
- [ ] Email reminder service
- [ ] Push notifications (Firebase)

### Phase 4: Advanced Features 🎯
- [ ] Google OAuth integration
- [ ] Progress charts and analytics
- [ ] Meal logging
- [ ] Recipe database
- [ ] Workout tracking
- [ ] Social features

### Phase 5: Scale & Optimize 📈
- [ ] Payment integration (subscriptions)
- [ ] Admin dashboard
- [ ] Performance optimization
- [ ] Progressive Web App (PWA)
- [ ] Mobile apps (React Native)

## 💡 Usage Examples

### For Users

**1. Quick BMI Check:**
```
1. Go to homepage
2. Enter height and weight in BMI calculator
3. See instant results with visual indicator
```

**2. Generate Personalized Diet Plan:**
```
1. Click "Get Started" or "Diet Planner"
2. Complete 3-step form
3. Click "Generate My Diet Plan"
4. View AI-generated plan (2-5 seconds)
5. Access plan anytime in Dashboard
```

**3. Set Up Reminders:**
```
1. Login or signup
2. Go to Settings > Reminders tab
3. Set meal times and water intervals
4. Toggle sleep and workout reminders
5. Click "Save Changes"
```

### For Developers

**Customize AI Prompts:**
```javascript
// src/components/DietPlannerForm.jsx
const prompt = `Generate a detailed diet plan for...`;
```

**Add New Routes:**
```javascript
// src/App.jsx
<Route path="/new-page" element={<NewComponent />} />
```

**Modify Color Scheme:**
```css
/* src/index.css */
:root {
  --primary: #006e2f; /* Change primary color */
}
```

## 📄 License

© 2026 NutriGlass Premium. All rights reserved.

This is proprietary software. Unauthorized copying, modification, distribution, or use is strictly prohibited.

## 👨‍💻 Developer

Built with ❤️ by a Full Stack Developer specializing in MERN stack and modern web technologies.

**Tech Expertise:**
- React.js, Node.js, Express.js, MongoDB
- Tailwind CSS, Material Design
- AI Integration (Groq, OpenAI)
- Responsive Design & Glassmorphism
- REST APIs & Authentication

## 🙏 Acknowledgments

- **Groq** for blazing-fast AI inference
- **Material Design** for design system guidelines
- **Tailwind CSS** for utility-first styling
- **Vite** for next-generation frontend tooling
- **React** team for the amazing framework

## 📞 Support

For questions, issues, or feature requests:
- Open an issue on GitHub
- Contact: support@nutriglass.com (if applicable)

---

**⭐ Star this repo if you find it useful!**

**Made with React, Vite, Tailwind CSS, and Groq AI** 🚀
