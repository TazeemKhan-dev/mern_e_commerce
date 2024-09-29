const router = require("express").Router();
const Order = require("../models/Orders");
const {
  verifyTokenAdmin,
  verifyToken,
  verifyTokenandAutherization,
} = require("./verifyToken");

module.exports = router;

//create
router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const order = await newOrder.save();
    // const { password, ...other } = order._doc;

    return res.status(200).json(order);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(order);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// delete
router.delete("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    return res.status(200).json(order);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// get
router.get("/:userId", verifyTokenandAutherization, async (req, res) => {
  try {
    const order = await Order.find({ userId: req.params.userId });
    return res.status(200).json(order);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// get all
router.get("/", verifyTokenAdmin, async (req, res) => {
  try {
    const order = await Order.find();
    return res.status(200).json(order);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//get monthly income

router.get("/income", verifyTokenAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));
  console.log("its here");
  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: { _id: "$month", total: { $sum: "$sales" } },
      },
    ]);
    // const { password, ...other } = user._doc;
    return res.status(200).json(income);
  } catch (err) {
    return res.status(500).json(err);
  }
});
