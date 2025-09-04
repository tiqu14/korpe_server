const router = require("express").Router();
const Pillow = require("../Models/Pillow");
const authorization = require("../Middlewares/Authenticaiton");

router.get("/", async (req, res) => {
  try {
    const items = await Pillow.find({}).sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(409).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { id, name, price, length, weight, quantity } = req.body;

    let pillow;

    if (id) {
      // Update existing pillow
      pillow = await Pillow.findByIdAndUpdate(
        id,
        { name, price, length, weight, quantity },
        { new: true } // return the updated document
      );

      if (!pillow) {
        return res.status(404).send("Pillow not found");
      }
    } else {
      // Create new pillow
      pillow = await Pillow.create({ name, price, length, weight, quantity });
    }

    res.status(201).json(pillow);
  } catch (err) {
    res.status(409).send(err.message);
  }
});

module.exports = router;
