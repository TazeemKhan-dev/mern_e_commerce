import React, { useEffect, useState } from "react";
import ProductItems from "./ProducttItems";
import { productItems } from "../DummyData";
import axios from "axios";
// const Product = ({ filter, cat }) => {
const Product = ({ filters, cat = false, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterproducts, setFilterProducts] = useState([]);
  console.log("products", products);
  console.log("filters", filters);
  console.log("sort", sort);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/products?category=${cat}`
            : "http://localhost:5000/products"
        );
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts(); // Call the async function
  }, [filters, cat]);
  useEffect(() => {
    if (cat) {
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
      console.log("Sorting by ascending price");
      setFilterProducts((p) => {
        return [...p].sort((a, b) => a.price - b.price);
      });
    } else if (sort === "") {
      console.log("Sorting by ascending price");
      setFilterProducts(products);
    } else {
      console.log("Sorting by descending price");
      setFilterProducts((p) => {
        return [...p].sort((a, b) => b.price - a.price);
      });
    }
  }, [sort]);

  return (
    <div className="flex flex-wrap items-center justify-center m-8">
      {cat
        ? filterproducts?.map((item) => (
            <div className=" " key={item?.id}>
              <ProductItems item={item} />
            </div>
          ))
        : products.slice(0, 8)?.map((item) => (
            <div className=" " key={item?.id}>
              <ProductItems item={item} />
            </div>
          ))}
    </div>
  );
};

export default Product;
