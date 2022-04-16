import React, { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Portfolios = () => {
  const [images, setImages] = React.useState([]);
  useEffect(() => {
    fetch("images.json")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-5xl font-semibold text-center m-4 mb-8">
        Portfolios
      </h1>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {images.map((image) => (
            <div
              key={image.id}
              className=" p-4 bg-white rounded-lg shadow-lg"
              // className={image.id === 6 ? "col-span-2" : "col-span-1"}
            >
              <img src={image.image} alt="" className="w-full" />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Portfolios;
