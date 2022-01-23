import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";

const Header = () => {
    return ( 
        <>
        {/* Navbar section */}
        <Navbar className="fixed-top topBar text-center" variant="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border: "none", color:'white'}} />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" id="ul">
                <a className="alink" href="#Header">Home</a>
                <a className="link" href="#Products">Products</a>
                <a className="link" href="#Services">Services</a>
                <a className="link" href="#Portfolio">Portfolio</a>
            </Nav>
            <a href="#Team"><button className="contact">Contact</button></a>
            </Navbar.Collapse>


        </Container>
        </Navbar>
        {/* Navbar section end */}

        {/*Cover section */}
        <div id="Header" className="cover">
            
                <Container className="mr-4"><br /><br />
                    <h1>Welcome to This Site</h1>
                    <p>d ut perspiciatis unde omnis<br /> iste natus error sit voluptatem</p>
                    <button className="butt"><small>Learn More</small></button>
                </Container>
        </div>

        
        
        </>
     );
}
 
export default Header;