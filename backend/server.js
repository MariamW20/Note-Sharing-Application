import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth.js"
import notesRoutes from "./routes/notes.js"

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/notes", notesRoutes)

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" })
})

app.listen(PORT, () => {
  console.log(`🚀 NoteShare API Server running on http://localhost:${PORT}`)
})
