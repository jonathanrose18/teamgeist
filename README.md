# Teamgeist

Minimal setup to run the API, web app, and Postgres locally or via Docker.

## Prerequisites
- Docker & Docker Compose
- Node 22 + npm (only needed for local hot-reload outside Docker)

## Environment files
- API envs live in `api/.env` (example: `api/.env.example`).
- App envs live in `app/.env` (example: `app/.env.example`).
- For Docker, keep API `DATABASE_URL` host as `db` and `PORT=4000`; app `VITE_API_URL=http://api:4000`.
- For local-only dev, point API to `localhost` and set app `VITE_API_URL=http://localhost:4000`.

## Run everything with Docker (recommended)
From the repo root:
```sh
docker compose up --build
```
Services:
- Frontend: http://localhost:3000
- API: http://localhost:4000
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
# set VITE_API_URL=http://localhost:4000
npm install
npm run dev                 # Vite on 5173 by default
```
Switch env hosts back to `db`/`http://api:4000` when returning to full Docker.

## Build
- Docker images: `docker compose build`
- API only: `cd api && npm run build`
- App only: `cd app && npm run build`

## Notes
- Keep env files out of git; commit only the `*.example` files.
- Frontend serves static build via Nginx in `app/Dockerfile`; API runs Node in `api/Dockerfile`.
