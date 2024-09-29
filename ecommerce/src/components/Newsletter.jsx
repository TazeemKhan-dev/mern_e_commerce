import { Button } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => {
  return (
    <div className="flex flex-col h-60 justify-center items-center bg-amber-100">
      <h1 className="font-bold text-5xl md:text-7xl mb-6">Newsletter</h1>
      <div className="text-xl md:text-4xl mb-5 ">
        Get timely updates from your product
      </div>
      <div className="w-1/2 bg-white h-8 flex justify-between border-gray-600">
        <input
          type="text"
          placeholder="Your Email"
          className="flex-initial w-full px-3 outline-none focus:border-transparent "
        />
        <div className="flex-initial w-1/5 flex justify-center items-center bg-teal-600">
          <SendIcon
            sx={{
              color: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
