# 🚀 Deployment Guide - Render

## Quick Deploy to Render

### Prerequisites
- GitHub account with your repository
- Render account (free sign up at https://render.com)

---

## 📦 Option 1: Deploy via Render Dashboard (Easiest)

### Step 1: Sign Up / Log In
1. Go to **https://render.com**
2. Click **"Get Started for Free"**
3. Sign up with GitHub (recommended) or email

### Step 2: Connect GitHub Repository
1. Once logged in, click **"New +"** button (top right)
2. Select **"Static Site"**
3. Click **"Connect a repository"**
4. Authorize Render to access your GitHub
5. Find and select: **`Kajal-ctrlF/kriscel-med-solution`**

### Step 3: Configure Deployment Settings
Fill in the following:

| Field | Value |
|-------|-------|
| **Name** | `kriscel-med-solution` (or any name you prefer) |
| **Branch** | `main` |
| **Root Directory** | `medical` |
| **Build Command** | Leave empty or use: `echo "No build required"` |
| **Publish Directory** | `.` (dot - current directory) |

### Step 4: Deploy
1. Click **"Create Static Site"**
2. Wait 1-2 minutes for deployment
3. Your site will be live at: `https://kriscel-med-solution.onrender.com`

---

## 🎯 Option 2: Deploy via Render.yaml (Automatic)

Your repository already includes `render.yaml` configuration file.

### Step 1: Connect Repository
1. Go to **https://dashboard.render.com**
2. Click **"New +"** → **"Blueprint"**
3. Connect your GitHub repository: `Kajal-ctrlF/kriscel-med-solution`

### Step 2: Approve Blueprint
1. Render will detect the `render.yaml` file
2. Review the configuration
3. Click **"Apply"**
4. Deployment starts automatically!

---

## 🌐 After Deployment

### Your Site URLs
Once deployed, your site will be accessible at:
- **Main URL**: `https://kriscel-med-solution.onrender.com`
- **All Pages**:
  - Homepage: `/`
  - Equipment: `/equipment.html`
  - Brands: `/brands.html`
  - Contact: `/contact.html`
  - Downloads: `/downloads.html`
  - About: `/about.html`
  - Projects: `/projects.html`
  - Industries: `/industries.html`

### Free Tier Features
- ✅ Free custom subdomain (*.onrender.com)
- ✅ Automatic SSL/HTTPS
- ✅ Global CDN
- ✅ Automatic deploys on git push
- ✅ 100GB bandwidth/month
- ✅ Custom domain support (upgrade to paid)

---

## 🔄 Automatic Redeployment

Once connected, every time you push to GitHub:
```bash
git add .
git commit -m "Update content"
git push origin main
```

Render will **automatically redeploy** your site within 1-2 minutes!

---

## 🎨 Custom Domain (Optional - Paid Plan)

To use your own domain like `www.kriscelmed.com`:

### Step 1: Add Custom Domain in Render
1. Go to your service dashboard
2. Click **"Settings"** → **"Custom Domains"**
3. Click **"Add Custom Domain"**
4. Enter your domain: `www.kriscelmed.com`

### Step 2: Configure DNS
Add these records at your domain registrar:

**For www subdomain:**
```
Type: CNAME
Name: www
Value: kriscel-med-solution.onrender.com
```

**For root domain (optional):**
```
Type: ALIAS or ANAME
Name: @
Value: kriscel-med-solution.onrender.com
```

### Step 3: Verify
- Wait 5-30 minutes for DNS propagation
- Render will automatically provision SSL certificate
- Your site will be live at your custom domain!

---

## ⚡ Performance Optimization Tips

### 1. Enable HTTP/2
Render enables HTTP/2 automatically for better performance.

### 2. Compression
Render automatically compresses static assets (gzip/brotli).

### 3. CDN Caching
Your static assets are cached globally via Render's CDN.

### 4. Image Optimization (Future)
Consider using Render's image optimization service or external CDN for images.

---

## 🐛 Troubleshooting

### Issue: Site Not Loading
**Solution**: Check that root directory is set to `medical` and publish directory is `.`

### Issue: 404 Errors
**Solution**: Verify all file paths use relative URLs (no absolute paths)

### Issue: Video Not Playing
**Solution**: Check video file size. Render free tier has 500MB storage limit per service.

### Issue: Slow Initial Load
**Solution**: Render free tier services may spin down after inactivity. First load might take 30 seconds. Upgrade to paid plan for always-on service.

---

## 📊 Monitoring

### View Deployment Logs
1. Go to your service dashboard
2. Click **"Logs"** tab
3. View real-time deployment and access logs

### Analytics (Paid Plans)
Upgrade to view:
- Traffic analytics
- Performance metrics
- Error tracking

---

## 🔒 Security

Render provides:
- ✅ Free SSL/TLS certificates
- ✅ Automatic HTTPS redirect
- ✅ DDoS protection
- ✅ Secure headers

---

## 💰 Pricing Comparison

| Feature | Free | Starter ($7/mo) |
|---------|------|-----------------|
| SSL/HTTPS | ✅ | ✅ |
| Auto Deploy | ✅ | ✅ |
| Custom Domain | ❌ | ✅ |
| Always On | ❌ | ✅ |
| Bandwidth | 100GB/mo | Unlimited |

For a static site, **Free tier is perfect** unless you need custom domain or always-on service.

---

## 🔗 Useful Links

- **Render Dashboard**: https://dashboard.render.com
- **Render Docs**: https://render.com/docs/static-sites
- **Support**: https://render.com/support
- **Status**: https://status.render.com

---

## 📝 Quick Commands Recap

```bash
# Make changes to your site
cd c:\Users\mayankkk07\OneDrive\Desktop\Fire\medical_extracted

# Stage changes
git add .

# Commit
git commit -m "Update content"

# Push (triggers auto-deploy on Render)
git push origin main
```

---

## 🎉 Success Checklist

- [ ] Render account created
- [ ] GitHub repository connected
- [ ] Static site created on Render
- [ ] Deployment successful
- [ ] Site accessible via Render URL
- [ ] All pages working correctly
- [ ] Images and assets loading
- [ ] Forms submitting (if backend configured)
- [ ] Mobile responsive verified
- [ ] SSL certificate active (HTTPS)

---

**Your site is ready to go live on Render! 🚀**

*Any git push to main branch will automatically redeploy your site.*

