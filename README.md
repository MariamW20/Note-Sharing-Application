# NoteShare - Modern Note-Taking App# Note-Sharing Application



A beautiful, full-stack note-taking application with markdown support, real-time preview and an enhanced user experience.A full-stack note-sharing application built with Node.js backend and React frontend, featuring user authentication, markdown support and real-time search.



## 🚀 Features## Features



- **📝 Markdown Support** - Write notes with full markdown syntax### Backend (Node.js + Express)

- **👁️ Real-time Preview** - Instantly see how your notes look- JWT-based authentication (register/login)

- **🔍 Smart Search** - Quickly find notes by title or content- RESTful API for note management

- **💾 Auto-save** - Your changes are saved automatically- In-memory database using JavaScript Maps

- **🎨 Modern UI** - Clean, responsive design with smooth animations- Search functionality across notes

- **📱 Mobile Friendly** - Works great on all devices- User-specific note isolation

- **🔐 User Authentication** - Secure login and registration

### Frontend (React + Vite)

## 📁 Project Structure- Modern, dark-themed UI inspired by documentation sites

- User authentication with protected routes

```- Rich markdown editor with live preview

note-sharing-app/- Real-time search across all notes

├── backend/           # Express.js API server- Responsive design for mobile and desktop

│   ├── server.js      # Main server file- Keyboard shortcuts (Ctrl/Cmd + S to save)

│   ├── db/            # Database configuration- Word and character count

│   ├── middleware/    # Authentication middleware

│   └── routes/        # API routes (auth, notes)## Project Structure

│

├── frontend/          # Next.js application\`\`\`

│   ├── app/           # Next.js app router pagesnote-sharing-app/

│   ├── components/    # React components├── backend/

│   ├── lib/           # Utility functions│   ├── db/

│   └── styles/        # Global styles│   │   └── index.js          # In-memory database

││   ├── middleware/

└── README.md          # This file│   │   └── auth.js           # JWT authentication

```│   ├── routes/

│   │   ├── auth.js           # Auth endpoints

## 🛠️ Tech Stack│   │   └── notes.js          # Notes endpoints

│   ├── server.js             # Express server

### Frontend│   └── package.json

- **Next.js 15** - React framework with App Router│

- **TypeScript** - Type-safe code└── frontend/

- **Tailwind CSS** - Utility-first styling    ├── src/

- **Radix UI** - Accessible component primitives    │   ├── components/

- **Lucide React** - Beautiful icons    │   │   ├── Header.jsx

- **Marked** - Markdown parser    │   │   ├── NotesList.jsx

- **DOMPurify** - XSS protection    │   │   ├── NoteEditor.jsx

    │   │   └── MarkdownPreview.jsx

### Backend    │   ├── context/

- **Node.js** - JavaScript runtime    │   │   └── AuthContext.jsx

- **Express** - Web framework    │   ├── pages/

- **JWT** - Authentication    │   │   ├── Login.jsx

- **bcryptjs** - Password hashing    │   │   ├── Register.jsx

- **CORS** - Cross-origin resource sharing    │   │   └── Dashboard.jsx

    │   ├── styles/

## 🚀 Getting Started    │   │   ├── auth.css

    │   │   ├── dashboard.css

### Prerequisites    │   │   └── markdown.css

    │   ├── App.jsx

- Node.js 18+ installed    │   ├── main.jsx

- npm or pnpm package manager    │   └── index.css

    └── package.json

### Installation\`\`\`



1. **Clone the repository**## Installation & Setup

   ```bash

   git clone <repository-url>### Backend Setup

   cd note-sharing-app

   ```\`\`\`bash

cd backend

2. **Install dependencies**npm install

npm run dev

   **Backend:**\`\`\`

   ```bash

   cd backendThe backend server will run on `http://localhost:3001`

   npm install

   ```### Frontend Setup



   **Frontend:**\`\`\`bash

   ```bashcd frontend

   cd ../frontendnpm install

   npm installnpm run dev

   # or\`\`\`

   pnpm install

   ```The frontend app will run on `http://localhost:3000`



### Running the Application## API Endpoints



