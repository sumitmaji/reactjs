#!/bin/bash
docker stop docker-build
docker rm docker-build
docker run -p 5002:5002 -d --name docker-build sumit/docker-build-app
