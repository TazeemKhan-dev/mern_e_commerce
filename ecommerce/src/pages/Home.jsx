import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Product from "../components/Product";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Announcements from "../components/Announcements";

const Home = () => {
  return (
    <>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Product />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
