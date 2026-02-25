# Frontend Setup Guide

This is the React frontend for the AI-Powered Portfolio.

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Structure

- `src/components/` - Reusable React components
- `src/sections/` - Page section components
- `src/hooks/` - Custom React hooks
- `src/utils/` - API calls and utilities
- `src/assets/` - Images and static files

## Configuration

Update your personal information in:
- `src/utils/data.js` - Projects, skills, contact info
- Environment variables in `.env`

## Tailwind CSS

Dark theme with custom colors defined in `tailwind.config.js`

## Deployment

```bash
npm run build
# Deploy dist/ folder
```
