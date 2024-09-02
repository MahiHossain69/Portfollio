import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import "./header.css"
import Logo from "../../assets/logo2.png"

function Header() {
  return (
    <Navbar expand="lg" className="bg">
      <Container>
        <Navbar.Brand><img src={Logo} className='logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <a href='#' className='one'>
           <Nav.Link  className='home'><h2>Home</h2></Nav.Link>
           </a>
           <a href='#' className='one'><Nav.Link  className='link'><h2>About Me</h2></Nav.Link></a>
           <a href='#' className='one'><Nav.Link  className='home'><h2>Portfolio Details</h2></Nav.Link></a>
          </Nav>

          <div className="two">
          <Nav className="me-auto">
            
          <a href='#' className='one'> <Nav.Link  className='service'><h2>Servicee Details</h2></Nav.Link></a>
          <a href='#' className='one'> <Nav.Link  className='link'><h2>Blog Details</h2></Nav.Link></a>
          <a href='#' className='one'> <Nav.Link href="#link" className='link'><h2>Contact</h2></Nav.Link></a>
             
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
