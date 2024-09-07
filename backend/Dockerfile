# Step 1: Use an official Node.js base image
FROM node:18.20.1-alpine

# Step 2: Set the working directory inside the container
WORKDIR /

# Step 3: Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the project files
COPY . .

# Step 6: Expose the port Vite runs on (default is 5173)
EXPOSE 8000

# Step 7: Start the Vite development server
CMD ["npm", "run", "start", "--", "--host"]
