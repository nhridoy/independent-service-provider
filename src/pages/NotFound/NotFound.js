import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="relative z-0 top-0 h-[40vh] flex items-center justify-center  bg-gray-700 w-full p-4">
        <h1 className="text-white text-5xl">404 Not Found</h1>
      </div>
      <img
        src="https://error404.fun/img/illustrations/16.png"
        className="m-auto w-auto"
        alt=""
      />
    </div>
  );
};

export default NotFound;
