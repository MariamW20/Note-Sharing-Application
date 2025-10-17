"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface Note {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

interface NotesListProps {
  notes: Note[]
  selectedNote: Note | null
  onSelectNote: (note: Note) => void
  onDeleteNote: (noteId: string) => void
}

export function NotesList({ notes, selectedNote, onSelectNote, onDeleteNote }: NotesListProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  const getPreview = (content: string) => {
    return content.replace(/[#*`[\]]/g, "").slice(0, 60) + (content.length > 60 ? "..." : "")
  }

  return (
    <div className="flex-1 overflow-y-auto">
      {notes.length === 0 ? (
        <div className="p-8 text-center">
          <div className="animate-in fade-in-50 duration-500">
            <p className="text-sm text-muted-foreground mb-2">No notes found</p>
            <p className="text-xs text-muted-foreground">Create a new note to get started</p>
          </div>
        </div>
      ) : (
        <div className="p-2 space-y-1">
          {notes.map((note, index) => (
            <Card
              key={note.id}
              className={cn(
                "p-3 cursor-pointer hover:bg-accent transition-all duration-200 group hover:shadow-md hover:scale-[1.02]",
                selectedNote?.id === note.id && "bg-accent ring-2 ring-primary/20",
              )}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: "fadeInUp 0.3s ease-out forwards",
              }}
              onClick={() => onSelectNote(note)}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm truncate mb-1">{note.title || "Untitled"}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {getPreview(note.content) || "Empty note"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">{formatDate(note.updatedAt)}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-destructive/10 hover:text-destructive"
                  onClick={(e) => {
                    e.stopPropagation()
                    if (confirm(`Delete "${note.title || 'Untitled'}"?`)) {
                      onDeleteNote(note.id)
                    }
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
