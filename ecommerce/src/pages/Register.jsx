import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, password, email });
  };
  return (
    <div className="relative h-screen w-screen flex justify-center items-center">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485518882345-15568b007407?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-screen"></div>

      {/* Content that should not be affected by opacity */}
      <div className="relative z-10 bg-white m-7 p-4 lg:p-8 flex  flex-col w-[80vh] md:w-[40%] gap-3 lg:gap-6 ">
        <div className="text-2xl md:text-4xl font-medium px-3 ">
          Create An Account
        </div>
        <form
          action=""
          className="flex flex-wrap p-4 flex-col lg:flex-row gap-3"
        >
          <input
            type="text"
            className="w-full flex justify-center items-center p-4 border-2 "
            placeholder="UserName"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            className="w-full flex justify-center items-center p-4 border-2 "
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="w-full flex justify-center items-center p-4 border-2 "
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <div className="px-2">
          By creating an Account, I consent to the processing of my personal
          data in accordance with{" "}
          <span className="font-bold">PRIVACY POLICY</span>
        </div>
        <div
          className={`bg-teal-500  p-1 flex justify-center items-center ${
            username === "" && password === ""
              ? "cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          <Button
            sx={{
              color: "white",
            }}
            onClick={handleClick}
            disabled={username === "" && password === "" && email !== ""}
          >
            Register
          </Button>
        </div>
        <div className="cursor-pointer font-bold text-xl">
          <Link to={"/sign-in"}>Sign-In</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
