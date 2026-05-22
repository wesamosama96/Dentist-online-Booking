const express = require("express");
const router = express.Router();

const upload = require("../middleware/multer");

const {
  getGalleryImages,
  createGalleryImage,
  deleteGalleryImage,
  updateGalleryImage,
} = require("../controllers/gallery.controller");

// GET
router.get("/", getGalleryImages);

// POST
router.post("/", upload.single("image"), createGalleryImage);

// DELETE
router.delete("/:id", deleteGalleryImage);

// UPDATE
router.put("/:id", upload.single("image"), updateGalleryImage);

module.exports = router;
