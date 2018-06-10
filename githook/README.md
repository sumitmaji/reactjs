# GitHub Webhook

- To start nodejs server(nodemon):
```console
npm run dev
```
- The service forwards the github payload to locally running docker container on port 5002.
- The payload content should be of type application/json.
- Once the payload is successfully delivered to the container it returns `ok` message to github.

## Configuration
The following table lists the configurable parameters of the docker-build and their default values.

| Parameter                   | Description                                           | Default                |
|-----------------------------|-------------------------------------------------------|------------------------|
| `PORT`                      | The port on which nodejs application is running.      | `5002`                 |
