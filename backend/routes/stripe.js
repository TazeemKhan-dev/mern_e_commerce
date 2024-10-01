const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY); // Use process.env directly
// const stripe = require("stripe")(
//   "sk_test_51Q2pBtJtYVfprF2VIjJSfAMi16wOfGTyDPnmBcfUHMreeNIrv2YpREZt361oi1sHRYGRdUyuFwSHsxBloGvhDlPI008LTocRCF"
// ); // Use process.env directly

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId, // Make sure this is the correct token
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
