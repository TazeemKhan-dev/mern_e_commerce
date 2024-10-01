import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
import { userRows } from "../DummyData";
import { Link } from "react-router-dom";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setIndex(index > 0 ? index - 1 : userRows.length - 1);
    } else {
      setIndex(index < userRows.length - 1 ? index + 1 : 0);
    }
  };

  return (
    <div className="h-screen w-screen flex hidden sm:block relative overflow-hidden ">
      {/* Left Arrow */}
      <div className="flex justify-center items-center bg-slate-100 w-12 h-12 rounded-full absolute top-0 bottom-0 m-auto opacity-40 cursor-pointer left-10 z-20">
        <ArrowBackIcon onClick={() => handleArrowClick("left")} />
      </div>

      {/* Slider Wrapper */}
      <div
        className="h-full flex"
        style={{
          transform: `translateX(-${index * 100}vw)`,
          transition: "transform 1.5s ease",
          width: `${userRows.length * 100}vw`, // Ensure correct width for all slides
        }}
      >
        {userRows.map((item, i) => (
          <div
            key={i}
            className={`flex items-center w-screen h-screen ${item?.bg}`}
            style={{
              flexShrink: 0, // Prevents items from shrinking
              width: "100vw", // Each item should take full width of the viewport
            }}
          >
            {/* Image Container */}
            <div className="flex-1 h-full flex justify-center">
              <img
                src={item?.avatar}
                alt=""
                className="sm:h-1/2 w-[30&] md:h-4/5 object-contain my-7"
              />
            </div>

            {/* Info Container */}
            <div className="flex-1 flex flex-col justify-start md:pb-32 md:pl-10 sm:pb-20 sm:pl-6">
              <h1 className="sm:8 md:pb-14 font-extrabold text-pretty sm:text-4xl md:text-9xl tracking-widest">
                {item?.name}
              </h1>
              <h2 className="font-bold text-5xl">Special Sale</h2>
              <p className="my-12 font-semibold tracking-widest">
                DON'T COMPROMISE STYLE! GET 50% OFF ON NEW ARRIVALS
              </p>
              <div>
                <Link to={`/products/${item?.name}`}>
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
                {/* <Button variant="contained" size="large">
                  SHOP NOW
                </Button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <div className="flex justify-center items-center bg-slate-100 w-12 h-12 rounded-full absolute top-0 bottom-0 m-auto opacity-40 cursor-pointer right-10 z-20">
        <ArrowForwardIcon onClick={() => handleArrowClick("right")} />
      </div>
    </div>
  );
};

export default Slider;
