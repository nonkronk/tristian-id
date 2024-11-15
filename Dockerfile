FROM node:lts-alpine as module-install-stage
# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV NODE_OPTIONS=--openssl-legacy-provider
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN apk add yarn
RUN yarn install --production

# build
FROM node:lts-alpine as build-stage
COPY --from=module-install-stage /app/node_modules/ /app/node_modules
WORKDIR /app
COPY . .
ARG REACT_APP_RESUME_LINK
ENV REACT_APP_RESUME_LINK=${REACT_APP_RESUME_LINK}
RUN yarn build

# serve
FROM node:lts-alpine
COPY --from=build-stage /app/build/ /app/build
RUN npm install -g serve
# start app
CMD serve -s /app/build -l 3000
