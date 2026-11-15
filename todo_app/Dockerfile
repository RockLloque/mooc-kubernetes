FROM node:22-alpine
WORKDIR /app

# Install deps first for layer caching.
COPY package*.json ./
RUN npm ci

# Build TypeScript to dist/.
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

USER node
EXPOSE 3000
CMD ["node", "dist/index.js"]
