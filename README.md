# NoteShare Modern Note-Taking and Note-Sharing Application



A modern note-taking app built for people who love writing in markdown. Share your thoughts, organize your ideas, and keep everything in one place.



##A modern note-taking app built for people who love writing in markdown. Share your thoughts, organize your ideas, and keep everything in one place.



I built this because I wanted a simple, clean way to take notes online without all the bloat. It's a full-stack web app where you can write notes in markdown, see a live preview, and have everything automatically saved. Plus, it's just for you - every user has their own private space.



## Cool features



- **Markdown everywhere** - Write naturally with markdown syntax and see it rendered beautifully

- **Live preview** - Watch your notes come to life as you type

- **Quick search** - Find any note instantly by searching through titles and contentI built this because I wanted a simple, clean way to take notes online without all the bloat. It's a full-stack web app where you can write notes in markdown, see a live preview, and have everything automatically saved. Plus, it's just for you - every user has their own private space.

- **Auto-save** - Never lose your work, everything saves automatically

- **Works on mobile** - Take notes on your phone or tablet, the interface adapts

- **Dark theme** - Easy on the eyes with a modern dark UI

- **Fast and smooth** - Nice animations and transitions that don't get in the way## 🚀 Features



## What's inside?



The project is split into two main parts:- **Markdown everywhere** - Write naturally with markdown syntax and see it rendered beautifully



**Backend** (Node.js + Express)- **Live preview** - Watch your notes come to life as you type

- Handles user authentication with JWT tokens

- REST API for managing notes- **Quick search** - Find any note instantly by searching through titles and content- **📝 Markdown Support** - Write notes with full markdown syntax

