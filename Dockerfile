FROM node:11-alpine

# Create user
# RUN groupadd -r nodejs \
#     && useradd -m -r -g nodejs nodejs

# USER nodejs

# Create app directory
RUN mkdir -p /usr/src/hourserents
WORKDIR /usr/src/hourserents

# Install app dependencies
COPY package.json /usr/src/hourserents/
COPY .env /usr/src/hourserents/
RUN npm install

# Bundle app source
COPY src /usr/src/hourserents/src
COPY config.dev.js /usr/src/hourserents/

RUN NODE_ENV=production  npm run build

EXPOSE 4040

CMD ["npm", "start"]