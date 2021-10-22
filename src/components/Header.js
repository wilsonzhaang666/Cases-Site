import React from 'react';
import { Link } from 'react-router-dom';
import {logoImg} from '../assets/logo.jpg';
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
const Header = () => {
    return (
<>
<Navbar collapseOnSelect expand="xxl"  variant="light"  style={{backgroundColor:"#ffffff"}}>
  <Container>
  
  <img 
  src={require('../assets/logo.jpg')} 
    width="80"
    height="80"/>
        
      
      
  <Navbar.Brand href="/" style={{ backgroundImage: "linear-gradient(to right, violet, indigo, orange, red)",webkitBackgroundClip: "text" ,color: "transparent",fontSize:"20"}}>
      Cases.Site
</Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        <Link className="nav-link" to="/" style={{ fontSize:"18px",margin:"10px"}}> Home</Link>
      <Link className="nav-link" to="/cases" style={{ fontSize:"18px",margin:"10px"}}> Cases</Link>
      <Link className="nav-link"to="/cart"style={{ fontSize:"18px",margin:"10px"}}>Cart</Link>
      <Link className="nav-link" style={{ fontSize:"18px",margin:"10px"}}>Delivery Infomation</Link>
      <Link className="nav-link" style={{ fontSize:"18px",margin:"10px"}}>Return Policy</Link>
      <Link className="nav-link" style={{ fontSize:"18px",margin:"10px"}}>Contact Us</Link>
       

    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    )
}

export default Header
