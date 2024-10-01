import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import {
  decrementQuantity,
  incrementQuantity,
  removeProducts,
} from "../redux/cartRedux";
import Announcements from "../components/Announcements";
import { Button } from "@mui/material";
import { userRequest } from "../requestMethod";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const history = useNavigate();
  const key = import.meta.env.VITE_STRIPE_PUBLIC_KEY;

  const handleRemove = () => {
    // e.preventDefault(); // Prevent default form behavior if needed
    dispatch(removeProducts()); // Dispatch the action directly
  };
  const [stripeToken, setStripeToken] = useState(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart?.total * 100,
        });
        setMessage("Payment successful!");
        // window.alert("Payment successful!");
        setOpen(true);
        setTimeout(() => {
          handleRemove();
          history("/"); // Navigate after 2 seconds (or any duration you prefer)
        }, 1000);
        // handleRemove();
        // history("/");
      } catch (error) {
        console.error("Payment failed", error);
      }
    };

    if (stripeToken) makeRequest();
  }, [stripeToken, cart?.total, history]);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
      <div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={message}
        />
      </div>
      <Navbar />
      <div className="pt-20">
        <div className="text-3xl lg:text-6xl flex items-center justify-center p-4 bg-slate-600 text-white font-extrabold">
          Your Items
        </div>

        <div className="flex flex-col lg:flex-row p-6">
          {/* Product List */}
          <div className="flex flex-col flex-initial w-full lg:w-3/4 p-6 gap-6 max-h-[50vh] overflow-y-scroll scrollbar-hide">
            {cart.products.map((i) => (
              <div
                className="flex flex-col sm:flex-row md:justify-between border-b-red-200"
                key={i._id}
              >
                <div className=" flex justify-center items-center p-4 sm:p-0">
                  <img
                    src={i?.img}
                    alt={i?.title}
                    className="w-24 h-24 lg:w-32 lg:h-32 object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center items-center md:flex-row gap-2 md:gap-10">
                  <div className="flex flex-col gap-2 px-5">
                    <div>
                      <b>Product:</b> {i?.title}
                    </div>
                    <div>
                      <b>Id:</b> {i?._id}
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full`}
                      style={{ backgroundColor: `${i?.color}` }}
                    ></div>
                    <div>
                      <b>Size:</b> {i?.size || "L"}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row  justify-center items-center sm:flex-col">
                  <div className="flex justify-center items-center gap-3">
                    <div onClick={() => handleDecrement(i._id)}>
                      <RemoveIcon className="cursor-pointer" />
                    </div>
                    <div className="flex justify-center items-center border-teal-400 border-4 px-2 rounded-lg">
                      {i?.quantity}
                    </div>
                    <div onClick={() => handleIncrement(i._id)}>
                      <AddIcon className="cursor-pointer" />
                    </div>
                  </div>
                  <div className="py-7 text-xl pl-7">
                    ₹{i?.price * i?.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="flex-1 border-slate-100 border-2 h-[50vh] mt-6 lg:mt-0">
            <div className="p-2 flex flex-col gap-3">
              <span className="text-xl lg:text-3xl flex justify-center items-center">
                ORDER SUMMARY
              </span>
              <div className="flex flex-col p-5 gap-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹ {cart?.total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span>₹40</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Discount</span>
                  <span>- ₹40</span>
                </div>
                <div className="flex justify-between font-bold text-xl">
                  <span>Total</span>
                  <span>₹ {cart?.total}</span>
                </div>
                <StripeCheckout
                  name="Your Store"
                  description={`Your total is ₹ ${cart?.total}`}
                  amount={cart?.total * 100}
                  billingAddress
                  shippingAddress
                  stripeKey={key}
                  token={onToken}
                >
                  <Button
                    className={` dark:bg-white dark:text-black`}
                    disabled={!cart?.total > 0}
                  >
                    Checkout Now
                  </Button>
                </StripeCheckout>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Cart;
