# Note-Sharing Application# Note-Sharing Application NoteShare - Modern Note-Taking App Note-Sharing Application



A full-stack note-sharing application built with Node.js backend and Next.js frontend, featuring user authentication, markdown support, and real-time search.



## 🚀 FeaturesA full-stack note-sharing application built with Node.js backend and Next.js frontend, featuring user authentication, markdown support and real-time search.



- **📝 Markdown Support** - Write notes with full markdown syntax

- **👁️ Real-time Preview** - Instantly see how your notes look

- **🔍 Smart Search** - Quickly find notes by title or content## 🚀 Features of the Note-Sharing Application

- **💾 Auto-save** - Your changes are saved automatically

- **🎨 Modern UI** - Clean, responsive design with smooth animations

- **📱 Mobile Friendly** - Works great on all devices

- **🔐 User Authentication** - Secure login and registration- **📝 Markdown Support** - Write notes with full markdown syntaxA full-stack note-sharing application built with Node.js backend and Next.js frontend, featuring user authentication, markdown support and real-time search.



## 📁 Project Structure- **👁️ Real-time Preview** - Instantly see how your notes look



```- **🔍 Smart Search** - Quickly find notes by title or content

note-sharing-application/

├── backend/           # Express.js API server- **💾 Auto-save** - Your changes are saved automatically

│   ├── server.js      # Main server file

│   ├── db/            # Database configuration- **🎨 Modern UI** - Clean, responsive design with smooth animations 🚀

│   ├── middleware/    # Authentication middleware

│   └── routes/        # API routes (auth, notes)- **📱 Mobile Friendly** - Works great on all devices

│

├── frontend/          # Next.js application- **🔐 User Authentication** - Secure login and registration

│   ├── app/           # Next.js app router pages

│   ├── components/    # React components

│   ├── lib/           # Utility functions

│   └── styles/        # Global styles## 📁 Project Structure- **📝 Markdown Support** 

│

└── README.md          # This file

```

```- **👁️ Real-time Preview** - Instantly see how your notes look- JWT-based authentication (register/login)

## 🛠️ Tech Stack

note-sharing-application/

### Frontend

- **Next.js 15** - React framework with App Router├── backend/           # Express.js API server- Smart Search- Quickly find notes by title or content- RESTful API for note management

- **TypeScript** - Type-safe code

- **Tailwind CSS** - Utility-first styling│   ├── server.js      # Main server file

- **Radix UI** - Accessible component primitives

- **Lucide React** - Beautiful icons│   ├── db/            # Database configuration- Auto-save- Your changes are saved automatically- In-memory database using JavaScript Maps

- **Marked** - Markdown parser

- **DOMPurify** - XSS protection│   ├── middleware/    # Authentication middleware



### Backend│   └── routes/        # API routes (auth, notes)

- **Node.js** - JavaScript runtime

- **Express** - Web framework│

- **JWT** - Authentication

- **bcryptjs** - Password hashing├── frontend/          # Next.js application- Mobile Friendly - Works great on all devices- User-specific note isolation

- **CORS** - Cross-origin resource sharing

│   ├── app/           # Next.js app router pages

## 🚀 Getting Started

│   ├── components/    # React components-User Authentication - Secure login and registration

### Prerequisites

│   ├── lib/           # Utility functions

- Node.js 18+ installed

- npm or pnpm package manager│   └── styles/        # Global styles### Frontend (React + Vite)



### Installation│



1. **Clone the repository**└── README.md          # This file##Project Structure- Modern, dark-themed UI inspired by documentation sites



   ```bash```

   git clone https://github.com/MariamW20/Note-Sharing-Application.git

   cd note-sharing-application- User authentication with protected routes

   ```

## 🛠️ Tech Stack

2. **Install dependencies**

```- Rich markdown editor with live preview

   **Backend:**

   ```bashFrontend

   cd backend

   npm install-Next.js 15 - React framework with App Routernote-sharing-app/- Real-time search across all notes

   ```

-TypeScript - Type-safe code

   **Frontend:**

   ```bash-Tailwind CSS - Utility-first styling├── backend/           # Express.js API server- Responsive design for mobile and desktop

   cd frontend

   npm install-Radix UI - Accessible component primitives

   ```

-Lucide React - Beautiful icons│   ├── server.js      # Main server file- Keyboard shortcuts (Ctrl/Cmd + S to save)

### Running the Application

-Marked - Markdown parser

1. **Start the backend server**

-DOMPurify - XSS protection│   ├── db/            # Database configuration- Word and character count

   ```bash

   cd backend

   npm run dev

   ```Backend│   ├── middleware/    # Authentication middleware



   The API server will run on `http://localhost:3001`-Node.js - JavaScript runtime



2. **Start the frontend (in a new terminal)**-Express - Web framework│   └── routes/        # API routes (auth, notes)## Project Structure



   ```bash-JWT - Authentication

   cd frontend

   npm run dev-bcryptjs - Password hashing│

   ```

-CORS - Cross-origin resource sharing

   The app will be available at `http://localhost:3000`

├── frontend/          # Next.js application\`\`\`

## 📝 Usage

Getting Started

1. **Register** - Create a new account

2. **Login** - Sign in with your credentials│   ├── app/           # Next.js app router pagesnote-sharing-app/

3. **Create Notes** - Click "New Note" to start writing

4. **Edit Notes** - Click on any note to edit itPrerequisites

5. **Search** - Use the search bar to find specific notes

6. **Delete** - Hover over a note and click the trash icon│   ├── components/    # React components├── backend/



## 🎨 Enhanced UX Features- Node.js 18+ installed



