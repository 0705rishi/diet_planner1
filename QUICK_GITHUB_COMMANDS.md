# 🚀 Quick GitHub Commands - NutriGlass

## 📦 Push Project to GitHub (Copy-Paste)

```bash
# Navigate to project
cd "c:\Users\DELL-PC\Desktop\Full stack\dietplanner"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: NutriGlass AI Diet Planner - Live at https://diet-planner1-tau.vercel.app"

# Add your GitHub repository remote (REPLACE WITH YOUR URL)
git remote add origin https://github.com/YOUR_USERNAME/dietplanner.git

# Rename to main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## 🔁 Update Repository (After Changes)

```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Your commit message here"

# Push
git push origin main
```

---

## 🐛 Troubleshooting Commands

```bash
# Check what remote is configured
git remote -v

# Update remote URL if needed
git remote set-url origin https://github.com/YOUR_USERNAME/dietplanner.git

# Remove .env from git (if accidentally committed)
git rm --cached .env

# Pull latest changes from GitHub
git pull origin main
```

---

## 📝 Quick Setup Checklist

- [ ] Install Git: https://git-scm.com
- [ ] Create GitHub account: https://github.com
- [ ] Create repository on GitHub
- [ ] Copy repository URL
- [ ] Run commands above
- [ ] Verify on GitHub
- [ ] Deploy to Vercel

---

## 🎯 Your Project Info

- **Live Demo:** https://diet-planner1-tau.vercel.app
- **Project Name:** dietplanner
- **Primary Tech:** React 19, Vite, Groq AI

---

## 📂 Files on GitHub

✅ Will be committed:
- All source code (src/)
- Configuration files
- Documentation
- Public assets
- .env.example

❌ Will NOT be committed:
- .env (contains secrets)
- node_modules/
- dist/

---

## 🎉 That's It!

After pushing to GitHub:
1. Your code is safely backed up
2. You can share the repository
3. Vercel can auto-deploy from GitHub
4. You have version control

---

**Created:** June 19, 2026  
**For:** NutriGlass Project
