FROM node:lts-alpine AS development

ENV NODE_ENV development

# Add the work directory
WORKDIR /app

# Cache and install dep
COPY package.json .
COPY package-lock.json .
COPY yarn.lock .
RUN npm install
# Copy app files
COPY . .
# Build the app
RUN npm run build

EXPOSE 3000
CMD [ "npx", "serve", "-s", "build" ]