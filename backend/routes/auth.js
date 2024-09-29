const router = require("express").Router();
const User = require("../models/Users");
const CrypoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CrypoJs.AES.encrypt(
      req.body.password,
      process.env.HASHKEY
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/login", async (req, res) => {
  // const newUser = new User({
  //   username: req.body.username,
  //   email: req.body.email,
  //   password: CrypoJs.AES.encrypt(
  //     req.body.password,
  //     process.env.HASHKEY
  //   ).toString(),
  // });
  try {
    const user = await User.findOne({ username: req.body.username });
    console.log("user"), user;
    !user && res.status(500).json("Wrong UserName");

    const HassedPassword = CrypoJs.AES.decrypt(
      user.password,
      process.env.HASHKEY
    );
    const passwords = HassedPassword.toString(CrypoJs.enc.Utf8);
    passwords !== req.body.password && res.status(500).json("Wrong Password");

    const accesToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWTKEY,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accesToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
