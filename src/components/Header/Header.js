import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css";
import { FcProcess,FcCollect } from "react-icons/fc";

const Header = () => {
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black',
        padding: "10px",
        
      };
    return (
       <div>
           <Navbar collapseOnSelect expand="md" bg="myColor" variant="white">
  <Container>
  <Navbar.Brand to="/"><FcProcess className="icon"></FcProcess> Food Zone <FcCollect className="icon"></FcCollect></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
    <CustomLink style={linkStyle} to="/">Home</CustomLink>
 <CustomLink style={linkStyle} to="/reviews">Reviews</CustomLink>
 <CustomLink style={linkStyle} to="/about">About</CustomLink>
 <CustomLink style={linkStyle} to="/blogs">Blogs</CustomLink>
 <CustomLink style={linkStyle} to="/dashboard">Dashboard</CustomLink>
 <CustomLink style={linkStyle}  to="/contact">Contact</CustomLink>
     
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
       
    );
};

export default Header;


