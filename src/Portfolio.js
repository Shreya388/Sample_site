import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import "./style.css";
import "./Portfolio.css";
import c from "./images/cards/c.jpg";
import b from "./images/cards/b.jpg";
import a from "./images/cards/a.jpg";

const Cards = (props) => {
    return ( 
            
                <Card id="cards">
                    <img className="card-image" alt={props.alt} src={props.img} />
                </Card>
     );
}
 
const Portfolio = () => {
    return ( 
        <>
            <div id="Portfolio" class="portfolio">
                <Container>
                    <h1 className="text">Lorem ipsum dolor sit amet</h1>
                    <h1 className="display-6">Portfolio</h1>
                <Row className="mt-4">
                    <Col md={4}>
                    <Cards img={b} />
                    </Col>
                    <Col md={4}>
                    <Cards img={a} />
                    </Col>
                    <Col md={4}>
                    <Cards img={c} />
                    </Col>
                </Row>
                </Container>
            </div>
        </>
     );
}
 
export default Portfolio;