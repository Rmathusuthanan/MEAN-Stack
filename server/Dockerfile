# Use official Node image
FROM node:20-alpine

# Create app directory
WORKDIR server/

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
