import React from 'react';  
import { Link } from 'react-router-dom';  
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap';  
import 'bootstrap/dist/css/bootstrap.min.css'; 

function NavBar() {  
  return (  
    <Navbar bg="dark" variant="dark" expand="lg">  
      <Container fluid>  
        <Navbar.Brand as={Link} to="/home"><span className='fw-bold text-primary'>D</span>.K.S</Navbar.Brand>  
        <Navbar.Toggle aria-controls="navbarScroll" />  
        <Navbar.Collapse id="navbarScroll">  
          <Nav className="me-auto">  
            <Nav.Link as={Link} to="/home">Home</Nav.Link>  
            <Nav.Link as={Link} to="/project">Projects & Research</Nav.Link>  
            <Nav.Link as={Link} to="/award">Achievements</Nav.Link>  
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>  
            <Nav.Link as={Link} to="/experience">Experience</Nav.Link>  
            <Nav.Link as={Link} to="/conference">Conferences</Nav.Link>  
            <Nav.Link as={Link} to="/media">Media</Nav.Link>  

          </Nav>  
         
          <Link to="/protected" className="btn btn-primary ms-3">Admin Panel</Link>  
        </Navbar.Collapse>  
      </Container>  
    </Navbar>  
  );  
}  

export default NavBar;