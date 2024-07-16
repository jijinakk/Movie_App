import React from 'react'
import { useEffect,useState} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';

const ApiLatest = () => {
    const [movies, setmovies] = useState([])
     const API_KEY = "9948beaa1978b07ef733bcbe5e8d2849";
    //  const api="https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28"
    const latestMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;

    useEffect(() => {
      axios.get(latestMovies).then((res) => console.log(res))
    }, [])
    // console.log(movies);
  return (
    <div>
          
     
      </div>
  )
}

export default ApiLatest