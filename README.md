Local development

With [Docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) installed:

```bash
# build the app
docker-compose -f docker-compose.dev.yaml build

# run it
docker-compose -f docker-compose.dev.yaml up -d
```

Both at the same time with `docker-compose -f docker-compose.dev.yaml up --build -d `.
the frontend will be served at `http://localhost:3000` and the backend at `http://localhost:8080`.
