const router = require("express").Router();
const User = require("../models/User");
const {
  verifyToken,
  verifyAutherization,
  verifyAdmin,
} = require("./verifyToken");

module.exports = router;
router.put("/:id", verifyAutherization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJs.AES.encrypt(
      req.body.password,
      "Secret Passphrase"
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// delete
router.delete("/:id", verifyAutherization, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndDelete(req.params.id);
    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// get
router.get("/find/:id", verifyAdmin, async (req, res) => {
  try {
    const updatedUser = await User.findById(req.params.id);
    const { password, ...other } = updatedUser._doc;

    return res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// get all
router.get("/", verifyAdmin, async (req, res) => {
  try {
    const updatedUser = await User.find(req.params.id);
    // const { password, ...other } = updatedUser._doc;
    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// get user stats
router.get("/stats", verifyAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const updatedUser = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: { month: { $month: "$createdAt" } },
      },
      {
        $group: { _id: "$month", total: { $sum: 1 } },
      },
    ]);
    // const { password, ...other } = updatedUser._doc;
    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});
