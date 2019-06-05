FROM node:11-alpine

# Create app directory
RUN mkdir -p /usr/src/hourserents
WORKDIR /usr/src/hourserents

# Install app dependencies
COPY package.json /usr/src/hourserents/
RUN npm install

# Bundle app source
COPY src /usr/src/hourserents/src
COPY webpack.config.js /usr/src/hourserents/

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]