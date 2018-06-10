#!/bin/bash
docker stop docker-build
docker rm docker-build
docker run -v /var/run/docker.sock:/var/run/docker.sock -p 5002:5002 -d --name docker-build sumit/docker-build-app
