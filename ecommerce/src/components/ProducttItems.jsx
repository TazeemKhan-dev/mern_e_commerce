import React from "react";
import { Link } from "react-router-dom";

const ProductItems = ({ item }) => {
  return (
    <div>
      <Link to={`/product/${item?._id}`}>
        <div className="relative flex-1 h-52 w-52  md:h-80 md:w-96 flex justify-center items-center m-2 group">
          {/* Image Container */}
          <img src={item?.img} alt="" className="h-full w-full object-cover" />

          {/* Icons (hidden initially, shown on hover) */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>

      <div className="flex justify-evenly  mx-2 text-sky-600  text-2xl font-bold text-ellipsis bg-white dark:bg-gray-800  dark:text-white">
        <div>{item?.title}</div>
        <div> ₹ {item?.price}</div>
      </div>
    </div>
  );
};

export default ProductItems;
