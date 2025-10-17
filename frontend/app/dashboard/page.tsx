"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, LogOut, Plus, Search, Menu, X } from "lucide-react"
import { NotesList } from "@/components/notes-list"
import { NoteEditor } from "@/components/note-editor"
import { cn } from "@/lib/utils"

interface Note {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [notes, setNotes] = useState<Note[]>([])
  const [selectedNote, setSelectedNote] = useState<Note | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [user, setUser] = useState<{ email: string } | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem("token")
    const userData = localStorage.getItem("user")

    if (!token || !userData) {
      router.push("/login")
      return
    }

    setUser(JSON.parse(userData))

    // Simulate loading
    setTimeout(() => {
      // Load mock notes
      const mockNotes: Note[] = [
        {
          id: "1",
          title: "Welcome to NoteShare",
          content:
            "# Welcome!\n\nThis is your first note. You can edit it or create new ones.\n\n## Features\n- **Markdown support**\n- Real-time preview\n- Search functionality\n- Auto-save\n\n## Getting Started\nStart typing in the editor to see the magic happen!",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ]
      setNotes(mockNotes)
      setSelectedNote(mockNotes[0])
      setIsLoading(false)
    }, 800)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    router.push("/")
  }

  const handleCreateNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "Untitled Note",
      content: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setNotes([newNote, ...notes])
    setSelectedNote(newNote)
  }

  const handleUpdateNote = (updatedNote: Note) => {
    setNotes(notes.map((n) => (n.id === updatedNote.id ? updatedNote : n)))
    setSelectedNote(updatedNote)
  }

  const handleDeleteNote = (noteId: string) => {
    const filtered = notes.filter((n) => n.id !== noteId)
    setNotes(filtered)
    if (selectedNote?.id === noteId) {
      setSelectedNote(filtered[0] || null)
    }
  }

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  if (!user) {
    return null
  }

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-sm text-muted-foreground">Loading your notes...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              NoteShare
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:inline">{user.email}</span>
            <Button variant="ghost" size="icon" onClick={handleLogout} title="Logout" className="hover:bg-destructive/10 hover:text-destructive transition-colors">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Sidebar */}
        <aside className={cn(
          "w-80 border-r border-border flex flex-col bg-muted/30 transition-all duration-300 ease-in-out",
          "lg:relative absolute inset-y-0 left-0 z-40",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}>
          <div className="p-4 space-y-3">
            <Button onClick={handleCreateNote} className="w-full group hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
              <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform duration-200" />
              New Note
            </Button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 transition-all duration-200 focus:shadow-md"
              />
            </div>
          </div>
          <NotesList
            notes={filteredNotes}
            selectedNote={selectedNote}
            onSelectNote={(note) => {
              setSelectedNote(note)
              if (window.innerWidth < 1024) {
                setSidebarOpen(false)
              }
            }}
            onDeleteNote={handleDeleteNote}
          />
        </aside>

        {/* Backdrop for mobile */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Editor */}
        <main className="flex-1 overflow-hidden">
          {selectedNote ? (
            <NoteEditor note={selectedNote} onUpdate={handleUpdateNote} />
          ) : (
            <div className="h-full flex items-center justify-center text-muted-foreground">
              <div className="text-center space-y-4 animate-in fade-in-50 duration-500">
                <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-50 animate-pulse" />
                <div>
                  <p className="text-lg font-medium mb-2">No note selected</p>
                  <p className="text-sm">Select a note or create a new one to get started</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
