# Pull base image
FROM node:7

# Define working directory
WORKDIR /app

# Copy file into WORKDIR
COPY package.json /app

# Command to run to install npm packages
RUN npm install

COPY . /app

# Expose ports
EXPOSE 8081