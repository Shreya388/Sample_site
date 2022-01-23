import React from "react";
import { Container, Col, Row, Card} from "react-bootstrap";
import "./style.css";
import one from "./images/cards/one.jpg";
import two from "./images/cards/two.jpg";
import three from "./images/cards/three.jpg";

const Cards = (props) => {
    return ( 
                <Card id="small_card" className="border-0 mt-4">
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body className="" style={{background: "#222222"}}>
                    <Card.Title><p className="display-6 text-white" style={{fontSize: "33px"}}>{props.title}</p></Card.Title>
                    <Card.Text>
                        <p className="text-white">{props.para}</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
     );
}
 
const Services = () => {
    return ( 
        <div id="Services" style={{padding: "100pt 0pt"}}>
            <div class="services">
                <Container>
                    <h1 className="text">Lorem ipsum dolor sit amet</h1>
                    <h1 className="display-6">Services</h1>
                <Row>
                    <Col md={4}>
                        <Cards img={one} title="Design & Development" para="totam rem aperiam, eaque ipsa quae ab illo" />
                    </Col>
                    <Col md={4}>
                        <Cards img={two} title="On Demand Devs" para="sit voluptatem accusantium doloremque laudantium" />
                    </Col>
                    <Col md={4}>
                        <Cards img={three} title="Webhosting" para="Sed ut perspiciatis unde omnis iste natus error" />
                    </Col>
                </Row>
                </Container>
            </div>
            </div>
     );
}
 
export default Services;