import { Button, Snackbar } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => {
  const [products, setProducts] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = (e) => {
    setProducts("");
    setMessage("Will share the Newspaper");
    // window.alert("Payment successful!");
    setOpen(true);
  };
  return (
    <div className="flex flex-col h-60 justify-center items-center bg-amber-100">
      <div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={message}
        />
      </div>
      <h1 className="font-bold text-5xl md:text-7xl mb-6">Newsletter</h1>
      <div className="text-xl md:text-4xl mb-5 ">
        Get timely updates from your product
      </div>
      <div className="w-1/2 bg-white h-8 flex justify-between border-gray-600">
        <input
          type="text"
          placeholder="Your Email"
          className="flex-initial w-full px-3 outline-none focus:border-transparent "
          value={products}
          onChange={(e) => setProducts(e.target.value)}
        />
        <div className="flex-initial w-1/5 flex justify-center items-center bg-teal-600">
          <SendIcon
            sx={{
              color: "white",
            }}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
