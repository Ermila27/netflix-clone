import axios from "axios";   

const customaxios = axios.create({
  baseURL: `https://api.themoviedb.org/3`,   
});

export default customaxios;
