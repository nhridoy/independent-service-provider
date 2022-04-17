import React from "react";
import { Link } from "react-router-dom";
import GoogleSign from "../../components/GoogleSign/GoogleSign";

const Signup = () => {
  return (
    <div>
      <div className="relative z-0 top-0 h-[40vh] flex items-center justify-center  bg-gray-700 w-full p-4">
        <h1 className="text-white text-5xl">Sign Up</h1>
      </div>
      <div className="">
        <div className="flex justify-center p-4">
          <GoogleSign />
        </div>
        <form className="p-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col md:w-1/2">
              <label className="text-gray-600">
                <span className="text-gray-600">Name</span>
                <input
                  className="border border-gray-600 p-2 w-full"
                  type="text"
                  placeholder="Name"
                  required
                />
              </label>
            </div>
            <div className="flex flex-col md:w-1/2">
              <label className="text-gray-600">
                <span className="text-gray-600">Email</span>
                <input
                  className="border border-gray-600 p-2 w-full"
                  type="email"
                  placeholder="Email"
                  required
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col md:w-1/2">
              <label className="text-gray-600">
                <span className="text-gray-600">Phone</span>
                <input
                  className="border border-gray-600 p-2 w-full"
                  type="text"
                  placeholder="Phone"
                  required
                />
              </label>
            </div>

            <div className="flex flex-col md:w-1/2">
              <label className="text-gray-600">
                <span className="text-gray-600">Password</span>
                <input
                  className="border border-gray-600 p-2 w-full"
                  type="password"
                  placeholder="Password"
                  required
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>

            <Link to="/signin" className="text-blue-700 text-center">
              Already Have an Account? Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
