import React from "react";

const Banner = () => {
  return (
    <div className="relative z-0 top-0 h-screen w-full">
      <img
        src="https://justevolve.it/demo/clayton/wp-content/uploads/2018/09/pierrick-van-troost-646913-unsplash-2.jpg"
        alt="Banner"
        className="object-cover h-full w-full brightness-50"
      />
      <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center w-full h-full text-white ">
        <h1 className="text-6xl">Elegant Photographer</h1>
        <p>Capture the moment with the best quality and the best price.</p>
      </div>
    </div>
  );
};

export default Banner;
