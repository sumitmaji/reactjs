from FROM alpine:3.6

RUN apt-get update \
&& apt-get install -y curl \
&& curl -sL https://deb.nodesource.com/setup_8.x | bash - \
#&& apt-get install -y docker.io \
nodejs \
git \
&& -q wget https://dl.k8s.io/v1.10.0/kubernetes-client-darwin-amd64.tar.gz -O /tmp \
&& tar -xzvf /tmp/kubernetes-client-darwin-amd64.tar.gz -C /usr/local/bin/kubectl \
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


RUN mkdir -p scripts
ADD scripts/build.sh scripts/build.sh

EXPOSE 5003

CMD [ "npm", "start" ]
