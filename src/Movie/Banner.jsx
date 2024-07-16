import React,{useEffect,useState} from 'react'
import axios from  'axios'
import { comedyMovies, imageUrl } from '../url'
import Card from 'react-bootstrap/Card';
import { useContext} from 'react';
import { BannerContext } from '../App';

const Banner = () => {
    
    const [movies, setmovies] = useState([])
    const card=useContext(BannerContext)

 useEffect(() => {
     axios.get(comedyMovies).then((res) => 
      {
        const result=res.data.results;
        const randomIndex =Math.floor(Math.random() * result.length);
        setmovies(result[randomIndex]);
        card.setshow(true)

      })
     }, [])
     
  //  console.log(movies);
  return (
    <div>
       { movies&&(
        
        
           <div style={{backgroundImage:`url(${imageUrl+movies.poster_path})`,height:"100vh",backgroundSize:"100% 100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h1>{movies.original_title||movies.original_name}</h1>
            </div>
          
        
      )}
      </div>
  )
}


export default Banner