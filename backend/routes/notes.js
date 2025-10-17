import express from "express"
import db from "../db/index.js"
import { authenticateToken } from "../middleware/auth.js"

const router = express.Router()

// All routes require authentication
router.use(authenticateToken)

// Get all notes for current user
router.get("/", (req, res) => {
  try {
    const notes = db.getNotesByUserId(req.user.id)
    res.json({ notes })
  } catch (error) {
    console.error("[v0] Get notes error:", error)
    res.status(500).json({ error: "Server error" })
  }
})

// Search notes
router.get("/search", (req, res) => {
  try {
    const { q } = req.query

    if (!q) {
      return res.status(400).json({ error: "Search query required" })
    }

    const notes = db.searchNotes(req.user.id, q)
    res.json({ notes, query: q })
  } catch (error) {
    console.error("[v0] Search notes error:", error)
    res.status(500).json({ error: "Server error" })
  }
})

// Get single note
router.get("/:id", (req, res) => {
  try {
    const noteId = Number.parseInt(req.params.id)
    const note = db.getNoteById(noteId)

    if (!note) {
      return res.status(404).json({ error: "Note not found" })
    }

    // Check ownership
    if (note.userId !== req.user.id) {
      return res.status(403).json({ error: "Access denied" })
    }

    res.json({ note })
  } catch (error) {
    console.error("[v0] Get note error:", error)
    res.status(500).json({ error: "Server error" })
  }
})

// Create note
router.post("/", (req, res) => {
  try {
    const { title, content } = req.body

    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" })
    }

    const note = db.createNote({
      userId: req.user.id,
      title,
      content,
    })

    res.status(201).json({ note, message: "Note created successfully" })
  } catch (error) {
    console.error("[v0] Create note error:", error)
    res.status(500).json({ error: "Server error" })
  }
})

// Update note
router.put("/:id", (req, res) => {
  try {
    const noteId = Number.parseInt(req.params.id)
    const { title, content } = req.body

    const existingNote = db.getNoteById(noteId)
    if (!existingNote) {
      return res.status(404).json({ error: "Note not found" })
    }

    // Check ownership
    if (existingNote.userId !== req.user.id) {
      return res.status(403).json({ error: "Access denied" })
    }

    const updatedNote = db.updateNote(noteId, { title, content })
    res.json({ note: updatedNote, message: "Note updated successfully" })
  } catch (error) {
    console.error("[v0] Update note error:", error)
    res.status(500).json({ error: "Server error" })
  }
})

// Delete note
router.delete("/:id", (req, res) => {
  try {
    const noteId = Number.parseInt(req.params.id)
    const note = db.getNoteById(noteId)

    if (!note) {
      return res.status(404).json({ error: "Note not found" })
    }

    // Check ownership
    if (note.userId !== req.user.id) {
      return res.status(403).json({ error: "Access denied" })
    }

    db.deleteNote(noteId)
    res.json({ message: "Note deleted successfully" })
  } catch (error) {
    console.error("[v0] Delete note error:", error)
    res.status(500).json({ error: "Server error" })
  }
})

export default router
