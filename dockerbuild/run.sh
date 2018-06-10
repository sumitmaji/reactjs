#!/bin/bash
source config
docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME
docker run -v /var/run/docker.sock:/var/run/docker.sock -p 5002:5002 -d --name $CONTAINER_NAME sumit/$REPO_NAME
