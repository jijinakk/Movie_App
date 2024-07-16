import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavigationBar from './Movie/NavigationBar';
import PopularMovies from './Movie/PopularMovies';
import LatestMovies from './Movie/LatestMovies';
import ComedyMovies from './Movie/ComedyMovies';
import Movies from './Movie/Movies';
import { comedyMovies, latestMovies, popularMovies } from './url';
import Banner from './Movie/Banner';
import MovieDetails from './Movie/MovieDetails';
import { useState,createContext,useEffect } from 'react';
import { useContext } from 'react';
const BannerContext = createContext();

function App() {

  const [show, setshow] = useState(true);
  const [view, setview] = useState([])
  const [search, setsearch] = useState("");
  const [movies, setmovies] = useState([])
  const [filtermovie, setfiltermovie] = useState([])
 

  const handleSearch=()=>{

    const filtered =movies.filter(obj=>((obj.original_title||obj.original_name)&&(obj.original_title||obj.original_name).toLowerCase().includes
    (search?.toLowerCase() ?? '')))
    console.log(movies)
    setfiltermovie(filtered);
    console.log(filtered);
  };
console.log(filtermovie);
  return (
    <div>
      <BannerContext.Provider value={{setshow,view,setview,search,setsearch,movies,setmovies,handleSearch,filtermovie,setfiltermovie}}>
      <BrowserRouter>
           <NavigationBar />
           {/* <Banner/> */}
           {show==true ? <Banner /> : ""}

        <Routes>
          <Route path="/popular" element={<Movies  movie={popularMovies} />}/>
          <Route path="/latest" element={<Movies  movie={latestMovies}/>}/>
          <Route path="/comedy" element={<Movies  movie={comedyMovies} />}/>
          <Route path="/moviedetails" element={<MovieDetails/>}/>
        </Routes>


       </BrowserRouter>
       </BannerContext.Provider>
    </div>
  );
}

export default App;
export {BannerContext}
