# 🚀 Render Deployment Guide

## Quick Deployment Steps

### 1. **Prepare Your Repository**
```bash
git add .
git commit -m "Add Render deployment configuration"
git push origin main
```

### 2. **Create Render Account & Service**
- Go to [render.com](https://render.com)
- Sign up (or login) with GitHub
- Click "New +" → "Web Service"
- Select your `danish-portfolio` repository
- Render will auto-detect it's a Node.js project

### 3. **Configure Build & Deploy Settings**

⚠️ **IMPORTANT**: Delete any existing service first and create a new one:

**In Render Dashboard:**
1. Click "Create Web Service"
2. Select repository → select `main` branch
3. Configure these settings:

| Field | Value |
|-------|-------|
| **Name** | danish-portfolio |
| **Environment** | Node |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Node Version** | 18 (or latest) |

4. **Don't set a "Root Directory"** - leave it empty or as `/`

### 4. **Set Environment Variables**
Click "Advanced" → "Add Environment Variable"

| Key | Value |
|-----|-------|
| `CORS_ORIGIN` | `*` (or your domain when ready) |
| `NODE_ENV` | `production` |

### 5. **Deploy**
- Click "Create Web Service"
- Render will automatically:
  1. Clone your repo
  2. Run `npm install && npm run build`
  3. Run `npm start` to start the server
  4. Your app will be live at `https://your-app-name.onrender.com`

---

## Troubleshooting

**Error: `/opt/render/project/src/package.json` not found**
- ❌ Wrong: You have a "Root Directory" set to something other than `/` or empty
- ✅ Fix: Delete the service and create a new one, leaving "Root Directory" empty

**Build fails with module not found**
- Check that `package.json` is in the root directory (not in client/)
- Verify all dependencies are listed in root `package.json`

**"npm install" fails**
- Sometimes Render's cache causes issues
- In Render dashboard → "Environment" → click "Clear Cache and Redeploy"

**Port conflicts**
- Render assigns ports dynamically
- Make sure `PORT` env variable is respected (it is in our setup)

---

## Local Development

### Start All Services (requires `concurrently`)
```bash
npm install                    # Install dependencies
npm run build                  # Build client
npm run dev                    # Runs both client and server
```

### Start Separately
```bash
npm run dev:client            # Client on port 5173
npm run dev:server            # Server on port 5000
```

---

## Project Structure

```
danish-portfolio/
├── package.json             # Root scripts for Render
├── render.yaml             # Render configuration
├── Procfile                # Alternative Procfile format
├── .env.example            # Environment variables template
│
├── client/                 # React + Vite frontend
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
└── server/                 # Node + Express backend
    ├── server.js           # Main server file
    ├── controllers/        # API handlers
    ├── routes/            # API routes
    └── package.json
```

---

## How It Works

### Build Process
1. **Install**: Dependencies install in both `client/` and `server/`
2. **Build**: Vite builds React app to `client/dist/`
3. **Package**: Everything is ready for production

### Runtime
1. **Server starts** on the assigned PORT (usually 8000+)
2. **Express serves** the built React app from `client/dist/`
3. **API routes** at `/api/*` are handled by Express
4. **All other routes** fallback to `index.html` (React Router handles them)

---

## Troubleshooting

### Build Fails with "npm not found"
- Check Node version: Render uses 18 by default
- Ensure `package.json` exists in root

### "Cannot find module" errors
- Check `node_modules` wasn't committed to git
- Render will install fresh dependencies during build

### Environment variables not working
- Confirm variables are set in Render dashboard
- Restart deployment after updating variables

### API calls failing in production
- Verify CORS_ORIGIN is correctly set
- Check browser console for CORS errors
- Ensure `/api` endpoints are correctly routed

---

## Free Tier Limitations (Render)

- Instance spins down after 15 minutes of inactivity
- Limited to 0.5GB RAM
- CPU limited to shared resources
- Good for demos/portfolios

For production, consider Paid tiers or alternatives (Vercel, Railway, Heroku).

---

## Environment Variables (.env)

Copy `.env.example` to `.env` in both `client/` and `server/`:

```bash
# server/.env
CORS_ORIGIN=http://localhost:5173
PORT=5000
NODE_ENV=development
```

For production (set in Render dashboard), use:
```
CORS_ORIGIN=https://your-app-name.onrender.com
NODE_ENV=production
```

---

## Next Steps

- [ ] Create Render account
- [ ] Connect GitHub repository
- [ ] Set environment variables
- [ ] Deploy and test
- [ ] Monitor logs in Render dashboard
- [ ] Update portfolio when deploying updates

