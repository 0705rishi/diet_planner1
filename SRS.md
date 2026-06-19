# Software Requirements Specification (SRS)
## NutriGlass - AI-Powered Diet Planner & Health Management Platform

---

**Version:** 1.0  
**Date:** June 19, 2026  
**Prepared by:** Development Team  
**Project:** NutriGlass Web Application  

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Overall Description](#2-overall-description)
3. [System Features](#3-system-features)
4. [External Interface Requirements](#4-external-interface-requirements)
5. [Non-Functional Requirements](#5-non-functional-requirements)
6. [Technical Architecture](#6-technical-architecture)
7. [Appendices](#7-appendices)

---

## 1. Introduction

### 1.1 Purpose
This SRS document describes the functional and non-functional requirements for NutriGlass, an AI-powered diet planning and health management web application. The system aims to provide personalized nutrition guidance through artificial intelligence and user-friendly interfaces.

### 1.2 Scope
NutriGlass is a web-based application that:
- Generates personalized diet plans using AI
- Tracks user health metrics and progress
- Provides nutrition education and tips
- Manages user preferences and reminder settings
- Offers a modern, responsive user interface

### 1.3 Definitions, Acronyms, and Abbreviations
- **AI**: Artificial Intelligence
- **API**: Application Programming Interface
- **BMI**: Body Mass Index
- **UI**: User Interface
- **UX**: User Experience
- **SPA**: Single Page Application
- **PWA**: Progressive Web Application
- **JWT**: JSON Web Token
- **CRUD**: Create, Read, Update, Delete

### 1.4 References
- Material Design 3 Guidelines
- React.js Documentation v19
- Groq API Documentation
- WCAG 2.1 Accessibility Standards

### 1.5 Overview
This document is organized into sections covering system description, features, interface requirements, non-functional requirements, and technical architecture.

---

## 2. Overall Description

### 2.1 Product Perspective
NutriGlass is a standalone web application that integrates with third-party AI services (Groq) to provide intelligent diet planning. The system consists of:
- Frontend: React-based single-page application
- Backend: (Future) Node.js/Express REST API
- Database: (Future) MongoDB for data persistence
- AI Integration: Groq API for diet plan generation

### 2.2 Product Functions
The major functions include:
1. User authentication and profile management
2. AI-powered diet plan generation
3. BMI calculation and health metrics tracking
4. Personalized meal planning
5. Nutrition tips and educational content
6. Reminder and notification settings
7. Progress tracking and analytics

### 2.3 User Classes and Characteristics
**Primary Users:**
- Health-conscious individuals (Age: 18-65)
- Fitness enthusiasts seeking nutrition guidance
- People with specific dietary goals (weight loss, muscle gain, maintenance)
- Users with varying technical proficiency

**Expected Usage Patterns:**
- Daily: Check meal plans, log progress
- Weekly: Review analytics, adjust settings
- Monthly: Update goals, review achievements

### 2.4 Operating Environment
- **Client-side**: Modern web browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Devices**: Desktop, Tablet, Mobile (responsive design)
- **Network**: Internet connection required
- **Screen Sizes**: 320px - 3840px width
- **Operating Systems**: Windows, macOS, Linux, iOS, Android

### 2.5 Design and Implementation Constraints
- Must use React.js for frontend development
- Must follow Material Design 3 principles
- Must be mobile-responsive
- Must load within 3 seconds on 4G connection
- Must work offline for cached content (future PWA)
- Must comply with GDPR for user data

### 2.6 Assumptions and Dependencies
**Assumptions:**
- Users have access to modern web browsers
- Users have basic computer literacy
- Internet connectivity is generally available

**Dependencies:**
- Groq API availability and uptime
- Third-party CDNs (Tailwind CSS, Google Fonts)
- Browser JavaScript support
- LocalStorage API support

---

## 3. System Features

### 3.1 User Authentication

#### 3.1.1 Description
Secure user authentication system for account access and data protection.

#### 3.1.2 Functional Requirements

**FR-AUTH-001:** Email/Password Registration
- Users shall register with email, name, and password (minimum 6 characters)
- System shall validate email format
- System shall hash passwords before storage
- System shall send welcome notification

**FR-AUTH-002:** Email/Password Login
- Users shall login with email and password
- System shall generate JWT token on successful authentication
- System shall remember user session
- System shall provide "Remember Me" option

**FR-AUTH-003:** Google OAuth (Future)
- Users shall login using Google account
- System shall retrieve user profile from Google
- System shall create/update user account automatically

**FR-AUTH-004:** Logout
- Users shall logout from any page
- System shall clear authentication tokens
- System shall clear cached user data

**FR-AUTH-005:** Password Reset (Future)
- Users shall request password reset via email
- System shall send reset link with expiration
- Users shall set new password securely

#### 3.1.3 Priority: HIGH

---

### 3.2 User Profile Management

#### 3.2.1 Description
Comprehensive user profile for personalization and tracking.

#### 3.2.2 Functional Requirements

**FR-PROF-001:** Profile Creation
- Users shall input: name, age, gender, height, weight, target weight
- Users shall select health goal: weight loss, weight gain, muscle building, maintenance
- Users shall specify activity level (sedentary to very active)

**FR-PROF-002:** Profile Editing
- Users shall update any profile field at any time
- System shall recalculate recommendations on profile changes
- System shall save changes immediately

**FR-PROF-003:** Profile Display
- Users shall view complete profile in Settings
- System shall display calculated BMI
- System shall show recommended calorie target

**FR-PROF-004:** Dietary Preferences
- Users shall specify diet type: anything, vegetarian, vegan, keto
- Users shall list food allergies
- Users shall note medical conditions

#### 3.2.3 Priority: HIGH

---

### 3.3 BMI Calculator

#### 3.3.1 Description
Real-time Body Mass Index calculation and visualization.

#### 3.3.2 Functional Requirements

**FR-BMI-001:** BMI Calculation
- System shall calculate BMI using formula: weight(kg) / (height(m))²
- System shall display BMI value with one decimal place
- System shall update calculation in real-time as inputs change

**FR-BMI-002:** BMI Status Classification
- System shall classify BMI as: Underweight (<18.5), Healthy (18.5-25), Overweight (>25)
- System shall display status with color coding
- System shall position indicator on visual scale

**FR-BMI-003:** Visual Representation
- System shall display BMI on colored scale
- System shall show indicator position on scale
- System shall use color zones: blue (underweight), green (healthy), red (overweight)

#### 3.3.3 Priority: MEDIUM

---

### 3.4 AI Diet Plan Generation

#### 3.4.1 Description
AI-powered personalized diet plan creation based on user profile.

#### 3.4.2 Functional Requirements

**FR-DIET-001:** Multi-Step Form
- System shall provide 3-step form: Profile, Activity & Goals, Food Philosophy
- Users shall navigate between steps with Next/Back buttons
- System shall show progress indicator
- System shall validate inputs before proceeding

**FR-DIET-002:** Real-Time Macro Calculation
- System shall calculate daily calorie target using Mifflin-St Jeor equation
- System shall compute macros: 25% protein, 50% carbs, 25% fats
- System shall display calculations in real-time
- System shall update on any input change

**FR-DIET-003:** AI Plan Generation
- System shall send user data to Groq AI API
- System shall generate comprehensive meal plan including:
  - Daily calorie target
  - Macronutrient breakdown
  - Breakfast, lunch, dinner suggestions
  - Snack recommendations
  - Hydration tips
  - Food substitutions
- System shall display loading state during generation
- System shall handle API errors gracefully

**FR-DIET-004:** Plan Display and Storage
- System shall display generated plan in formatted view
- Users shall save plan for future reference
- Users shall edit/regenerate plans
- System shall store plans in localStorage
- System shall allow plan export/sharing

#### 3.4.3 Priority: HIGH

---

### 3.5 Dashboard and Analytics

#### 3.5.1 Description
Central hub for tracking progress and viewing health data.

#### 3.5.2 Functional Requirements

**FR-DASH-001:** Dashboard Overview
- System shall display user greeting with name
- System shall show daily progress summary
- System shall display quick access to key features
- System shall show recent activity feed

**FR-DASH-002:** Health Metrics Display
- System shall show hydration tracker with progress ring
- System shall display daily goal completion
- System shall show calorie intake progress
- System shall visualize macro breakdown

**FR-DASH-003:** Saved Diet Plans
- System shall list all user's saved diet plans
- Users shall view, edit, or delete plans
- System shall show plan creation date
- System shall display plan summary

**FR-DASH-004:** Activity Feed
- System shall log user activities:
  - Meals logged
  - Workouts completed
  - Content read
  - Goals achieved
- System shall display recent activities with timestamps

#### 3.5.3 Priority: HIGH

---

### 3.6 Settings and Preferences

#### 3.6.1 Description
Comprehensive settings for user customization and preferences.

#### 3.6.2 Functional Requirements

**FR-SET-001:** Profile Settings Tab
- Users shall edit all profile information
- System shall validate all inputs
- System shall save changes on button click
- System shall show confirmation message

**FR-SET-002:** Reminder Settings Tab
- Users shall set meal reminder times:
  - Breakfast time (default: 08:00)
  - Lunch time (default: 13:00)
  - Dinner time (default: 19:00)
- Users shall configure water reminders:
  - Enable/disable toggle
  - Interval: 1-4 hours
- Users shall set sleep reminder:
  - Enable/disable toggle
  - Custom bedtime
- Users shall set workout reminder:
  - Enable/disable toggle
  - Custom time

**FR-SET-003:** Preferences Tab
- Users shall toggle email notifications
- Users shall toggle push notifications
- Users shall enable/disable dark mode
- Users shall select language preference
- Users shall choose measurement units (metric/imperial)

**FR-SET-004:** Security Tab
- Users shall change password (future)
- Users shall enable 2FA (future)
- Users shall view login history (future)
- Users shall delete account (future)

**FR-SET-005:** Data Persistence
- System shall save all settings to localStorage
- System shall load settings on app start
- System shall sync settings across tabs
- Future: System shall sync with backend

#### 3.6.3 Priority: MEDIUM

---

### 3.7 Nutrition Tips Library

#### 3.7.1 Description
Educational content library with evidence-based nutrition information.

#### 3.7.2 Functional Requirements

**FR-TIPS-001:** Content Display
- System shall display 8+ nutrition articles
- Each article shall include:
  - Title and description
  - Category badge
  - Read time estimate
  - Featured image
  - Key takeaways (2-4 points)
  - Full article content

**FR-TIPS-002:** Category Filtering
- System shall provide category filters:
  - All Tips
  - Weight Loss
  - Muscle Gain
  - Hydration
  - Nutrition
  - Wellness
- Users shall filter content by category
- System shall show filtered results instantly

**FR-TIPS-003:** Search Functionality
- Users shall search articles by keyword
- System shall search titles and descriptions
- System shall display matching results
- System shall show "no results" message if needed

**FR-TIPS-004:** Article Interaction
- Users shall click article to read full content
- System shall track read articles (future)
- Users shall bookmark favorite articles (future)
- Users shall share articles (future)

**FR-TIPS-005:** Newsletter Subscription
- Users shall subscribe with email
- System shall validate email format
- System shall show confirmation message
- Future: System shall send weekly newsletters

#### 3.7.3 Priority: MEDIUM

---

### 3.8 Navigation and Routing

#### 3.8.1 Description
Seamless navigation system across all application pages.

#### 3.8.2 Functional Requirements

**FR-NAV-001:** Header Navigation
- System shall display header on all pages
- Header shall show: Logo, navigation links, user menu
- Navigation links: Home, Diet Planner, Dashboard, Nutrition Tips
- System shall highlight active page
- System shall be sticky on scroll

**FR-NAV-002:** Authentication State
- System shall show "Login" button when logged out
- System shall show user name and avatar when logged in
- System shall show settings icon when logged in
- System shall adapt menu based on auth state

**FR-NAV-003:** Footer Navigation
- System shall display footer on all pages
- Footer shall include: Links, social media, copyright
- Footer links: Privacy Policy, Terms, Support, About

**FR-NAV-004:** Mobile Navigation
- System shall provide hamburger menu on mobile
- System shall show slide-out menu
- System shall close menu on link click
- System shall support touch gestures

**FR-NAV-005:** Page Routing
- System shall use client-side routing (React Router)
- System shall support browser back/forward buttons
- System shall handle 404 errors
- System shall preserve state on navigation

#### 3.8.3 Priority: HIGH

---

### 3.9 Email Reminder System (Future)

#### 3.9.1 Description
Automated email reminder system for user engagement.

#### 3.9.2 Functional Requirements

**FR-REM-001:** Reminder Configuration
- Users shall set reminder preferences in Settings
- System shall store reminder settings per user
- System shall validate time inputs
- System shall provide toggle controls

**FR-REM-002:** Email Templates
- System shall have templates for:
  - Meal reminders (breakfast, lunch, dinner)
  - Water reminders
  - Sleep reminders
  - Workout reminders
  - Daily motivation
  - Weekly reports
- Templates shall include user name
- Templates shall have unsubscribe link

**FR-REM-003:** Reminder Scheduling
- Backend shall use cron jobs for scheduling
- System shall check user preferences
- System shall send emails at configured times
- System shall respect user timezone

**FR-REM-004:** Reminder Management
- Users shall pause reminders temporarily
- Users shall customize message content (future)
- Users shall view reminder history (future)
- System shall track email delivery status

#### 3.9.3 Priority: LOW (Future Implementation)

---

## 4. External Interface Requirements

### 4.1 User Interfaces

#### 4.1.1 General UI Requirements
- **Design System**: Material Design 3
- **Color Scheme**: Primary green (#006e2f), white, grays
- **Typography**: Montserrat (headings), Inter (body)
- **Icons**: Material Symbols Outlined
- **Effects**: Glassmorphism, backdrop blur
- **Animations**: Smooth transitions (300ms ease)

#### 4.1.2 Screen-Specific Requirements

**Login/Signup Screen:**
- Centered card layout
- Tab switcher for Login/Signup
- Form fields with icons
- Password visibility toggle
- Google OAuth button
- Guest access option
- Error message display
- Loading state indicator

**Home/Landing Page:**
- Hero section with CTA buttons
- BMI calculator widget (desktop)
- Feature cards grid
- Nutrition tips preview
- Newsletter signup form
- Responsive layout

**Diet Planner:**
- Multi-step form with progress bar
- Left side: Form inputs
- Right side: Real-time calculations
- Navigation buttons
- Validation messages
- Generated plan display

**Dashboard:**
- Sidebar navigation (desktop)
- Health metrics cards
- Progress rings and bars
- Activity feed
- Quick actions
- Saved plans list

**Settings:**
- Sidebar tab navigation
- Four tabs: Profile, Reminders, Preferences, Security
- Form inputs with labels
- Toggle switches
- Time pickers
- Save button with confirmation

**Nutrition Tips:**
- Search bar at top
- Category filter pills
- Article cards in grid
- Featured images
- Read time badges
- Newsletter CTA

#### 4.1.3 Responsive Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px - 1920px
- Large Desktop: 1920px+

### 4.2 Hardware Interfaces
Not applicable - web-based application

### 4.3 Software Interfaces

#### 4.3.1 Groq AI API
- **Purpose**: AI diet plan generation
- **Protocol**: HTTPS REST API
- **Authentication**: API key in headers
- **Data Format**: JSON
- **Model**: llama-3.3-70b-versatile
- **Input**: User profile data, preferences, goals
- **Output**: Formatted diet plan text
- **Error Handling**: Timeout, rate limits, API errors

#### 4.3.2 Browser APIs
- **LocalStorage**: User data, settings, tokens
- **SessionStorage**: Temporary session data
- **Geolocation** (future): Location-based content
- **Notification API** (future): Push notifications
- **Service Worker** (future): Offline support

#### 4.3.3 Future Backend API
- **Base URL**: https://api.nutriai.com
- **Protocol**: HTTPS REST
- **Authentication**: JWT Bearer tokens
- **Endpoints**:
  - POST /api/auth/register
  - POST /api/auth/login
  - GET /api/users/profile
  - PUT /api/users/profile
  - POST /api/meals/generate
  - GET /api/meals/plans
  - PUT /api/users/settings
  - POST /api/reminders
- **Data Format**: JSON
- **Error Codes**: Standard HTTP status codes

### 4.4 Communication Interfaces
- **HTTPS**: All network communication
- **WebSockets** (future): Real-time updates
- **Email SMTP** (future): Reminder emails
- **Push Notifications** (future): Firebase Cloud Messaging

---

## 5. Non-Functional Requirements

### 5.1 Performance Requirements

**NFR-PERF-001: Page Load Time**
- Initial page load shall complete within 3 seconds on 4G connection
- Subsequent page navigations shall complete within 1 second
- AI diet plan generation shall complete within 10 seconds

**NFR-PERF-002: Response Time**
- UI interactions shall provide feedback within 100ms
- Form submissions shall show loading state immediately
- Search results shall appear within 300ms

**NFR-PERF-003: Resource Usage**
- Initial bundle size shall not exceed 500KB (gzipped)
- Images shall be optimized and lazy-loaded
- CSS shall be minified and tree-shaken
- Memory usage shall not exceed 100MB

**NFR-PERF-004: Concurrent Users**
- System shall support 1000 concurrent users (future)
- Backend shall handle 100 requests/second (future)
- Database queries shall complete within 100ms (future)

### 5.2 Safety Requirements

**NFR-SAFE-001: Data Backup**
- User data shall be backed up daily (future)
- Backups shall be stored in separate location (future)
- Recovery point objective: 24 hours (future)

**NFR-SAFE-002: Error Recovery**
- System shall gracefully handle API failures
- System shall preserve user input on errors
- System shall provide clear error messages
- System shall not lose unsaved data on crash

### 5.3 Security Requirements

**NFR-SEC-001: Authentication**
- Passwords shall be hashed using bcrypt (salt rounds: 10)
- JWT tokens shall expire after 7 days
- Sessions shall timeout after 30 minutes of inactivity
- Failed login attempts shall be rate-limited

**NFR-SEC-002: Data Protection**
- Sensitive data shall not be stored in localStorage (future)
- API keys shall not be exposed in client code
- HTTPS shall be enforced for all connections
- XSS and CSRF protection shall be implemented

**NFR-SEC-003: Input Validation**
- All user inputs shall be validated client-side
- All user inputs shall be validated server-side (future)
- SQL injection prevention (parameterized queries)
- File upload validation (future)

**NFR-SEC-004: Privacy**
- Users shall control data sharing preferences
- System shall comply with GDPR
- Users shall be able to export their data
- Users shall be able to delete their accounts

### 5.4 Software Quality Attributes

**NFR-QUAL-001: Usability**
- System shall follow WCAG 2.1 Level AA standards
- System shall be operable with keyboard only
- System shall support screen readers
- Error messages shall be clear and actionable
- Forms shall have proper labels and help text

**NFR-QUAL-002: Reliability**
- System uptime shall be 99.9% (future)
- Mean time between failures: >720 hours
- Mean time to recovery: <1 hour
- Data integrity shall be maintained

**NFR-QUAL-003: Maintainability**
- Code shall follow React best practices
- Code shall be modular and reusable
- Code shall have JSDoc comments
- Code shall pass linting without errors
- Test coverage shall exceed 80% (future)

**NFR-QUAL-004: Portability**
- System shall work on all modern browsers
- System shall work on all device sizes
- System shall work offline (future PWA)
- System shall support multiple languages (future)

**NFR-QUAL-005: Scalability**
- Frontend shall support code splitting
- Backend shall support horizontal scaling (future)
- Database shall support sharding (future)
- CDN shall be used for static assets (future)

### 5.5 Accessibility Requirements

**NFR-ACC-001: WCAG Compliance**
- System shall meet WCAG 2.1 Level AA
- Color contrast ratio shall be at least 4.5:1
- All images shall have alt text
- All interactive elements shall be keyboard accessible

**NFR-ACC-002: Assistive Technology**
- System shall work with screen readers (NVDA, JAWS)
- System shall support voice control
- System shall provide keyboard shortcuts
- System shall announce dynamic content changes

---

## 6. Technical Architecture

### 6.1 System Architecture

```
┌─────────────────────────────────────────┐
│         Presentation Layer              │
│    (React SPA + Tailwind CSS)           │
└──────────────┬──────────────────────────┘
               │
               │ HTTPS/JSON
               │
┌──────────────▼──────────────────────────┐
│       Application Layer (Future)        │
│    (Node.js + Express.js REST API)      │
└──────────────┬──────────────────────────┘
               │
      ┌────────┴────────┐
      │                 │
      ▼                 ▼
┌─────────────┐   ┌──────────────┐
│  Data Layer │   │  AI Service  │
│  (MongoDB)  │   │  (Groq API)  │
└─────────────┘   └──────────────┘
```

### 6.2 Technology Stack

**Frontend:**
- React 19.2.6
- React Router DOM 7.18.0
- Vite 8.0.12
- Tailwind CSS (CDN)
- Material Symbols Icons

**Backend (Future):**
- Node.js 20+
- Express.js 4.18+
- MongoDB Atlas
- Mongoose 8+
- JWT Authentication
- Nodemailer (email service)
- Node-cron (scheduled tasks)

**Third-Party Services:**
- Groq AI API (diet generation)
- Vercel (hosting)
- MongoDB Atlas (database)
- Cloudinary (image hosting - future)
- SendGrid (email - future)
- Firebase (push notifications - future)

### 6.3 Data Models

**User Schema:**
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique, indexed),
  password: String (hashed),
  role: String (user/admin),
  profile: ObjectId (ref: Profile),
  subscription: String (free/premium/pro),
  preferences: {
    emailNotifications: Boolean,
    pushNotifications: Boolean,
    darkMode: Boolean,
    language: String,
    units: String
  },
  reminderSettings: {
    breakfastTime: String,
    lunchTime: String,
    dinnerTime: String,
    waterReminder: Boolean,
    waterInterval: Number,
    sleepReminder: Boolean,
    sleepTime: String,
    workoutReminder: Boolean,
    workoutTime: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

**Profile Schema:**
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  age: Number,
  gender: String,
  height: Number (cm),
  weight: Number (kg),
  targetWeight: Number,
  goal: String (loss/gain/muscle/maintain),
  activityLevel: Number,
  dietaryPreferences: [String],
  allergies: [String],
  medicalConditions: [String],
  calorieGoal: Number,
  macros: {
    protein: Number,
    carbs: Number,
    fats: Number
  },
  createdAt: Date,
  updatedAt: Date
}
```

**MealPlan Schema:**
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  name: String,
  type: String (daily/weekly/monthly),
  generatedBy: String (ai/manual),
  content: String,
  calories: Number,
  macros: Object,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### 6.4 Security Architecture

**Authentication Flow:**
```
1. User submits credentials
2. Backend validates credentials
3. Backend generates JWT token
4. Token sent to client
5. Client stores token in httpOnly cookie
6. Client sends token in Authorization header
7. Backend validates token on each request
```

**Data Encryption:**
- Passwords: bcrypt (10 rounds)
- Tokens: JWT with HS256
- Transport: TLS 1.3
- At rest: AES-256 (future)

### 6.5 Deployment Architecture

**Current (Frontend Only):**
```
User → Browser → Vercel CDN → React App → LocalStorage
                              ↓
                         Groq AI API
```

**Future (Full Stack):**
```
User → Browser → Vercel CDN → React App
                ↓
           Render.com → Express API → MongoDB Atlas
                ↓
           Groq AI API
                ↓
           SendGrid (Email)
                ↓
           Firebase (Push)
```

---

## 7. Appendices

### 7.1 Glossary

- **BMI**: Body Mass Index - ratio of weight to height
- **BMR**: Basal Metabolic Rate - calories burned at rest
- **Macros**: Macronutrients (protein, carbs, fats)
- **OAuth**: Open Authorization standard
- **JWT**: JSON Web Token for authentication
- **SPA**: Single Page Application
- **PWA**: Progressive Web Application
- **API**: Application Programming Interface
- **CRUD**: Create, Read, Update, Delete operations

### 7.2 Analysis Models

**User Flow Diagram:**
```
Start → Landing Page → Login/Signup → Dashboard
                     ↓                    ↓
               Diet Planner          Settings
                     ↓                    ↓
              Generated Plan       Nutrition Tips
                     ↓                    ↓
                  Logout ← ← ← ← ← ← ← End
```

### 7.3 To Be Determined List

1. Payment gateway selection (Stripe vs PayPal)
2. Email service provider (SendGrid vs Amazon SES)
3. Analytics platform (Google Analytics vs Mixpanel)
4. A/B testing framework
5. Customer support integration
6. Social media sharing format
7. Mobile app development timeline
8. International expansion strategy

### 7.4 Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | June 19, 2026 | Dev Team | Initial SRS document |

---

**Document Status:** APPROVED  
**Next Review Date:** September 19, 2026

---

**End of Software Requirements Specification**
