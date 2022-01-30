import React from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import "./style.css";
import "./Footer.css";

const Section = (props) => {
  return (
    <div>
      <h4>{props.tag}</h4>
      <Nav.Link id="Link" href="#fd"><small>{props.link}</small></Nav.Link>
      <Nav.Link id="Link" href="#fsd"><small>{props.link2}</small></Nav.Link>
      <Nav.Link id="Link" href="#fsdsd"><small>{props.link3}</small></Nav.Link>
    </div>
  )
};


const Footer = () => {
  return (
    <div id="footer">

      <div id="footer_content">
        <Container id="container-fluid">
          <Row>
            <Col>
              <h1 className="navbar-brand text-left">Let's Discuss</h1>
              <p><small>sit voluptatem accusantium doloremque laudantium</small></p>
            </Col>
            <Col>
              <input type="text" className="textbox" />
              <button className="butt">Sign Up</button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="Footer" style={{ paddingTop: "0pt", paddingBottom: "70pt"}}>
        <Container>
          <Row>

            <Col md="3" className="">
              <Section link="Events" link2="Contact" link3="Mentors" />
            </Col>
            <Col md="3" className="mt-4">
              <div>
                <small>
                  <p>Daya Niwas, 137 S K Bole Road</p>
                  <p>Random@gmail.com</p>
                  <p>+91 *******</p>
                </small>
              </div>
            </Col>

            <Col md="6" className="">
              <h1 className="display-5 text-left">Logo</h1>
              <p>sit voluptatem accusantium<br /> doloremque laudantium</p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer_nav">
        <a className="footerLink" href="#Footer">Copyright 2020</a>
      </div>
    </div>
  );
}

export default Footer;