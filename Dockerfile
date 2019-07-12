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

ENV PORT ${PORT}
ENV API_SERVER ${API_SERVER}
ENV MAP_API_KEY ${MAP_API_KEY}

RUN npm run build

EXPOSE 4040

CMD ["npm", "start"]