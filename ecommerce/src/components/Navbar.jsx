import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = ({}) => {
  const { quantity } = useSelector((state) => state.cart);
  console.log("quantity", quantity);
  return (
    <div className="">
      <div className="p-4 gap-2 md:p-6 lg:p-8  flex flex-col justify-center items-center lg:flex-row  ">
        {/* Search bar */}
        {/* <div className="flex flex-1 items-center gap-7">
          <span className="text-2xl">EN</span>
          <div className="flex border-slate-300 border-2 rounded">
            <div>
              <input
                type="text"
                className="border-0 outline-none focus:border-transparent px-2"
              />
            </div>
            <SearchIcon />
          </div>
        </div> */}
        {/* Logo */}
        <div className="flex flex-1 justify-center items-center font-bold text-2xl md:text-3xl lg:text-4xl cursor-pointer">
          <Link to={"/"}> Monarch-Wear</Link>
        </div>
        {/* Nav links */}
        <div className="flex flex-1 justify-end gap-4 px-6 text-lg md:text-xl">
          <span className="cursor-pointer">
            <Link to={"/register"}>Register</Link>
          </span>
          <span className="cursor-pointer">
            <Link to={"/sign-in"}>Sign-in</Link>
          </span>
          {/* <span className="cursor-pointer">Sign-in</span> */}
          <span className="cursor-pointer">
            <Link to={"/cart"}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartIcon color="action" />
              </Badge>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
