# Step 1: Build the React app using Node.js
FROM node:23-slim AS build

WORKDIR /app

# Copy the package.json and package-lock.json first to leverage Docker cache
COPY ./package.json ./package-lock.json ./
RUN npm install

# Now copy the rest of the frontend source code
COPY ./src ./src
COPY ./public ./public

RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the build files from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port for Nginx
EXPOSE 80
