import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css"

const Header = () => {
    return (
       <div>
           <Navbar collapseOnSelect expand="lg" bg="myColor" variant="white">
  <Container>
  <Navbar.Brand to="/">Fruits Zone</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
    <CustomLink style={{ paddingLeft: 13 }}to="/">Home</CustomLink>
 <CustomLink style={{paddingLeft: 13 }} to="/reviews">Reviews</CustomLink>
 <CustomLink style={{ paddingLeft: 13 }} to="/about">About</CustomLink>
 <CustomLink style={{ paddingLeft: 13 }} to="/blogs">Blogs</CustomLink>
 <CustomLink style={{ paddingLeft: 13 }} to="/dashboard">Dashboard</CustomLink>
 <CustomLink style={{  color: 'black',paddingLeft: 13 }} to="/contact">Contact</CustomLink>
     
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
       
    );
};

export default Header;


