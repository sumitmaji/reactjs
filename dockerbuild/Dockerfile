from ubuntu:xenial

RUN apt-get update \
apt-get install -y docker.io \
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - \
nodejs


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY server/package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

COPY server/index.js .

EXPOSE 5002

CMD [ "npm", "start" ]
