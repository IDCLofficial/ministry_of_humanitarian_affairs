#!/bin/bash

# Source NVM
source ~/.nvm/nvm.sh

# Set environment variables
export NEXT_PUBLIC_CONTENTFUL_SPACE_ID=g08mvfhb24ji
export NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=yZmq2UuZ1_8XDAKpc6zdstd8XtD4vEwTc5aqK-zPU-o
export NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN=rlJ3RsWYOuYx4jdCjveT_2w5ekUNt4e14JuCHCdRfsw
export NEXT_PUBLIC_MINISTRY_ID=3AVAM45hTT76Kk9Yb5vyUh

# Set Node.js memory options
export NODE_OPTIONS="--max-old-space-size=2048"

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building application..."
npm run build

# Reload PM2
echo "Reloading PM2..."
pm2 reload ecosystem.config.js --env production

echo "Deployment completed successfully!"
