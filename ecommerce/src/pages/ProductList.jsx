import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Product";
import Dropdown from "../components/Dropdown";
import { Color, Size, Sorting } from "../DummyData";
import Announcements from "../components/Announcements";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [selectedFilter, setSelectedFilter] = useState({});
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleColorDropdownChange = (event) => {
    setSelectedColor(event.target.value);
    setSelectedFilter({ ...selectedFilter, color: event.target.value }); // Update filter
  };

  const handleSizeDropdownChange = (event) => {
    setSelectedSize(event.target.value);
    setSelectedFilter({ ...selectedFilter, size: event.target.value }); // Update filter
  };

  const handleTypeDropdownChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    setSelectedFilter({
      ...selectedFilter,
      [e.target.name]: value,
    });
  };

  const options = [
    { value: 10, label: "Option 1" },
    { value: 20, label: "Option 2" },
    { value: 30, label: "Option 3" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
      <Navbar />
      <div className="pt-28">
        <div className="text-3xl md:text-4xl lg:text-7xl font-bold tracking-widest py-3 md:py-5 lg:py-7 px-20 text-zinc-500 bg-red-100 ">
          {cat}
        </div>
        <div className="flex lg:flex-row flex-col gap-4 justify-between m-5">
          <div className="flex lg:justify-center lg:items-center gap-10 lg:mr-12">
            <span className="font-semibold text-xl md:text-3xl ">
              Sort Products
            </span>
            <Dropdown
              label="Choose "
              name="Products"
              options={Sorting}
              value={selectedType}
              onChange={handleTypeDropdownChange}
            />
          </div>
          <div className="flex lg:justify-center lg:items-center gap-10">
            <span className="font-semibold text-3xl lg:pl-10">
              {" "}
              Filter Products
            </span>
            <Dropdown
              label="Color"
              options={Color}
              name="color"
              value={selectedColor}
              onChange={handleColorDropdownChange}
            />
            <Dropdown
              label="Size"
              options={Size}
              name="size"
              value={selectedSize}
              onChange={handleSizeDropdownChange}
            />
          </div>
        </div>
      </div>
      <Products filters={selectedFilter} cat={cat} sort={selectedType} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
