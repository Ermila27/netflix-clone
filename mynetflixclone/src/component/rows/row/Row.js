import React from 'react'
import { useEffect,useState } from 'react'
import axios from '../../../utils/axios'
import { useRef } from 'react'
import YouTube from 'react-youtube'
import movieTrailer from "movie-trailer";
import { getToolbarUtilityClass } from '@mui/material'
const Row = (props) => {
    const [movie,setMovie]=useState([]);
    const baseurl="https://image.tmdb.org/t/p/w1280" 
    const[trailerUrl,seturl]=useState('');
    const [isloading ,setIsloadig]=useState(true)
    const[trailervisible,settrailervisible]=useState(false)
    const mydiv=useRef([]);

    const handleclick = (singleMovie) => {
      settrailervisible(true);
      movieTrailer(singleMovie.title)
        .then((url) => {
          console.log("Trailer URL:", url);
    
          const urlParams = new URLSearchParams(new URL(url).search);
          const videoId = urlParams.get("v");
    
          if (videoId) {
            seturl(videoId);
          } 

        })
        .catch((err) => {
          console.error("Error finding movie trailer:", err);
        });
    };
    
    const opts = {
      height: "300",
      width: "600",
      playerVars: {
        autoplay: 1, // Auto-play the video
      },
    };
    useEffect(()=>{
const fech= async ()=> {
    try {
     const res= await axios.get(props.url) 
       setMovie(res.data.results)
       console.log(movie)
       setIsloadig(false)
    } catch (error) {
        console.log('error occure in fech see')
    }
}; fech(); 
    },[])

    if(isloading){
      return <div>loadig....</div>
    }
  // const go =(c)=>{
  //   mydiv.current[c].scrollIntoView({ behavior: 'smooth' });

  // }
  return (
    <div className='bg-black text-white '>


      <h1 className='text-xl font-semibold ml-5 uppercase p-4 '>{props.title}</h1>
       {movie && <div className='bg-black flex overflow-x-auto gap-1 '   style={{
      scrollbarWidth: "none", // Firefox
      msOverflowStyle: "none", // IE and Edge
    }}>
        
        {movie.map((x,index)=>(
 <div key={index} ref={(el)=>(mydiv.current[index]=el)}
 className=' m-5  flex-shrink-0 transform transition-transform duration-500 ease-in-out hover:scale-110'>  <img className={`${props.islarge?'h-72':'h-32'}`} src={`${baseurl}${props.islarge?x.poster_path:x.backdrop_path }`} />
<h1 className='text-white bg-black text-center'>{x.title}</h1> <button className=' text-red-600 text-center rounded  '  onClick={()=>{
  handleclick(x)
 }} >playtrailer</button>


 </div>
))   }

        </div>}

        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        {trailervisible ? <div className='bg-red-500 text-black p-1 rounded w-40 text-center ml-4'><button onClick={()=>{
          seturl("");
          settrailervisible(false);



         }}>close trailer <span className='font-extrabold '>x</span></button></div>:<div></div> }

    </div>
  )
}

export default Row
