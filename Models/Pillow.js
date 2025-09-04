const mongoose = require("mongoose");

const PillowSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Pillow = mongoose.model("Pillow", PillowSchema);

module.exports = Pillow;
