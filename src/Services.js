import React from "react";
import { Container, Col, Row, Card} from "react-bootstrap";
import "./style.css";
import image from "./image.png";

const Cards = (props) => {
    return ( 
            <Col className="mt-4">
                <Card id="small_card">
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body>
                    <Card.Title><p className="display-6" style={{fontSize: "33px"}}>{props.title}</p></Card.Title>
                    <Card.Text>
                        <p>{props.para}</p>
                    </Card.Text>
    
                    </Card.Body>
                </Card>
            </Col>
     );
}
 
const Services = () => {
    return ( 
        <>
            <div class="services mt-4">
                <Container>
                    <h1 className="text">Lorem ipsum dolor sit amet</h1>
                    <h1 className="display-6">Services</h1>
                <Row>
                    <Cards img={image} title="Website Design & Development" para="totam rem aperiam, eaque ipsa quae ab illo" />
                    <Cards img={image} title="On Demand Devs" para="sit voluptatem accusantium doloremque laudantium" />
                    <Cards img={image} title="Webhosting" para="Sed ut perspiciatis unde omnis iste natus error" />
                </Row>
                </Container>
            </div>
        </>
     );
}
 
export default Services;