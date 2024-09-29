const router = require("express").Router();
const User = require("../models/Users");

const {
  verifyTokenAdmin,
  verifyTokenandAutherization,
} = require("./verifyToken");

router.put("/:id", verifyTokenandAutherization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CrypoJs.AES.encrypt(
      req.body.password,
      process.env.HASHKEY
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
router.delete("/:id", verifyTokenandAutherization, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndDelete(req.params.id);
    return res.status(200).json("User deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
});
// get
router.get("/find/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const updatedUser = await User.findById(req.params.id);
    const { password, ...other } = updatedUser._doc;

    return res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// get all
router.get("/", verifyTokenAdmin, async (req, res) => {
  try {
    const users = await User.find();
    // const { password, ...other } = users._doc;
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// get user stats
router.get("/stats", verifyTokenAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const user = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: { month: { $month: "$createdAt" } },
      },
      {
        $group: { _id: "$month", total: { $sum: 1 } },
      },
    ]);
    // const { password, ...other } = user._doc;
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
