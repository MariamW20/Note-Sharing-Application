# NoteShare Backend# Notes Backend API



Express.js API server for the NoteShare application.A Node.js/Express backend for the note-sharing application with in-memory database.



## 📁 Structure## Features



```- User authentication (register/login) with JWT

backend/- CRUD operations for notes

├── server.js          # Main Express server- Search functionality

├── package.json       # Dependencies and scripts- In-memory data storage using JavaScript Maps

├── db/

│   └── index.js      # Database configuration (in-memory)## Installation

├── middleware/

│   └── auth.js       # JWT authentication middleware\`\`\`bash

└── routes/cd backend

    ├── auth.js       # Authentication endpointsnpm install

    └── notes.js      # Notes CRUD endpoints\`\`\`

```

## Running the Server

## 🚀 API Endpoints

\`\`\`bash

### Authentication# Development mode with auto-reload

npm run dev

- **POST** `/api/auth/register` - Register a new user

  ```json# Production mode

  {npm start

    "email": "user@example.com",\`\`\`

    "password": "password123"

  }The server will run on `http://localhost:3001`

  ```

## API Endpoints

- **POST** `/api/auth/login` - Login user

  ```json### Authentication

  {

    "email": "user@example.com",- `POST /api/auth/register` - Register new user

    "password": "password123"- `POST /api/auth/login` - Login user

  }

  ```### Notes (Protected)



### Notes- `GET /api/notes` - Get all notes for current user

- `GET /api/notes/search?q=query` - Search notes

All note endpoints require authentication (JWT token in Authorization header).- `GET /api/notes/:id` - Get single note

- `POST /api/notes` - Create new note

- **GET** `/api/notes` - Get all notes for authenticated user- `PUT /api/notes/:id` - Update note

- **POST** `/api/notes` - Create a new note- `DELETE /api/notes/:id` - Delete note

- **PUT** `/api/notes/:id` - Update a note

- **DELETE** `/api/notes/:id` - Delete a note## Environment Variables



### Health Check- `PORT` - Server port (default: 3001)

- `JWT_SECRET` - Secret key for JWT tokens (change in production)

- **GET** `/api/health` - Server health status

## 🛠️ Installation

```bash
cd backend
npm install
```

## 🚀 Running

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:3001`

## 🔐 Security

- Passwords are hashed using bcryptjs
- JWT tokens for authentication
- CORS enabled for cross-origin requests

## 📝 Notes

- Currently uses in-memory storage (data will be lost on restart)
- For production, consider adding a real database (MongoDB, PostgreSQL, etc.)