- ✨ **Smooth Animations** - Fade-in effects and transitions- npm or pnpm package manager│   ├── lib/           # Utility functions│   ├── db/

- 🔄 **Loading States** - Visual feedback during operations

- 💫 **Hover Effects** - Interactive button and card animations

- 📊 **Live Word Count** - Track your writing progress

- 🎯 **Auto-save Indicator** - See when your work is savedInstallation│   └── styles/        # Global styles│   │   └── index.js          # In-memory database

- 📱 **Responsive Sidebar** - Mobile-optimized navigation

- 🎭 **Gradient Accents** - Modern visual design



## 🔧 Development1. Clone the repository││   ├── middleware/



### Backend Scripts

- `npm start` - Run production server

- `npm run dev` - Run with auto-reload   ```bash└── README.md          # This file│   │   └── auth.js           # JWT authentication



### Frontend Scripts   git clone https://github.com/MariamW20/note-sharing-application.git

- `npm run dev` - Development server

- `npm run build` - Build for production   cd note-sharing-application```│   ├── routes/

- `npm start` - Run production build

- `npm run lint` - Run ESLint   ```



## 📦 Building for Production│   │   ├── auth.js           # Auth endpoints



1. **Build the frontend**2. **Install dependencies**



   ```bash## 🛠️ Tech Stack│   │   └── notes.js          # Notes endpoints

   cd frontend

   npm run build   **Backend:**

   ```

   ```bash│   ├── server.js             # Express server

2. **Run the production server**

   cd backend

   ```bash

   npm start   npm install### Frontend│   └── package.json

   ```

   ```

## 🤝 Contributing

- **Next.js 15** - React framework with App Router│

Contributions are welcome! Please feel free to submit a Pull Request.

   **Frontend:**

## 📄 License

   ```bash- **TypeScript** - Type-safe code└── frontend/

This project is licensed under the MIT License.

   cd ../frontend

## 🌟 Acknowledgments

   npm install- **Tailwind CSS** - Utility-first styling    ├── src/

- Built with modern web technologies

- Designed for optimal user experience   # or

- Open source and free to use

   pnpm install- **Radix UI** - Accessible component primitives    │   ├── components/

---

   ```

**Enjoy taking notes!** 📝✨

- **Lucide React** - Beautiful icons    │   │   ├── Header.jsx

### Running the Application

- **Marked** - Markdown parser    │   │   ├── NotesList.jsx

1. **Start the backend server**

- **DOMPurify** - XSS protection    │   │   ├── NoteEditor.jsx

   ```bash

   cd backend    │   │   └── MarkdownPreview.jsx

   npm run dev

   ```### Backend    │   ├── context/



   The API server will run on `http://localhost:3001`- **Node.js** - JavaScript runtime    │   │   └── AuthContext.jsx



2. **Start the frontend (in a new terminal)**- **Express** - Web framework    │   ├── pages/



   ```bash- **JWT** - Authentication    │   │   ├── Login.jsx

   cd frontend

   npm run dev- **bcryptjs** - Password hashing    │   │   ├── Register.jsx

   # or

   pnpm dev- **CORS** - Cross-origin resource sharing    │   │   └── Dashboard.jsx

   ```

    │   ├── styles/

   The app will be available at `http://localhost:3000`

## 🚀 Getting Started    │   │   ├── auth.css

## 📝 Usage

    │   │   ├── dashboard.css

1. **Register** - Create a new account

2. **Login** - Sign in with your credentials### Prerequisites    │   │   └── markdown.css

3. **Create Notes** - Click "New Note" to start writing

4. **Edit Notes** - Click on any note to edit it    │   ├── App.jsx

5. **Search** - Use the search bar to find specific notes

6. **Delete** - Hover over a note and click the trash icon- Node.js 18+ installed    │   ├── main.jsx



## 🎨 Enhanced UX Features- npm or pnpm package manager    │   └── index.css



- ✨ **Smooth Animations** - Fade-in effects and transitions    └── package.json

- 🔄 **Loading States** - Visual feedback during operations

- 💫 **Hover Effects** - Interactive button and card animations### Installation\`\`\`

- 📊 **Live Word Count** - Track your writing progress

- 🎯 **Auto-save Indicator** - See when your work is saved

- 📱 **Responsive Sidebar** - Mobile-optimized navigation

- 🎭 **Gradient Accents** - Modern visual design1. **Clone the repository**## Installation & Setup



## 🔧 Development   ```bash



### Backend Scripts   git clone <repository-url>### Backend Setup

- `npm start` - Run production server

- `npm run dev` - Run with auto-reload   cd note-sharing-app



### Frontend Scripts   ```\`\`\`bash

- `npm run dev` - Development server

- `npm run build` - Build for productioncd backend

- `npm start` - Run production build

- `npm run lint` - Run ESLint2. **Install dependencies**npm install



## 📦 Building for Productionnpm run dev



1. **Build the frontend**   **Backend:**\`\`\`



   ```bash   ```bash

   cd frontend

   npm run build   cd backendThe backend server will run on `http://localhost:3001`

   ```

   npm install

2. **Run the production server**

   ```### Frontend Setup

   ```bash

   npm start

   ```

   **Frontend:**\`\`\`bash

## 🤝 Contributing

   ```bashcd frontend

Contributions are welcome! Please feel free to submit a Pull Request.

   cd ../frontendnpm install

## 📄 License

   npm installnpm run dev

This project is licensed under the MIT License.

   # or\`\`\`

## 🌟 Acknowledgments

   pnpm install

- Built with modern web technologies

- Designed for optimal user experience   ```The frontend app will run on `http://localhost:3000`

- Open source and free to use



---

### Running the Application## API Endpoints

**Enjoy taking notes!** 📝✨



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
