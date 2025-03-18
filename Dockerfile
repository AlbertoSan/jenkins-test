# Image
FROM node:18

# Working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./
RUN npm install

# Copy all files
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]