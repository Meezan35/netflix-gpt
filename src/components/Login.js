import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);

  const toggleSignUpInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_small.jpg"
          alt="logo"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <form className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 p-6 md:p-8 bg-black text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-2xl md:text-3xl py-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 my-4 w-full bg-gray-700 rounded-md"
              />
            )}
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 my-4 w-full bg-gray-700 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 my-4 w-full bg-gray-700 rounded-md"
            />
            <button className="p-3 my-4 bg-red-700 rounded-lg w-full">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={toggleSignUpInForm}>
              {isSignInForm
                ? "Already a User? Sign In Now"
                : "New to Netflix? Sign Up Now"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
