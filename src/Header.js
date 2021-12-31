import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";

const Header = () => {
    return ( 
        <>
        {/* Navbar section */}
        <Navbar className="topBar text-center" variant="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" id="ul">
                <a className="alink" href="#home">Home</a>
                <a className="link" href="#link">About Us</a>
                <a className="link" href="#home">Services</a>
                <a className="link" href="#link">Products</a>
                <a className="link" href="#home">Portfolio</a>
            </Nav>
            <button>Contact Us</button>
            </Navbar.Collapse>


        </Container>
        </Navbar>
        {/* Navbar section end */}

        {/*Cover section */}
        <div className="cover">
            <Container>
                
            </Container>
        </div>

        
        </>
     );
}
 
export default Header;