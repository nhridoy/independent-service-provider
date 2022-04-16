import React from "react";
import { useParams } from "react-router-dom";

const Cart = (props) => {
  const { id } = useParams();
  console.log(props);
  return (
    <div>
      <div className="relative z-0 top-0 h-[40vh] flex items-center justify-center  bg-gray-700 w-full p-4">
        <h1 className="text-white text-5xl">Buy Now</h1>
      </div>
      <form className="p-4">
        <div className="flex flex-col md:flex-row">
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
        </div>
      </form>
    </div>
  );
};

export default Cart;
