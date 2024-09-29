import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const ProductItems = ({ item }) => {
  return (
    <div>
      <Link to={`/product/${item?._id}`}>
        <div className="relative flex-1 h-52 w-52  md:h-80 md:w-96 flex justify-center items-center m-2 group">
          {/* Image Container */}
          <img src={item?.img} alt="" className="h-full w-full object-cover" />

          {/* Icons (hidden initially, shown on hover) */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4 text-white">
              <div className="p-1 md:p-2 bg-white rounded-full text-black hover:bg-gray-200 cursor-pointer">
                <ShoppingCartOutlinedIcon />
              </div>
              <div className="p-1 md:p-2 bg-white rounded-full text-black hover:bg-gray-200 cursor-pointer">
                <Link to={`/product/${item?._id}`}>
                  <SearchOutlinedIcon />
                </Link>
              </div>
              <div className="p-1 md:p-2 bg-white rounded-full text-black hover:bg-gray-200 cursor-pointer">
                <FavoriteBorderOutlinedIcon />
              </div>
            </div>
          </div> */}
        </div>
      </Link>

      <div className="flex justify-around bg-sky-600 mx-2 text-white text-2xl">
        <div>{item?.title}</div>
        <div> ₹ {item?.price}</div>
      </div>
    </div>
  );
};

export default ProductItems;
