const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },

    type: {
      type: String,

      enum: ["large", "medium", "small", "tall"],

      default: "medium",
    },
  },

  { timestamps: true },
);

module.exports = mongoose.model("Gallery", gallerySchema);
