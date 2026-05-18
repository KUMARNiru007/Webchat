# Webchat

A mini real-time group chat app. Users join with a display name and send messages instantly using Socket.IO.

## Tech stack

- **Frontend:** React, Vite, Tailwind CSS, Socket.IO client
- **Backend:** Express, Socket.IO
- **Docker:** Single container serves the API and built UI on port 3000

## Quick start (Docker)

Requires [Docker Desktop](https://www.docker.com/products/docker-desktop/) (or Docker Engine + Compose).

```bash
docker compose up --build
```

Open **http://localhost:3000** in your browser.

Stop the app:

```bash
docker compose down
```

### Test real-time chat

1. Open http://localhost:3000 in one browser window.
2. Open the same URL in a second window (incognito or another browser).
3. Enter different names and send messages — they should appear on the other client right away.

## Local development

Run the backend and frontend in separate terminals.

**Backend** (port 3000):

```bash
cd backend
npm install
npm run dev
```

**Frontend** (port 5173):

```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:5173**. The UI connects to the API at http://localhost:3000.

## Project structure

```
Webchat/
├── backend/          # Express + Socket.IO server
├── frontend/         # React + Vite client
├── Dockerfile
└── docker-compose.yml
```

## How it works

- All users join one room (`group`).
- Messages are broadcast to everyone else in the room.
- Typing indicators show when someone is composing a message.
