// In-memory database using JavaScript data structures
class Database {
  constructor() {
    // Users: Map<userId, { id, username, email, password }>
    this.users = new Map()

    // Notes: Map<noteId, { id, userId, title, content, createdAt, updatedAt }>
    this.notes = new Map()

    // Counters for auto-incrementing IDs
    this.userIdCounter = 1
    this.noteIdCounter = 1
  }

  // User operations
  createUser(userData) {
    const id = this.userIdCounter++
    const user = { id, ...userData, createdAt: new Date() }
    this.users.set(id, user)
    return user
  }

  findUserByEmail(email) {
    return Array.from(this.users.values()).find((user) => user.email === email)
  }

  findUserByUsername(username) {
    return Array.from(this.users.values()).find((user) => user.username === username)
  }

  findUserById(id) {
    return this.users.get(id)
  }

  // Note operations
  createNote(noteData) {
    const id = this.noteIdCounter++
    const note = {
      id,
      ...noteData,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    this.notes.set(id, note)
    return note
  }

  getNotesByUserId(userId) {
    return Array.from(this.notes.values())
      .filter((note) => note.userId === userId)
      .sort((a, b) => b.updatedAt - a.updatedAt)
  }

  getNoteById(id) {
    return this.notes.get(id)
  }

  updateNote(id, updates) {
    const note = this.notes.get(id)
    if (!note) return null

    const updatedNote = {
      ...note,
      ...updates,
      updatedAt: new Date(),
    }
    this.notes.set(id, updatedNote)
    return updatedNote
  }

  deleteNote(id) {
    return this.notes.delete(id)
  }

  searchNotes(userId, query) {
    const userNotes = this.getNotesByUserId(userId)
    const lowerQuery = query.toLowerCase()

    return userNotes.filter(
      (note) => note.title.toLowerCase().includes(lowerQuery) || note.content.toLowerCase().includes(lowerQuery),
    )
  }
}

// Export singleton instance
export default new Database()
