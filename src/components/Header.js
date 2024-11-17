import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state => state.user));
    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth).catch(() => {
            navigate("/error");
        });
    };

    const handleChangeLanguage = (e)=> {
      dispatch(changeLanguage(e.target.value))
    }


    const handleGptSearch = ()=> {
      dispatch(toggleGptSearch())
    }
    return (
        <div className="px-4 py-2 bg-gradient-to-b from-black w-full flex justify-between items-center z-10 absolute">
            <img
                src={LOGO}
                alt="netflix-logo"
                className="w-32 sm:w-44"
            />
            {userData && userData.uid && (
                <div className="flex items-center space-x-4">
                  {showGptSearch && <select className="p-2 m-2 bg-gray-900 text-white " onChange={handleChangeLanguage}>
                    {SUPPORTED_LANGUAGES.map((lang)=>(
                      <option key={lang.identifier}value={lang.identifier}>
                        {lang.name}
                      </option>
                    ))}
                  </select>}
                  
                    <button className="py-2 px-4 bg-purple-500 rounded-lg hover:bg-purple-600 transition-all" onClick={handleGptSearch}>
                        {showGptSearch ? "Homepage" : "GPT Search" }
                    </button>
                    <img
                        src={userData.photoURL}
                        alt="User Avatar"
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <button
                        className="bg-red-600 text-white py-2 px-3 rounded-lg hover:bg-red-700 transition-all"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
