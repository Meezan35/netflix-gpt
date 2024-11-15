import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = () => {
    const navigate = useNavigate();
    const userData = useSelector((state=>state.user))
    

    const handleSignOut = ()=> {
        signOut(auth).then(() => {
           navigate("/")
           
          }).catch((error) => {
            navigate("/error")
          });
    }
  return (
   
      <div className=" absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="w-44"
        />
    {userData && userData.uid && (
        <div className="flex">
        <img
        src={userData.photoURL}
        className="w-12 h-12"
        />
        <button class="bg-red-600 text-white py-2 px-2 rounded-lg hover:bg-red-700 transition-all
        " onClick={handleSignOut}>
    Sign Out
  </button>

    </div>
    )}
      
    </div>
  );
};

export default Header;
