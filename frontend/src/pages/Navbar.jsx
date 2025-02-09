import React from 'react';  
import { Link } from 'react-router-dom';  
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap';  
import 'bootstrap/dist/css/bootstrap.min.css'; 

function NavBar() {  
  return (  
    <Navbar bg="dark" variant="dark" expand="lg">  
      <Container fluid>  
        <Navbar.Brand as={Link} to="/home">Professor Portfolio</Navbar.Brand>  
        <Navbar.Toggle aria-controls="navbarScroll" />  
        <Navbar.Collapse id="navbarScroll">  
          <Nav className="me-auto">  
            <Nav.Link as={Link} to="/home">Home</Nav.Link>  
            <Nav.Link as={Link} to="/project">Projects & Research</Nav.Link>  
            <Nav.Link as={Link} to="/award">Achievements</Nav.Link>  
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>  
            <Nav.Link as={Link} to="/experience">Experience</Nav.Link>  
            <Nav.Link as={Link} to="/collaborations">Collaborations</Nav.Link>  
          </Nav>  
          <Form className="d-flex">  
            <Form.Control  
              type="search"  
              placeholder="Search"  
              className="me-2"  
              aria-label="Search"  
            />  
            <Button variant="outline-light" type="submit">Search</Button>  
          </Form>  
          <Link to="/protected" className="btn btn-primary ms-3">Admin Panel</Link>  
        </Navbar.Collapse>  
      </Container>  
    </Navbar>  
  );  
}  

export default NavBar;