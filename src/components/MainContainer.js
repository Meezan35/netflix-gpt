import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackGround from './VideoBackGround'

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies.nowPlayingMovies)
    if(!movies) return
    const mainMovie = movies[4];
    const {original_title, overview,id}  = mainMovie;
   
  return (
    <div>
  <VideoBackGround movieId={id} title={original_title} overview={overview}  />
 
</div>
  )
}

export default MainContainer