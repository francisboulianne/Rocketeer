Local development

Using docker

A dev Docker setup is available using `docker-compose.dev.yml` and the projects' `Dockerfile.dev`.

With [Docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) installed:

```bash
# build the app
docker-compose -f docker-compose.dev.yaml build

# run it
docker-compose -f docker-compose.dev.yaml up -d
```

Additionally, you can do both at the same time with `docker-compose -f docker-compose.dev.yaml up --build -d `.

Access the app

After running the app with Docker, the frontend will be served at `http://localhost:3000` and the backend at `http://localhost:8080`.
