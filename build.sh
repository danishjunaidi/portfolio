#!/bin/bash
set -e

echo "🔨 Building Danish Portfolio for Render..."
echo "📍 Current directory: $(pwd)"

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install --prefer-offline --no-audit

# Build client
echo "🎨 Building React frontend..."
cd client
npm install --prefer-offline --no-audit
npm run build
cd ..

echo "✅ Build completed successfully!"
echo "📂 Built files location: $(pwd)/client/dist"
