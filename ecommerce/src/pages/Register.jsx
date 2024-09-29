import { Button } from "@mui/material";
import React from "react";

const Register = () => {
  return (
    <div className="relative h-screen w-screen flex justify-center items-center">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485518882345-15568b007407?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-screen"></div>

      {/* Content that should not be affected by opacity */}
      <div className="relative z-10 bg-white m-7 lg:p-8 flex  flex-col w-[80vh] md:w-[40%] gap-3 lg:gap-6 ">
        <div className="text-2xl md:text-4xl font-medium px-3 ">
          Create An Account
        </div>
        <form
          action=""
          className="flex flex-wrap p-4 flex-col lg:flex-row gap-3"
        >
          <input
            type="text"
            className="w-full lg:w-[48%]  flex justify-center items-center p-4 border-2 "
            placeholder="First Name"
          />
          <input
            type="text"
            className="w-full lg:w-[48%] flex justify-center items-center p-4 border-2 "
            placeholder="Last Name"
          />
          <input
            type="text"
            className="w-full lg:w-[48%] flex justify-center items-center p-4 border-2 "
            placeholder="UserName"
          />
          <input
            type="text"
            className="w-full lg:w-[48%] flex justify-center items-center p-4 border-2 "
            placeholder="Email"
          />
          <input
            type="text"
            className="w-full lg:w-[48%] flex justify-center items-center p-4 border-2 "
            placeholder="Password"
          />
          <input
            type="text"
            className="w-full lg:w-[48%] flex justify-center items-center p-4 border-2 "
            placeholder="Confirm Password"
          />
        </form>
        <div className="px-2">
          By creating an Account, I consent to the processing of my personal
          data in accordance with{" "}
          <span className="font-bold">PRIVACY POLICY</span>
        </div>
        <div className="bg-teal-500  p-1 flex justify-center items-center cursor-pointer m-3">
          <Button
            sx={{
              color: "white",
            }}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
