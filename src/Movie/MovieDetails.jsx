import React,{useEffect,useState, useContext} from 'react'
import App, { BannerContext } from '../App';
import { imageUrl } from '../url';


const MovieDetails = () => {
const card=useContext(BannerContext)
console.log(card);
useEffect(() => {
 
  card.setshow(false)
}, [])

  return (
      <div> 
        <img src={imageUrl+test.first.backdrop_path} style={{height:"120px"}}></img> 
          
          <h2>name:{test.first.original_title||test.first.name}</h2> 
          <h2>{test.first.overview}</h2> 
          <h2>release date:{test.first.release_date 
  }</h2>
  </div>
  )
}

export default MovieDetails