1. **Start the backend server**### Authentication

   ```bash- \`POST /api/auth/register\` - Register new user

   cd backend- \`POST /api/auth/login\` - Login user

   npm run dev

   ```### Notes (Protected)

   The API server will run on `http://localhost:3001`- \`GET /api/notes\` - Get all notes for current user

- \`GET /api/notes/search?q=query\` - Search notes

2. **Start the frontend (in a new terminal)**- \`GET /api/notes/:id\` - Get single note

   ```bash- \`POST /api/notes\` - Create new note

   cd frontend- \`PUT /api/notes/:id\` - Update note

   npm run dev- \`DELETE /api/notes/:id\` - Delete note

   # or

   pnpm dev## Technologies Used

   ```

   The app will be available at `http://localhost:3000`### Backend

- Node.js

## 📝 Usage- Express.js

- JWT (jsonwebtoken)

1. **Register** - Create a new account- bcryptjs

2. **Login** - Sign in with your credentials- CORS

3. **Create Notes** - Click "New Note" to start writing

4. **Edit Notes** - Click on any note to edit it### Frontend

5. **Search** - Use the search bar to find specific notes- React 18

6. **Delete** - Hover over a note and click the trash icon- React Router v6

- Axios

## 🎨 Enhanced UX Features- Marked (Markdown parser)

- DOMPurify (XSS protection)

- ✨ **Smooth Animations** - Fade-in effects and transitions- Vite

- 🔄 **Loading States** - Visual feedback during operations

- 💫 **Hover Effects** - Interactive button and card animations## Features in Detail

- 📊 **Live Word Count** - Track your writing progress

- 🎯 **Auto-save Indicator** - See when your work is saved### Markdown Support

- 📱 **Responsive Sidebar** - Mobile-optimized navigationThe editor supports full GitHub Flavored Markdown including:

- 🎭 **Gradient Accents** - Modern visual design- Headers (H1-H6)

- Bold, italic, strikethrough

## 🔧 Development- Lists (ordered and unordered)

- Code blocks and inline code

### Backend Scripts- Links and images

- `npm start` - Run production server- Blockquotes

- `npm run dev` - Run with auto-reload- Tables

- Task lists

### Frontend Scripts

- `npm run dev` - Development server### Search

- `npm run build` - Build for productionReal-time search across note titles and content with instant results.

- `npm start` - Run production build

- `npm run lint` - Run ESLint### Security

- Password hashing with bcrypt

## 📦 Building for Production- JWT token authentication

- XSS protection with DOMPurify

1. **Build the frontend**- User-specific note isolation

   ```bash

   cd frontend## Development Notes

   npm run build

   ```- The backend uses an in-memory database, so data will be lost on server restart

- For production, replace with a persistent database (PostgreSQL, MongoDB, etc.)

2. **Run the production server**- Update JWT_SECRET environment variable in production

   ```bash- Consider adding rate limiting and additional security measures for production use

   npm start

   ```## License



## 🤝 ContributingMIT

\`\`\`

Contributions are welcome! Please feel free to submit a Pull Request.\`\`\`



## 📄 License



This project is licensed under the MIT License.<AssistantMessageContentPart partEncoded="eyJ0eXBlIjoidGFzay13YWl0aW5nLXYxIiwiY3JlYXRlZEF0IjoxNzYwNjE5NDUyMTg2LCJmaW5pc2hlZEF0IjoxNzYwNjE5NDUyMTg2LCJpZCI6InhJTkdUeWd2VXE4RlVRYU0iLCJsYXN0UGFydFNlbnRBdCI6MTc2MDYxOTQ1MjE4NiwicGFydHMiOlt7InR5cGUiOiJ0b29sLWNhbGxzIn1dfQ==" />



## 🌟 Acknowledgments



- Built with modern web technologies<AssistantMessageContentPart partEncoded="eyJ0eXBlIjoidGFzay1tYW5hZ2UtdG9kb3MtdjEiLCJpZCI6Imw5cWwwVDZncWl5bVZBcTAiLCJ0YXNrTmFtZUFjdGl2ZSI6IkNvbXBsZXRpbmcgcHJvamVjdCIsInRvb2xDYWxsSWQiOiJ0b29sdV8wMVNEM0N2NkJuZkhXenJBcFl5MlVrazYiLCJ0YXNrTmFtZUNvbXBsZXRlIjoiUHJvamVjdCBjb21wbGV0ZWQiLCJjcmVhdGVkQXQiOjE3NjA2MTk0NTMzOTEsImZpbmlzaGVkQXQiOm51bGwsInBhcnRzIjpbXSwibGFzdFBhcnRTZW50QXQiOm51bGx9" />

- Designed for optimal user experience
- Open source and free to use

---

**Enjoy taking notes!** 📝✨
