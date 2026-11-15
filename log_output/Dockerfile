# Use a small, pinned LTS base image
FROM node:22-alpine

# App lives in /app
WORKDIR /app

# Install dependencies first to leverage Docker layer caching.
# (No dependencies yet, but this keeps installs cached when they're added.)
COPY package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev

# Copy the rest of the application source
COPY . .

# Run as the built-in non-root user provided by the node image
USER node

# Start the application
CMD ["node", "index.js"]
