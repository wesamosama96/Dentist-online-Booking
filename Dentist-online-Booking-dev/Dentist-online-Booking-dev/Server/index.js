const express = require("express")
const app = express()
const dotenv = require("dotenv")
const authRoutes = require("./Routes/authRoutes")
//profile sitting =>call new routes
const profileRoutes = require ("./Routes/profileRoutes")
const cors = require("cors")
const db = require("./config/db")

db()

app.use(cors({
    origin: "http://localhost:5143",
}))

dotenv.config()
app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT)
})

app.use("/auth", authRoutes)


//connect logic with url
app.use("/profile" , prodileRoutes )


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ message: err.message })
})