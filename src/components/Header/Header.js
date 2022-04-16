import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-700 text-white sticky absolute top-0 p-4 flex justify-between">
      <Link to="/" className="text-2xl font-semibold">
        Elegant Photographer
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/about" className="">
          About
        </Link>
        <Link to="/blog" className="">
          Blog
        </Link>
        <Link to="/cart" className="">
          Cart
        </Link>
        <Link to="/signin" className="">
          Signin
        </Link>
        <Link to="/signup" className="">
          Signup
        </Link>
        <button className="">Signout</button>
      </div>
    </div>
  );
};

export default Header;
