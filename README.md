# Portifolio


## How to run
- **Production:** `docker compose -f docker/prod/docker-compose.yml up --build`
- **agent:** 
    * build: `docker compose -f docker/agent/docker-compose.yml build --no-cache`
    * Up: `docker compose -f docker/agent/docker-compose.yml up -d`
    * Option: `docker compose -f docker/agent/docker-compose.yml up -d --build`
    * Run: `docker compose -f docker/agent/docker-compose.yml exec codex-agent sh`
    * call: `codex`



### clear all:
`docker system prune -a`

