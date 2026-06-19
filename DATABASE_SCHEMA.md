# 📊 NutriAI Database Schema

## Complete MongoDB Collections

### 1. Users Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique, indexed),
  password: String (hashed),
  role: String (user/admin),
  subscription: String (free/premium/pro),
  subscriptionExpiry: Date,
  avatar: String,
  isEmailVerified: Boolean,
  googleId: String,
  deviceTokens: [String],
  preferences: {
    emailNotifications: Boolean,
    pushNotifications: Boolean,
    darkMode: Boolean,
    language: String
  },
  createdAt: Date,
  updatedAt: Date
}
```

### 2. Profiles Collection
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
  waterIntakeGoal: Number (ml),
  sleepGoal: Number (hours),
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

### 3. MealPlans Collection
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  name: String,
  type: String (daily/weekly/monthly),
  startDate: Date,
  endDate: Date,
  meals: [{
    day: String,
    mealType: String (breakfast/lunch/dinner/snack),
    name: String,
    description: String,
    calories: Number,
    macros: {
      protein: Number,
      carbs: Number,
      fats: Number
    },
    ingredients: [String],
    instructions: String,
    time: String,
    imageUrl: String,
    isCompleted: Boolean
  }],
  totalCalories: Number,
  groceryList: [String],
  generatedBy: String (ai/manual),
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### 4. Tasks Collection (Daily Planner)
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  title: String,
  description: String,
  category: String (work/study/fitness/meal/water/sleep/meditation/custom),
  date: Date,
  startTime: String,
  endTime: String,
  duration: Number (minutes),
  priority: String (low/medium/high),
  status: String (pending/in-progress/completed/cancelled),
  isRecurring: Boolean,
  recurrence: {
    frequency: String (daily/weekly/monthly),
    days: [String]
  },
  reminders: [{
    type: String (email/push),
    time: String,
    sent: Boolean
  }],
  order: Number,
  color: String,
  notes: String,
  createdAt: Date,
  updatedAt: Date,
  completedAt: Date
}
```

### 5. Habits Collection
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  name: String,
  description: String,
  icon: String,
  category: String,
  goal: {
    type: String (daily/weekly),
    target: Number,
    unit: String
  },
  streak: {
    current: Number,
    longest: Number,
    lastCompleted: Date
  },
  completions: [{
    date: Date,
    value: Number,
    note: String
  }],
  isActive: Boolean,
  color: String,
  xpPoints: Number,
  level: Number,
  reminders: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### 6. HealthMetrics Collection
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  date: Date,
  weight: Number,
  bmi: Number,
  bodyFat: Number,
  muscleMass: Number,
  waterIntake: Number (ml),
  caloriesConsumed: Number,
  caloriesBurned: Number,
  steps: Number,
  sleep: {
    duration: Number (hours),
    quality: String (poor/fair/good/excellent)
  },
  heartRate: {
    resting: Number,
    average: Number,
    max: Number
  },
  bloodPressure: {
    systolic: Number,
    diastolic: Number
  },
  mood: String,
  energy: Number (1-10),
  stress: Number (1-10),
  notes: String,
  createdAt: Date
}
```

### 7. Notifications Collection
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  type: String (email/push/sms),
  category: String (meal/water/workout/sleep/reminder),
  title: String,
  message: String,
  data: Object,
  status: String (pending/sent/failed),
  scheduledFor: Date,
  sentAt: Date,
  isRead: Boolean,
  createdAt: Date
}
```

### 8. Subscriptions Collection
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  plan: String (free/premium/pro),
  stripeCustomerId: String,
  stripeSubscriptionId: String,
  status: String (active/cancelled/expired),
  currentPeriodStart: Date,
  currentPeriodEnd: Date,
  cancelAtPeriodEnd: Boolean,
  amount: Number,
  currency: String,
  paymentHistory: [{
    date: Date,
    amount: Number,
    status: String,
    invoiceUrl: String
  }],
  createdAt: Date,
  updatedAt: Date
}
```

### 9. AIConversations Collection
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  messages: [{
    role: String (user/assistant),
    content: String,
    timestamp: Date
  }],
  context: String (nutrition/fitness/general),
  lastMessageAt: Date,
  createdAt: Date
}
```

### 10. Achievements Collection
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  name: String,
  description: String,
  icon: String,
  category: String,
  xpReward: Number,
  unlockedAt: Date,
  progress: {
    current: Number,
    target: Number
  },
  createdAt: Date
}
```

---

## Indexes for Performance

```javascript
// Users
db.users.createIndex({ email: 1 }, { unique: true })
db.users.createIndex({ subscription: 1 })

// Profiles
db.profiles.createIndex({ user: 1 }, { unique: true })

// MealPlans
db.mealplans.createIndex({ user: 1, isActive: 1 })
db.mealplans.createIndex({ user: 1, startDate: -1 })

// Tasks
db.tasks.createIndex({ user: 1, date: -1 })
db.tasks.createIndex({ user: 1, status: 1 })

// Habits
db.habits.createIndex({ user: 1, isActive: 1 })

// HealthMetrics
db.healthmetrics.createIndex({ user: 1, date: -1 })

// Notifications
db.notifications.createIndex({ user: 1, status: 1, scheduledFor: 1 })
```

---

## Sample Data

### Sample User
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "hashed_password",
  "role": "user",
  "subscription": "premium",
  "avatar": "https://example.com/avatar.jpg"
}
```

### Sample Profile
```json
{
  "user": "user_id_here",
  "age": 28,
  "gender": "male",
  "height": 175,
  "weight": 75,
  "targetWeight": 70,
  "goal": "loss",
  "activityLevel": 1.55,
  "dietaryPreferences": ["vegetarian"],
  "waterIntakeGoal": 2500,
  "calorieGoal": 2100,
  "macros": {
    "protein": 131,
    "carbs": 262,
    "fats": 58
  }
}
```

---

## Relationships

```
User (1) → (1) Profile
User (1) → (N) MealPlans
User (1) → (N) Tasks
User (1) → (N) Habits
User (1) → (N) HealthMetrics
User (1) → (1) Subscription
User (1) → (N) AIConversations
User (1) → (N) Achievements
```

---

This schema supports all features in your requirements!
