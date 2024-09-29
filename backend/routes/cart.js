const router = require("express").Router();
const Cart = require("../models/Carts");
const {
  verifyTokenAdmin,
  verifyToken,
  verifyTokenandAutherization,
} = require("./verifyToken");

module.exports = router;

//create
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const cart = await newCart.save();
    // const { password, ...other } = cart._doc;

    return res.status(200).json(cart);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put("/:id", verifyTokenandAutherization, async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(cart);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// delete
router.delete("/:id", verifyTokenandAutherization, async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    return res.status(200).json(cart);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// get
router.get("/:userId", verifyTokenandAutherization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    return res.status(200).json(cart);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// get all
router.get("/", verifyTokenAdmin, async (req, res) => {
  try {
    const cart = await Cart.find();
    return res.status(200).json(cart);
  } catch (err) {
    return res.status(500).json(err);
  }
});
