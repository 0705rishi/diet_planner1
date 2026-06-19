# 🚀 NutriAI Backend Server

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
```

Edit `.env` with your credentials:
- MongoDB URI from [MongoDB Atlas](https://mongodb.com/cloud/atlas)
- JWT secret (random string)
- Email credentials from Gmail
- API keys for OpenAI, Firebase, etc.

### 3. Start Development Server
```bash
npm run dev
```

Server runs at: `http://localhost:5000`

### 4. Test Health Check
```bash
curl http://localhost:5000/api/health
```

Should return: `{"success": true, "message": "NutriAI API is running"}`

---

## 📁 Project Structure

```
server/
├── config/          # Configuration files
├── controllers/     # Route controllers
├── models/          # Mongoose models
├── routes/          # API routes
├── middleware/      # Custom middleware
├── services/        # Business logic
├── utils/           # Helper functions
├── .env.example     # Environment template
├── server.js        # Entry point
└── package.json     # Dependencies
```

---

## 🔧 What's Included

✅ Express.js server with security middleware
✅ MongoDB connection configuration
✅ User model with authentication
✅ JWT token generation
✅ Password hashing with bcrypt
✅ Error handling middleware
✅ CORS configuration
✅ Rate limiting setup
✅ Compression enabled
✅ Development logging

---

## 📝 Next Steps

### Create Your First API Endpoint

1. **Create Route File** (`routes/authRoutes.js`)
2. **Create Controller** (`controllers/authController.js`)
3. **Register Route** in `server.js`
4. **Test with Postman**

---

## 🗄️ Database Models Needed

Based on the full requirements, you'll need to create:
- ✅ User.js (already created)
- ⬜ Profile.js
- ⬜ MealPlan.js
- ⬜ Task.js
- ⬜ Habit.js
- ⬜ HealthMetric.js
- ⬜ Notification.js
- ⬜ Subscription.js

See `DATABASE_SCHEMA.md` for complete schemas.

---

## 🔐 Security Features

- Helmet.js for HTTP headers
- CORS with credentials
- JWT authentication
- Password hashing (bcrypt)
- Rate limiting
- Input validation (ready to add)
- XSS protection
- SQL injection prevention (NoSQL)

---

## 📚 Available Scripts

```bash
npm start       # Production server
npm run dev     # Development with nodemon
npm test        # Run tests (add tests first)
```

---

## 🌐 API Documentation

Once you create routes, document them:

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile

### Meals
- `GET /api/meals` - Get all meal plans
- `POST /api/meals` - Create meal plan
- `PUT /api/meals/:id` - Update meal plan
- `DELETE /api/meals/:id` - Delete meal plan

---

## 🐛 Troubleshooting

### MongoDB Connection Error
- Check MongoDB URI in .env
- Whitelist your IP in MongoDB Atlas
- Ensure network access is configured

### Port Already in Use
- Change PORT in .env
- Or kill process: `npx kill-port 5000`

### Dependencies Not Installing
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version (need v16+)

---

## 🚀 Deployment

### Render (Recommended for Free Tier)
1. Push code to GitHub
2. Connect to Render
3. Add environment variables
4. Deploy

### Railway
Similar to Render, with good free tier

### Heroku
Traditional option, paid plans

---

## 📖 Learn More

- [Express.js Docs](https://expressjs.com/)
- [Mongoose Docs](https://mongoosejs.com/)
- [JWT Docs](https://jwt.io/)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)

---

Ready to build! Start by creating your first route. 🎉
