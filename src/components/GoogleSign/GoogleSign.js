import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const GoogleSign = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <button
      onClick={() => signInWithGoogle()}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      type="button"
    >
      Sign In with Google
    </button>
  );
};

export default GoogleSign;
