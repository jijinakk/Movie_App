import React,{useEffect,useState} from 'react'
import axios from  'axios'
import { comedyMovies, imageUrl, latestMovies, popularMovies } from '../url'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useContext} from 'react';
import { BannerContext } from '../App';
import Button from 'react-bootstrap/esm/Button';

 const Movies = ({movie}) => {
  const navigate = useNavigate();
  const card=useContext(BannerContext)
  // console.log(comedy); 
    // const SetView= (test1) => { 
    // nav('/Nav' ) 
    // present(obj) 
    // console.log(test1); 
    // test.setfirst(test1) 
  
    const {movies,setmovies,filtermovie,setfiltermovie,search}=useContext(BannerContext)
console.log(movie)
 useEffect(() => {
   axios.get(movie).then((res) =>{ setmovies(res.data.results); 
 if(search.length===0)
 {
  setfiltermovie(res.data.results)
 }
 })
 }, [movie])
 useEffect(() => {
  card.setshow(false)

}, [])

 const cardClick = (test1) => {
  navigate(`/moviedetails`);
  test.setview(test1);
};
  return (
    <div>
    {  filtermovie.map((obj) =>
        {
         return (
             
 <Card 
 
   style={{ width: "300px", height:"400px",margin:"10px 10px",float:"left"}}>
 <Card.Img variant="top" src={imageUrl+obj.backdrop_path} style={{height:"200px"}}/>
 <Card.Body style={{ width: '18rem',margin:"10px 10px"}}>
 <Card.Title> ID: {obj.id}</Card.Title>
 <Card.Title>TITLE: {obj.original_title||obj.original_name}</Card.Title>
 <Card.Title>LANGUAGE: {obj.original_language}</Card.Title>
   <Card.Title>POPULARITY: {obj.popularity}</Card.Title>
   <Card.Text>
    
   </Card.Text>
   <Button onClick={cardClick}>Details</Button>
 </Card.Body>
</Card>
         )}
         )}

 </div>  )
}

export default Movies