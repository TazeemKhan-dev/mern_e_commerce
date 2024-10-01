import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Product from "../components/Product";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Announcements from "../components/Announcements";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Slider />
        <Categories />
        <Product />
        <div className="flex justify-end p-6 font-bold bg-white dark:bg-gray-800 text-black dark:text-white cursor-pointer">
          <Link to={"/shop"}> ...More Products</Link>
        </div>

        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Home;
