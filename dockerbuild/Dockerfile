from ubuntu:xenial

RUN apt-get update \
&& apt-get install curl \
&& curl -sL https://deb.nodesource.com/setup_8.x | bash - \
&& apt-get install -y docker.io \
nodejs \
git \
build-essential \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN node -v

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
