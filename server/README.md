# Backend Server Setup Guide

Express.js backend for the AI-Powered Portfolio.

## Quick Start

```bash
npm install
npm start
```

Server runs on `http://localhost:5000`

## Environment Variables

Create a `.env` file:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
CORS_ORIGIN=http://localhost:5173
```

## Available Scripts

- `npm start` - Run production server
- `npm run dev` - Run development server with nodemon

## API Routes

### Health Check
```
GET /api/health
```

### Projects
```
GET /api/projects
GET /api/projects/:id
GET /api/projects/filter/type
```

### Contact
```
POST /api/contact
GET /api/contact/info
```

## Features

- CORS support for frontend
- Error handling middleware
- Contact form with email notifications
- Project management endpoints

## Deployment

Deploy to Heroku, Railway, or any Node.js hosting
