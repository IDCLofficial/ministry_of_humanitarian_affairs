#!/bin/bash

# Source NVM
source ~/.nvm/nvm.sh

# Set environment variables
export NEXT_PUBLIC_CONTENTFUL_SPACE_ID=g08mvfhb24ji
export NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=yZmq2UuZ1_8XDAKpc6zdstd8XtD4vEwTc5aqK-zPU-o
export NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN=rlJ3RsWYOuYx4jdCjveT_2w5ekUNt4e14JuCHCdRfsw
export NEXT_PUBLIC_MINISTRY_ID=3AVAM45hTT76Kk9Yb5vyUh

# Set Node.js memory options (reduced for limited server memory)
export NODE_OPTIONS="--max-old-space-size=1024"

# Clean install dependencies with memory optimization
echo "Cleaning and installing dependencies..."
rm -rf node_modules package-lock.json

# Try to free up memory first
echo "Freeing up memory..."
sync
echo 3 > /proc/sys/vm/drop_caches 2>/dev/null || true

# Use npm install with memory optimizations
echo "Installing dependencies with memory optimizations..."
npm install --production=false --no-audit --no-fund --prefer-offline --no-optional

# Build the application
echo "Building application..."
npm run build

# Reload PM2
echo "Reloading PM2..."
pm2 reload ecosystem.config.js --env production

echo "Deployment completed successfully!"
