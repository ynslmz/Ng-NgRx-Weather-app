# Stage 1: Compile and Build angular codebase
# Use official node image as the base image
FROM node:14.17.5 as build-step
# Set the working directory
WORKDIR /app
# Add the source code to app
COPY . /app
# Install all the dependencies
RUN npm install -g @angular/cli
RUN npm install
# Generate the build of the application
RUN ng build
# Stage 2: Serve app with nginx server
# Use official nginx image as the base image
FROM nginx:latest
# Copy the build output to replace the default nginx contents.
COPY --from=build-step /app/dist/SimpleWeatherApp /usr/share/nginx/html
# Expose port 80
EXPOSE 80