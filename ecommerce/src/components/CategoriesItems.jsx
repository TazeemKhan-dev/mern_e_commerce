import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CategoriesItems = ({ items }) => {
  return (
    <div className="flex-1 m-6 relative h-[50vh] md:h-[50vh]">
      <img src={items?.avatar} alt="" className="object-cover h-full w-full" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-5xl text-white pb-10 ">{items?.name}</h1>
        <Link to={`/products/${items?.name}`}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              backgroundColor: "white",
              color: "grey",
              borderColor: "grey",
              "&:hover": {
                backgroundColor: "lightgrey",
                borderColor: "grey",
              },
            }}
          >
            SHOP NOW
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CategoriesItems;
