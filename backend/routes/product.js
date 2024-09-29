const router = require("express").Router();
const Product = require("../models/Products");
const {
  verifyTokenAdmin,
  verifyTokenandAutherization,
} = require("./verifyToken");

module.exports = router;

//create
router.post("/", verifyTokenAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const updatedUser = await newProduct.save();
    // const { password, ...other } = updatedUser._doc;

    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// delete
router.delete("/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// get
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// get all
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({
        categories: { $in: [qCategory] },
      });
    } else {
      products = await Product.find();
    }
    // const product = await Product.find(req.params.id);
    // const { password, ...other } = product._doc;
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// get user stats
router.get("/stats", verifyTokenAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const product = await Product.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: { month: { $month: "$createdAt" } },
      },
      {
        $group: { _id: "$month", total: { $sum: 1 } },
      },
    ]);
    // const { password, ...other } = product._doc;
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json(err);
  }
});
