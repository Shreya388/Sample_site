import React from "react";
import {Container, Nav, Row, Col} from "react-bootstrap";
import "./style.css";

const Section = (props) => {
  return (
    <div>
      <h4>{props.tag}</h4>
      <Nav.Link id="Link" href="#fd">{props.link}</Nav.Link>
      <Nav.Link id="Link" href="#fsd">{props.link2}</Nav.Link>
      <Nav.Link id="Link" href="#fsdsd">{props.link3}</Nav.Link>
    </div>
  )
};


const Footer = () => {
    return (
      <div className="Footer mt-4" id="Footer">

        <div style={{background: "#66cccc", padding: "50pt 0", color: "white"}}>
            <Container>
            <Row>
            <Col>
            <h1 className="display-5 text-left">Let's Discuss</h1>
            <p>sit voluptatem accusantium doloremque laudantium</p>
            </Col>
            <Col>
                
                    <input type="text" id="inputbox" />
                    <button>Sign Up</button>
             
            </Col>
            </Row>
            </Container>
        </div>

        <div style={{paddingTop: "100pt", paddingBottom: "100pt"}}>
          <Container>
            <Row>
              <Col>
              <Section tag="Links" link="Home" link2="About" link3="Features" />
              </Col>
              <Col>
              <Section tag="Information" link="Events" link2="Contact" link3="Mentors" />
              </Col>
             <Col> 
              <div>
                <h4>Contact Us</h4>
                <p>Daya Niwas, 137 S K Bole Road</p>
                <p>Random@gmail.com</p>
                <p>+91 *******</p>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
        
       <div className="footer_nav" style={{}}>
         <Nav.Link style={{color:"#444444"}}>Copyright 2020</Nav.Link>
       </div>
      </div>
     );
}
 
export default Footer;