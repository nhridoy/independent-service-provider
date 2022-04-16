import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navRef = React.useRef();
  const [navClass, setNavClass] = React.useState("bg-transparent text-white");
  const [isOpen, setIsOpen] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setNavClass("bg-white text-black shadow");
      } else {
        setNavClass("bg-transparent text-white");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${navClass} transition-all duration-300 fixed w-full top-0 z-10 p-4 flex justify-between`}
    >
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
