import { useDispatch } from "react-redux";
import { addTrailorVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailor = (movieId) => {
    const dispatch = useDispatch();
  console.log("movidihook",movieId)

    const getMovieVideos = async ()=> {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS);
        const json = await data.json();
        console.log("json",json)
    

        const filterData = json.results.filter((video)=>video.type ==="Trailer")

        const trailor = filterData.length ? filterData[0] : json.results[0];
       dispatch(addTrailorVideo(trailor))
        
        

    }
    useEffect(()=>{
        getMovieVideos()
    },[])
}

export default useMovieTrailor;