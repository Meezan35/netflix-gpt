const VideoTitle = ({ title, overview }) => {
    return (
      <div className="flex flex-col justify-center text-white max-w-lg">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-sm md:text-base lg:text-lg mb-6">{overview}</p>
        <div className="flex gap-4 flex-wrap">
          {/* Play Button */}
          <button className="bg-white text-black font-semibold py-2 px-4 md:px-6 rounded flex items-center hover:bg-gray-300 transition duration-300 text-sm md:text-base">
            {/* Icon for play */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 mr-2">
              <path d="M4 2v20l16-10L4 2z" />
            </svg>
            Play
          </button>
          {/* More Info Button */}
          <button className="bg-gray-700 text-white font-semibold py-2 px-4 md:px-6 rounded flex items-center hover:bg-gray-600 transition duration-300 text-sm md:text-base">
            {/* Icon for info */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 mr-2">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v4z" />
            </svg>
            More Info
          </button>
        </div>
      </div>
    );
  };
  
  export default VideoTitle;
  