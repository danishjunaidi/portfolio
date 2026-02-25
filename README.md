# 👨‍💻 Mohammad Danish Junaidi - Portfolio

Full Stack Developer portfolio showcasing projects, skills, and experience. Built with modern web technologies and ready for deployment.

## ✨ Features

- **Modern Design**: Responsive, animated UI with Tailwind CSS and Framer Motion
- **Full Stack**: React frontend + Node.js/Express backend
- **Dark Theme**: Professional dark mode with gradient accents
- **Project Showcase**: Featured projects with metrics and tech stacks
- **Skills Display**: Organized by Frontend, Backend, and Languages
- **Certificates**: Professional training and certifications section
- **Contact Form**: Email integration for messages
- **Mobile Responsive**: Works seamlessly on all devices
- **Production Ready**: Configured for Render deployment

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite 5** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon components
- **Axios** - HTTP client
- **React Router** - Navigation

### Backend
- **Node.js** - Runtime
- **Express.js** - Server framework
- **Nodemailer** - Email service
- **CORS** - Cross-origin support
- **Mongoose** - MongoDB (optional)

## 📦 Installation

### 1. Clone Repository
```bash
git clone https://github.com/danishjunaidi/danish-portfolio.git
cd danish-portfolio
```

### 2. Install Dependencies
```bash
npm install-all
# OR manually:
npm install
cd client && npm install
cd ../server && npm install
```

### 3. Set Up Environment Variables
```bash
cp .env.example .env
# Edit both client/.env and server/.env with your values
```

## 🚀 Development

### Run All Services
```bash
npm run dev
# Starts client on port 5173 and server on port 5000
```

### Run Separately
```bash
npm run dev:client    # Frontend only
npm run dev:server    # Backend only
```

## 📦 Production Build

### Build for Production
```bash
npm run build
# Creates optimized build in client/dist
```

### Test Production Build Locally
```bash
npm run build
npm start
# Server will serve built app on port 5000
```

## 🌐 Deployment

### Deploy on Render (Recommended for Free Tier)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**Quick Steps:**
1. Push code to GitHub
2. Connect repo to Render.com
3. Set environment variables
4. Deploy!

### Deploy on other platforms
- **Vercel** (frontend) + **Railway** (backend)
- **Heroku** (full stack)
- **AWS** (EC2/Amplify)
- **DigitalOcean** (app platform)

## 📁 Project Structure

```
danish-portfolio/
├── package.json              # Root - Render build/start scripts
├── render.yaml             # Render configuration
├── DEPLOYMENT.md           # Deployment guide
│
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── sections/       # Page sections
│   │   ├── utils/
│   │   │   ├── data.js     # Portfolio data (centralized)
│   │   │   └── api.js      # API configuration
│   │   ├── hooks/          # Custom hooks
│   │   ├── App.jsx         # Main component
│   │   └── main.jsx        # Entry point
│   ├── public/             # Static assets
│   ├── package.json
│   └── vite.config.js
│
└── server/                 # Express backend
    ├── server.js           # Main server
    ├── routes/             # API routes
    ├── controllers/        # Route handlers
    └── package.json
```

## 📝 Configuration

### Environment Variables

**Server (.env or Render dashboard):**
```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

**Client (.env.local):**
```env
VITE_API_URL=http://localhost:5000/api
```

## 🔧 Customization

### Update Portfolio Data
Edit [client/src/utils/data.js](./client/src/utils/data.js):
- **Projects**: Add/remove projects
- **Skills**: Update tech skills
- **Certificates**: Add training/certifications
- **Contact**: Update email, phone, social links

### Styling
- **Theme Colors**: [client/src/index.css](./client/src/index.css)
- **Tailwind Config**: [client/tailwind.config.js](./client/tailwind.config.js)
- **Component Styles**: Individual `.jsx` files

### Add Profile Image
Place image at `client/public/profile.jpg` and update Hero section

## 🧪 API Endpoints

- `GET /api/health` - Server health check
- `GET /api/projects` - Get all projects
- `POST /api/contact` - Send contact message
- `*` - Serve React app (SPA fallback)

## 🚨 Troubleshooting

**Port already in use:**
```bash
# Change port in .env
PORT=5001 npm run dev:server
```

**Module not found:**
```bash
# Reinstall dependencies
rm -rf node_modules */node_modules
npm run install-all
```

**API calls failing:**
- Check CORS_ORIGIN matches your deployment URL
- Verify server is running
- Check browser console for CORS errors

**Build fails:**
- Ensure Node.js 18+ installed
- Check all dependencies: `npm ls`
- Clear cache: `npm cache clean --force`

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Express.js](https://expressjs.com)
- [Render Docs](https://render.com/docs)

## 📞 Contact

- **Email**: danishjunaidi564@gmail.com
- **LinkedIn**: [danishjunaidi](https://www.linkedin.com/in/danishjunaidi)
- **GitHub**: [danishjunaidi](https://github.com/danishjunaidi)

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Mohammad Danish Junaidi