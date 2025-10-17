import express from "express"
import bcrypt from "bcryptjs"
import db from "../db/index.js"
import { generateToken } from "../middleware/auth.js"

const router = express.Router()

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body

    // Validation
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" })
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters" })
    }

    // Check if user exists
    if (db.findUserByEmail(email)) {
      return res.status(400).json({ error: "Email already registered" })
    }

    if (db.findUserByUsername(username)) {
      return res.status(400).json({ error: "Username already taken" })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const user = db.createUser({
      username,
      email,
      password: hashedPassword,
    })

    // Generate token
    const token = generateToken(user)

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    })
  } catch (error) {
    console.error("[v0] Register error:", error)
    res.status(500).json({ error: "Server error" })
  }
})

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    // Validation
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" })
    }

    // Find user
    const user = db.findUserByEmail(email)
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" })
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid credentials" })
    }

    // Generate token
    const token = generateToken(user)

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    })
  } catch (error) {
    console.error("[v0] Login error:", error)
    res.status(500).json({ error: "Server error" })
  }
})

export default router
