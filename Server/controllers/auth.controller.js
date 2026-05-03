const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

// Generate JWT Token
const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" })

// ================= REGISTER =================
const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body

    // Validation
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" })
    }

    // Allow only patient & doctor from frontend
    const allowedRoles = ["patient", "doctor"]
    if (!allowedRoles.includes(role)) {
      return res.status(400).json({ message: "Invalid role" })
    }

    // Check if email exists
    const exists = await User.findOne({ email })
    if (exists) {
      return res.status(400).json({ message: "Email already registered" })
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
      role,
    })

    res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: generateToken(user._id),
    })

  } catch (err) {
    next(err)
  }
}

// ================= LOGIN =================
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" })
    }

    const user = await User.findOne({ email })

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" })
    }

    res.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: generateToken(user._id),
    })

  } catch (err) {
    next(err)
  }
}

module.exports = { register, login }