- Simple in-memory database (you'll want to swap this for a real DB in production)

- User sessions and secure password hashing- **Auto-save** - Never lose your work, everything saves automatically



**Frontend** (Next.js + React)- **Works on mobile** - Take notes on your phone or tablet, the interface adapts- **👁️ Real-time Preview** - Instantly see how your notes look

- Modern React app with the Next.js 15 App Router

- TypeScript for type safety- **Dark theme** - Easy on the eyes with a modern dark UI

- Tailwind CSS for styling

- Rich component library from Radix UI- **Fast and smooth** - Nice animations and transitions that don't get in the way- **🔍 Smart Search** - Quickly find notes by title or content## 🚀 Features of the Note-Sharing Application

- Markdown rendering with syntax highlighting



## Getting started

## What's inside?- **💾 Auto-save** - Your changes are saved automatically

You'll need Node.js installed (version 18 or higher works great).



### Clone and install

The project is split into two main parts:- **🎨 Modern UI** - Clean, responsive design with smooth animations

```bash

git clone https://github.com/MariamW20/Note-Sharing-Application.git

cd note-sharing-application

```**Backend** (Node.js + Express)- **📱 Mobile Friendly** - Works great on all devices



Install dependencies for the backend:- Handles user authentication with JWT tokens

```bash

cd backend- REST API for managing notes- **🔐 User Authentication** - Secure login and registration- **📝 Markdown Support** - Write notes with full markdown syntaxA full-stack note-sharing application built with Node.js backend and Next.js frontend, featuring user authentication, markdown support and real-time search.

npm install

```- Simple in-memory database (you'll want to swap this for a real DB in production)



Then for the frontend:- User sessions and secure password hashing

```bash

cd frontend

npm install

```**Frontend** (Next.js + React) Project Structure- **👁️ Real-time Preview** - Instantly see how your notes look



### Run it locally- Modern React app with the Next.js 15 App Router



Start the backend server:- TypeScript for type safety

```bash

cd backend- Tailwind CSS for styling

npm run dev

```- Rich component library from Radix UI```- **🔍 Smart Search** - Quickly find notes by title or content



The API will be running at `http://localhost:3001`- Markdown rendering with syntax highlighting



In a new terminal, start the frontend:note-sharing-application/

```bash

cd frontend## Getting started

npm run dev

```├── backend/           # Express.js API server- **Auto-save** - Your changes are saved automatically



Open your browser to `http://localhost:3000` and you're good to go!You'll need Node.js installed (version 18 or higher works great).



## How to use it│   ├── server.js      # Main server file



1. Register for a new account### Clone and install

2. Log in with your credentials

3. Click "New Note" to create your first note│   ├── db/            # Database configuration- **Modern UI** - Clean, responsive design with smooth animations 🚀

4. Start typing in markdown - you'll see the preview update in real-time

5. Use the search bar to quickly find notes```bash

6. All your changes are saved automatically

git clone https://github.com/MariamW20/Note-Sharing-Application.git│   ├── middleware/    # Authentication middleware

## Project structure

cd note-sharing-application

```

├── backend/```│   └── routes/        # API routes (auth, notes)- **Mobile Friendly** - Works great on all devices

│   ├── server.js          # Main Express server

│   ├── db/                # Database setup

│   ├── middleware/        # Auth middleware

│   └── routes/            # API endpointsInstall dependencies for the backend:│

│

└── frontend/```bash

    ├── app/               # Next.js pages

    ├── components/        # React componentscd backend├── frontend/          # Next.js application- **User Authentication** - Secure login and registration

    ├── lib/               # Utilities

    └── styles/            # Global stylesnpm install

```

```│   ├── app/           # Next.js app router pages

## Tech stack



I used modern tools that I enjoy working with:

Then for the frontend:│   ├── components/    # React components

- **Next.js 15** - The React framework with the new App Router

- **TypeScript** - For catching bugs before they happen```bash

- **Tailwind CSS** - Fast styling without leaving your HTML

- **Radix UI** - Accessible, unstyled componentscd ../frontend│   ├── lib/           # Utility functions

- **Express** - Minimal and flexible Node.js framework

- **JWT** - Secure token-based authenticationnpm install

- **Marked** - Markdown parser that just works

```│   └── styles/        # Global styles ##Project Structure- ** Markdown Support** 

## Things to know



- The backend currently uses an in-memory database, so your notes will disappear when you restart the server. For production, you'll want to connect a real database like PostgreSQL or MongoDB.

- Make sure to change the JWT secret in production!### Run it locally│

- The frontend is configured to run on port 3000 and expects the backend on 3001.



## Want to contribute?

Start the backend server:└── README.md          # This file

Feel free to open issues or submit pull requests. I'm always open to ideas for making this better!

```bash

## License

cd backend```

MIT License - do whatever you want with this code.

npm run dev

---

``````- ** Real-time Preview** - Instantly see how your notes look- JWT-based authentication (register/login)

Made with ☕ and markdown



The API will be running at `http://localhost:3001`##  Tech Stack



In a new terminal, start the frontend:note-sharing-application/

```bash

cd frontend### Frontend

npm run dev

```- **Next.js 15** - React framework with App Router├── backend/           # Express.js API server- Smart Search- Quickly find notes by title or content- RESTful API for note management



Open your browser to `http://localhost:3000` and you're good to go!- **TypeScript** - Type-safe code



## How to use it- **Tailwind CSS** - Utility-first styling│   ├── server.js      # Main server file



1. Register for a new account- **Radix UI** - Accessible component primitives

2. Log in with your credentials

3. Click "New Note" to create your first note- **Lucide React** - Beautiful icons│   ├── db/            # Database configuration- Auto-save- Your changes are saved automatically- In-memory database using JavaScript Maps

4. Start typing in markdown - you'll see the preview update in real-time

5. Use the search bar to quickly find notes- **Marked** - Markdown parser

6. All your changes are saved automatically

- **DOMPurify** - XSS protection│   ├── middleware/    # Authentication middleware

## Project structure



```

├── backend/### Backend│   └── routes/        # API routes (auth, notes)

│   ├── server.js          # Main Express server

│   ├── db/                # Database setup- **Node.js** - JavaScript runtime

│   ├── middleware/        # Auth middleware

│   └── routes/            # API endpoints- **Express** - Web framework│

│

└── frontend/- **JWT** - Authentication

    ├── app/               # Next.js pages

    ├── components/        # React components- **bcryptjs** - Password hashing├── frontend/          # Next.js application- Mobile Friendly - Works great on all devices- User-specific note isolation

    ├── lib/               # Utilities

    └── styles/            # Global styles- **CORS** - Cross-origin resource sharing

```

│   ├── app/           # Next.js app router pages

## Tech stack

## Getting Started

I used modern tools that I enjoy working with:

│   ├── components/    # React components-User Authentication - Secure login and registration

- **Next.js 15** - The React framework with the new App Router

- **TypeScript** - For catching bugs before they happen### Prerequisites

- **Tailwind CSS** - Fast styling without leaving your HTML

- **Radix UI** - Accessible, unstyled components│   ├── lib/           # Utility functions

- **Express** - Minimal and flexible Node.js framework

- **JWT** - Secure token-based authentication- Node.js 18+ installed

- **Marked** - Markdown parser that just works

- npm or pnpm package manager│   └── styles/        # Global styles### Frontend (React + Vite)

## Things to know



- The backend currently uses an in-memory database, so your notes will disappear when you restart the server. For production, you'll want to connect a real database like PostgreSQL or MongoDB.

- Make sure to change the JWT secret in production!### Installation│

- The frontend is configured to run on port 3000 and expects the backend on 3001.



## Want to contribute?

1. **Clone the repository**└── README.md          # This file##Project Structure- Modern, dark-themed UI inspired by documentation sites

Feel free to open issues or submit pull requests. I'm always open to ideas for making this better!



## License

   ```bash```

MIT License - do whatever you want with this code.

   git clone https://github.com/MariamW20/Note-Sharing-Application.git

---

   cd note-sharing-application- User authentication with protected routes

Made with ☕ and markdown

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



## Enhanced UX Features- Node.js 18+ installed



- **Smooth Animations** - Fade-in effects and transitions- npm or pnpm package manager│   ├── lib/           # Utility functions│   ├── db/

- **Loading States** - Visual feedback during operations

- **Hover Effects** - Interactive button and card animations

- **Live Word Count** - Track your writing progress

- **Auto-save Indicator** - See when your work is savedInstallation│   └── styles/        # Global styles│   │   └── index.js          # In-memory database

- **Responsive Sidebar** - Mobile-optimized navigation

- **Gradient Accents** - Modern visual design



## 🔧Development1. Clone the repository││   ├── middleware/



### Backend Scripts

- `npm start` - Run production server

- `npm run dev` - Run with auto-reload   ```bash└── README.md          # This file│   │   └── auth.js           # JWT authentication



### Frontend Scripts   git clone https://github.com/MariamW20/note-sharing-application.git

- `npm run dev` - Development server

- `npm run build` - Build for production   cd note-sharing-application```│   ├── routes/

- `npm start` - Run production build

- `npm run lint` - Run ESLint   ```



## Building for Production│   │   ├── auth.js           # Auth endpoints



1. **Build the frontend**2. **Install dependencies**



   ```bash## Tech Stack│   │   └── notes.js          # Notes endpoints

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

## Contributing

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

**Enjoy taking notes!** 

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



## Enhanced UX Features- npm or pnpm package manager    │   └── index.css



- **Smooth Animations** - Fade-in effects and transitions    └── package.json

- **Loading States** - Visual feedback during operations

- **Hover Effects** - Interactive button and card animations### Installation\`\`\`

- **Live Word Count** - Track your writing progress

- **Auto-save Indicator** - See when your work is saved

- **Responsive Sidebar** - Mobile-optimized navigation

- **Gradient Accents** - Modern visual design1. **Clone the repository**## Installation & Setup



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

## Contributing

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

**Enjoy taking notes!**



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

##  Enhanced UX Features- Marked (Markdown parser)

- DOMPurify (XSS protection)

-  **Smooth Animations** - Fade-in effects and transitions- Vite

-  **Loading States** - Visual feedback during operations

-  **Hover Effects** - Interactive button and card animations## Features in Detail

-  **Live Word Count** - Track your writing progress

-  **Auto-save Indicator** - See when your work is saved### Markdown Support

- **Responsive Sidebar** - Mobile-optimized navigationThe editor supports full GitHub Flavored Markdown including:

-  **Gradient Accents** - Modern visual design- Headers (H1-H6)

- Bold, italic, strikethrough

## Development- Lists (ordered and unordered)

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

## Building for Production- JWT token authentication

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



##  ContributingMIT

\`\`\`

Contributions are welcome! Please feel free to submit a Pull Request.\`\`\`



## 📄 License



This project is licensed under the MIT License.<AssistantMessageContentPart partEncoded="eyJ0eXBlIjoidGFzay13YWl0aW5nLXYxIiwiY3JlYXRlZEF0IjoxNzYwNjE5NDUyMTg2LCJmaW5pc2hlZEF0IjoxNzYwNjE5NDUyMTg2LCJpZCI6InhJTkdUeWd2VXE4RlVRYU0iLCJsYXN0UGFydFNlbnRBdCI6MTc2MDYxOTQ1MjE4NiwicGFydHMiOlt7InR5cGUiOiJ0b29sLWNhbGxzIn1dfQ==" />



##  Acknowledgments



- Built with modern web technologies<AssistantMessageContentPart partEncoded="eyJ0eXBlIjoidGFzay1tYW5hZ2UtdG9kb3MtdjEiLCJpZCI6Imw5cWwwVDZncWl5bVZBcTAiLCJ0YXNrTmFtZUFjdGl2ZSI6IkNvbXBsZXRpbmcgcHJvamVjdCIsInRvb2xDYWxsSWQiOiJ0b29sdV8wMVNEM0N2NkJuZkhXenJBcFl5MlVrazYiLCJ0YXNrTmFtZUNvbXBsZXRlIjoiUHJvamVjdCBjb21wbGV0ZWQiLCJjcmVhdGVkQXQiOjE3NjA2MTk0NTMzOTEsImZpbmlzaGVkQXQiOm51bGwsInBhcnRzIjpbXSwibGFzdFBhcnRTZW50QXQiOm51bGx9" />

- Designed for optimal user experience
- Open source and free to use

---

**Enjoy taking notes!** 
