FROM node:11-alpine

# Create app directory
RUN mkdir -p /usr/src/hourserents
WORKDIR /usr/src/hourserents

# Install app dependencies
COPY package.json /usr/src/hourserents/
RUN npm install

# Bundle app source
COPY src /usr/src/hourserents/src
COPY config.dev.js /usr/src/hourserents/

ENV API_SERVER https://houserents-dev-api-mamhlwbwkq-uc.a.run.app
ENV MAP_API_KEY AIzaSyCp3UKASbZkqvCnW3l_RLgM5Ik15JBKpPc

RUN npm run build

EXPOSE 4040

CMD ["npm", "start"]