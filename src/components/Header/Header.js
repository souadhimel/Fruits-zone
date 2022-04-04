import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <Navbar bg="success">
        <Container fluid>
          <Navbar.Collapse id="navbarScroll">
           <div className="nav_title"> <h1 className="text">Fruits Zone</h1></div>
            <Nav
              className="me-auto mx-10 my-lg-0"
              style={{ maxHeight: "100px", textDecoration: "none" }}
              navbarScroll
            >
           <div className="nav_link">
           <CustomLink to="/">Home</CustomLink>
           <CustomLink to="/reviews">Reviews</CustomLink>
           <CustomLink to="/about">About</CustomLink>
           <CustomLink to="/blogs">Blogs</CustomLink>
           <CustomLink to="/dashboard">Dashboard</CustomLink>
           <CustomLink to="/contact">Contact</CustomLink>
           </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
       
    );
};

export default Header;


{/* <Navbar bg="success">
<Container fluid>
  <Navbar.Collapse id="navbarScroll">
    <h1 className="text">Online Tutorial</h1>
    <Nav
      className="ms-auto mx-10 my-lg-0"
      style={{ maxHeight: "100px" }}
      navbarScroll
    >
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> */}


{/* <Navbar className="header ms-auto">
        
<div> <Navbar.Brand to="/" >Fruits Zone</Navbar.Brand></div>
 <div className="nav_link">
 <CustomLink to="/">Home</CustomLink>
 <CustomLink to="/reviews">Reviews</CustomLink>
 <CustomLink to="/about">About</CustomLink>
 <CustomLink to="/blogs">Blogs</CustomLink>
 <CustomLink to="/dashboard">Dashboard</CustomLink>
 <CustomLink to="/contact">Contact</CustomLink>
 
 </div>
 
</Navbar> */}