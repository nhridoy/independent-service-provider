import React from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import GoogleSign from "../../components/GoogleSign/GoogleSign";
import auth from "../../firebase.init";

const Signin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const [user, loading, error] = useAuthState(auth);

  const [signInWithEmailAndPassword, signUser, signLoading, signError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, PasswordSendError] =
    useSendPasswordResetEmail(auth);

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const handleSendEmailPopup = () => {
    Swal.fire({
      title: "Enter your email",
      input: "email",
      inputPlaceholder: "Email",
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        sendPasswordResetEmail(result.value)
          .then(() => {
            Swal.fire({
              title: "Email sent",
              text: "Check your email",
              icon: "success",
            });
          })
          .catch((err) => {
            Swal.fire({
              title: "Error",
              text: err.message,
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div>
      <div className="relative z-0 top-0 h-[40vh] flex items-center justify-center  bg-gray-700 w-full p-4">
        <h1 className="text-white text-5xl">Sign In</h1>
      </div>
      <div className="">
        <div className="flex justify-center p-4">
          <GoogleSign />
        </div>
        <form className="p-4 m-auto w-1/2" onSubmit={handleSignIn}>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col md:w-full">
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
              {(error || signError) && (
                <div className="text-red-600">
                  {error?.message}
                  {signError?.message}
                </div>
              )}

              <div className="flex flex-col gap-4 mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Sign In
                </button>
                <Link to="/signup" className="text-blue-700 text-center">
                  Sign Up
                </Link>

                <div
                  onClick={handleSendEmailPopup}
                  className="text-blue-700 cursor-pointer text-center"
                >
                  Forgot Password
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
