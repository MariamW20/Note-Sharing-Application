# NoteShare Frontend

Modern Next.js application for the NoteShare note-taking app.

## 📁 Structure

```
frontend/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landing page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── dashboard/         # Dashboard page
│   ├── login/             # Login page
│   └── register/          # Register page
│
├── components/            # React components
│   ├── note-editor.tsx   # Note editing component
│   ├── notes-list.tsx    # Notes list sidebar
│   ├── markdown-preview.tsx  # Markdown renderer
│   └── ui/               # UI component library
│
├── lib/                  # Utilities
│   └── utils.ts         # Helper functions
│
└── hooks/               # Custom React hooks
```

## 🎨 Enhanced UX Features

### Animations & Transitions
- **Fade-in effects** on page load
- **Smooth transitions** between edit/preview modes
- **Hover animations** on interactive elements
- **Loading spinners** with custom animations

### Responsive Design
- **Mobile-first** approach
- **Collapsible sidebar** on mobile devices
- **Touch-friendly** buttons and controls
- **Adaptive layouts** for all screen sizes

### Visual Feedback
- **Auto-save indicators** with check mark
- **Saving state** with spinner animation
- **Real-time word/character count**
- **Gradient accents** for branding
- **Hover effects** on cards and buttons

### User Experience
- **Instant search** with live filtering
- **Keyboard shortcuts** ready
- **Smooth scrolling** in note lists
- **Empty states** with helpful messages
- **Confirmation dialogs** for deletions

## 🛠️ Technologies

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **Lucide React** - Icon library
- **Marked** - Markdown parsing
- **DOMPurify** - XSS protection

## 🚀 Getting Started

```bash
cd frontend
npm install
# or
pnpm install
```

## 📜 Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Run ESLint

## 🎯 Key Components

### NoteEditor
Full-featured markdown editor with:
- Live preview toggle
- Auto-save functionality
- Word/character counter
- Syntax highlighting

### NotesList
Sidebar component featuring:
- Search functionality
- Note preview cards
- Delete confirmation
- Responsive design

### Dashboard
Main application view with:
- Three-column layout
- Mobile-optimized sidebar
- User authentication check
- Loading states

## 🎨 Styling

The app uses Tailwind CSS with custom CSS variables for theming:
- Customizable color scheme
- Dark mode support (via CSS variables)
- Consistent spacing and sizing
- Custom animations

## 🔧 Configuration

Key configuration files:
- `next.config.mjs` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS setup
- `tsconfig.json` - TypeScript configuration
- `components.json` - UI components config

## 📝 Environment Variables

Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 🚀 Deployment

Build the application:
```bash
npm run build
```

The app is optimized for deployment on:
- Any Node.js hosting platform
- Cloud providers (AWS, Azure, GCP)
- Container platforms (Docker, Kubernetes)

## 🎓 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)
