import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage,setErrorMessage] =useState("");

  const email = useRef(null);
  const password = useRef(null)
  const fullName = useRef(null);

  const handleButtonClick = () => {
    
    const msg = checkValidate(email.current.value,password.current.value,fullName.current.value);
    setErrorMessage(msg)
    console.log("msg",msg )

    if(msg) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("user",user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ec",errorCode)
        console.log("em",errorMessage)
        setErrorMessage(errorCode==="auth/invalid-email" ? "Invalid Email" : "")
        // ..
      });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user success",user)
        // ...
      })
      .catch((error) => {
     
        const errorCode = error.code;
        // ec auth/invalid-email
        // auth/invalid-credential
        const errorMessage = error.message;
        console.log("ec",errorCode)
        console.log("em",errorMessage)
        setErrorMessage(errorCode==="auth/invalid-email" ? "Invalid Email" : "Invalid Credentials")

      });
    }

    
  }

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
          <form className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 p-6 md:p-8 bg-black text-white rounded-lg bg-opacity-80" onClick={(e)=>e.preventDefault()}>
            <h1 className="font-bold text-2xl md:text-3xl py-4">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                type="text"
                // ref={}
                placeholder="Full Name"
                className="p-3 my-4 w-full bg-gray-700 rounded-md"
              />
            )}
            <input
              type="email"
              ref={email}
              placeholder="Email Address"
              className="p-3 my-4 w-full bg-gray-700 rounded-md"
            />
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="p-3 my-4 w-full bg-gray-700 rounded-md"
            />
            <p className="text-red-700 font-bold text-lg py-2">{errorMessage}</p>
            <button className="p-3 my-4 bg-red-700 rounded-lg w-full" onClick={handleButtonClick}>
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={toggleSignUpInForm}>
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already a User? Sign In Now"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
