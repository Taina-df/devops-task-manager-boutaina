# Use Node.js 18 lightweight image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependencies first
COPY package*.json ./

# Install production dependencies only
RUN npm install --production

# Copy the rest of the app
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]