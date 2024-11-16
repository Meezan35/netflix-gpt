import React from 'react';
import { useSelector } from 'react-redux';

import VideoTitle from './VideoTitle'; // Assuming VideoTitle is a separate component
import useMovieTrailor from '../hooks/useMovieTrailor';

const VideoBackgroundContainer = ({ movieId, title, overview }) => {
  useMovieTrailor(movieId);
  const trailorVideo = useSelector((store) => store.movies.trailorVideo);

  return (
    <div className="relative w-full h-screen overflow-hidden">
     
      <div className="absolute inset-0">
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailorVideo?.key}?autoplay=1&mute=1&loop=1&modestbranding=1&showinfo=0&controls=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

     
      <div className="absolute inset-0 flex items-center justify-start px-4 md:px-16 lg:px-32 bg-gradient-to-b from-transparent via-black/60 to-black">
        <VideoTitle title={title} overview={overview} />
      </div>
    </div>
  );
};

export default VideoBackgroundContainer;
