import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Cart = () => {
  const { id } = useParams();
  const [item, setItem] = React.useState({});
  useEffect(() => {
    fetch(`/packageList.json`)
      .then((response) => response.json())
      .then((json) =>
        setItem(json.find((service) => service.id === parseInt(id)))
      );
  }, [id]);

  return (
    <div>
      <div className="relative z-0 top-0 h-[40vh] flex items-center justify-center  bg-gray-700 w-full p-4">
        <h1 className="text-white text-5xl">Buy Now</h1>
      </div>
      <form className="p-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex gap-4 flex-col md:w-1/2">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col md:w-1/2">
                <label className="text-gray-600">
                  <span className="text-gray-600">Name</span>
                  <input
                    className="border border-gray-600 p-2 w-full"
                    type="text"
                    placeholder="Name"
                  />
                </label>
              </div>
              <div className="flex flex-col md:w-1/2">
                <label className="text-gray-600">
                  <span className="text-gray-600">Email</span>
                  <input
                    className="border border-gray-600 p-2 w-full"
                    type="text"
                    placeholder="Email"
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col md:w-1/2">
                <label className="text-gray-600">
                  <span className="text-gray-600">Phone</span>
                  <input
                    className="border border-gray-600 p-2 w-full"
                    type="text"
                    placeholder="Phone"
                  />
                </label>
              </div>

              <div className="flex flex-col md:w-1/2">
                <label className="text-gray-600">
                  <span className="text-gray-600">Adress</span>
                  <input
                    className="border border-gray-600 p-2 w-full"
                    type="text"
                    placeholder="Adress"
                  />
                </label>
              </div>
            </div>

            <button className="text-white my-4 bg-green-500 py-2 px-4 rounded-full text-center mt-auto">
              Buy Now
            </button>
          </div>
          <div className="flex gap-4 flex-col md:w-1/2">
            {Object.keys(item).length && (
              <>
                <h6 className="text-2xl font-semibold text-center">
                  {item.name}
                </h6>
                <p className="pb-4">{item.description}</p>

                <div className="">
                  {item?.features.map((feature, index) => (
                    <div className="flex items-center" key={index}>
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-4">{feature}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Cart;
