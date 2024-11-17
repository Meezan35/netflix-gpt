import React from 'react'
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';

const GptSearchBar = () => {
    const langKey = useSelector((store)=>store.config.lang);
    return (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <form
            className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 bg-black bg-opacity-80 grid grid-cols-12 rounded-lg shadow-lg"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              className="p-4 m-4 col-span-12 sm:col-span-9 rounded-lg text-black"
              placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button
              className="col-span-12 sm:col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
            >
              {lang[langKey].search}
            </button>
          </form>
        </div>
      );
};

export default GptSearchBar;
