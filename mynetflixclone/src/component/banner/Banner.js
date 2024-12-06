import { useState, useEffect } from 'react';
import customaxios from "../../utils/axios"
import requests from'../../utils/request'
import './banner.css'
function Banner() {
  
 const baseurl="https://image.tmdb.org/t/p/w1280" 
  const [movie, setMovie] = useState([]); // Initial state is empty array
  const [loading, setLoading] = useState(true); // To track the loading state
  const [error, setError] = useState(null); // To track any errors
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await customaxios.get(requests.fetchHorror);
        setMovie(res.data.results); // Set the movie data
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError(error); // If error occurs, set the error state
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchData(); // Call the fetchData function
  }, []);

  // Conditional rendering based on the loading and error state
  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while data is being fetched
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Show error message if there's an error
  }

  const random=Math.floor(Math.random()*movie.length)
  const link= `https://image.tmdb.org/t/p/w1280${movie[random].backdrop_path} ` 

  return (
    <div className='bg-red-400'style={{backgroundImage:`url(${link})`}} >
     {movie &&
       <div className=' h-[60vh] flex justify-center items-center text-white w-full  ' style={{backgroundImage:`url(${link})`}}>
        <div className='  '>
        <h1 class=" font-extrabold text-2xl ">Unlimited movies, <br/> 
        TV shows, and more</h1>  
        <button class="text-red-500 bg-black font-semibold py-2 px-12 rounded hover:bg-red-600 focus:outline-none focus:ring-2 hover:text-white focus:ring-blue-300 m-8">
  play
</button>

     </div>
        </div>
       
     } 

    
<div className='grid grid-cols-4 gap-3'>
{/* { movie.length>0?( 
movie.map((x,index)=>( 
  <div key={index}>
  <h2 className='text-blue-700'>{x.name}</h2>
  <img src={`${baseurl}${x.backdrop_path}`}/>
  <div className='bg-blue-600 rounded-full text-center p-1 text-white'>{x.popularity}</div>
  </div>
))):<div>no video found</div>} */}

</div>

     
    </div>
   
  )
  
}

export default Banner;
