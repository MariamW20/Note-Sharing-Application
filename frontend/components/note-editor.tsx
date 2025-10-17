"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MarkdownPreview } from "@/components/markdown-preview"
import { Check } from "lucide-react"

interface Note {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

interface NoteEditorProps {
  note: Note
  onUpdate: (note: Note) => void
}

export function NoteEditor({ note, onUpdate }: NoteEditorProps) {
  const [title, setTitle] = useState(note.title)
  const [content, setContent] = useState(note.content)
  const [isSaving, setIsSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  useEffect(() => {
    setTitle(note.title)
    setContent(note.content)
  }, [note.id, note.title, note.content])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (title !== note.title || content !== note.content) {
        setIsSaving(true)
        onUpdate({
          ...note,
          title,
          content,
          updatedAt: new Date().toISOString(),
        })
        setTimeout(() => {
          setIsSaving(false)
          setLastSaved(new Date())
        }, 300)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [title, content])

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length
  const charCount = content.length

  return (
    <div className="h-full flex flex-col animate-in fade-in-50 duration-300">
      <div className="p-4 border-b border-border">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title..."
          className="text-2xl font-semibold border-0 px-0 focus-visible:ring-0 transition-all"
        />
      </div>

      <Tabs defaultValue="edit" className="flex-1 flex flex-col">
        <div className="px-4 pt-2 flex items-center justify-between border-b border-border bg-muted/30">
          <TabsList>
            <TabsTrigger value="edit" className="transition-all">Edit</TabsTrigger>
            <TabsTrigger value="preview" className="transition-all">Preview</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-3 pb-2">
            {isSaving && (
              <Badge variant="outline" className="text-xs animate-in fade-in-50">
                <div className="animate-spin rounded-full h-2 w-2 border-b border-primary mr-2"></div>
                Saving...
              </Badge>
            )}
            {!isSaving && lastSaved && (
              <Badge variant="outline" className="text-xs animate-in fade-in-50">
                <Check className="h-3 w-3 mr-1 text-green-600" />
                Saved
              </Badge>
            )}
            <div className="text-xs text-muted-foreground">
              {wordCount} words · {charCount} characters
            </div>
          </div>
        </div>

        <TabsContent value="edit" className="flex-1 m-0 p-4 overflow-y-auto data-[state=active]:animate-in data-[state=active]:fade-in-50">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing... (Markdown supported)"
            className="min-h-full resize-none border-0 focus-visible:ring-0 font-mono text-sm transition-all"
          />
        </TabsContent>

        <TabsContent value="preview" className="flex-1 m-0 p-4 overflow-y-auto data-[state=active]:animate-in data-[state=active]:fade-in-50">
          <MarkdownPreview content={content} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
