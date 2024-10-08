import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh] m-20">
      ... fetching data{" "}
      <div className="ml-10 loader animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );
};

export default Loader;
