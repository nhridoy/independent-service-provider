import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <div className="relative z-0 top-0 h-[40vh] flex items-center justify-center  bg-gray-700 w-full p-4">
        <h1 className="text-white text-5xl">Sign In</h1>
      </div>
      <div className="">
        <div className="flex justify-center p-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            type="button"
          >
            Sign In with Google
          </button>
        </div>
        <form className="p-4 m-auto w-1/2">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col md:w-full">
              <label className="text-gray-600">
                <span className="text-gray-600">Email</span>
                <input
                  className="border border-gray-600 p-2 w-full"
                  type="email"
                  placeholder="Email"
                  required
                />
              </label>

              <label className="text-gray-600">
                <span className="text-gray-600">Password</span>
                <input
                  className="border border-gray-600 p-2 w-full"
                  type="password"
                  placeholder="Password"
                  required
                />
              </label>

              <div className="flex flex-col gap-4 mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Sign In
                </button>
                <Link to="/signup" className="text-blue-700 text-center">
                  Sign Up
                </Link>

                <button className="text-blue-700">Forgot Password</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
