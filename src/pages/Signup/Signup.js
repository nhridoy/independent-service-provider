import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleSign from "../../components/GoogleSign/GoogleSign";
import auth from "../../firebase.init";

const Signup = () => {
  const nameRef = React.createRef();
  const emailRef = React.createRef();
  const phoneRef = React.createRef();
  const passwordRef = React.createRef();

  const navigate = useNavigate();
  const location = useLocation();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    console.log(phone);
    const password = passwordRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name, phoneNumber: phone });
  };
  console.log(user);
  return (
    <div>
      <div className="relative z-0 top-0 h-[40vh] flex items-center justify-center  bg-gray-700 w-full p-4">
        <h1 className="text-white text-5xl">Sign Up</h1>
      </div>
      <div className="">
        <div className="flex justify-center p-4">
          <GoogleSign />
        </div>
        <form className="p-4" onSubmit={handleSignUp}>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col md:w-1/2">
              <label className="text-gray-600">
                <span className="text-gray-600">Name</span>
                <input
                  className="border border-gray-600 p-2 w-full"
                  type="text"
                  placeholder="Name"
                  ref={nameRef}
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
                  ref={emailRef}
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
                  type="tel"
                  placeholder="Phone"
                  ref={phoneRef}
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
                  ref={passwordRef}
                  required
                />
              </label>
            </div>
          </div>
          {(error || UpdateError) && (
            <div className="text-red-500 text-sm">
              {error?.message || UpdateError?.message}
            </div>
          )}
          <div className="flex flex-col gap-4 mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
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
