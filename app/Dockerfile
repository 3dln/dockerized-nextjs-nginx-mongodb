FROM node:current-alpine

# using pm2 to serve next.js application
RUN npm install --global pm2

# this is the directory we use in our container
WORKDIR /usr/app

# we need to copy package.json and package-lock.json to prevent unnecessary build steps
COPY ./package*.json ./

# install node modules
RUN npm install

# now copy everything (except what we mentioned in .dockerignore file) to the working directory
COPY ./ ./

RUN npm run build

# the default port used by next.js
EXPOSE 3000

USER node

# run the application using pm2
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]