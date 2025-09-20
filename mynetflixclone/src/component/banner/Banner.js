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
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${link})`,
      }}
    >
      {movie && (
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            {movie[random].title}
          </h1>
          <p className="text-lg md:text-xl mb-8">
            {movie[random].overview}
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Play
          </button>
        </div>
      )}
    </div>
  );
  
}

export default Banner;