import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Product";
import Dropdown from "../components/Dropdown";
import { Color, Size, Sorting } from "../DummyData";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";
import Announcements from "../components/Announcements";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethod";
import { addProducts } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import Loader from "../components/Loader";

const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState();
  const [loading, setLoading] = useState(true); // Add loading state

  const handleQantity = (t) => {
    if (t) {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 0) setQuantity(quantity - 1);
    }
  };
  const handleClick = () => {
    dispatch(addProducts({ ...products, quantity, size: selectedSize }));
  };
  const handleSizeDropdownChange = (event) => {
    setSelectedSize(event.target.value);
  };
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true); // Start loading
        const res = await publicRequest.get(`/products/find/${id}`);
        setProducts(res?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Stop loading after the API call
      }
    };
    getProducts();
  }, [id]);

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
      <Navbar />
      {loading ? (
        <Loader /> // Use the Loader component when loading
      ) : (
        <div className="flex pt-20 mx-12 my-7 flex-col md:flex-row bg-white dark:bg-gray-800 text-black dark:text-white">
          <div className="flex-1 flex justify-center object-contain h-full md:w-3/4 lg:w-full ">
            <img
              src={products?.img}
              alt=""
              className="lg:h-[70vh] md:w-2/3 md:h-[760vh] h-1/2 w-1/2 object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col gap-1 md:gap-6 lg:gap-8 p-3 md:-5">
            <span className="text-pretty text-2xl md:text-4xl lg:text-6xl font-thin md:pb-9">
              {products?.title}
            </span>
            <span>{products?.desc}</span>
            <span className="text-2xl font-semibold py-9">
              ₹ {products?.price}
            </span>
            <div className="flex gap-4 flex-col md:flex-row justify-between  w-full md::w-3/4 ">
              <div className="flex-1 flex gap-2  items-center">
                <span className="font-bold">Color</span>
                <span
                  className="inline-block rounded-full cursor-pointer h-6 w-6 bg-white dark:bg-gray-800 text-black dark:text-white border-2"
                  style={{ backgroundColor: `${products?.color}` }}
                ></span>
              </div>
              <div className="flex-1 flex items-center gap-2 ">
                <span className="font-bold">Size:</span>
                <Dropdown
                  label="Size"
                  options={Size}
                  name="size"
                  value={selectedSize}
                  onChange={handleSizeDropdownChange}
                />
              </div>
            </div>
            <div className="flex  justify-end gap-4 flex-col md:flex-row mt-8 md:justify-between md:w-full w-full items-end">
              <div className="flex  md:justify-center md:items-center gap-3 ">
                <div className="cursor-pointer">
                  <RemoveIcon onClick={() => handleQantity(false)} />
                </div>
                <div className="flex justify-center items-center  text-2xl px-2 rounded-lg ">
                  {quantity}
                </div>
                <div className="cursor-pointer">
                  <AddIcon onClick={() => handleQantity(true)} />
                </div>
              </div>
              <div className="flex-1 flex justify-center pl-2 ">
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    backgroundColor: "white",
                    color: "grey",
                    borderColor: "teal",
                    "&:hover": {
                      backgroundColor: "lightgrey",
                      borderColor: "grey",
                    },
                  }}
                  onClick={() => handleClick()}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Newsletter />
      <Footer />
    </div>
  );
};

export default SingleProduct;
