// GptSearchContainer.js
import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BACKGROUND_IMG } from '../utils/constants'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearchContainer = () => {
  return (
    <>
      <div className="relative">
        <img
          src={BACKGROUND_IMG}
          alt="bg-img"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  )
}

export default GptSearchContainer
