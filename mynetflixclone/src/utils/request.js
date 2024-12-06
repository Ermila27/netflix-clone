
  const API_KEY =`ee4484a657e57d7567ae5103fce97a04`;

  const requests = {
  fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}`,
  fetchTrending:`/trending/movie/week?api_key=${API_KEY}`,
  fetchHorror:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedy:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomance:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchanimation:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchsmystery:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchwestern:`/discover/movie?api_key=${API_KEY}&with_genres=37`

};

export default requests;
