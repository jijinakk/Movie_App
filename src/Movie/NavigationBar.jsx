import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { comedyMovies, imageUrl, latestMovies, popularMovies } from '../url'
import Movies from './Movies';
import { useState } from 'react';
import Banner from './Banner';
import { BannerContext } from '../App';
import { useContext} from 'react';


function NavigationBar() {
  const {search,setsearch,handleSearch}=useContext(BannerContext);
  console.log(search)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Movies</Navbar.Brand>
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           <Nav.Link href="#home">
            <Link style={{textDecoration:"none",color:"black"}} to={"/popular"}> Popular Movies</Link>
              </Nav.Link>
            <Nav.Link href="#link"><Link style={{textDecoration:"none",color:"black"}} to={"/latest"}>Latest Movies</Link></Nav.Link>
            <Nav.Link href="#link"><Link style={{textDecoration:"none",color:"black"}} to={"/comedy"}> Comedy Movies</Link></Nav.Link>

          </Nav>
          <input
           type="text"
           value={search}
           onChange={(e) => setsearch(e.target.value)}
           placeholder='Enter the movie title'
           style={{ marginRight: '10px',padding: '5px',}} 
/>
        <button onClick={handleSearch} style={{
    backgroundColor: 'green', 
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
    border: 'none'
  }} >search</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavigationBar;