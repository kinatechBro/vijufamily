# Vercel Deployment Checklist

## Pre-Deployment
- [ ] All code committed to GitHub
- [ ] Build runs successfully locally (`npm run build`)
- [ ] No TypeScript/ESLint errors
- [ ] All routes work in development
- [ ] `vercel.json` configuration is present

## Vercel Configuration Files
- [ ] `vercel.json` - ✅ Already configured for SPA routing
- [ ] `vite.config.ts` - ✅ Base path set to '/' for Vercel

## Deploy Steps
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Configure build settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy and test all routes

## Post-Deployment Testing
- [ ] Home page loads correctly
- [ ] Navigation works (all menu items)
- [ ] Product filtering works (without price filter)
- [ ] Page refresh works on all routes (no 404s)
- [ ] Mobile navigation works
- [ ] Theme toggle works
- [ ] Gallery lightbox works
- [ ] All static assets load

## URL Refresh Issue Fix
The `vercel.json` file includes:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
This ensures all routes are handled by React Router, fixing the refresh issue.

## Common Issues & Solutions
1. **404 on refresh**: Fixed by vercel.json rewrites
2. **Build errors**: Check Node.js version (use 18+)
3. **Asset loading**: Ensure files are in public/ folder
4. **Environment variables**: Add in Vercel dashboard if needed
