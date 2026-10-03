# Nox-Arena 🎮

A MERN (MongoDB, Express, React, Node.js) stack based web application where players can engage in 2-player games online.

## Overview

Nox-Arena is a multiplayer gaming platform built with modern web technologies, featuring real-time gameplay through WebSocket connections and a responsive user interface powered by React and Tailwind CSS.

## Project Structure

```
Nox-Arena/
├── Game Host App/
│   ├── Game Host App Frontend/     # React + Vite frontend application
│   └── Game Host App Backend/      # Express.js + Node.js backend server
└── LICENSE                          # GPL-3.0 License
```

## Tech Stack

### Frontend
- **React** - UI framework for building interactive interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **ESLint** - Code quality and linting

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Socket.io** - Real-time bidirectional communication
- **MySQL 2** - Database driver
- **Knex.js** - SQL query builder
- **better-sqlite3** - Lightweight SQLite database
- **JWT (jsonwebtoken)** - Authentication tokens
- **dotenv** - Environment variable management

## Features

- 🎮 Real-time 2-player gaming experience
- 🔐 JWT-based authentication
- 📡 WebSocket support via Socket.io for live game updates
- 🎨 Modern, responsive UI with Tailwind CSS
- ⚡ Fast development experience with Vite
- 🗄️ Multiple database support (MySQL, SQLite)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MySQL server (if using MySQL backend)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NoxNovaViper/Nox-Arena.git
   cd Nox-Arena
   ```

2. **Backend Setup**
   ```bash
   cd "Game Host App/Game Host App Backend"
   npm install
   ```
   
   Create a `.env` file in the backend directory:
   ```
   PORT=5000
   NODE_ENV=development
   JWT_SECRET=your_jwt_secret_key
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_db_password
   DB_NAME=nox_arena
   ```

3. **Frontend Setup**
   ```bash
   cd "../Game Host App Frontend"
   npm install
   ```

### Running the Application

**Backend Server:**
```bash
cd "Game Host App/Game Host App Backend"
npm start
```

**Frontend Development:**
```bash
cd "Game Host App/Game Host App Frontend"
npm run dev
```

The frontend will be available at `http://localhost:5173` (default Vite port).

### Building for Production

**Frontend Build:**
```bash
npm run build
```

## Database Setup

The application supports multiple databases:
- **MySQL** - Primary production database
- **SQLite** (better-sqlite3) - Lightweight alternative

Configure your database connection in the `.env` file with appropriate credentials.

## API Documentation

The backend uses Express.js with RESTful endpoints and Socket.io for real-time game communication. Key features:

- User authentication with JWT
- Game room management
- Real-time game state synchronization
- Input validation using express-validator

## Security Notes

⚠️ **Important Security Reminders:**
- Never commit `.env` files to version control
- Keep `JWT_SECRET` confidential and use strong values
- Validate all user inputs on both client and server
- Use HTTPS in production
- Consider implementing rate limiting for API endpoints
- Regularly update dependencies for security patches

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Author

**NoxNovaViper** - [GitHub Profile](https://github.com/NoxNovaViper)

## Support

For support, questions, or issues, please open an issue on the GitHub repository.

---

**Last Updated:** October 2026  
**Status:** Active Development
