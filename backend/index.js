const express = require("express");
const cors = require("cors"); // Import the CORS middleware
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const orderRouter = require("./routes/order");
const cartRouter = require("./routes/cart");

const stripeRoute = require("./routes/stripe");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("err", err);
  });

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);
app.use("/carts", cartRouter);
app.use("/checkout", stripeRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
