#!/bin/bash

docker stop node
docker rm node
docker run -p 5002:5002 -d --name node sumit/node-web-app
