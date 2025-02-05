# Step 1: Build Angular App
FROM node:lts AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project and build Angular
COPY . .
RUN npm run build --configuration=production

# Step 2: Use Nginx to Serve the Built Angular App
FROM nginx:alpine

# Remove default Nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build output to Nginx HTML directory
COPY --from=builder /app/dist/decubitus-erp /usr/share/nginx/html

# Ensure correct permissions
RUN chmod -R 755 /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
