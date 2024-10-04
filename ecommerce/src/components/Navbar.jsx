import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import useDarkMode from "../hooks/DarkMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton, Snackbar, Tooltip } from "@mui/material";
import { logoutUser } from "../redux/userRedux";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const quantity = useSelector((state) => state.cart);
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleClick = (e) => {
    setMessage("Logged out");
    // window.alert("Payment successful!");
    setOpen(true);
    e.preventDefault(); // Prevent default form behavior if needed
    dispatch(logoutUser()); // Dispatch the action directly
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50  bg-white dark:bg-gray-800 text-black dark:text-white h-24 md:h-28 lg:h-20">
      <div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={message}
        />
      </div>
      <div className="p-4 gap-2 md:p-6 lg:p-8 flex flex-col justify-center items-center md:justify-start lg:flex-row">
        <div className="flex flex-1 justify-center items-center md:justify-start font-bold text-2xl md:text-3xl lg:text-4xl cursor-pointer">
          <div className="flex gap-3">
            <Link to={"/"}>StyleHive</Link>
            <IconButton onClick={() => setIsDarkMode(!isDarkMode)}>
              <Tooltip
                title={
                  isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
              >
                <DarkModeIcon className="rounded-lg  dark:bg-white" />
              </Tooltip>
            </IconButton>
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex flex-1 justify-end gap-4 md:gap-7 px-6 text-lg md:text-xl font-semibold">
          <Link to={"/shop"}>Shop</Link>

          {user?.currentUser === null ? (
            <div className="flex gap-3">
              <span className="cursor-pointer">
                <Link to={"/register"}>Register</Link>
              </span>
              <span className="cursor-pointer">
                <Link to={"/sign-in"}>Sign-in</Link>
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <PersonOutlineIcon className="dark:bg-gray-800" />
                <span>{user?.currentUser?.username}</span>
              </div>
              <div className="cursor-pointer">
                <Tooltip title="Logout">
                  <LogoutIcon
                    onClick={handleClick}
                    className="rounded-lg dark:bg-gray-800"
                  />
                </Tooltip>
              </div>
            </div>
          )}
          <span className="cursor-pointer">
            <Link to={"/cart"}>
              <Badge badgeContent={quantity?.products.length} color="primary">
                <ShoppingCartIcon className="rounded-lg dark:bg-gray-800" />
              </Badge>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
