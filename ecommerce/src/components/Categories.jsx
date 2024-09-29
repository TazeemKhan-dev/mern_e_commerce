import React from "react";
import { categoryItems } from "../DummyData";
import CategoriesItems from "./CategoriesItems";

const Categories = () => {
  return (
    <div className="md:flex  md:flex-row  justify-between p-10">
      {categoryItems?.map((item) => (
        <CategoriesItems items={item} key={item?.id} />
      ))}
    </div>
  );
};

export default Categories;
