import React,{useEffect,useState} from 'react'
import axios from  'axios'
import Card from 'react-bootstrap/Card';
import { imageUrl, latestMovies } from '../url';

const LatestMovies = () => {
  const [movies, setmovies] = useState([])

 useEffect(() => {
   axios.get(latestMovies).then((res) => setmovies(res.data.results))
  }, )

  return (
    <div>
       {  movies.map((obj) =>
           {
            return (
                
    <Card style={{ width: "300px", height:"400px",margin:"10px 10px",float:"left"}}>
    <Card.Img variant="top" src={imageUrl+obj.backdrop_path} style={{height:"200px"}}/>
    <Card.Body style={{ width: '18rem',margin:"10px 10px"}}>
    <Card.Title> ID: {obj.id}</Card.Title>
    <Card.Title>TITLE: {obj.original_title}</Card.Title>
    <Card.Title>LANGUAGE: {obj.original_language}</Card.Title>
      <Card.Title>POPULARITY: {obj.popularity}</Card.Title>
      <Card.Text>
       
      </Card.Text>
    </Card.Body>
  </Card>
            )}
            )}

    </div>
  )
}

export default LatestMovies