    const express = require("express");
    const app = express();
    const dotenv = require("dotenv");
    const authRoutes = require("./Routes/authRoutes");
    const contactRoutes = require("./Routes/contact.Routes");
    const cors = require("cors");
    const db = require("./config/db");

    db();

    app.use(
    cors({
        origin: "http://localhost:5173",
    }),
    );

    dotenv.config();
    app.use(express.json());

    app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT);
    });

    app.use("/auth", authRoutes);
    app.use("/contact", contactRoutes);

    app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
    });
