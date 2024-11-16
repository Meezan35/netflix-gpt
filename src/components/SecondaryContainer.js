import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)
    if (!movies.nowPlayingMovies) return
    console.log(movies)



    return (
        <div className="relative -mt-20 z-10">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          
        </div>
    )
}

export default SecondaryContainer
