# 🚀 Complete GitHub Deployment Guide - NutriGlass

## 📋 Overview

This guide will help you push your NutriGlass project to GitHub and deploy it to Vercel.

**Live Demo:** https://diet-planner1-tau.vercel.app

---

## 🛠️ What You'll Need

1. **GitHub Account** - [Sign up](https://github.com)
2. **Git Installed** - [Download Git](https://git-scm.com)
3. **Vercel Account** - [Sign up](https://vercel.com)

---

## 📦 Step 1: Prepare Your Project

### 1.1 Check Your Project Structure

Make sure you have these files in your project root:

```
dietplanner/
├── src/
├── server/
├── public/
├── .env
├── .env.example
├── .gitignore
├── package.json
├── vite.config.js
├── vercel.json
├── README.md
├── SRS.md
├── DEPLOYMENT_CHECKLIST.md
├── DEPLOY_NOW.md
└── index.html
```

### 1.2 Update Your `.env` File

Create or update the `.env` file in your project root:

```env
VITE_GROQ_API_KEY=your_actual_groq_api_key_here
```

> ⚠️ **IMPORTANT:** The `.gitignore` file already prevents `.env` from being committed. This is correct - API keys should NEVER be committed to GitHub!

---

## 🐙 Step 2: Initialize Git Repository

### 2.1 Open Terminal

Open Command Prompt or PowerShell in your project directory:

```
cd "c:\Users\DELL-PC\Desktop\Full stack\dietplanner"
```

### 2.2 Initialize Git

```bash
git init
```

### 2.3 Check Git Status

```bash
git status
```

You should see files listed as untracked.

### 2.4 Add All Files

```bash
git add .
```

> Note: `.env` files are excluded by `.gitignore`, so they won't be added. This is GOOD!

### 2.5 Create Initial Commit

```bash
git commit -m "Initial commit: NutriGlass AI Diet Planner with full features"
```

---

## 🌐 Step 3: Create GitHub Repository

### 3.1 Go to GitHub

1. Open [github.com](https://github.com)
2. Sign in to your account

### 3.2 Create New Repository

1. Click **"+"** icon in top right
2. Select **"New repository"**

### 3.3 Repository Settings

Fill in the form:

- **Repository name:** `dietplanner` (or your choice)
- **Description:** `AI-Powered Diet Planner & Health Management Platform`
- **Public** or **Private** (choose based on your preference)
- ✅ **Initialize this repository with a README** (UNCHECK this!)
- ✅ **Add .gitignore:** Select "Node"
- ✅ **Add license:** Select "MIT" (or your choice)

Click **"Create repository"** button.

### 3.4 Copy Repository URL

After creating, you'll see:
```
https://github.com/YOUR_USERNAME/dietplanner.git
```

Copy this URL.

---

## 📤 Step 4: Push to GitHub

### 4.1 Add Remote Repository

In your terminal, run:

```bash
# Replace with your actual repository URL
git remote add origin https://github.com/YOUR_USERNAME/dietplanner.git
```

### 4.2 Rename Main Branch

```bash
git branch -M main
```

### 4.3 Push to GitHub

```bash
git push -u origin main
```

You'll be prompted for credentials:
- **Username:** Your GitHub username
- **Password:** Your GitHub personal access token (or password)

> 💡 **Tip:** If you have 2FA enabled, create a [Personal Access Token](https://github.com/settings/tokens)

### 4.4 Verify Upload

1. Go to your repository on GitHub
2. You should see all your files
3. Check that `.env` is NOT in the repository (good!)

---

## 🚀 Step 5: Deploy to Vercel

### 5.1 Sign Up/Login to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Use GitHub to sign in (recommended)

### 5.2 Import Your Project

1. Click **"Add New"** → **"Project"**
2. Click **"Import Git Repository"**
3. Find your `dietplanner` repository
4. Click **"Import"**

### 5.3 Configure Environment Variables

1. In the project settings, go to **"Environment Variables"**
2. Click **"Add New"**
3. Fill in:
   - **Name:** `VITE_GROQ_API_KEY`
   - **Value:** Your Groq API key
   - **Environment:** Production, Preview, Development (select all)
4. Click **"Save"**

### 5.4 Deploy

1. Click **"Deploy"**
2. Wait for the build to complete
3. Your app will be live at `https://your-app.vercel.app`

---

## 🔧 Step 6: Post-Deployment Setup

### 6.1 Add Environment Variable to Vercel

Your `.env` file has the Groq API key, but Vercel needs it separately:

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add `VITE_GROQ_API_KEY` with your API key
4. Click **Redeploy** to rebuild

### 6.2 Verify Deployment

Visit your Vercel URL and test:

- [ ] Homepage loads
- [ ] Can navigate to all pages
- [ ] Login/Signup works
- [ ] BMI calculator works
- [ ] Diet plan generates (requires API key)
- [ ] Settings save
- [ ] Mobile responsive

### 6.3 Add Custom Domain (Optional)

1. In Vercel, go to **Settings** → **Domains**
2. Add your custom domain
3. Update DNS records
4. Wait for propagation (up to 24 hours)

---

## 🔄 Step 7: Keep Your Project Updated

### 7.1 Make Changes

1. Edit files in your project
2. Test locally: `npm run dev`
3. Build: `npm run build`

### 7.2 Commit Changes

```bash
# Check what files changed
git status

# Add specific files
git add .
# or git add filename.jsx

# Commit with message
git commit -m "Add new feature: user profile optimization"

# Push to GitHub
git push origin main
```

### 7.3 Vercel Auto-Deploys

Vercel automatically detects changes to GitHub and deploys automatically!

---

## 📂 GitHub Repository Structure

Your repository should look like:

```
dietplanner/
├── .git/                    # Git configuration (hidden)
├── .gitignore              # Files to ignore (includes .env ✅)
├── package.json            # Dependencies
├── package-lock.json       # Lock file
├── vite.config.js          # Vite configuration
├── vercel.json             # Vercel deployment config
├── index.html              # HTML entry point
├── README.md               # Project documentation
├── SRS.md                  # Software Requirements Specification
├── DEPLOYMENT_CHECKLIST.md # Deployment guide
├── DEPLOY_NOW.md           # Quick deploy guide
├── GITHUB_DEPLOYMENT_GUIDE.md # This file
├── .env                    # Environment variables (LOCAL ONLY)
├── .env.example           # Environment template (SAFE TO COMMIT)
├── src/                   # Source code
│   ├── components/
│   ├── assets/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── server/                # Backend (starter kit)
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── middleware/
│   └── server.js
└── public/                # Static assets
    ├── favicon.svg
    └── icons.svg
```

---

## 🔒 Security Checklist

### ✅ Already Secured

- [x] `.env` file is in `.gitignore`
- [x] API keys are not committed
- [x] Sensitive data stays local

### ✅ Vercel Security

- [x] Environment variables in Vercel dashboard
- [x] HTTPS enabled automatically
- [x] Security headers configured in `vercel.json`

---

## 🐛 Troubleshooting

### Issue: "Permission denied" when pushing

**Solution:**
```bash
# Check your remote URL
git remote -v

# Update with correct credentials
git remote set-url origin https://YOUR_USERNAME@github.com/YOUR_USERNAME/dietplanner.git
```

### Issue: ".env file committed by mistake"

**Solution:**
```bash
# Remove from git history
git rm --cached .env

# Commit the change
git commit -m "Remove .env from repository"
git push origin main
```

### Issue: Build fails on Vercel

**Solution:**
1. Check that you added `VITE_GROQ_API_KEY` in Vercel
2. Verify your `package.json` dependencies
3. Check build logs in Vercel dashboard

### Issue: Pages return 404 after deploy

**Solution:**
The `vercel.json` file already handles this with rewrites ✅

---

## 🎯 Quick Commands Reference

```bash
# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# Check remote repository
git remote -v
```

---

## 📊 What Gets Deployed

### ✅ Committed to GitHub

- All source code
- Configuration files
- Documentation (README, guides)
- Public assets (images, icons)
- `.env.example` (template, no secrets)

### ❌ NOT Committed to GitHub

- `.env` (contains secrets)
- `node_modules/` (can be reinstalled)
- `dist/` (rebuilt on deploy)
- Local IDE files

---

## 🚀 Next Steps

After your project is on GitHub:

1. **Share Repository URL** - With team members
2. **Set Up CI/CD** - Automatic deploys on push
3. **Add Issue Tracking** - Use GitHub Issues
4. **Create Releases** - Version your project
5. **Add Documentation** - Expand README

---

## 📞 Need Help?

### Common Issues:

**Q: How do I update my deployed app?**  
A: Push changes to GitHub, Vercel auto-deploys!

**Q: Can I make my repo private?**  
A: Yes! GitHub has free private repositories.

**Q: How do I add team members?**  
A: Go to Repository → Settings → Collaborators

**Q: What if I need to change the project name?**  
A: Update in both GitHub and Vercel settings.

---

## 🎉 You're All Set!

Your NutriGlass project is now:
- ✅ On GitHub
- ✅ Deployed to Vercel
- ✅ Live at https://diet-planner1-tau.vercel.app
- ✅ Ready for updates

**Happy Coding!** 🚀

---

## 📝 Template for Your GitHub README

Add this to your GitHub repository:

```markdown
# NutriGlass - AI-Powered Diet Planner

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?logo=vercel)](https://diet-planner1-tau.vercel.app)
[![React](https://img.shields.io/badge/React-19.2.6-61dafb?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0.12-646cff?logo=vite)](https://vitejs.dev/)

AI-powered diet planning platform with personalized nutrition guidance.

## 🌐 Live Demo

[https://diet-planner1-tau.vercel.app](https://diet-planner1-tau.vercel.app)

## 🚀 Quick Start

1. Clone the repository
2. Install dependencies: `npm install`
3. Create `.env` with your Groq API key
4. Run: `npm run dev`

## 📚 Documentation

- [Full Documentation](README.md)
- [SRS](SRS.md)
- [Deployment Guide](DEPLOYMENT_CHECKLIST.md)

## 📸 Screenshots

[Add screenshots here]

## 🛠️ Tech Stack

- React 19 + Vite 8
- Tailwind CSS
- Groq AI (Llama 3.3 70B)
- Vercel (hosting)

## 📄 License

Proprietary - All rights reserved
```

---

**Created:** June 19, 2026  
**Version:** 1.0
