import React from 'react';
import { Link } from 'react-router-dom';
import {logoImg} from '../assets/logo.jpg';
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
    <LinkContainer to="/" style={{fontSize:"18px",margin:"10px"}} activeStyle={{ backgroundColor: "white",color:"black" }}>

    <NavDropdown.Item>Home</NavDropdown.Item>
    </LinkContainer>
    <LinkContainer to="/cases" style={{fontSize:"18px",margin:"10px"}} activeStyle={{ backgroundColor: "white",color:"black" }}>

    <NavDropdown.Item>Cases</NavDropdown.Item>
    </LinkContainer>
    <LinkContainer to="/cart" style={{fontSize:"18px",margin:"10px"}} activeStyle={{ backgroundColor: "white",color:"black" }}>

<NavDropdown.Item>Cart</NavDropdown.Item>
</LinkContainer>
<LinkContainer to="/order" style={{fontSize:"18px",margin:"10px"}} activeStyle={{ backgroundColor: "white",color:"black"}}>

<NavDropdown.Item>Order History</NavDropdown.Item>
</LinkContainer>
<LinkContainer  to="/deliveryinfo" style={{fontSize:"18px",margin:"10px"}} activeStyle={{ backgroundColor: "white",color:"black" }}>

<NavDropdown.Item>Delivery Infomation</NavDropdown.Item>
</LinkContainer>
<LinkContainer to="/returnpolicy" style={{fontSize:"18px",margin:"10px"}} activeStyle={{ backgroundColor: "white",color:"black"}}>

<NavDropdown.Item>Return Policy</NavDropdown.Item>
</LinkContainer>
<LinkContainer to="/contactus" style={{fontSize:"18px",margin:"10px"}}  activeStyle={{ backgroundColor: "white",color:"black" }}>

<NavDropdown.Item >Contact Us</NavDropdown.Item>
</LinkContainer>


    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    )
}

export default Header
