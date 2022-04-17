import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
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
      className={`${navClass} transition-all duration-300 fixed w-full top-0 z-10 p-4 flex flex-col md:flex-row items-center gap-4 justify-between`}
    >
      <Link to="/" className="text-2xl font-semibold">
        Elegant Photographer
      </Link>
      <div className="flex items-center gap-4">
        <NavLink to="/about" className="">
          About
        </NavLink>
        <NavLink to="/blog" className="">
          Blog
        </NavLink>

        {user ? (
          <button onClick={() => signOut(auth)} className="">
            Signout
          </button>
        ) : (
          <>
            <NavLink to="/signin" className="">
              Signin
            </NavLink>
            <NavLink to="/signup" className="">
              Signup
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
