# 🚀 Deploy to Render in 5 Minutes

## Step-by-Step Visual Guide

### 1️⃣ Create Render Account
```
👉 Go to: https://render.com
👉 Click: "Get Started for Free"
👉 Sign up with GitHub (recommended)
```

### 2️⃣ Create New Static Site
```
Dashboard → Click "New +" button (top right)
           ↓
      Select "Static Site"
           ↓
      Click "Connect a repository"
           ↓
      Authorize Render to access GitHub
           ↓
      Select: Kajal-ctrlF/kriscel-med-solution
```

### 3️⃣ Configure Site Settings

Fill in these exact values:

```
┌─────────────────────────────────────────────┐
│ Name: kriscel-med-solution                  │
│ (or any name you like)                      │
├─────────────────────────────────────────────┤
│ Branch: main                                │
├─────────────────────────────────────────────┤
│ Root Directory: medical                     │
├─────────────────────────────────────────────┤
│ Build Command: (leave empty)               │
├─────────────────────────────────────────────┤
│ Publish Directory: .                        │
│ (just a dot)                                │
└─────────────────────────────────────────────┘
```

### 4️⃣ Deploy!
```
Click: "Create Static Site"
        ↓
   Wait 1-2 minutes
        ↓
   ✅ LIVE!
```

---

## 🌐 Your Live URLs

After deployment:
- **Main Site**: `https://kriscel-med-solution.onrender.com`
- **Homepage**: `https://kriscel-med-solution.onrender.com/`
- **Equipment**: `https://kriscel-med-solution.onrender.com/equipment.html`
- **Contact**: `https://kriscel-med-solution.onrender.com/contact.html`

---

## 🔄 Auto-Deploy Setup (Already Done!)

Every time you push to GitHub:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

**Render automatically redeploys** your site! 🎉

---

## ✅ What You Get (FREE)

- ✅ Custom subdomain (*.onrender.com)
- ✅ Automatic SSL/HTTPS certificate
- ✅ Global CDN (fast worldwide)
- ✅ Auto-deploy on git push
- ✅ 100GB bandwidth per month
- ✅ Unlimited sites
- ✅ DDoS protection

---

## 🎯 That's It!

Your medical equipment website will be:
- 🌍 **Live on the internet**
- 🔒 **Secure (HTTPS)**
- ⚡ **Fast (CDN)**
- 🔄 **Auto-updating** (on every git push)

---

## 🆘 Need Help?

**Common Issues:**

**Q: "Can't find my repository"**
A: Make sure you authorized Render to access your GitHub account

**Q: "Build failing"**
A: Check that Root Directory is set to `medical` (not empty)

**Q: "404 errors"**
A: Verify Publish Directory is set to `.` (just a dot)

**Q: "Site is slow on first load"**
A: Free tier services sleep after inactivity. First load takes ~30 seconds. Upgrade to paid for always-on.

---

## 📚 More Details

For detailed instructions with troubleshooting:
📖 See **[DEPLOY.md](DEPLOY.md)**

---

**Ready? Let's deploy! 🚀**

Go to: **https://dashboard.render.com/select-repo**
