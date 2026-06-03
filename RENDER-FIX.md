# 🔧 Fix "Not Found" Error on Render

## Problem
Your site at `https://kriscel-med-solution.onrender.com/` shows "Not Found"

## Solution: Update Render Settings

### Method 1: Via Render Dashboard (Easiest) ⭐

1. **Go to Render Dashboard**
   ```
   https://dashboard.render.com
   ```

2. **Click on your service**: `kriscel-med-solution`

3. **Go to "Settings"** tab (left sidebar)

4. **Scroll to "Build & Deploy"** section

5. **Update these settings**:
   ```
   Root Directory:    medical
   Build Command:     (leave empty or delete)
   Publish Directory: .
   ```
   **Important**: 
   - Root Directory should be just `medical` (no ./ or slashes)
   - Publish Directory should be just `.` (a single dot)

6. **Scroll down and click "Save Changes"**

7. **Trigger Manual Deploy**:
   - Go to "Manual Deploy" section at the bottom
   - Click "Clear build cache & deploy"
   - Wait 2-3 minutes

8. **Test**: Visit `https://kriscel-med-solution.onrender.com/`

---

## Method 2: Via render.yaml (Automatic)

I've already updated the `render.yaml` file. To use it:

1. **Delete your current service** on Render dashboard
2. **Create new service** using "Blueprint"
3. Select your repository
4. Render will auto-detect `render.yaml`
5. Click "Apply"

---

## Method 3: Check Deployment Logs

1. Go to your service dashboard
2. Click **"Logs"** tab
3. Look for any errors in the deployment log
4. Common issues:
   - Wrong directory path
   - Missing index.html
   - Permission issues

---

## Expected Settings Summary

```
┌──────────────────────────────────────┐
│ Service Type: Static Site            │
├──────────────────────────────────────┤
│ Branch: main                         │
├──────────────────────────────────────┤
│ Root Directory: medical              │
│ (This tells Render to look in the   │
│  'medical' folder for your files)    │
├──────────────────────────────────────┤
│ Build Command: (empty)               │
│ (No build needed for static HTML)   │
├──────────────────────────────────────┤
│ Publish Directory: .                 │
│ (Serve files from current dir)      │
└──────────────────────────────────────┘
```

---

## Visual Directory Structure

Your repo structure:
```
kriscel-med-solution/
├── README.md
├── render.yaml
├── medical/                ← Root Directory should point here
│   ├── index.html         ← This should be served at /
│   ├── equipment.html
│   ├── brands.html
│   ├── contact.html
│   └── ...
```

Render needs to:
1. Navigate to `medical/` folder (Root Directory)
2. Serve files from there (Publish Directory = `.`)
3. So `medical/index.html` becomes `https://your-site.com/`

---

## Quick Test After Fix

Visit these URLs (all should work):
- ✅ `https://kriscel-med-solution.onrender.com/`
- ✅ `https://kriscel-med-solution.onrender.com/equipment.html`
- ✅ `https://kriscel-med-solution.onrender.com/brands.html`
- ✅ `https://kriscel-med-solution.onrender.com/contact.html`

---

## Still Not Working?

### Option A: Check File Structure
```bash
# Run this in your terminal to verify structure
dir medical
```

You should see:
- index.html
- equipment.html
- brands.html
- etc.

### Option B: Try GitHub Pages Instead
If Render continues having issues:

1. Go to: `https://github.com/Kajal-ctrlF/kriscel-med-solution`
2. Settings → Pages
3. Source: `main` branch
4. Folder: Select `/ (root)` then type `/medical` if available, or just use root
5. Save
6. Visit: `https://kajal-ctrlf.github.io/kriscel-med-solution/medical/`

---

## Screenshots Guide

### Step 1: Find Root Directory Setting
```
Dashboard → Your Service → Settings → Build & Deploy
Scroll to find: "Root Directory"
Change to: medical
```

### Step 2: Find Publish Directory Setting
```
In same section, find: "Publish Directory"  
Change to: .
(just a single dot)
```

### Step 3: Save & Redeploy
```
Scroll down → Click "Save Changes"
Scroll to bottom → "Manual Deploy" section
Click: "Clear build cache & deploy"
```

---

## Common Mistakes

❌ **Wrong**: Root Directory = `/medical` or `./medical`
✅ **Correct**: Root Directory = `medical`

❌ **Wrong**: Root Directory = empty (blank)
✅ **Correct**: Root Directory = `medical`

❌ **Wrong**: Publish Directory = `medical`
✅ **Correct**: Publish Directory = `.`

❌ **Wrong**: Root Directory = `.` and Publish Directory = `medical`
✅ **Correct**: Root Directory = `medical` and Publish Directory = `.`

---

## After Fix - Wait Time

- **Deployment time**: 1-2 minutes
- **DNS propagation**: Usually instant
- **First load**: May take 30 seconds (free tier)

---

## Need More Help?

1. **Check deployment logs** on Render dashboard
2. **Share the error message** you see in logs
3. **Verify your settings** match exactly as shown above

---

## Alternative: Quick Deploy to Netlify

If Render is giving you trouble, try Netlify (drag & drop):

1. Go to: https://app.netlify.com/drop
2. Drag the `medical` folder onto the page
3. Done! Instant live site

---

**The fix should work after updating these settings!** 🚀

Let me know if you still see "Not Found" after making these changes.
