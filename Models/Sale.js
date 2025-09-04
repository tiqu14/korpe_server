const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    received: {
      type: Number,
      required: true,
    },
    last_received: {
      type: Number,
      // required: true,
    },
    readyOrder: {
      type: Boolean,
      default: false,
    },
    sales: [
      {
        item: {
          type: mongoose.ObjectId,
          required: false,
          ref: "Item",
        },
        service: {
          type: mongoose.ObjectId,
          required: false,
          ref: "Service",
        },
        material: {
          type: mongoose.ObjectId,
          required: false,
          ref: "Material",
        },
        case: {
          type: mongoose.ObjectId,
          required: false,
          ref: "Case",
        },
        pillow: {
          type: mongoose.ObjectId,
          required: false,
          ref: "Pillow",
        },
        weight: {
          type: Number,
          required: false,
        },
        length: {
          type: Number,
          required: false,
        },
        quantity: {
          type: Number,
          required: false,
        },
      },
    ],
  },
  { timestamps: true }
);

const Sale = mongoose.model("Sale", SaleSchema);

module.exports = Sale;
