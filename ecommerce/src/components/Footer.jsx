import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <div className="flex items-center justify-items flex-col md:flex-row">
      <div className="flex-1 flex flex-col p-5">
        <div className="font-bold text-3xl">Monach-Clothing</div>
        <div className="my-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quibusdam
          veritatis qui fugiat sed, tempore ratione distinctio fugit repudiandae
          iure quam in pariatur sequi quisquam, minima dicta inventore iste
          officia?
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
      <div className="flex-1 p-5">
        <h3 className="pb-7 font-semibold text-xl">Useful Linls</h3>
        <ul className="flex flex-wrap mb-3">
          <li className="w-1/2 mb-3">Home</li>
          <li className="w-1/2 mb-3">Cart</li>
          <li className="w-1/2 mb-3">Men Fashion</li>
          <li className="w-1/2 mb-3">Women Fashion</li>
          <li className="w-1/2 mb-3">Accessories</li>
          <li className="w-1/2 mb-3">My Account</li>
          <li className="w-1/2 mb-3">Order Tracking</li>
          <li className="w-1/2 mb-3">Wishlist</li>
          <li className="w-1/2 mb-3">Terms</li>
        </ul>
      </div>
      <div className="flex-1 p-5 flex justify-end flex-col w-full">
        <h3 className="pb-7 font-semibold text-xl">Contact</h3>
        <ul className="flex flex-wrap mb-3">
          <li className="w-full mb-3">
            <LocationOnIcon /> Bulandshahr
          </li>
          <li className="w-full mb-3">
            <LocalPhoneIcon />
            +91 8057509636
          </li>
          <li className="w-full mb-3">
            <MailIcon /> tazeemkhan0712@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
