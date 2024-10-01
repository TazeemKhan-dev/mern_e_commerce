import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" p-4 flex justify-items flex-col md:flex-row bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="flex-1 p-5 flex ml-4  flex-col w-full">
        <div className="flex   flex-wrap mb-3">
          <h3 className="pb-7 font-semibold text-3xl">Contact</h3>

          <div className="w-full mb-3">
            <LocationOnIcon /> Bulandshahr
          </div>
          <div className="w-full mb-3">
            <LocalPhoneIcon />
            +91 8057509636
          </div>
          <div className="w-full mb-3">
            <MailIcon /> tazeemkhan0712@gmail.com
          </div>
        </div>
      </div>

      <div className="flex-1 p-5">
        <h3 className="pb-7 font-semibold text-xl">Useful Linls</h3>
        <ul className="flex font-bold flex-wrap mb-3">
          <li className="w-1/2 mb-3">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="w-1/2 mb-3">
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li className="w-1/2 mb-3">
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li className="w-1/2 mb-3">
            <Link to={"/products/Men"}>Men Fashion</Link>
          </li>
          <li className="w-1/2 mb-3">
            <Link to={"/products/Women"}>Women Fashion</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center items-center flex-col p-5">
        <div className="font-bold text-3xl">Monach-Clothing</div>
        <div className="my-7">
          Monarch-Clothing is an e-commerce platform focused on providing a
          seamless online shopping experience. It features a wide range of
          products, a modern user interface, and responsive design. The app
          allows users to browse and purchase items, manage their cart, and
          securely complete transactions using Stripe integration. With a dark
          mode toggle, a smooth user experience across devices, and personalized
          features like login and logout functionality, Monarch-Clothing offers
          a sleek and intuitive way to shop for apparel.
        </div>
        <div className="flex">
          <div className="w-12 h-12 flex justify-center items-center text-white bg-sky-700 rounded-full mx-3">
            <FacebookIcon />
          </div>
          <div className="w-12 h-12 flex justify-center items-center text-white bg-rose-600 rounded-full mx-3">
            <InstagramIcon />
          </div>
          <div className="w-12 h-12 flex justify-center items-center text-white bg-sky-500 rounded-full mx-3">
            <LinkedInIcon />
          </div>
          <div className="w-12 h-12 flex justify-center items-center text-white bg-sky-300 rounded-full mx-3">
            <TwitterIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
