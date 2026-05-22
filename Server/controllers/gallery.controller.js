const Gallery = require("../Modules/gallery.Model");
const fs = require("fs");
const path = require("path");


// GET ALL IMAGES
const getGalleryImages = async (req, res) => {
  try {
    const images = await Gallery.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// CREATE IMAGE
const createGalleryImage = async (req, res) => {
  try {
    const image = await Gallery.create({
      image: req.file.filename,
      type: req.body.type,
    });

    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// DELETE IMAGE
const deleteGalleryImage = async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ message: "Not found" });
    }

    const filePath = path.join(
      __dirname,
      "../uploads",
      image.image
    );

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await Gallery.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// UPDATE IMAGE
const updateGalleryImage = async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ message: "Not found" });
    }

    // new image
    if (req.file) {
      const oldPath = path.join(
        __dirname,
        "../uploads",
        image.image
      );

      if (fs.existsSync(oldPath)) {
        fs.unlinkSync(oldPath);
      }

      image.image = req.file.filename;
    }

    if (req.body.type) {
      image.type = req.body.type;
    }

    const updated = await image.save();

    res.json(updated);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getGalleryImages,
  createGalleryImage,
  deleteGalleryImage,
  updateGalleryImage,
};