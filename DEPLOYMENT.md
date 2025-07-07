# Deployment Guide for Simply Precious Bakery

## GitHub Pages Deployment

### Prerequisites
1. Create a GitHub repository
2. Push your code to the repository

### Setup Steps

1. **Update homepage URL in package.json**
   Replace `[your-github-username]` and `[your-repo-name]` with your actual GitHub username and repository name:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

2. **Install gh-pages package (optional but recommended)**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deployment scripts to package.json**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. **Build and Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

### Alternative: Manual Deployment
1. Run `npm run build`
2. Go to your GitHub repository settings
3. Navigate to "Pages" section
4. Select "Deploy from a branch"
5. Choose "gh-pages" branch (if using gh-pages) or "main" branch with `/docs` folder
6. Set source to `/docs` or `/build` folder

### Important Notes
- ✅ **HashRouter**: Already configured for GitHub Pages compatibility
- ✅ **Manifest.json**: Updated with correct icon paths
- ✅ **Robots.txt**: Created for SEO
- ✅ **Favicon**: Properly configured

### Post-Deployment
1. Wait 5-10 minutes for changes to propagate
2. Test all routes: `/`, `/menu`
3. Verify images load correctly
4. Check mobile responsiveness

### Troubleshooting
- If routes don't work, ensure HashRouter is being used
- If images don't load, check that paths are relative to the build folder
- Clear browser cache if changes don't appear 