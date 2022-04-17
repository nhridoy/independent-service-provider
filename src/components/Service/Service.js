import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  return (
    <div className="p-10 flex flex-col gap-4 border rounded-xl shadow">
      <h6 className="text-2xl font-semibold text-center">{service.name}</h6>
      <div className="w-full h-56">
        <img
          src={service.image}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <p className="pb-4">{service.description}</p>

      <div className="">
        {service.features.map((feature, index) => (
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

      <Link
        to={`/cart/${service.id}`}
        className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full text-center mt-auto"
      >
        Get Now
      </Link>
    </div>
  );
};

export default Service;
