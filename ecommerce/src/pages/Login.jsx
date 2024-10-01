import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className="relative h-screen w-screen flex justify-center items-center ">
      {/* Background Image with Opacity */}
      {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485518882345-15568b007407?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center "></div> */}
      <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-50"></div>

      {/* Content that should not be affected by opacity */}
      <div className="relative z-10 bg-white p-6 flex  flex-col w-3/4 lg:w-[30%] gap-6">
        <div className="text-4xl font-medium  ">Sign In</div>
        <form action="" className="flex flex-col  gap-3">
          <input
            type="text"
            className="w-full  flex justify-center items-center p-4 border-2 "
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full flex justify-center items-center p-4 border-2 "
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <div
          className={`bg-teal-500 p-1 flex justify-center items-center ${
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
            disabled={username === "" && password === ""}
          >
            Login
          </Button>
        </div>
        {error && <div className="text-red-500">Something went wrong...</div>}
        <div className="cursor-pointer font-bold text-l flex justify-between">
          <Link to={"/register"}> Create Account</Link>
          <Link to={"/"}> Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
