import React, { useEffect, useState } from "react";
import ProductItems from "./ProducttItems";
import axios from "axios";
import Loader from "./Loader";
// import Loader from "./Loader"; // Import the Loader component

const Product = ({ filters, cat = false, sort, allProducts }) => {
  const [products, setProducts] = useState([]);
  const [filterproducts, setFilterProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true); // Start loading
        const res = await axios.get(
          cat ? `${baseUrl}/products?category=${cat}` : `${baseUrl}/products`
        );
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Stop loading after the API call
      }
    };
    getProducts(); // Call the async function
  }, [filters, cat]);

  useEffect(() => {
    if (cat || allProducts) {
      setFilterProducts(
        products.filter((i) =>
          Object.entries(filters).every(([key, value]) =>
            i[key] ? i[key].includes(value) : false
          )
        )
      );
    }
  }, [filters, cat, products]);

  useEffect(() => {
    if (sort === "Newest") {
      setFilterProducts((p) => {
        return [...p].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      });
    } else if (sort === "Price (asc)") {
      setFilterProducts((p) => {
        return [...p].sort((a, b) => a.price - b.price);
      });
    } else if (sort === "") {
      setFilterProducts(products);
    } else {
      setFilterProducts((p) => {
        return [...p].sort((a, b) => b.price - a.price);
      });
    }
  }, [sort]);

  return (
    <div className="flex pt-20 flex-wrap items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white">
      {loading ? (
        <Loader /> // Use the Loader component when loading
      ) : (
        <>
          {cat
            ? filterproducts?.map((item) => (
                <div className=" " key={item?.id}>
                  <ProductItems item={item} />
                </div>
              ))
            : allProducts
            ? filterproducts?.map((item) => (
                <div className=" " key={item?.id}>
                  <ProductItems item={item} />
                </div>
              ))
            : products.slice(0, 3)?.map((item) => (
                <div key={item?.id}>
                  <div className=" ">
                    <ProductItems item={item} />
                  </div>
                </div>
              ))}
        </>
      )}
    </div>
  );
};

export default Product;
