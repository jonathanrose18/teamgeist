# Teamgeist (Alpha)

## Self-Hosting

You can easily self-host this application using Docker Compose.

## Run everything with Docker (recommended)
From the repo root:
```sh
docker compose up --build
```
Services:
- Frontend: http://localhost:3000
- API: http://localhost:4000
- Adminer: http://localhost:8080
- Postgres: internal at `db:5432` (credentials come from `api/.env`)

## Hot-reload workflow (API + app locally, DB in Docker)
1) Start Postgres:
```sh
docker compose up db -d
```
2) API (`api/`):
```sh
cp .env.example .env        # if not present
# set DATABASE_URL to localhost here if using the local port
npm install
npm run dev                 # Hono dev server on 4000
```
3) App (`app/`):
```sh
cp .env.example .env        # if not present
# set VITE_API_URL=/api
npm install
npm run dev                 # Vite on 3000
```
Vite proxies `/api` requests to `http://localhost:4000` (configurable via `VITE_API_TARGET`).
Switch env hosts back to `db`/`http://api:4000` when returning to full Docker.

## Build
- Docker images: `docker compose build`
- API only: `cd api && npm run build`
- App only: `cd app && npm run build`