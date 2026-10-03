# Nox-Arena 🎮

A full-stack web platform for hosting and playing 2-player browser games. A React frontend loads the game library from an Express + MySQL REST API, and players pick a game and play it on the same screen. The backend includes JWT authentication and role-based access control (user, uploader, admin).

## Features

- **Game library** fetched from the API and displayed on an animated landing page
- **Two playable 2-player canvas games** (same keyboard, same screen):
  - **Tic Tac Toe**: move with `W A S D` or arrow keys, place with `Enter`
  - **Ping Pong**: Player 1 uses `W` / `S`, Player 2 uses `↑` / `↓`
- **REST API** built with Express 5, Knex and MySQL
- **JWT authentication** (2-hour tokens) with signup and login
- **Role-based access control**: separate `/users`, `/uploaders` and `/admin` route groups protected by middleware
- **Admin CRUD** for users and games
- **Input validation** with express-validator
- **Slug-based game registry**: the `slug` stored in the database maps to a game class in the frontend

## Tech Stack

| Layer    | Technology |
| -------- | ---------- |
| Frontend | React 19, Vite, Tailwind CSS 4, HTML5 Canvas |
| Backend  | Node.js, Express 5, Knex.js, mysql2 |
| Database | MySQL |
| Auth     | jsonwebtoken (JWT), express-validator |

## Project Structure

```
Nox-Arena/
├── Game Host App/
│   ├── Game Host App Frontend/   # React + Vite app and game classes (src/games)
│   └── Game Host App Backend/    # Express API
│       ├── app/                  # routes, controllers, models, middleware, validators
│       └── schema.sql            # database schema + seed games
├── LICENSE
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20 or newer
- MySQL 8 or newer

### 1. Clone

```bash
git clone https://github.com/NoxNovaViper/Nox-Arena.git
cd Nox-Arena
```

### 2. Set up the database

```bash
cd "Game Host App/Game Host App Backend"
mysql -u root -p < schema.sql
```

This creates the `game_host` database with `users` and `games` tables and adds the two games (`TTT`, `PP`).

### 3. Configure and start the backend

Copy `app/.env.example` to `app/.env` and fill in your values. Variable names are case-sensitive.

```
PORT=4000
JWT_SECRET=replace_with_a_long_random_string
DB_host=127.0.0.1
DB_user=root
DB_password=your_mysql_password
DB_name=game_host
```

Then:

```bash
npm install
npm start
```

The API runs at `http://localhost:4000`. Keep port `4000`, because the frontend calls that address.

### 4. Start the frontend

In a second terminal:

```bash
cd "Game Host App/Game Host App Frontend"
npm install
npm run dev
```

Open `http://localhost:5173`.

### 5. (Optional) Create an admin

Signup always creates a normal `user`. To get an admin account, sign up first, then promote it in MySQL:

```sql
UPDATE users SET role = 'admin' WHERE username = 'your_username';
```

## API Overview

Responses use the shape `{ "success": true, "message": "Ok", "data": ... }`. Protected routes need the header `Authorization: Bearer <token>`.

| Method | Route | Access | Description |
| ------ | ----- | ------ | ----------- |
| POST | `/signup` | public | Create a user account |
| POST | `/login` | public | Returns a JWT in `data` |
| GET | `/games` | public | List all games |
| GET | `/games/:id` | public | Get one game |
| GET/PUT | `/users/...` | `user` role | Read and update account data |
| GET/PUT | `/uploaders/...` | `uploader` role | Uploader routes |
| GET/POST/PUT/DELETE | `/admin/users/...`, `/admin/games/...` | `admin` role | Full management of users and games |

Example:

```bash
curl -X POST http://localhost:4000/login \
  -H "Content-Type: application/json" \
  -d '{"username":"your_username","password":"your_password"}'
```

## Adding a New Game

1. Create the game class in `Game Host App Frontend/src/games/<NAME>/`.
2. Register it in the `registery` object in `src/App.jsx`: `NAME: YourGameClass`.
3. Add a row to the `games` table whose `slug` matches that key.

## Known Limitations

This is a learning project, and these are the next things I plan to improve:

- Passwords are stored and compared as plain text. They should be hashed with bcrypt.
- CORS currently allows all origins and should be restricted in production.
- The frontend has no login or signup screen yet; authentication is available through the API only.
- Games are local (same screen). Online multiplayer is not implemented.

## Roadmap

- [ ] Hash passwords with bcrypt
- [ ] Login and signup UI
- [ ] Online multiplayer with Socket.io
- [ ] Uploader dashboard for adding new games
- [ ] Deployment

## Security

Never commit `.env` files. Use `app/.env.example` as a template and keep real secrets only on your own machine or hosting provider.

## License

GPL-3.0. See [LICENSE](LICENSE).

## Author

**NoxNovaViper**: [github.com/NoxNovaViper](https://github.com/NoxNovaViper)
