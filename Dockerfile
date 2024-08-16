FROM node:20.16.0 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install dependencies
RUN npm cache clean --force && \
    npm config set legacy-peer-deps true && \
    npm install -f --legacy-peer-deps

#    npm install -g @angular/cli
# Set the environment variable
ENV NODE_OPTIONS="--max-old-space-size=8192"

# Update the browserslist database
RUN npx browserslist --update-db

# Copy the rest of the application code to the working directory
COPY . .

# Add custom type declarations
COPY src/declarations.d.ts src/declarations.d.ts

# Build the Angular app for production
RUN npm run build

# Expose the port the app runs on
EXPOSE 4173

# Define the command to run the app when the container starts
CMD ["npm", "run", "preview"]


