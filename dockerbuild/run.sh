#!/bin/bash
docker stop docker-build
docker rm docker-build
docker run -p 5002:5002 -d --name node sumit/docker-build-app
