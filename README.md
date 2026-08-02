# Portifolio


## How to run
- **Production:** `docker compose -f docker/prod/docker-compose.yml up --build`
- **agent:** 
    * build: `docker compose -f docker/agent/docker-compose.yml build --no-cache`
    * Up: `docker compose -f docker/agent/docker-compose.yml up -d`
    * Option: `docker compose -f docker/agent/docker-compose.yml up -d --build`
    * Run: `docker compose -f docker/agent/docker-compose.yml exec codex-agent sh`
    * call: `codex`
    * option: `codex --dangerously-bypass-approvals-and-sandbox`



### clear all:
`docker system prune -a`

