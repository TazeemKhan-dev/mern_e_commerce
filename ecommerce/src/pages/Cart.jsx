// import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Announcements from "../components/Announcements";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethod";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const key = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
  const history = useNavigate();
  console.log("cart", cart);
  const [stripeToken, setStripeToken] = useState();
  console.log("stripeToken", stripeToken);

  const onToken = (t) => {
    setStripeToken(t);
  };
  useEffect(() => {
    if (stripeToken) {
      // Only make the request if the stripeToken is available
      const makeRequest = async () => {
        try {
          const res = await userRequest.post("/checkout/payment", {
            tokenId: stripeToken.id, // Ensure this contains the correct ID
            amount: cart?.total * 100,
          });
          history("/", {
            stripeData: res.data,
            products: cart,
          });
        } catch (error) {
          console.error("Payment request failed", error); // Handle errors properly
        }
      };
      makeRequest();
    }
  }, [stripeToken, cart?.total, history]);

  return (
    <div>
      <Navbar />
      <Announcements />
      <div>
        <div className="text-6xl flex items-center justify-center p-4 bg-slate-600 text-white font-extrabold">
          Your Items
        </div>
        <div className="flex justify-between py-4 px-6">
          <div className=" p-1 flex justify-center border-2 border-black items-center cursor-pointer">
            <Button
              sx={{
                color: "black",
              }}
            >
              Continue Shopping
            </Button>
          </div>
          <div className="flex  gap-3 pt-2">
            <a href="" className="underline">
              Your Shopping bag(2)
            </a>
            <a href="" className="underline">
              Create Account()
            </a>
          </div>
          <div className="bg-black p-1 flex justify-center items-center cursor-pointer">
            <Button
              sx={{
                color: "white",
              }}
            >
              Checkout Now
            </Button>
          </div>
        </div>
        <div className="flex p-6">
          <div className="flex flex-col flex-initial w-3/4 p-6 gap-6 max-h-[50vh] overflow-y-scroll">
            {cart.products.map((i) => (
              <div className="flex justify-between   border-b-red-200">
                <div className="flex gap-10">
                  <div className="">
                    <img
                      src={i?.img}
                      alt=""
                      className="w-32 h-32 object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2 px-5 ">
                    <div>
                      <b>Product:</b>
                      {i?.title}
                    </div>
                    <div>
                      <b>Id:</b>
                      {i?._id}
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full `}
                      style={{ backgroundColor: `${i?.color}` }}
                    ></div>
                    <div>
                      <b>Size:</b>
                      {i?.size || "L"}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="flex justify-center items-center gap-3">
                    <div>
                      <RemoveIcon />
                    </div>
                    <div className="flex justify-center items-center border-teal-400 border-4 px-2 rounded-lg ">
                      {i?.quantity}
                    </div>
                    <div>
                      <AddIcon />
                    </div>
                  </div>
                  <div className=" py-7 text-xl pl-7">
                    ₹{i?.price * i?.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex-1 border-slate-100 border-2 h-[50vh] ">
            <div className="p-2 flex flex-col gap-3 ">
              <span className="text-3xl flex justify-center items-center">
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
                <div className="flex justify-between font-bold text-xl ">
                  <span>Total</span>
                  <span>₹ {cart?.total}</span>
                </div>
                <div className="bg-black p-1 flex justify-center items-center cursor-pointer">
                  {/* <Button
                    sx={{
                      color: "white",
                    }}
                  >
                    Checkout Now
                  </Button> */}
                  <StripeCheckout
                    name="Tazeem Khan"
                    description={`Your total is ₹ ${cart?.total}`}
                    amount={cart?.total * 100}
                    billingAddress
                    shippingAddress
                    stripeKey={key}
                    token={onToken}
                  >
                    <Button
                      sx={{
                        color: "white",
                      }}
                    >
                      Checkout Now
                    </Button>
                  </StripeCheckout>
                </div>
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
