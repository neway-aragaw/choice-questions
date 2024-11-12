# Step 1: Specify a base image with Node.js
FROM node:16-alpine as build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Step 4: Copy the rest of the application code
COPY . .

# Step 5: Build the React app for production
RUN yarn build

# Step 6: Use a minimal base image to serve the built app
FROM nginx:alpine

# Copy the React build to the nginx HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
