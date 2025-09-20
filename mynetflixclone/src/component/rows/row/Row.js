import React from 'react'
import { useEffect,useState } from 'react'
import axios from '../../../utils/axios'
import { useRef } from 'react'
import YouTube from 'react-youtube'
import movieTrailer from "movie-trailer";
import TrailerModal from '../../TrailerModal';

const Row = React.forwardRef((props, ref) => {
    const [movie,setMovie]=useState([]);
    const baseurl="https://image.tmdb.org/t/p/w1280" 
    const[trailerUrl,seturl]=useState('');
    const [isloading ,setIsloadig]=useState(true)
    const[trailervisible,settrailervisible]=useState(false)
    const [showMore, setShowMore] = useState(false);

    const visibleMovies = showMore ? movie : movie.slice(0, 6);
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
    <div className='bg-black text-white ' ref={ref} name={props.title}>


      <h1 className='text-xl font-semibold ml-5 uppercase p-4 '>{props.title}</h1>
       {movie && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {visibleMovies.map((x, index) => (
              <div
                key={index}
                ref={(el) => (mydiv.current[index] = el)}
                className="m-5 flex-shrink-0 transform transition-transform duration-500 ease-in-out hover:scale-110"
              >
                <img
                  className={`${
                    props.islarge ? "h-72" : "h-32"
                  } w-full object-cover`}
                  src={`${baseurl}${
                    props.islarge ? x.poster_path : x.backdrop_path
                  }`}
                  alt={x.title}
                />
                <h1 className="text-white bg-black text-center">{x.title}</h1>
                <button
                  className="text-red-600 text-center rounded"
                  onClick={() => {
                    handleclick(x);
                  }}
                >
                  Play Trailer
                </button>
              </div>
            ))}
          </div>
          {movie.length > 6 && (
            <div className="text-center">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded mt-4"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "See Less" : "See More"}
              </button>
            </div>
          )}
        </>
      )}

        {trailerUrl && <TrailerModal trailerUrl={trailerUrl} handleClose={() => seturl('')} />}

    </div>
  )
})

export default Row