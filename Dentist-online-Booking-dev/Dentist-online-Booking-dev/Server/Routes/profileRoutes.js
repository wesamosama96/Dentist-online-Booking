
// server/Routes/profileRoutes.js
const express = require("express");
const router = express.Router();

//call controller 
const profileController = require("../controllers/profile.controllers");

// middleware=>gate protect
const { protect } = require("../Middleware/authMiddleware");


// get to show data of privite account o
router.get("/me", protect, profileController.getProfile);

//patch to edite data 
router.patch("/update", protect, profileController.updateProfile);

//patch to change password
router.patch("/change-password", protect, profileController.changePassword);

module.exports = router